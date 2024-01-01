import React from 'react';
import Text from '../Text';

const LeftColumn = () => {
  return (
    <div className='left-col'>
      <div className='left-col-text'>
        <Text styles='intro'>HI, I'M NARAYAN DC</Text>
        <Text styles='animation-dev-text'>REACT DEVELOPER</Text>
        <Text styles='location'>based in Italy, Milan</Text>
      </div>
      {/* <div className='left-col-button'>
        <button className='button'>Contact</button>
      </div> */}
    </div>
  );
};

export default LeftColumn;
