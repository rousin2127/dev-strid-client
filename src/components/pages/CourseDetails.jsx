import React from 'react';
import { useLoaderData } from 'react-router';

const CourseDetails = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <div>
            
        </div>
    );
};

export default CourseDetails;