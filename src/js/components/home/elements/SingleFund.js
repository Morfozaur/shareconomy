import React from 'react';

const SingleFund = ({name, goal, request}) => {
    const requestList = request.join(', ')
    return (
        <div className='helper__single'>
            <div className="helper__info">
                <div className="helper__title">{name}</div>
                <div className="helper__goal">{goal}</div>
            </div>
            <div className="helper__requests">{requestList}</div>
        </div>
    );
}

export default SingleFund