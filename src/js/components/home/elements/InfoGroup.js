import React from 'react';

const InfoGroup = ({header, lead, text}) => {
    return (
        <div className="info__group">
            <div className="info__header">{header}</div>
            <h3 className="info__lead font__subheader">{lead}</h3>
            <p className="info__text">{text}</p>
        </div>
    );
}

export default InfoGroup;