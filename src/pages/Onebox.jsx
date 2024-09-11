import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Slidebar from '../components/Slidebar';
import Theme from '../components/Theme';
import Workspace from '../components/Workspace';
import Email from '../components/Email';
import Header from '../components/Headers';
import Loading from '../components/Loading';
import SearchBar from '../components/SearchBar';
import User from '../components/User';
import Reply from '../components/Reply';
import Modal from './Modal';

const Onebox = () => {
    const [currColor, setCurrColor] = useState(true);
    const [data, setData] = useState([]);
    const [singleMail, setSingleMail] = useState({});
    const [render, setRender] = useState(false);
    const [showEmailOnebox, setShowEmailOnebox] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Simulate mail fetch logic
    const fetchData = () => {
        // Dummy emails data
        const emails = [
            { id: 1, subject: "Welcome to ReachInbox", threadId: "t1" },
            { id: 2, subject: "Reminder: Meeting at 10 AM", threadId: "t2" },
            { id: 3, subject: "Weekly Report Submission", threadId: "t3" }
        ];
        setData(emails);
        setSingleMail(emails[0]); // Set first email
    };

    useEffect(() => {
        // Simulate fetching emails when component mounts
        fetchData();
    }, [render]);

    // Function to handle email change
    const handleChangeEmail = (id) => {
        const email = data.find(mail => mail.id === id);
        setSingleMail(email);
    };

    // Modal for deleting email
    const deleteEmail = () => {
        const id = singleMail?.threadId;
        if (id) {
            console.log(`The email with ID ${id} will be deleted`);
            setRender(!render);
            closeModal();
        } else {
            alert("Error: Email ID not found");
        }
    };

    const handleChange = (index) => setShowEmailOnebox(index);

    // Handle keypress to open modal
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "d" || event.key === "D") {
                openModal();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isModalOpen]);

    return (
        <div className={`flex h-screen ${currColor ? "bg-black text-white" : "bg-black text-white"}`}>
            <div className='w-[56px] h-full bg-black'>
                <Slidebar currColor={currColor} showEmailOnebox={showEmailOnebox} handleChange={handleChange} />
            </div>
            <div className='flex-1 flex flex-col'>
                <div className={`h-[64px] flex justify-between items-center p-4 bg-black border-b border-gray-700`}>
                    <p className='text-xl'>Onebox</p>
                    <div className='flex gap-5'>
                        <Theme currColor={currColor} onClick={() => setCurrColor(!currColor)} />
                        <Workspace />
                    </div>
                </div>
                {showEmailOnebox !== 5 ? (
                    <Loading />
                ) : (
                    <div className='flex flex-1'>
                        <div className='w-[275px] bg-black p-4 border-r border-gray-700 overflow-auto'>
                            <div className='flex justify-between items-center'>
                                <Header currColor={currColor} />
                            </div>
                            <p className='text-[14px] mt-2.5'>3 emails selected</p>
                            <div className='mt-2 h-11'>
                                <SearchBar currColor={currColor} />
                            </div>
                            <div className='flex justify-between text-[14px]'>
                                <div className='flex items-center gap-2'>
                                    <p className='text-blue-500 w-8 h-7 rounded-2xl bg-gray-700'>3</p>
                                    <p>New Emails</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <p>Newest</p>
                                    <ChevronDown />
                                </div>
                            </div>
                            <hr className='mt-2.5 border-gray-700' />
                            <div>
                                {data.length > 0 && data.map(item => (
                                    <div key={item.id}>
                                        <Email currColor={currColor} {...item} handleChangeEmail={handleChangeEmail} />
                                        <hr className='border-gray-700' />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='flex-1 flex flex-col overflow-auto p-4'>
                            <Reply currColor={currColor} singleMail={singleMail} />
                        </div>
                        <div className='w-[300px] bg-black p-4 border-l border-gray-700 overflow-auto'>
                            <User currColor={currColor} />
                        </div>
                    </div>
                )}
            </div>
            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <div className='w-[440px] h-[240px] bg-black text-white'>
                        <div className='h-full flex flex-col justify-center items-center'>
                            <h1 className='text-[24px] font-bold'>Are you sure?</h1>
                            <p className='mt-4 text-[#E8E8E8]'>Your selected email will be deleted.</p>
                            <div className='mt-8 flex gap-5'>
                                <button className='w-[120px] h-12 bg-[#25262B]' onClick={closeModal}>Cancel</button>
                                <button className='w-[140px] h-12 bg-[#FA5252]' onClick={deleteEmail}>Delete</button>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default Onebox;
