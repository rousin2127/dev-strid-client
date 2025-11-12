import React, { use } from 'react';
import Course from './Course';

const PopulerCourse = ({popularCoursePromise}) => {
    const courses = use(popularCoursePromise);
    console.log(courses)
    return (
        <div>
            {
                courses.map(course => <Course
                key={course._id}
                course ={course}
                ></Course>)
            }
        </div>
    );
};

export default PopulerCourse;