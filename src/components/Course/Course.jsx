import PropTypes from 'prop-types'; 
import { BiDollar } from "react-icons/bi";
import { IoBookOutline } from "react-icons/io5";


const Course = ({ course,handlePrice }) => {
    const { cover_img, course_title, description, price, credit_hour } = course;
    console.log(course, 'data of course');
    return (
        // main div
        <div className=' md:bg-white md:p-2 md:rounded-xl md:m-2 m-3 rounded-2xl bg-white pb-2' >
            <div>
                {/* Div for the course cover */}
                <div>
                    <img className='w-full p-3' src={cover_img} alt="" />
                </div>
                {/* div for the title part */}
                <div>
                    <h3 className='md:text-lg text-xl font-bold p-3'>{course_title}</h3>
                    <p className='px-3 text-slate-500 text-justify'>{description}</p>
                </div>
                {/* price and credit div */}
                <div className='flex justify-between  text-xl p-4'>
                    <div className='md:flex md:space-x-1 flex space-x-2'>
                        <p className='pt-1 text-2xl '><BiDollar /></p>
                        <p className='md:text-lg text-slate-500'> Price: {price}</p>
                    </div>
                    <div className='md:flex md:space-x-1 flex space-x-2'>
                        <p className='pt-1 text-2xl pr-2'><IoBookOutline /></p>
                        <p className='md:text-lg text-slate-500 pr-2'>Credit: {credit_hour}</p>
                    </div>
                </div>
            </div>
            {/* button div */}
            <div className='mx-auto w-32 text-center bg-blue-600 p-2 mb-4 rounded-xl '>
                <button onClick={()=>handlePrice(price,course_title,credit_hour)}
                 className='text-center text-xl font-semibold text-white'>Select</button>
            </div>
        </div>
    );
};
Course.propTypes = {
    course: PropTypes.object.isRequired,
    handlePrice: PropTypes.func.isRequired
}
export default Course;