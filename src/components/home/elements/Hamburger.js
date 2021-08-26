import React from 'react';

const Hamburger = ({openNav, setOpenNav}) => {
    return (
        <div className="menu__hamburger" onClick={()=>setOpenNav(state => !state)}>
            <div className="menu__burger menu__burger--before"
                 style={{transform: openNav ? 'rotate(45deg)' : 'rotate(0deg)'}}/>
            <div className="menu__burger"
                 style={{
                     transform: openNav ? 'translateX(100%)' : 'translateX(0)',
                     opacity: openNav ? 0 : 1}}/>
            <div className="menu__burger menu__burger--after"
                 style={{transform: openNav ? 'rotate(-45deg)' : 'rotate(0deg)'}}/>
        </div>
    );
}

export default Hamburger;