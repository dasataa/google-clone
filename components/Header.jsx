import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { Avatar } from './Avatar';
import { HeaderOptions } from './HeaderOptions';

export const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex w-full p-6 items-center'>
        <Image
          src='https://pngimg.com/uploads/google/google_PNG19644.png'
          height={45}
          width={120}
          onClick={() => router.push('/')}
          className='cursor-pointer'
        />

        <form className='flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
          <input
            ref={searchInputRef}
            className='flex-grow w-full focus:outline-none'
            type='text'
            defaultValue={router.query.term}
          />
          <XIcon
            className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125'
            onClick={() => (searchInputRef.current.value = '')}
          />
          <MicrophoneIcon className='mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300' />
          <SearchIcon className='h-6 text-blue-600 sm:inline-flex' />
          <button hidden type='submit' onClick={search}>
            Search
          </button>
        </form>
        <Avatar className='ml-auto' url='https://img.freepik.com/free-vector/gradient-abstract-greend-blue-background-with-geometric-elements_23-2149399995.jpg?t=st=1658369764~exp=1658370364~hmac=2f76f0750b6add6647cd17400d2e5f20bd0019e11a7e28aeff987ae63fab2f12&w=1060' />
      </div>
      {/* headeroptions */}
      <HeaderOptions />
    </header>
  );
};
