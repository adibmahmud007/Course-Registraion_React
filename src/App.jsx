
import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import Credits from './components/Credits/Credits'
import Header from './components/Header/Header'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [price, setPrice] = useState(0);
  const [credit, setCredit] = useState(0);
  const [title, setTitle] = useState([]);




const handlePrice = (cprice, ctitle, credit_hour) => {
  if (!title.includes(ctitle)) {
    const newTotalCredit = credit + credit_hour;

    // the minimum number should not be less than 0
    const limitedTotalCredit = Math.max(newTotalCredit, 0);

    // Only update state if the credits are within the limit
    if (limitedTotalCredit <= 20) {
      setTitle(newTitles => [...newTitles, ctitle]);
      setPrice(newPrice => newPrice + cprice);
      setCredit(limitedTotalCredit);

      
      toast.success(`Course "${ctitle}" added successfully!`);
    } else {
      toast.error(`Credits limit reached.`);
    }
  } else {
    toast.warn(`Course "${ctitle}" is already selected.`);
  }
};


  return (
    <div className='bg-slate-200 '>
      <Header></Header>
      <div className='lg:flex lg:flex-row-reverse mb-4 lg:mt-7 '>
        <div className='lg:w-1/4  mb-5 p-4'>
        <Credits className='' price={price} credit={credit} title={title}></Credits>
        </div>
        <Courses handlePrice={handlePrice}></Courses>
      </div>
    </div>
  )
}

export default App
