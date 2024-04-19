import React from 'react'
// import '@/app/_Component/CSS/game.scss'
import '@/app/_Component/CSS/gam.css'
import Image from 'next/image'
import c1 from '@/Basic/c1.png'
import c2 from '@/Basic/c2.png'
import c3 from '@/Basic/c3.png'
import c4 from '@/Basic/c4.png'
import c5 from '@/Basic/c5.png'
import c6 from '@/Basic/c6.png'
import c7 from '@/Basic/c7.png'
import c8 from '@/Basic/c8.png'
import c9 from '@/Basic/c9.png'
import c10 from '@/Basic/c10.png'
import c11 from '@/Basic/c11.png'
import c12 from '@/Basic/c12.png'
import c13 from '@/Basic/c13.png'
import c14 from '@/Basic/c14.png'
import c15 from '@/Basic/c15.png'
import c16 from '@/Basic/c16.png'
import c17 from '@/Basic/c17.png'
import c18 from '@/Basic/c18.png'
import c19 from '@/Basic/c19.png'
import Celeb from './Celeb'
import Mod from './Modal'
const Game = ({ params }) => {
  const data = [{
    cid: 1,
    image: "https://drive.google.com/file/d/1VK6SafRxJd7NEbtu8FDXRj0ontOj-Ppm/view?usp=drive_link",
    link: ["/Challenge/basic/2", "/Challenge/basic/17", "/Challenge/basic/5"],
    option: ["Create a diversified investment portfolio including stocks, mutual funds, and fixed deposits to maximize returns.", "Create a diversified investment portfolio including stocks, mutual funds, and fixed deposits to maximize returns.", "Stick to traditional savings methods and postpone the goal."],
    ques: "Vishal sits down with you to discuss his dream of owning a Royal Enfield Classic 350. Together, you establish a clear savings target and outline the steps needed to achieve it.",
    title: "Setting Financial Goals",
  },
  {
    cid: 2,
    link: ["/Challenge/basic/3", "/Challenge/basic/4", "/Challenge/basic/5"],
    option: ["Dive into the stock market, researching promising companies and investing in growth stocks.", "Opt for mutual funds to achieve diversification and professional management.", "Consider fixed deposits for stability and guaranteed returns."],
    ques: "Description: You introduce Vishal to the concept of investing and explain the potential benefits of different investment options.",
    title: "Investment Strategy"
  },
  {
    cid: 3,
    link: ["/Challenge/basic/6", "/Challenge/basic/7", "/Challenge/basic/5"],
    option: ["Conduct thorough research on various companies and invest in those with strong fundamentals.", "Utilize technical analysis to identify short-term trading opportunities.", "Decide against investing in individual stocks due to perceived risks."],
    ques: " Vishal expresses interest in the stock market. You guide him through the basics and help him understand the factors influencing stock prices.",
    title: "Stock Market Exploration"
  },
  {
    cid: 4,
    link: ["/Challenge/basic/6", "/Challenge/basic/6", "/Challenge/basic/6"],
    option: ["Invest in equity mutual funds for long-term growth potential.", " Consider debt mutual funds for stability and lower risk.", "Explore balanced funds for a combination of growth and income."],
    ques: "You explain the benefits of mutual funds as a way to access diversified portfolios managed by professionals.",
    title: "Mutual Fund Investment"
  }
    ,
  {
    cid: 5,
    link: ["/Challenge/basic/6", "/Challenge/basic/7", "/Challenge/basic/9"],
    option: ["Allocate a portion of savings to fixed deposits for stability and guaranteed returns.", "Prioritize higher-yielding investment options over fixed deposits.", "Avoid fixed deposits altogether due to their relatively low returns."],
    ques: "You discuss the role of fixed deposits in a balanced investment strategy and their potential impact on Vishal's goal.",
    title: "Fixed Deposit Decision"
  },
  {
    cid: 6,
    link: ["/Challenge/basic/11", "/Challenge/basic/7", "/Challenge/basic/10"],
    option: ["Spread investments across different asset classes to minimize risk.", "Concentrate investments in high-risk/high-return opportunities for faster growth.", "Play it safe by avoiding any investments with perceived risks."],
    ques: "You emphasize the importance of diversification and risk management in building a resilient investment portfolio.",
    title: "Risk Management"
  },
  {
    cid: 7,
    link: ["/Challenge/basic/8", "/Challenge/basic/3", "/Challenge/basic/4"],
    option: ["Conduct thorough fundamental analysis to evaluate TravelTech's potential.", "Utilize technical analysis to time the entry and exit points for maximum gains.", "Decide against investing in individual stocks, sticking to diversified mutual funds."],
    ques: "Vishal identifies a promising stock named TravelTech in the market. What's his approach?",
    title: "Market Opportunity"
  },
  {
    cid: 8,
    link: ["/Challenge/basic/9", "/Challenge/basic/10", "/Challenge/basic/11"],
    option: [" Purchase a significant stake in TravelTech based on his analysis.", "Start with a small investment to test the waters before committing further.", "Choose not to invest in individual stocks, sticking to safer investment options."],
    ques: "Vishal decides to invest in TravelTech How does he proceed?",
    title: "Investment Execution"
  },
  {
    cid: 9,
    link: ["/Challenge/basic/12", "/Challenge/basic/10", "/Challenge/basic/10"],
    option: ["Consider selling some shares to lock in profits and reinvest elsewhere", "Hold onto the investment for long-term growth potential.", "Continue investing aggressively in TravelTech to maximize gains"],
    ques: "'TravelTech' stock performs exceptionally well, contributing significantly to Vishal's investment growth.",
    title: "Investment Performance"
  },
  {
    cid: 10,
    ques: "End of the game. Vishal achieves his goal of purchasing the Royal Enfield Classic 350. He reflects on his journey and looks forward to embarking on new adventures with his dream motorcycle.Congratulations! Vishal's journey to financial success showcases the power of smart investing, disciplined saving, and perseverance in the face of challenges.",
    link: [" ", " ", " "],
    option: [" ", " ", " "],
    title: "Goal Achivement",
  },
  {
    cid: 11,
    link: ["/Challenge/basic/12", "/Challenge/basic/8", "/Challenge/basic/12"],
    option: ["Reevaluate investment strategies and consider alternative options.", "Stick to the original investment plan and wait for market recovery.", "Panic and sell off investments to minimize losses."],
    ques: "Vishal faces a setback as the stock market crashes. How does he respond?",
    title: "Market Crash Recovery"
  },
  {
    cid: 12,
    link: ["/Challenge/basic13", "/Challenge/basic/14", "/Challenge/basic/15"],
    option: ["Invest in stable assets like gold or government bonds for safety.", " Capitalize on the market downturn by buying undervalued stocks.", "Consider starting a small business to generate additional income."],
    ques: "Vishal explores alternative investment opportunities to recover from the market crash.",
    title: "Alternative Investment"
  },
  {
    cid: 13,
    link: ["/Challenge/basic/14", "/Challenge/basic/15", "/Challenge/basic/10"],
    option: ["Continue monitoring the market and adjust investment strategy accordingly.", "Invest in assets with low correlation to the stock market, such as real estate", "Play it safe and stick to conservative investment options."],
    ques: "Vishal focuses on mitigating risk by diversifying his investments.",
    title: "Risk Mitigation"
  },
  {
    cid: 14,
    link: ["/Challenge/basic/10", "/Challenge/basic/10", "/Challenge/basic/10"],
    option: ["Hold onto investments and wait for further market improvement.", "Sell off some assets to lock in gains and reinvest elsewhere", "Double down on investments to capitalize on the recovery."],
    ques: "The market begins to rebound, offering opportunities for recovery.",
    title: "Market Rebound"
  },
  {
    cid: 15,
    link: ["/Challenge/basic/16", "/Challenge/basic/16", "/Challenge/basic/10"],
    option: ["Invest time and resources into building a sustainable business model.", "Take calculated risks to expand the business and increase profits", " Focus on steady growth and long-term sustainability."],
    ques: "Vishal decides to start a small business to diversify his income sources.",
    title: "Business Venture"
  },
  {
    cid: 16,
    link: ["/Challenge/basic/10", "/Challenge/basic/17", "/Challenge/basic/10"],
    option: ["Reinvest profits to further expand the business operations.", "Consider diversifying into new product lines or markets.", "Focus on maintaining the current success and stability of the business"],
    ques: "Vishal's business venture becomes successful, generating additional income.",
    title: "Business Success"
  },
  {
    cid: 17,
    link: ["/Challenge/basic/10", "/Challenge/basic/10", "/Challenge/basic/10"],
    option: ["Invest in rental properties to generate passive income.", "Explore freelance opportunities or side gigs to supplement earnings.", "Pursue educational opportunities or certifications to increase earning potential."],
    ques: "Vishal explores additional avenues for generating income outside of his primary job and investments.",
    title: "Extra Income Generation"
  },
  {
    cid: 18,
    link: ["/Challenge/basic/10", "/Challenge/basic/10", "/Challenge/basic/10"],
    option: ["Reevaluate financial goals and set new objectives for the future.", "Explore advanced investment strategies to further grow wealth.", "Focus on enjoying the fruits of his labor while maintaining financial discipline."],
    ques: "Vishal achieves a level of financial stability through prudent financial management and smart investing.",
    title: "Financial Stability"
  },
  {
    cid: 19,
    link: ["/Challenge/basic/10", "/Challenge/basic/10", "/Challenge/basic/10"],
    option: ["Stay focused and disciplined in managing finances to reach the savings target. ", "Celebrate the progress made and reflect on the journey towards financial success.", "Take a moment to appreciate the lessons learned and the growth experienced along the way."],
    ques: "Vishal makes a final push towards achieving his goal of purchasing the Royal Enfield Classic 350.",
    title: "Final Push",
  }]
  return (
    <>



      {
        data.map((e) => (
          e.cid == params ?
            <>
             
              
              <div className='flex'>
                {e.cid == 10
                  ?
                  <>
                    <Celeb className="absolute z-100" />
                  </>
                  :
                  " "
                }
                <div className="card bg-black z-20 relative">
                  <div className="card__inner">


                    <main className="card__body flex">
                      <div className='w-1/2 border-r-3 border-amber-400'>
                        {
                          e.cid == 1 ?
                            <Image src={c1} className='z-10  ' />
                            :
                            e.cid == 2 ?
                              <Image src={c2} />
                              :
                              e.cid == 3 ?
                                <Image src={c3} />
                                :
                                e.cid == 4 ?
                                  <Image src={c4} />
                                  :
                                  e.cid == 5 ?
                                    <Image src={c5} />
                                    :
                                    e.cid == 6 ?
                                      <Image src={c6} />
                                      :
                                      e.cid == 7 ?
                                        <Image src={c7} />
                                        :
                                        e.cid == 8 ?
                                          <Image src={c8} />
                                          :
                                          e.cid == 9 ?
                                            <Image src={c9} />
                                            :
                                            e.cid == 10 ?
                                              <Image src={c10} />
                                              :
                                              e.cid == 11 ?
                                                <Image src={c11} />
                                                :
                                                e.cid == 12 ?
                                                  <Image src={c12} />
                                                  :
                                                  e.cid == 13 ?
                                                    <Image src={c13} />
                                                    :
                                                    e.cid == 14 ?
                                                      <Image src={c14} />
                                                      :
                                                      e.cid == 15 ?
                                                        <Image src={c15} />
                                                        :
                                                        e.cid == 16 ?
                                                          <Image src={c16} />
                                                          :
                                                          e.cid == 17 ?
                                                            <Image src={c17} />
                                                            :
                                                            e.cid == 18 ?
                                                              <Image src={c18} />
                                                              :
                                                              e.cid == 19 ?
                                                                <Image src={c19} />
                                                                :
                                                                " "

                        }
                      </div>

                      <div className="card__info pt-12 pl-2 border-l-4 border-amber-300">
                        <h1 className="card__title">{e.title}</h1>

                        <p className="card__slug">
                          {e.ques}
                        </p>

                        <a href={`/Scene/${e.cid}`}>
                            
                             { e.cid != 10 ?
                              <button className="card__btn" > 
                              Next
                          </button>
                                :
                              " "
                             }
                            
                        </a>


                      </div>
                    </main>

                  </div>
                </div>
              </div>
              {
                e.cid==10?
                     <Mod/>

                :
                " "
              }
            </>
            :
            " "
        ))
      }




    </>


  )
}

export default Game