import PropTypes from 'prop-types';
const Credits = ({price,credit,title}) => {
    
    return (
        <div className=" lg:m-3 lg:p-3 lg:pt-4 rounded-2xl bg-white mt-4 ">
           <div className="lg:border-b-2 ">
           <h3 className="text-blue-500 lg:font-bold lg:text-center lg:text-xl lg:mt-3 lg:pb-5 font-bold text-center p-4 border-b-2 text-xl">Credits Hour Remaining {20-credit} hour</h3>
           </div>
           <div>
                <h3 className="lg:text-2xl lg:font-bold text-2xl font-bold ml-4">Course Name </h3>
                
                    <ul className="lg:text-xl lg:p-4 lg:mb-3 lg:border-b-2 border-b-2 p-4 mb-3 text-xl">
                       {
                        title.map((title,idx)=> <li className='mb-3 text-lg text-slate-500' key={idx}>{idx+1}. {title}</li>)
                       }
                    </ul>
             
                <p className="text-xl lg:p-4 lg:mb-3 border-b-2 p-3">Total Credit Hour: {credit} hr</p>
                <p className="text-xl p-4 mb-3 ">Total price: {price} USD</p>

           </div>
        </div>
    );
};
Credits.propTypes={
    price: PropTypes.object.isRequired,
    credit:PropTypes.object.isRequired,
    title: PropTypes.array.isRequired
}
export default Credits;