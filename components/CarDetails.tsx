'use client';

import { CarProps } from '@/types';

import Image from 'next/image';
import { Fragment } from 'react';
import { generateCarImageUrl } from '@/utils';
import { Dialog, Transition } from '@headlessui/react';

interface CardDetailProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CardDetailProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-1'
            leave='ease-in duration-200'
            leaveFrom='opacity-1'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/25' />
          </Transition.Child>
          <div className='fixed inset-0 overlow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-1 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-1 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] bg-white text-left shadow-xl rounded-2xl transition-all flex flex-col p-6'>
                  <button
                    type='button'
                    onClick={closeModal}
                    className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                  >
                    <Image
                      src='/close.svg'
                      alt='Close Modal, Icon'
                      width={20}
                      height={20}
                      className='object-contain'
                    />
                  </button>
                  <div className='flex-1 flex flex-col gap-3'>
                    <div className='relative w-full h-40 bg-center bg-cover bg-pattern rounded-lg'>
                      <Image
                        src={generateCarImageUrl(car, 'angle')}
                        alt='Car Image Details'
                        fill
                        priority
                        className='object-contain'
                      />
                    </div>

                    <div className='flex gap-3'>
                      <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                        <Image
                          src={generateCarImageUrl(car, '29')}
                          alt='Car Image Details'
                          fill
                          priority
                          className='object-contain'
                        />
                      </div>
                      <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                        <Image
                          src={generateCarImageUrl(car, '33')}
                          alt='Car Image Details'
                          fill
                          priority
                          className='object-contain'
                        />
                      </div>
                      <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                        <Image
                          src={generateCarImageUrl(car, '13')}
                          alt='Car Image Details'
                          fill
                          priority
                          className='object-contain'
                        />
                      </div>
                    </div>
                  </div>

                  <div className='flex-1 flex flex-col gap-2'>
                    <h2 className='font-semibold text-xl capitalize'>
                      {car?.make} {car.model}
                    </h2>
                    <div className='mt-3 flex flex-wrap gap-4'>
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          className='w-full gap-5 flex justify-between items-center text-right capitalize'
                          key={key}
                        >
                          <h4>{key.split('_').join(' ')}</h4>
                          <p className='text-black-100 font-semibold'>
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
