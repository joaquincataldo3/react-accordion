import React, { useState } from 'react';
import questionsAnswers from '../data';



const Question = (props) => {

  const { title, info } = props;

  const [showInfo, setShowInfo] = useState(false)

  const activeIcon = showInfo ? <i class='bx bx-minus'></i> : <i class='bx bx-plus' ></i>;

  return (
    <div className='q-a-container'>
      <div className='question-arrow-container' onClick={() => setShowInfo(!showInfo)}>
        <h3>{title}</h3>
        {activeIcon}
      </div>
      <p>
        {showInfo && info}
      </p>
    </div>

  )
};

export default Question;
