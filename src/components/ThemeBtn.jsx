import React, { useState } from 'react';

const ThemeBtn = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
        // Here you can add logic to handle theme change, e.g., updating a context or a global state
    };

    return (
        <div className="relative inline-flex items-center cursor-pointer">
            <input 
                id="theme-toggle" 
                type="checkbox" 
                className="sr-only" 
                checked={isChecked} 
                onChange={toggleCheckbox} 
            />
            <label 
                htmlFor="theme-toggle" 
                className="flex w-12 h-6 bg-gray-300 rounded-full  items-center px-1 cursor-pointer transition-colors duration-300 ease-in-out"
            >
                <span 
                    className={`w-6 h-6 bg-gray-800 rounded-full transform transition-transform duration-300 ease-in-out ${isChecked ? 'translate-x-6' : 'translate-x-0'}`}
                ></span>
            </label>
        </div>
    );
};

export default ThemeBtn;
