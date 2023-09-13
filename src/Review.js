import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
function Review() {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    const checkNumber = (number) => {
        if (number < 0) {
            return people.length - 1;
        }

        if (number > people.length - 1) {
            return 0;
        }
        return number;
    }

    const handlePrev = () => {
        setIndex(index => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    }

    const handleNext = () => {
        setIndex(index => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    }

    const handleRandom = () => {
        setIndex(Math.floor(Math.random() * people.length));
    }

    return (
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img' />
                <span className='quote-icon'>
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button className='prev-btn' onClick={handlePrev}>
                    <FaChevronLeft />
                </button>

                <button className='next-btn' onClick={handleNext}>
                    <FaChevronRight />
                </button>
            </div>

            <button className='random-btn' onClick={handleRandom}>
                Random
            </button>
        </article>
    )
}

export default Review;