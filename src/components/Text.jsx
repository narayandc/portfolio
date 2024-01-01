import React from 'react';

const Text = (props) => {
    return (
        <span className={props.styles}>{props.children}</span>
    );
};

export default Text;
