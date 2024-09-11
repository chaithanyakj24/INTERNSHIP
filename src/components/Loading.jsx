import React from 'react';
import Clean from './Clean';

const Loading = () => {
  return (
    <div className='flex flex-col items-center justify-center w-[832px] h-[392px] m-auto mt-[142px]'>
      <Clean />
      <div className='text-center mt-12'>
        <p className='text-xl font-semibold'>
          It’s the beginning of a legendary sales pipeline
        </p>
        <p className='text-[#9E9E9E] text-[18px] mt-6'>
          When you have inbound E-mails <br /> you’ll see them here
        </p>
      </div>
    </div>
  );
};

export default Loading;
