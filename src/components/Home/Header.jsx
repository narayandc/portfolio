import React from 'react';
import emailIcon from '../../assets/images/email.png';
import phoneIcon from '../../assets/images/phone.png';

const Header = ({ title, icon }) => {
    const image = icon === 'email' ? emailIcon : icon === 'phone' ? phoneIcon : null;
    return (
        <div className='title'>
            <img src={image} className='icon' alt='' />
            <div>{title}</div>
        </div>
    );
};

export default Header;
