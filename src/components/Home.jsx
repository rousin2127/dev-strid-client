import React from 'react';
import PopulerCourse from './pages/PopulerCourse';

const popularCoursePromise = fetch('http://localhost:3000/popularCourses').
then(res => res.json())

const Home = () => {
    return (
        <div>
            Home
            <PopulerCourse popularCoursePromise={popularCoursePromise} ></PopulerCourse>
        </div>
    );
};

export default Home;