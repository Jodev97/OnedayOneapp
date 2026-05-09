interface PriceFormatterProps {
  price: number;
  currency?: string;
  className?: string;
}

export function PriceFormatter({
  price,
  currency = '$',
  className = '',
}: PriceFormatterProps) {
  return (
    <span className={className}>
      {currency}
      {price.toFixed(2)}
    </span>
  );
}
