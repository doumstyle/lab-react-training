import React from 'react';

const Random = (props) => {

    const { min, max } = props;

    const randomNum = (valA, valB) => {
        return Math.floor(Math.random() * (valB - valA) + valA);
    }

  return (
    <div className='box'>
        <p className="title is-4">Random value between {min} and {max} =&gt; {randomNum(min, max)}</p>
    </div>
    );
};

export default Random;
