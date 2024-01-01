import React from 'react';
import Circle from '../Circle';

const DesktopView = (props) => {
    return (
        <div className='screen'>
            <div className='screen-row-view'>
                {props.children}
            </div>
            <Circle />
        </div>
    );
};

export default DesktopView;
