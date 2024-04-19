import React from 'react'
import { intro } from '@/Fint';
import St from './St';
const StackedList = ({ params }) => {
  const k = params.slice(0, 4);
  const t = params.slice(4, 6);
  // console.log("yooooo"+t);
  // const t=3;
// console.log(k)
  const a = [0,1, 2, 3, 4];
  return (
    <>
      {
        intro.map((e) => (
          e.path == k ?
          a.map((s)=>(
            <>
  <St params={e.content[s]} pro={t}/>
  </>
          ))
            
        :
        " "
      
    ))

      }
    </>
  )
}

export default StackedList