'use client';

import { Fragment, useState } from 'react';
import Image from 'next/image';

import { Combobox, Transition } from '@headlessui/react';

import { manufacturers } from '@/constants';

import { SearchManufacturerProps } from '@/types';

const SearchManufacturer = (props: SearchManufacturerProps) => {
  const { data, setData } = props;

  const [query, setQuery] = useState('');

  const filteredManufacturers =
    query === ''
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <div className='search-manufacturer'>
      <Combobox onChange={setData} value={data}>
        <div className='relative w-full'>
          <Combobox.Button className='absolute top-[14px]'>
            <Image
              alt='Car Logo'
              className='ml-4'
              height={20}
              src='/car-logo.svg'
              width={20}
            />
          </Combobox.Button>

          <Combobox.Input
            className='search-manufacturer__input'
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Volkswagen'
          />

          <Transition
            afterLeave={() => setQuery('')}
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Combobox.Options>
              {filteredManufacturers.length === 0 && query !== '' ? (
                <Combobox.Option
                  className='search-manufacturer__option'
                  value={query}
                >
                  {`Create "${query}"`}
                </Combobox.Option>
              ) : (
                filteredManufacturers.map((item) => (
                  <Combobox.Option
                    className={({ active }) => `
                                    relative search-manufacturer__option
                                    ${
                                      active
                                        ? 'bg-primary-blue text-white'
                                        : 'text-gray-900'
                                    }
                                    `}
                    key={item}
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
