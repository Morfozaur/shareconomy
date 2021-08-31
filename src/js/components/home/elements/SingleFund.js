import React from 'react';

const SingleFund = ({name, goal, request}) => {
    const requestList = request.join(', ')
    return (
        <div className='helpers__single'>
            <div className="helpers__info">
                <div className="helpers__title">{name}</div>
                <div className="helpers__goal">{goal}</div>
            </div>
            <div className="helpers__requests">{requestList}</div>
        </div>
    );
}

export default SingleFund