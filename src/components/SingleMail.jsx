import React from 'react';

const SingleMail = ({ currColor, subject, fromEmail, toEmail, body }) => {
  const cleanBody = body
    .split("<p>").join("")
    .split("</p>").join("")
    .split("<br/>").join("")
    .split(",");

  return (
    <div className='mr-4 border border-gray-700 p-3 text-[14px] flex flex-col gap-2.5 text-left mb-3'>
      <div className='flex justify-between'>
        <p>{subject}</p>
        <p className='text-[#AEAEAE]'>20 June 2022 : 9:16AM</p>
      </div>
      <p className='text-[#AEAEAE]'>from : {fromEmail}</p>
      <p className='text-[#AEAEAE]'>to : {toEmail}</p>
      <p className={`${currColor ? 'text-[#b7abab]' : 'text-[#2a2626]'} w-[500px]`}>
        {cleanBody[0]} ,
      </p>
      <p className={`${currColor ? 'text-[#bfb4b4]' : 'text-[#2a2626]'} w-[500px]`}>
        {cleanBody.slice(1)}
      </p>
    </div>
  );
};

export default SingleMail;
