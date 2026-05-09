import { test, expect, Page } from '@playwright/test';

const mockProducts = [
  {
    id: 1,
    title: 'Fjallraven Backpack',
    price: 109.95,
    description: 'Your perfect pack for everyday adventures.',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 2,
    title: 'Mens Cotton Jacket',
    price: 55.99,
    description: 'The color could be slightly different between on the screen and in reality.',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
    rating: { rate: 4.7, count: 500 },
  },
];

test.beforeEach(async ({ page }) => {
  // Mock API responses
  await page.route('**/fakestoreapi.com/products', async (route) => {
    await route.abort('blockedclient');
  });

  await page.route('**/fakestoreapi.com/products*', async (route) => {
    if (route.request().url().includes('/categories')) {
      await route.fulfill({
        status: 200,
        body: JSON.stringify(['electronics', 'jewelery', "men's clothing", "women's clothing"]),
      });
    } else if (route.request().url().includes('/')) {
      await route.fulfill({
        status: 200,
        body: JSON.stringify(mockProducts),
      });
    }
  });

  // Clear storage
  await page.context().clearCookies();

  await page.goto('/');

  // Clear localStorage after navigating
  await page.evaluate(() => localStorage.clear());
});

test('should display product listing', async ({ page }) => {
  await expect(page.getByRole('heading', { name: /fjallraven/i })).toBeVisible({
    timeout: 5000,
  });
});

test('should search products', async ({ page }) => {
  const searchInput = page.getByPlaceholder('Search products...');
  await searchInput.fill('fjallraven');

  // Wait for filtering
  await page.waitForTimeout(400);

  await expect(page.getByRole('heading', { name: /fjallraven/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /jacket/i })).not.toBeVisible();
});

test('should add product to cart', async ({ page }) => {
  const addButton = page.getByRole('button', { name: /add to cart/i }).first();
  await addButton.click();

  const cartBadge = page.getByText('1');
  await expect(cartBadge).toBeVisible();
});

test('should navigate to product detail', async ({ page }) => {
  const productLink = page.getByRole('heading', { name: /fjallraven/i }).first();
  await productLink.click();

  await expect(page.getByText(/your perfect pack/i)).toBeVisible();
  await expect(page.getByText(/\$109.95/)).toBeVisible();
});

test('should navigate between routes', async ({ page }) => {
  // Go to favorites
  await page.getByRole('link', { name: /favorites/i }).click();
  await expect(page).toHaveURL('/favorites');

  // Go back to products
  await page.getByRole('link', { name: /products/i }).click();
  await expect(page).toHaveURL('/');
});

test('should search with no results', async ({ page }) => {
  const searchInput = page.getByPlaceholder('Search products...');
  await searchInput.fill('nonexistentproduct123');

  await page.waitForTimeout(400);

  await expect(page.getByText('No products found')).toBeVisible();
});

test('should add to cart from product detail page', async ({ page }) => {
  const productLink = page.getByRole('heading', { name: /fjallraven/i }).first();
  await productLink.click();

  await expect(page).toHaveURL('/product/1');

  const quantityInput = page.locator('span:has-text("1")').first();
  await expect(quantityInput).toBeVisible();

  const addButton = page.getByRole('button', { name: /add to cart/i });
  await addButton.click();

  const cartBadge = page.getByText('1');
  await expect(cartBadge).toBeVisible();
});

test('should update cart quantity', async ({ page }) => {
  const addButton = page.getByRole('button', { name: /add to cart/i }).first();
  await addButton.click();

  await page.getByRole('link', { name: /cart/i }).click();
  await expect(page).toHaveURL('/checkout');

  const increaseButton = page.getByRole('button', { name: /\+/ }).first();
  await increaseButton.click();

  await expect(page.locator('span:has-text("2")')).toBeVisible();
});

test('should remove item from cart', async ({ page }) => {
  const addButton = page.getByRole('button', { name: /add to cart/i }).first();
  await addButton.click();

  await page.getByRole('link', { name: /cart/i }).click();
  await expect(page).toHaveURL('/checkout');

  const removeButton = page.getByRole('button', { name: /remove/i });
  await removeButton.click();

  await expect(page.getByText('Your cart is empty')).toBeVisible();
});

test('should persist cart across page reload', async ({ page }) => {
  const addButton = page.getByRole('button', { name: /add to cart/i }).first();
  await addButton.click();

  const cartBadge = page.getByText('1');
  await expect(cartBadge).toBeVisible();

  await page.reload();

  await expect(page.getByText('1')).toBeVisible();
});

test('should toggle favorite', async ({ page }) => {
  const favoriteButton = page.getByRole('button', { name: /favorite/i }).first();
  await favoriteButton.click();

  await expect(page.getByRole('button', { name: /favorited/i })).toBeVisible();

  await favoriteButton.click();
  await expect(page.getByRole('button', { name: /favorite/i })).toBeVisible();
});

test('should persist favorites across page reload', async ({ page }) => {
  const favoriteButton = page.getByRole('button', { name: /favorite/i }).first();
  await favoriteButton.click();

  await page.reload();

  const favoritedButton = page.getByRole('button', { name: /favorited/i });
  await expect(favoritedButton).toBeVisible();
});

test('should display favorites page', async ({ page }) => {
  const favoriteButton = page.getByRole('button', { name: /favorite/i }).first();
  await favoriteButton.click();

  await page.getByRole('link', { name: /favorites/i }).click();
  await expect(page).toHaveURL('/favorites');

  await expect(page.getByRole('heading', { name: /my favorites/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /fjallraven/i })).toBeVisible();
});

test('should complete checkout flow and clear cart', async ({ page }) => {
  const addButton = page.getByRole('button', { name: /add to cart/i }).first();
  await addButton.click();

  await page.getByRole('link', { name: /cart/i }).click();
  await expect(page).toHaveURL('/checkout');

  const nameInput = page.getByLabel('Full Name');
  const emailInput = page.getByLabel('Email');
  const addressInput = page.getByLabel('Address');

  await nameInput.fill('John Doe');
  await emailInput.fill('john@example.com');
  await addressInput.fill('123 Main St');

  const submitButton = page.getByRole('button', { name: /complete purchase/i });
  await submitButton.click();

  await expect(page.getByText('Order Confirmed!')).toBeVisible();

  await page.getByRole('link', { name: /continue shopping/i }).click();
  await expect(page).toHaveURL('/');
});

test('should filter by category', async ({ page }) => {
  const categorySelect = page.getByRole('combobox');
  await categorySelect.selectOption('electronics');

  await page.waitForTimeout(400);

  const visibleHeadings = await page
    .locator('h3')
    .allTextContents();
  expect(visibleHeadings.length).toBeGreaterThan(0);
});

test('should display responsive grid on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });

  const grid = page.locator('.grid-cols-1');
  await expect(grid).toBeVisible();
});

test('should display responsive grid on desktop', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });

  const grid = page.locator('.lg\\:grid-cols-4');
  await expect(grid).toBeVisible();
});
