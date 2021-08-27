import React from 'react';
import people from '../../assets/people.jpg'
import Decoration from "../elements/Decoration";
import signature from "../../assets/signature.svg";

const HomeAbout = () => {
    return (
        <section className='about'>
            <div className="about__frame">
                <div className="about__header">O nas</div>
                <Decoration/>
                <p className="about__text">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img src={signature} alt="signature" className="about__signature"/>

            </div>
            <img src={people} alt="people" className="about__img"/>
        </section>
    );
}

export default HomeAbout;