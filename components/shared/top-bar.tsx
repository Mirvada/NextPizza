import React from "react";
import {Container} from "@/components/shared/container";
import {Categories, SortPopup} from "@/components/shared";
import {cn} from "@/lib/utils";

interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
      <Container className={cn('flex items-center justify-between', className)}>
        <Categories />
        <SortPopup />
      </Container>
    </div>
  )
}