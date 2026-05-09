# Project Documentation

# Overview

This project is a simple ecommerce frontend application built with modern React tooling and a lightweight architecture. The goal is to provide a clean, fast, and maintainable shopping experience while keeping the technical stack minimal and easy to understand.

The application focuses on essential ecommerce interactions such as browsing products, searching items, managing a cart, handling favorites, and simulating purchases using only frontend technologies and public APIs.

---

# Application Type

Frontend Single Page Application (SPA)  with client-side routing, 
no backend or server dependency beyond the public API.

---

# Purpose & Use Cases

## Purpose

- Learn and practice modern frontend architecture
- Build a lightweight ecommerce experience
- Demonstrate state management and routing patterns
- Practice frontend testing workflows
- Serve as a starter template for future ecommerce projects

## Use Cases

- Browse product catalog
- Search products by keyword
- View product details
- Add and remove products from cart
- Save favorite products
- Simulate checkout flow
- Test responsive ecommerce interfaces

---

# Core Features

- Product listing page Grid view with images, names, and prices. Load with pagination or infinite scroll (simple implementation: load initial batch and a "Load more" button).
- Product detail page  Dedicated route with expanded information, quantity selector, and actions.
- Product Search with debounce; category dropdown filter.
- Favorites management
- Shopping cart management
- Checkout simulation
- Responsive layout
- Persistent local state
- Error and loading handling
- API integration with public ecommerce endpoints

---

# Technology Stack

## Frontend

- **Build Tool:** Vite
- **UI Framework:** React 18+ with TypeScript
- **Routing:** TanStack Routes (focus on types, code splitting, and loaders)
- **Global State:** Zustand with `persist` middleware
- **Styling:** Tailwind CSS
- **Testing:** Playwright for end-to-end tests
- **Product API:** FakeStoreAPI (https://fakestoreapi.com/) or similar, consumed directly from the frontend.
- **Local Persistence:** LocalStorage via Zustand middleware.

## Testing

- Playwright configured to run tests on Chromium.
- API mocking with `page.route` to ensure predictable data.
- Covered scenarios:
  - Correct display of product list.
  - Search with and without results.
  - Cart management (add, update quantity, remove).
  - Favorites management (toggle, persistence).
  - Successful checkout process and cart clearing.
  - Navigation between routes (/, /product/:id, /checkout).
- Run: `npx playwright test`.


## Data Source

- Public ecommerce APIs
- Local browser storage

---

# Testing

The project uses Playwright for end-to-end testing.

## Main Testing Areas

- Navigation
- Product listing
- Search functionality
- Cart interactions
- Favorites interactions
- Checkout flow
- Responsive behavior

---

# UI Standards

- Clean and modern ecommerce design
- Mobile-first responsive layout
- Accessible interactions
- Consistent spacing and typography
- Reusable UI components
- Fast and minimal user experience
- Subtle animations and transitions
- Toasts in bottom-right corner with colors per type (success, error, info).
- Skeleton screens while products are loading.
- Consistent use of icons (feather or heroicons via inline SVG).
- Clear visual feedback for all actions (hover, active, loading, disabled states).

---

# Architecture

The project follows a simple modular frontend architecture.

## Main Layers

### UI Layer

Contains reusable visual React components.

### Pages Layer

Contains route-based application screens.

### State Layer

Managed using Zustand stores.

### Services Layer

Responsible for API communication and data normalization.

### Router Layer

Managed with TanStack Router.

---

# Key Characteristics

- Frontend-only architecture
- Lightweight and beginner-friendly
- Minimal dependencies
- Simple folder organization
- Strict TypeScript usage
- Public API integration
- Local persistence support
- Easy to scale incrementally
- Optimized developer experience