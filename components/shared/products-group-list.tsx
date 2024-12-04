'use client';

import React, {useEffect} from "react";
import { useIntersection } from 'react-use';
import {Title} from "@/components/shared";
import { ProductCard } from "@/components/shared";
import { cn } from "@/lib/utils";
import {useCategoryStore} from "@/store/category";

interface ProductsGroupListProps {
  className?: string;
  title: string;
  products: any[];
  listClassName?: string;
  categoryId: number;
}

export const ProductsGroupList: React.FC<ProductsGroupListProps> = ({ className, title, products, listClassName, categoryId }) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.7,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId)
    }
  }, [intersection?.isIntersecting, title, categoryId])

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {products.map((product, index) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              imageUrl={product.imageUrl}
              price={product.items[0].price}
            />
          ))}
      </div>
    </div>
  )
}