import { ChevronDown, Eye, X, Zap } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { postMailMessages } from '../actions/action.ts';

const Send = ({ currColor, handleCancel, singleMail }) => {
  const [formData, setFormData] = useState({
    toName: "",
    to: "",
    from: "",
    fromName: "",
    subject: "",
    body: ""
  });

  useEffect(() => {
    if (singleMail) {
      setFormData({
        toName: singleMail.toName || "",
        fromName: singleMail.fromName || "",
        to: singleMail.to || "",
        from: singleMail.from || "",
        subject: "",
        body: ""
      });
    }
  }, [singleMail]);

  const handleSubmit = () => {
    if (!singleMail || !singleMail.threadId) {
      alert("Invalid email data");
      return;
    }
    postMailMessages(singleMail.threadId, formData)
      .then(() => {
        alert("Reply has been sent");
        handleCancel(); // Optionally close the Send component after sending
      })
      .catch(err => {
        console.error("Error sending reply:", err);
        alert("Failed to send reply. Please try again.");
      });
  };

  return (
    <div className={`flex flex-col w-full h-full ${currColor ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <div className={`h-10 flex justify-between px-8 py-2 text-[16px] ${currColor ? 'bg-[#23272C]' : 'bg-gray-100'}`}>
        <p>Reply</p>
        <p onClick={handleCancel} className='cursor-pointer'><X /></p>
      </div>
      <hr className='border-t border-gray-700' />
      <div className={`text-[12px] h-10 flex pt-2 px-8 py-2 items-center gap-2 ${currColor ? 'text-gray-400' : 'text-gray-600'}`}>
        <p>To:</p>
        <input
          type="text"
          placeholder=''
          value={formData.to}
          className={`${currColor ? 'bg-[#141517] text-white' : 'bg-white text-black'} outline-none flex-1`}
          onChange={(e) => setFormData({ ...formData, to: e.target.value })}
        />
      </div>
      <hr className='border-t border-gray-700' />
      <div className={`text-[12px] h-10 flex pt-2 px-8 py-2 items-center gap-2 ${currColor ? 'text-gray-400' : 'text-gray-600'}`}>
        <p>From:</p>
        <input
          type="text"
          placeholder=''
          value={formData.from}
          className={`${currColor ? 'bg-[#141517] text-white' : 'bg-white text-black'} outline-none flex-1`}
          onChange={(e) => setFormData({ ...formData, from: e.target.value })}
        />
      </div>
      <hr className='border-t border-gray-700' />
      <div className={`text-[12px] h-10 flex pt-2 px-8 py-2 items-center gap-2 ${currColor ? 'text-gray-400' : 'text-gray-600'}`}>
        <p>Subject:</p>
        <input
          type="text"
          placeholder=''
          value={formData.subject}
          className={`${currColor ? 'bg-[#141517] text-white' : 'bg-white text-black'} outline-none flex-1`}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        />
      </div>
      <hr className='border-t border-gray-700' />
      <div className='text-[12px] p-2 text-left'>
        <textarea
          placeholder='Hello John...'
          value={formData.body}
          className={`w-full h-[250px] outline-none ${currColor ? 'bg-[#141517] text-white' : 'bg-white text-black'}`}
          onChange={(e) => setFormData({ ...formData, body: e.target.value })}
        />
      </div>
      <div className='h-[54px] w-full'>
        <hr className='border-t border-gray-700 mb-2' />
        <div className='flex text-[12px] gap-1'>
          <div className='w-[100px] h-8 bg-[#4B63DD] flex items-center ml-4 mb-3 rounded gap-1 justify-center cursor-pointer'>
            <button className='text-white' onClick={handleSubmit}>Send</button>
            <ChevronDown color={"white"} />
          </div>
          <div className='w-[100px] h-8 flex items-center mb-3 rounded justify-center cursor-pointer'>
            <Zap className='h-4' />
            <button>Variables</button>
          </div>
          <div className='w-[120px] h-8 flex items-center mb-3 rounded justify-center cursor-pointer'>
            <Eye className='h-4' />
            <button>Preview Email</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Send;
