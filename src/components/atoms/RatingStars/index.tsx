import React from "react";

export interface RatingStarsProps {
  rating: number; // 0-5
  max?: number;
  className?: string;
  size?: number; // px
}

const RatingStars: React.FC<RatingStarsProps> = ({
  rating,
  max = 5,
  className = "",
  size = 20,
}) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const emptyStars = max - fullStars - (hasHalf ? 1 : 0);

  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`} data-testid="rating-stars">
      {Array.from({ length: fullStars }).map((_, i) => (
        <svg key={`full-${i}`} width={size} height={size} viewBox="0 0 20 20" fill="#facc15" aria-label="Full star"><polygon points="10,1 12.59,7.36 19.51,7.64 14,12.26 15.82,19.02 10,15.27 4.18,19.02 6,12.26 0.49,7.64 7.41,7.36"/></svg>
      ))}
      {hasHalf && (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="#facc15" aria-label="Half star"><defs><linearGradient id="half"><stop offset="50%" stopColor="#facc15"/><stop offset="50%" stopColor="#e5e7eb"/></linearGradient></defs><polygon points="10,1 12.59,7.36 19.51,7.64 14,12.26 15.82,19.02 10,15.27 4.18,19.02 6,12.26 0.49,7.64 7.41,7.36" fill="url(#half)"/></svg>
      )}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <svg key={`empty-${i}`} width={size} height={size} viewBox="0 0 20 20" fill="#e5e7eb" aria-label="Empty star"><polygon points="10,1 12.59,7.36 19.51,7.64 14,12.26 15.82,19.02 10,15.27 4.18,19.02 6,12.26 0.49,7.64 7.41,7.36"/></svg>
      ))}
    </span>
  );
};

export default RatingStars;
