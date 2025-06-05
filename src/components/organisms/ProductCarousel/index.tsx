import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ProductCard from "@/components/molecules/ProductCard";
import { Product } from "@/types/product";
import styles from "./ProductCarousel.module.css";

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {products.map((product) => (
            <div className={styles.embla__slide} key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <button
        className={`${styles.embla__button} ${styles["embla__button--prev"]}`}
        onClick={() => emblaApi && emblaApi.scrollPrev()}
        disabled={!canScrollPrev}
        aria-label="Anterior"
      >
        &#8592;
      </button>
      <button
        className={`${styles.embla__button} ${styles["embla__button--next"]}`}
        onClick={() => emblaApi && emblaApi.scrollNext()}
        disabled={!canScrollNext}
        aria-label="Siguiente"
      >
        &#8594;
      </button>
    </div>
  );
};

export default ProductCarousel;
