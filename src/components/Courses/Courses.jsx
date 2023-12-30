import { useEffect, useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types'
const Courses = ({handlePrice}) => {
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className=" lg:w-3/4 md:grid md:grid-cols-3 md:bg-slate-200 p-3 ">
            
            {
                courses.map(course => <Course key={course.id} course={course} handlePrice={handlePrice}></Course>)
            }
        </div>
    );
};
 Courses.propTypes={
    handlePrice: PropTypes.func.isRequired
 }
export default Courses;