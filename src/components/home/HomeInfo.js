import React from 'react';
import InfoGroup from "./elements/InfoGroup";

const HomeInfo = () => {
    const infoData = [
        {header: 10, lead: 'Oddanych worków', text:'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat. '},
        {header: 5, lead: 'Wspartych organizacji', text:'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat. '},
        {header: 7, lead: 'Zorganizowanych zbiórek', text:'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat. '}
    ]
    return (
        <section className='info'>
            {infoData.map(({header, lead, text}) =>
                <InfoGroup header={header} lead={lead} text={text}/>)}
        </section>
    );
}

export default HomeInfo;