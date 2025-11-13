import React from 'react';
import PopulerCourse from './pages/PopulerCourse';
import Hero from './section/Hero';
import ChooseUs from './section/ChoseUs';

const popularCoursePromise = fetch('http://localhost:3000/popularCourses').
then(res => res.json())

const Home = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto'>
                <Hero></Hero>
            </div>
            <PopulerCourse popularCoursePromise={popularCoursePromise} ></PopulerCourse>
            <div className='max-w-6xl mx-auto'>
                <ChooseUs></ChooseUs>
            </div>
        </div>
    );
};

export default Home;