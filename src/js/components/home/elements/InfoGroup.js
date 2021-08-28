import React from 'react';

const InfoGroup = ({header, lead, text}) => {
    return (
        <div className="info__group">
            <div className="info__header">{header}</div>
            <div className="info__lead">{lead}</div>
            <p className="info__text">{text}</p>
        </div>
    );
}

export default InfoGroup;