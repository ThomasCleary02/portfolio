import React from 'react';

const Header = ({ title }) => {
    return (
        <div className="text-2xl text-center font-bold mb-2">
            {title}
        </div>
    )
};

export default Header;