import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { sliderItem } from "../../SetUpData/data";
import './module.BigSlider.css'


function Bigslider() {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = sliderItem.length-1;
    if(index < 0) setIndex(lastIndex);
    if(index > lastIndex) setIndex(0)
  }, [index, sliderItem])

  useEffect(() => {
   let slider =  setInterval(() => {
      setIndex(index+1);
    },6000);
    return() => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="section-center">
        {sliderItem.map((person, personIndex) => {
            const { id, img, title, desc } = person;

            let position = 'nextSlide';

            if(personIndex === index){
              position = 'activeSlide';
            }

            if(personIndex === index-1 || (index === 0 && personIndex === sliderItem.length -1)){
              position = 'lastSlide';
            }

            return(
              <article key={id} className={position}>

                <div className="img">
                    <img src={img} alt={title} className='person-img' />
                </div>

                <div className="action">
                    <h4 className='title'>{title}</h4>
                    <p className="text">{desc}</p> 
                    <div className='button'>Shop Now</div>
                </div>
                
              </article>
            )
        })}
        <button className='prev' onClick={()=> setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={()=> setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}
export default Bigslider;