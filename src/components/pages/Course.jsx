import React from 'react';
import { Link } from 'react-router';

const Course = ({ course }) => {

    const { _id, title, image, instructor, price } = course;

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={"https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
                        alt="Course" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{instructor}</p>
                    <p>${price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/courseDetails/${_id}`}>View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;