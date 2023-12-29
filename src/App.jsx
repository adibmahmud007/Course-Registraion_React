
import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import Credits from './components/Credits/Credits'
import Header from './components/Header/Header'



function App() {
  const [price,setPrice]=useState(0);
  const [credit,setCredit]=useState(0);
  const [title,setTitle]=useState([]);

  
  const handlePrice = (cprice, ctitle, credit_hour) => {
    if (!title.includes(ctitle)) {
      const newTotalCredit = credit + credit_hour;
  
      // Ensure the new total credits won't go below zero
      const limitedTotalCredit = Math.max(newTotalCredit, 0);
  
      // Only update state if the credits are within the limit
      if (limitedTotalCredit <= 20) {
        setTitle(newTitles => [...newTitles, ctitle]);
        setPrice(newPrice => newPrice + cprice);
        setCredit(limitedTotalCredit);
      } else {
        console.log(`Credits limit reached.`);
      }
    } else {
      console.log(`Title "${ctitle}" is already selected.`);
    }
  };
  
  
  


  return (
    <div className='bg-slate-200 '>
      <Header></Header>
      <div className='lg:flex '>
        <Courses handlePrice={handlePrice}></Courses>
        <Credits price={price} credit={credit} title={title}></Credits>
      </div>
    </div>
  )
}

export default App
