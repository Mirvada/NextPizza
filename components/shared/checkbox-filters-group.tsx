'use client'

import React, {useState} from "react";
import {FilterCheckboxProps} from "@/components/shared/filter-checkbox";
import { FilterCheckbox } from '@/components/shared';
import {Input} from "@/components/ui";

type Item = FilterCheckboxProps;

interface Props {
  className?: string;
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  onChange?: (value: string[]) => void;
  defaultValue?: string;
  searchInputPlaceholder?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = (
    {
    className,
    title,
    items,
    defaultItems,
    limit = 5,
    onChange,
    defaultValue,
    searchInputPlaceholder = 'Поиск...',
    }) => {
  const [showAll, setShowAll] = useState(true);
  const [searchValue, setSearchValue] = useState('')

  const onChangeSearchInput = (evt) => {
    setSearchValue(evt.target.value);
  }

  const list = showAll ? items.filter((item) => item.text.toUpperCase().includes(searchValue.toUpperCase())): defaultItems.slice(0, limit)

  return (
    <div className={className}>
      <p className='font-bold mb-3'>{title}</p>
      {showAll && (
        <div className='mb-5'>
          <Input
            className='bg-gray-50 border-none'
            value={searchValue}
            onChange={(onChangeSearchInput)}
            placeholder={searchInputPlaceholder}
          />
        </div>
      )}
      <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={false}
            onCheckedChange={(ids) => console.log(ids)}
          />
        ))}
      </div>
      {
        items.length > limit && (
          <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
            <button
              className='text-primary mt-3'
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Скрыть' : '+ Показать все'}
            </button>
          </div>
        )
      }
    </div>
  )
}