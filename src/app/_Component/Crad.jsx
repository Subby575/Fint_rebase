import React from 'react'
import '@/app/_Component/CSS/crrad.css'
import { usePathname } from 'next/navigation'
import { sc } from '@/scenes.js'
const Crad = () => {
  const path = usePathname();
  const pa = path.slice(7, 9);
  const arr = [0, 1, 2];

  return (
    <>
    <div className='mt-32'>
    {
      sc.map((e)=>(
        e.cid==pa?
        <>
          <div className="pcard ">
            <h2 className='text-amber-200'>Life Scenario</h2>
            <p>{e.ques}</p>
          </div>

        </>
        :
        " "
      ))
    }
      <section>
        {
          sc.map((e) => (
            e.cid == pa ?
              <>
                {

                  arr.map((s) => (
                    <a href={`${e.link[s]}`}>
                    <div className="card">
                      <h2 className='text-teal-300'>Choice {s + 1}</h2>
                      <p>{e.option[s]}</p>
                    </div>
                    </a>
                  ))
                }



              </>
              :
              " "
          ))
        }
      </section>

      </div>
    </>
  )
}

export default Crad