import React from 'react';
import { Home, InboxIcon, List, Mail, Send, UserRoundSearchIcon, BarChart2 } from 'lucide-react';
import Icon from './Icons';

const Slidebar = ({ currColor, username, handleChange }) => {
    const [activeIcon, setActiveIcon] = React.useState(0);

    const handleIconClick = (index) => {
        setActiveIcon(index);
        handleChange(index);
    };
    const getInitials = (name) => {
        const parts = name.split(' ');
        return (parts[0][0] + (parts[1] ? parts[1][0] : '')).toUpperCase();
    };

    return (
        <div className={`w-full h-full flex flex-col justify-between ${currColor ? 'bg-[#101113]' : 'bg-white'} px-1`}>
            <div>
                <div className='w-12 h-[70px] flex justify-center items-center'>
                    <img
                        src="https://media.licdn.com/dms/image/D560BAQEmo1aZIhVtlQ/company-logo_200_200/0/1700158687336/reachinbox_ai_logo?e=2147483647&v=beta&t=2eGcwWsFtdBcUVJGGHkBxWHYFN86D-c5zfyr4s3DsNw"
                        alt="logo"
                        className='w-6 h-6 rounded'
                    />
                </div>
                <div className='pt-12 px-2 flex flex-col gap-8'>
                    <Icon currColor={currColor} color={currColor ? 'white' : 'black'} isActive={activeIcon === 0} onClick={() => handleIconClick(0)}>
                        <Home color={currColor ? 'white' : 'black'} />
                    </Icon>
                    <Icon currColor={currColor} color={currColor ? 'white' : 'black'} isActive={activeIcon === 1} onClick={() => handleIconClick(1)}>
                        <UserRoundSearchIcon color={currColor ? 'white' : 'black'} />
                    </Icon>
                    <Icon currColor={currColor} color={currColor ? 'white' : 'black'} isActive={activeIcon === 2} onClick={() => handleIconClick(2)}>
                        <Mail color={currColor ? 'white' : 'black'} />
                    </Icon>
                    <Icon currColor={currColor} color={currColor ? 'white' : 'black'} isActive={activeIcon === 3} onClick={() => handleIconClick(3)}>
                        <Send color={currColor ? 'white' : 'black'} />
                    </Icon>
                    <Icon currColor={currColor} color={currColor ? 'white' : 'black'} isActive={activeIcon === 4} onClick={() => handleIconClick(4)}>
                        <List color={currColor ? 'white' : 'black'} />
                    </Icon>
                    <Icon currColor={currColor} color={currColor ? 'white' : 'black'} isActive={activeIcon === 5} onClick={() => handleIconClick(5)}>
                        <InboxIcon color={currColor ? 'white' : 'black'} />
                    </Icon>
                    <Icon currColor={currColor} color={currColor ? 'white' : 'black'} isActive={activeIcon === 6} onClick={() => handleIconClick(6)}>
                        <BarChart2 color={currColor ? 'white' : 'black'} />
                    </Icon>
                </div>
            </div>
            <div className='w-12 h-[70px] flex justify-center items-center'>
                <p className={`w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-800 rounded-full text-white flex items-center justify-center`}>
                    {username ? getInitials(username) : 'NA'}
                </p>
            </div>

        </div>
    );
};

export default Slidebar;
