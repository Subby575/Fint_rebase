"use client"
import { useState } from 'react'
import CircularProgress from '@mui/joy/CircularProgress';
// import { quiz } from '../../data/questions'
import bg from '@/Charac/bg1.jpeg'
import '@/app/_Component/CSS/Test.css'
import img from '@/app/Mascot/happy.gif'
import ok from '@/app/Mascot/ok.jpg'

// import {quizzes} from '@/quiz.js'

import sad from '@/app/Mascot/sadd.gif'
import Image from 'next/image'
export const quizzes = [
  {
      mod: "intr1",
      content: [
          // Easy Level Questions
          {
              topic: 'Introduction',
              level: 'Easy',
              totalQuestions: 5,
              perQuestionScore: 5,
              questions: [
                  {
                      question: 'What is the purpose of budgeting?',
                      choices: ['Tracking income and expenses', 'Maximizing debt', 'Ignoring financial goals', 'Spending without limits'],
                      type: 'MCQs',
                      correctAnswer: 'Tracking income and expenses',
                  },
                  {
                      question: 'Why is saving important?',
                      choices: ['It\'s unnecessary', 'It helps in achieving financial goals', 'It increases debt', 'It leads to overspending'],
                      type: 'MCQs',
                      correctAnswer: 'It helps in achieving financial goals',
                  },
                  {
                      question: 'What does investing involve?',
                      choices: ['Spending all income', 'Generating income or profit over time', 'Ignoring financial growth', 'Avoiding market conditions'],
                      type: 'MCQs',
                      correctAnswer: 'Generating income or profit over time',
                  },
                  {
                      question: 'What is an essential component of effective debt management?',
                      choices: ['Increasing debt burden', 'Disciplined spending habits', 'Avoiding repayment strategies', 'Ignoring financial stability'],
                      type: 'MCQs',
                      correctAnswer: 'Disciplined spending habits',
                  },
                  {
                      question: 'Why is financial planning important?',
                      choices: ['It leads to overspending', 'It provides direction for financial decisions', 'It increases taxation', 'It disregards future goals'],
                      type: 'MCQs',
                      correctAnswer: 'It provides direction for financial decisions',
                  }
              ]
          }
      ]
  },
  {
      mod: "intr2",
      content: [
          // Medium Level Questions
          {
              topic: 'Introduction',
              level: 'Medium',
              totalQuestions: 5,
              perQuestionScore: 10,
              questions: [
                  {
                      question: 'What is the purpose of an emergency fund?',
                      choices: ['To invest in the stock market', 'To provide a financial safety net', 'To pay off credit card debt', 'To buy luxury items'],
                      type: 'MCQs',
                      correctAnswer: 'To provide a financial safety net',
                  },
                  {
                      question: 'Why is risk tolerance important in investing?',
                      choices: ['To guarantee high returns', 'To minimize all risks', 'To assess how much risk an investor can handle', 'To ignore market fluctuations'],
                      type: 'MCQs',
                      correctAnswer: 'To assess how much risk an investor can handle',
                  },
                  {
                      question: 'Why is it important to prioritize high-interest debt?',
                      choices: ['To increase debt burden', 'To decrease credit score', 'To save money on interest payments', 'To avoid paying off debt'],
                      type: 'MCQs',
                      correctAnswer: 'To save money on interest payments',
                  },
                  {
                      question: 'What does financial resilience refer to?',
                      choices: ['Having no savings', 'Being financially independent', 'Being able to adapt to financial challenges', 'Being heavily in debt'],
                      type: 'MCQs',
                      correctAnswer: 'Being able to adapt to financial challenges',
                  },
                  {
                      question: 'Why is it important to review and adjust financial plans regularly?',
                      choices: ['To ignore financial goals', 'To increase debt burden', 'To ensure alignment with changing circumstances', 'To overspend'],
                      type: 'MCQs',
                      correctAnswer: 'To ensure alignment with changing circumstances',
                  }
              ]
          }
      ]
  },
  {
      mod: "intr3",
      content: [
          // Hard Level Questions
          {
              topic: 'Introduction',
              level: 'Hard',
              totalQuestions: 5,
              perQuestionScore: 15,
              questions: [
                  {
                      question: 'What is compound interest?',
                      choices: ['Interest calculated on the principal amount only', 'Interest calculated on the total amount including previous interest', 'Interest calculated annually', 'Interest calculated monthly'],
                      type: 'MCQs',
                      correctAnswer: 'Interest calculated on the total amount including previous interest',
                  },
                  {
                      question: 'What is the difference between a traditional IRA and a Roth IRA?',
                      choices: ['Both have the same tax treatment', 'Contributions to a traditional IRA are tax-deductible', 'Contributions to a Roth IRA are tax-deductible', 'There is no difference'],
                      type: 'MCQs',
                      correctAnswer: 'Contributions to a traditional IRA are tax-deductible',
                  },
                  {
                      question: 'What are the potential benefits of diversification in investing?',
                      choices: ['Higher risk', 'Lower returns', 'Reduced risk', 'Increased volatility'],
                      type: 'MCQs',
                      correctAnswer: 'Reduced risk',
                  },
                  {
                      question: 'What does the term "liquidity" refer to in financial planning?',
                      choices: ['The ability to convert assets into cash quickly', 'The inability to access funds', 'The high risk of investments', 'The lack of financial goals'],
                      type: 'MCQs',
                      correctAnswer: 'The ability to convert assets into cash quickly',
                  },
                  {
                      question: 'What are the potential advantages of having a diversified investment portfolio?',
                      choices: ['Higher risk', 'Lower returns', 'Reduced risk', 'Increased volatility'],
                      type: 'MCQs',
                      correctAnswer: 'Reduced risk',
                  }
              ]
          }
      ]
  },
  {
      mod: "mutu1",
      content: [
          // Easy Level Questions
          {
              topic: 'Mutual Fund',
              level: 'Easy',
              totalQuestions: 5,
              perQuestionScore: 5,
              questions: [
                  {
                      question: 'What do mutual funds do with investors\' money?',
                      choices: ['Keep it in a bank', 'Invest in a diversified portfolio', 'Distribute it as dividends', 'Hold it in cash'],
                      type: 'MCQs',
                      correctAnswer: 'Invest in a diversified portfolio',
                  },
                  {
                      question: 'What are the different types of mutual funds available?',
                      choices: ['Only equity funds', 'Only bond funds', 'Both equity and bond funds', 'None of the above'],
                      type: 'MCQs',
                      correctAnswer: 'Both equity and bond funds',
                  },
                  {
                      question: 'What is a benefit of investing in mutual funds?',
                      choices: ['Limited diversification', 'Lack of professional management', 'High risk', 'Diversification and professional management'],
                      type: 'MCQs',
                      correctAnswer: 'Diversification and professional management',
                  },
                  {
                      question: 'What should investors consider regarding mutual fund risks?',
                      choices: ['Fees and expenses are irrelevant', 'Past performance guarantees future results', 'Understanding risks is unnecessary', 'Risks such as market risk and interest rate risk'],
                      type: 'MCQs',
                      correctAnswer: 'Risks such as market risk and interest rate risk',
                  },
                  {
                      question: 'How do mutual funds contribute to financial planning?',
                      choices: ['By increasing risk exposure', 'By offering limited investment options', 'By providing access to professionally managed portfolios', 'By restricting liquidity'],
                      type: 'MCQs',
                      correctAnswer: 'By providing access to professionally managed portfolios',
                  }
              ]
          }
      ]
  },
  {
      mod: "mutu2",
      content: [
          // Medium Level Questions
          {
              topic: 'Mutual Fund',
              level: 'Medium',
              totalQuestions: 5,
              perQuestionScore: 10,
              questions: [
                  {
                      question: 'What is Net Asset Value (NAV) in mutual funds?',
                      choices: ['The total value of all assets minus liabilities', 'The total number of shares outstanding', 'The price per share', 'The fund manager\'s salary'],
                      type: 'MCQs',
                      correctAnswer: 'The price per share',
                  },
                  {
                      question: 'What is the purpose of a mutual fund prospectus?',
                      choices: ['To advertise the fund to potential investors', 'To provide information about the fund\'s objectives and risks', 'To list the fund manager\'s qualifications', 'To guarantee returns to investors'],
                      type: 'MCQs',
                      correctAnswer: 'To provide information about the fund\'s objectives and risks',
                  },
                  {
                      question: 'What is an expense ratio in mutual funds?',
                      choices: ['The fee charged by the fund manager', 'The total value of all assets in the fund', 'The ratio of expenses to total assets', 'The minimum investment required'],
                      type: 'MCQs',
                      correctAnswer: 'The ratio of expenses to total assets',
                  },
                  {
                      question: 'What is a load in mutual funds?',
                      choices: ['The cost of buying or selling shares', 'The fund manager\'s performance bonus', 'The fund\'s total assets under management', 'The fund\'s investment strategy'],
                      type: 'MCQs',
                      correctAnswer: 'The cost of buying or selling shares',
                  },
                  {
                      question: 'What is the difference between open-end and closed-end mutual funds?',
                      choices: ['Open-end funds have a fixed number of shares, while closed-end funds can issue new shares', 'Closed-end funds are only available to institutional investors', 'Open-end funds have higher fees than closed-end funds', 'Closed-end funds are more liquid than open-end funds'],
                      type: 'MCQs',
                      correctAnswer: 'Open-end funds have a fixed number of shares, while closed-end funds can issue new shares',
                  }
              ]
          }
      ]
  },
  {
      mod: "mutu3",
      content: [
          // Hard Level Questions
          {
              topic: 'Mutual Fund',
              level: 'Hard',
              totalQuestions: 5,
              perQuestionScore: 15,
              questions: [
                  {
                      question: 'What is dollar-cost averaging in mutual fund investing?',
                      choices: ['Investing a fixed amount regularly regardless of market conditions', 'Buying and selling shares based on daily fluctuations', 'Investing only in funds denominated in US dollars', 'Exchanging shares of different funds to maintain a constant portfolio value'],
                      type: 'MCQs',
                      correctAnswer: 'Investing a fixed amount regularly regardless of market conditions',
                  },
                  {
                      question: 'What is a 12b-1 fee in mutual funds?',
                      choices: ['A fee paid to the fund manager for investment advice', 'A fee charged for trading shares in the fund', 'A fee used to cover marketing and distribution expenses', 'A fee paid to the fund administrator for record-keeping'],
                      type: 'MCQs',
                      correctAnswer: 'A fee used to cover marketing and distribution expenses',
                  },
                  {
                      question: 'What is a fund\'s turnover ratio?',
                      choices: ['The rate at which fund shares are bought and sold', 'The frequency with which the fund manager changes the portfolio holdings', 'The ratio of expenses to total assets', 'The percentage of fund assets that change over a year'],
                      type: 'MCQs',
                      correctAnswer: 'The percentage of fund assets that change over a year',
                  },
                  {
                      question: 'What is a target-date mutual fund?',
                      choices: ['A fund that invests in companies with a specific target price', 'A fund that aims to achieve a certain level of returns by a specific date', 'A fund that adjusts its asset allocation based on the investor\'s age or retirement date', 'A fund that invests exclusively in bonds with maturity dates'],
                      type: 'MCQs',
                      correctAnswer: 'A fund that adjusts its asset allocation based on the investor\'s age or retirement date',
                  },
                  {
                      question: 'What is the role of a custodian in a mutual fund?',
                      choices: ['To manage the fund\'s assets', 'To provide investment advice to investors', 'To safeguard the fund\'s assets and handle transactions', 'To market the fund to potential investors'],
                      type: 'MCQs',
                      correctAnswer: 'To safeguard the fund\'s assets and handle transactions',
                  }
              ]
          }
      ]
  },
  {
      mod: "fide1",
      content: [
          // Easy Level Questions
          {
              topic: 'Fixed Deposits',
              level: 'Easy',
              totalQuestions: 5,
              perQuestionScore: 5,
              questions: [
                  {
                      question: 'What are fixed deposits?',
                      choices: ['Savings accounts', 'Investment in stocks', 'Deposits for a fixed period at a fixed interest rate', 'Insurance policies'],
                      type: 'MCQs',
                      correctAnswer: 'Deposits for a fixed period at a fixed interest rate',
                  },
                  {
                      question: 'What do fixed deposits provide?',
                      choices: ['High-risk investments', 'Predictable returns', 'No returns', 'No interest rates'],
                      type: 'MCQs',
                      correctAnswer: 'Predictable returns',
                  },
                  {
                      question: 'How long are fixed deposit terms?',
                      choices: ['Always less than a month', 'Only a year', 'From a few months to several years', 'Indefinite'],
                      type: 'MCQs',
                      correctAnswer: 'From a few months to several years',
                  },
                  {
                      question: 'What is the primary advantage of fixed deposits?',
                      choices: ['High risk', 'Predictability of returns', 'No interest rates', 'Unlimited access to cash'],
                      type: 'MCQs',
                      correctAnswer: 'Predictability of returns',
                  },
                  {
                      question: 'Are fixed deposits considered high-risk investments?',
                      choices: ['Yes, always', 'No, never', 'It depends', 'Not at all'],
                      type: 'MCQs',
                      correctAnswer: 'Not at all',
                  }
              ]
          }
      ]
  },
  {
      mod: "fide2",
      content: [
          // Medium Level Questions
          {
              topic: 'Fixed Deposits',
              level: 'Medium',
              totalQuestions: 5,
              perQuestionScore: 10,
              questions: [
                  {
                      question: 'What are the benefits of fixed deposits?',
                      choices: ['High risk', 'Stability', 'Unpredictable returns', 'Unlimited access to cash'],
                      type: 'MCQs',
                      correctAnswer: 'Stability',
                  },
                  {
                      question: 'What risk should investors consider with fixed deposits?',
                      choices: ['Inflation risk and liquidity constraints', 'High returns', 'No risks involved', 'Unlimited access to cash'],
                      type: 'MCQs',
                      correctAnswer: 'Inflation risk and liquidity constraints',
                  },
                  {
                      question: 'How can fixed deposits be beneficial for short-term goals?',
                      choices: ['They offer high returns', 'They provide long-term security', 'They offer tax benefits', 'They offer stability and predictable returns'],
                      type: 'MCQs',
                      correctAnswer: 'They offer stability and predictable returns',
                  },
                  {
                      question: 'Do fixed deposits have flexibility in terms of investment amount and tenure?',
                      choices: ['No, they are fixed', 'Yes, they are flexible', 'They have no tenure', 'They have no investment amount'],
                      type: 'MCQs',
                      correctAnswer: 'Yes, they are flexible',
                  },
                  {
                      question: 'What should investors do to evaluate the suitability of fixed deposits within an investment portfolio?',
                      choices: ['Ignore other investments', 'Not consider risk', 'Understand trade-offs between security, liquidity, and returns', 'Only consider returns'],
                      type: 'MCQs',
                      correctAnswer: 'Understand trade-offs between security, liquidity, and returns',
                  }
              ]
          }
      ]
  },
  {
      mod: "fide3",
      content: [
          // Hard Level Questions
          {
              topic: 'Fixed Deposits',
              level: 'Hard',
              totalQuestions: 5,
              perQuestionScore: 15,
              questions: [
                  {
                      question: 'How do fixed deposits contribute to financial planning?',
                      choices: ['They offer high risk', 'They offer unstable returns', 'They provide a secure and stable avenue for preserving capital', 'They have unpredictable returns'],
                      type: 'MCQs',
                      correctAnswer: 'They provide a secure and stable avenue for preserving capital',
                  },
                  {
                      question: 'What role do fixed deposits play within a diversified portfolio?',
                      choices: ['They increase risk', 'They decrease stability', 'They provide stability and balance risk and return', 'They have no role'],
                      type: 'MCQs',
                      correctAnswer: 'They provide stability and balance risk and return',
                  },
                  {
                      question: 'What should investors consider regarding taxation implications with fixed deposits?',
                      choices: ['Tax implications do not matter', 'Ignore taxation', 'Consider tax efficiency', 'They have no tax implications'],
                      type: 'MCQs',
                      correctAnswer: 'Consider tax efficiency',
                  },
                  {
                      question: 'What is compound interest?',
                      choices: ['Interest calculated annually', 'Interest calculated monthly', 'Interest calculated on the principal amount only', 'Interest calculated on the total amount including previous interest'],
                      type: 'MCQs',
                      correctAnswer: 'Interest calculated on the total amount including previous interest',
                  },
                  {
                      question: 'Why should investors consult with tax advisors or financial experts regarding fixed deposits?',
                      choices: ['To increase taxes', 'To maximize tax liability', 'To optimize tax efficiency', 'To ignore taxes'],
                      type: 'MCQs',
                      correctAnswer: 'To optimize tax efficiency',
                  }
              ]
          }
      ]
  },
  {
      mod: "stma1",
      content: [
          // Easy Level Questions
          {
              topic: 'Stock Market Trading',
              level: 'Easy',
              totalQuestions: 5,
              perQuestionScore: 5,
              questions: [
                  {
                      question: 'What does equity trading involve?',
                      choices: ['Buying and selling shares of publicly traded companies', 'Buying and selling real estate', 'Buying and selling commodities', 'Buying and selling cryptocurrencies'],
                      type: 'MCQs',
                      correctAnswer: 'Buying and selling shares of publicly traded companies',
                  },
                  {
                      question: 'What is the goal of equity trading?',
                      choices: ['To lose money', 'To profit from changes in stock prices', 'To avoid stock markets', 'To invest in bonds'],
                      type: 'MCQs',
                      correctAnswer: 'To profit from changes in stock prices',
                  },
                  {
                      question: 'How can investors trade equities?',
                      choices: ['Only through traditional stockbrokers', 'Only through online trading platforms', 'Both through traditional stockbrokers and online trading platforms', 'They cannot trade equities'],
                      type: 'MCQs',
                      correctAnswer: 'Both through traditional stockbrokers and online trading platforms',
                  },
                  {
                      question: 'What do day traders aim to profit from?',
                      choices: ['Long-term price movements', 'Short-term price movements', 'Price stability', 'Random price fluctuations'],
                      type: 'MCQs',
                      correctAnswer: 'Short-term price movements',
                  },
                  {
                      question: 'What is the primary advantage of swing trading?',
                      choices: ['Higher returns compared to long-term investing', 'Lower risk compared to long-term investing', 'No risk involved', 'No returns'],
                      type: 'MCQs',
                      correctAnswer: 'Higher returns compared to long-term investing',
                  }
              ]
          }
      ]
  },
  {
      mod: "stma2",
      content: [
          // Medium Level Questions
          {
              topic: 'Stock Market Trading',
              level: 'Medium',
              totalQuestions: 5,
              perQuestionScore: 10,
              questions: [
                  {
                      question: 'What is the primary goal of day trading?',
                      choices: ['Long-term investment growth', 'Short-term price fluctuations', 'Passive income generation', 'Market stability'],
                      type: 'MCQs',
                      correctAnswer: 'Short-term price fluctuations',
                  },
                  {
                      question: 'What are options trading contracts?',
                      choices: ['Contracts to buy or sell an underlying asset at a predetermined price within a specified time frame', 'Contracts to buy or sell an underlying asset at any time', 'Contracts to buy or sell an underlying asset without any restrictions', 'Contracts to buy or sell an underlying asset at random times'],
                      type: 'MCQs',
                      correctAnswer: 'Contracts to buy or sell an underlying asset at a predetermined price within a specified time frame',
                  },
                  {
                      question: 'What is a characteristic of swing trading?',
                      choices: ['Short holding periods', 'No trading activity', 'Long-term investment', 'Random decision-making'],
                      type: 'MCQs',
                      correctAnswer: 'Short holding periods',
                  },
                  {
                      question: 'What is an advantage of incorporating stock market investments into financial planning?',
                      choices: ['Decreased risk', 'Decreased returns', 'Increased taxation', 'Diverse financial objectives'],
                      type: 'MCQs',
                      correctAnswer: 'Diverse financial objectives',
                  },
                  {
                      question: 'What is a risk associated with options trading?',
                      choices: ['Limited capital investment', 'High returns', 'Complex strategies', 'No risks involved'],
                      type: 'MCQs',
                      correctAnswer: 'Complex strategies',
                  }
              ]
          }
      ]
  },
  {
      mod: "stma3",
      content: [
          // Hard Level Questions
          {
              topic: 'Stock Market Trading',
              level: 'Hard',
              totalQuestions: 5,
              perQuestionScore: 15,
              questions: [
                  {
                      question: 'What skills does day trading require?',
                      choices: ['Long-term commitment', 'No decision-making skills', 'Risk avoidance', 'Quick decision-making skills'],
                      type: 'MCQs',
                      correctAnswer: 'Quick decision-making skills',
                  },
                  {
                      question: 'What is a potential risk of day trading?',
                      choices: ['Low volatility', 'No leverage', 'High volatility', 'Market stability'],
                      type: 'MCQs',
                      correctAnswer: 'High volatility',
                  },
                  {
                      question: 'What is leverage in options trading?',
                      choices: ['No leverage involved', 'Decreased returns', 'Increased purchasing power with borrowed funds', 'Decreased purchasing power'],
                      type: 'MCQs',
                      correctAnswer: 'Increased purchasing power with borrowed funds',
                  },
                  {
                      question: 'What is an important consideration for swing trading?',
                      choices: ['No risk management', 'Long holding periods', 'Careful risk management', 'Random trading decisions'],
                      type: 'MCQs',
                      correctAnswer: 'Careful risk management',
                  },
                  {
                      question: 'Why is it essential to analyze fundamental and technical factors in equity trading?',
                      choices: ['To increase risk', 'To avoid losses', 'To make informed decisions', 'To ignore market trends'],
                      type: 'MCQs',
                      correctAnswer: 'To make informed decisions',
                  }
              ]
          }
      ]
  },
  {
      mod: "real1",
      content: [
          // Easy Level Questions
          {
              topic: 'Real Estate Investing',
              level: 'Easy',
              totalQuestions: 5,
              perQuestionScore: 5,
              questions: [
                  {
                      question: 'What is the primary purpose of rental properties?',
                      choices: ['To generate rental income', 'To sell properties quickly', 'To speculate on property values', 'To avoid real estate investing'],
                      type: 'MCQs',
                      correctAnswer: 'To generate rental income',
                  },
                  {
                      question: 'What are potential tax benefits of investing in rental properties?',
                      choices: ['Tax penalties', 'Tax deductions such as depreciation and mortgage interest', 'Tax evasion', 'No tax benefits'],
                      type: 'MCQs',
                      correctAnswer: 'Tax deductions such as depreciation and mortgage interest',
                  },
                  {
                      question: 'What is the primary focus of fix and flip investing?',
                      choices: ['Long-term rental income', 'Short-term property improvements', 'No improvements', 'Real estate crowdfunding'],
                      type: 'MCQs',
                      correctAnswer: 'Short-term property improvements',
                  },
                  {
                      question: 'What are Real Estate Investment Trusts (REITs) known for?',
                      choices: ['Investing in distressed properties', 'Generating rental income', 'Selling properties quickly', 'Avoiding real estate investments'],
                      type: 'MCQs',
                      correctAnswer: 'Generating rental income',
                  },
                  {
                      question: 'What is the purpose of real estate crowdfunding platforms?',
                      choices: ['To prevent investment opportunities', 'To pool capital and invest collectively in real estate projects', 'To avoid investing in real estate', 'To invest only in commercial properties'],
                      type: 'MCQs',
                      correctAnswer: 'To pool capital and invest collectively in real estate projects',
                  }
              ]
          }
      ]
  },
  {
      mod: "real2",
      content: [
          // Medium Level Questions
          {
              topic: 'Real Estate Investing',
              level: 'Medium',
              totalQuestions: 5,
              perQuestionScore: 10,
              questions: [
                  {
                      question: 'What are the potential benefits of investing in fix and flip projects?',
                      choices: ['Long-term rental income', 'Short-term property appreciation', 'No benefits', 'Avoiding real estate investments'],
                      type: 'MCQs',
                      correctAnswer: 'Short-term property appreciation',
                  },
                  {
                      question: 'What makes Real Estate Investment Trusts (REITs) attractive to investors?',
                      choices: ['Lack of dividends', 'Lack of liquidity', 'Steady dividend income', 'High-risk investments'],
                      type: 'MCQs',
                      correctAnswer: 'Steady dividend income',
                  },
                  {
                      question: 'What is a key consideration for real estate crowdfunding investors?',
                      choices: ['Avoiding due diligence', 'Risk factors and investment terms', 'Not assessing track record', 'No investment terms'],
                      type: 'MCQs',
                      correctAnswer: 'Risk factors and investment terms',
                  },
                  {
                      question: 'How does rental income contribute to real estate investment?',
                      choices: ['Decreases returns', 'No impact on returns', 'Steady stream of income', 'Increases risk'],
                      type: 'MCQs',
                      correctAnswer: 'Steady stream of income',
                  },
                  {
                      question: 'Why is market research important for real estate investors?',
                      choices: ['To speculate on property values', 'To avoid investing', 'To make informed decisions', 'To ignore market trends'],
                      type: 'MCQs',
                      correctAnswer: 'To make informed decisions',
                  }
              ]
          }
      ]
  },
  {
      mod: "real3",
      content: [
          // Hard Level Questions
          {
              topic: 'Real Estate Investing',
              level: 'Hard',
              totalQuestions: 5,
              perQuestionScore: 15,
              questions: [
                  {
                      question: 'What factors contribute to successful fix and flip investments?',
                      choices: ['Random decision-making', 'Strategic renovations and efficient project execution', 'No renovations', 'Avoiding renovations'],
                      type: 'MCQs',
                      correctAnswer: 'Strategic renovations and efficient project execution',
                  },
                  {
                      question: 'What are the risks associated with real estate crowdfunding?',
                      choices: ['No risks involved', 'Low returns', 'High risks', 'High liquidity'],
                      type: 'MCQs',
                      correctAnswer: 'High risks',
                  },
                  {
                      question: 'How do Real Estate Investment Trusts (REITs) differ from direct property ownership?',
                      choices: ['They offer no liquidity', 'They offer no returns', 'They offer no tax benefits', 'They provide access to real estate without direct ownership'],
                      type: 'MCQs',
                      correctAnswer: 'They provide access to real estate without direct ownership',
                  },
                  {
                      question: 'What is a crucial skill for successful real estate investors?',
                      choices: ['Ignoring market trends', 'Avoiding property management', 'Thorough market research', 'No skills required'],
                      type: 'MCQs',
                      correctAnswer: 'Thorough market research',
                  },
                  {
                      question: 'What is the primary purpose of real estate investment?',
                      choices: ['Speculation', 'Avoiding investments', 'Generating wealth and passive income', 'Ignoring investments'],
                      type: 'MCQs',
                      correctAnswer: 'Generating wealth and passive income',
                  }
              ]
          }
      ]
  },
  {
      mod: "insu1",
      content: [
          // Easy Level Questions
          {
              topic: 'Insurance Planning',
              level: 'Easy',
              totalQuestions: 5,
              perQuestionScore: 5,
              questions: [
                  {
                      question: 'What is the primary purpose of life insurance?',
                      choices: ['To provide financial protection in case of death', 'To cover medical expenses', 'To protect against property damage', 'To secure against legal liabilities'],
                      type: 'MCQs',
                      correctAnswer: 'To provide financial protection in case of death',
                  },
                  {
                      question: 'What does health insurance primarily cover?',
                      choices: ['Medical expenses', 'Legal liabilities', 'Property damage', 'Life insurance premiums'],
                      type: 'MCQs',
                      correctAnswer: 'Medical expenses',
                  },
                  {
                      question: 'What does property insurance protect against?',
                      choices: ['Medical expenses', 'Property damage', 'Legal liabilities', 'Life insurance premiums'],
                      type: 'MCQs',
                      correctAnswer: 'Property damage',
                  },
                  {
                      question: 'What does liability insurance protect against?',
                      choices: ['Property damage', 'Medical expenses', 'Legal liabilities', 'Life insurance premiums'],
                      type: 'MCQs',
                      correctAnswer: 'Legal liabilities',
                  },
                  {
                      question: 'Why is insurance planning important in financial planning?',
                      choices: ['To increase risks', 'To minimize exposure to financial losses', 'To avoid insurance altogether', 'To ignore financial security'],
                      type: 'MCQs',
                      correctAnswer: 'To minimize exposure to financial losses',
                  }
              ]
          }
      ]
  },
  {
      mod: "insu2",
      content: [
          // Medium Level Questions
          {
              topic: 'Insurance Planning',
              level: 'Medium',
              totalQuestions: 5,
              perQuestionScore: 10,
              questions: [
                  {
                      question: 'What are the different types of life insurance policies mentioned?',
                      choices: ['Term life, whole life, and variable life', 'Health, property, and liability insurance', 'Auto, renters, and homeowners insurance', 'Medical, dental, and vision insurance'],
                      type: 'MCQs',
                      correctAnswer: 'Term life, whole life, and universal life',
                  },
                  {
                      question: 'What are the options for health insurance plans mentioned?',
                      choices: ['HMOs, PPOs, and HDHPs', 'Term, whole, and variable life', 'Auto, renters, and homeowners insurance', 'Medical, dental, and vision insurance'],
                      type: 'MCQs',
                      correctAnswer: 'HMOs, PPOs, and HDHPs',
                  },
                  {
                      question: 'What types of insurance are included in property insurance?',
                      choices: ['Homeowners insurance, renters insurance, and auto insurance', 'Health insurance', 'Liability insurance', 'Life insurance'],
                      type: 'MCQs',
                      correctAnswer: 'Homeowners insurance, renters insurance, and auto insurance',
                  },
                  {
                      question: 'What are the key components to consider when selecting health insurance plans?',
                      choices: ['Deductibles, copayments, and exclusions', 'Coverage for legal liabilities', 'Types of life insurance policies', 'Risk management strategies'],
                      type: 'MCQs',
                      correctAnswer: 'Deductibles, copayments, and exclusions',
                  },
                  {
                      question: 'Why is regular review of insurance policies important?',
                      choices: ['To increase premiums', 'To minimize exposure to financial losses', 'To avoid insurance altogether', 'To ignore financial security'],
                      type: 'MCQs',
                      correctAnswer: 'To minimize exposure to financial losses',
                  }
              ]
          }
      ]
  },
  {
      mod: "insu3",
      content: [
          // Hard Level Questions
          {
              topic: 'Insurance Planning',
              level: 'Hard',
              totalQuestions: 5,
              perQuestionScore: 15,
              questions: [
                  {
                      question: 'What factors should be considered when choosing the right life insurance policy?',
                      choices: ['Coverage needs, budgetary constraints, and policy terms', 'Types of health insurance plans', 'Property insurance coverage levels', 'Liability risks'],
                      type: 'MCQs',
                      correctAnswer: 'Coverage needs, budgetary constraints, and policy terms',
                  },
                  {
                      question: 'Why is health insurance critical for managing healthcare expenses?',
                      choices: ['To increase risks', 'To minimize exposure to financial losses', 'To avoid healthcare expenses', 'To ignore financial security'],
                      type: 'MCQs',
                      correctAnswer: 'To minimize exposure to financial losses',
                  },
                  {
                      question: 'How does property insurance help individuals recover from property-related losses?',
                      choices: ['By increasing risks', 'By minimizing exposure to financial losses', 'By avoiding property-related losses', 'By ignoring financial security'],
                      type: 'MCQs',
                      correctAnswer: 'By minimizing exposure to financial losses',
                  },
                  {
                      question: 'What is the purpose of liability insurance?',
                      choices: ['To increase risks', 'To minimize exposure to financial losses', 'To avoid liabilities', 'To ignore financial security'],
                      type: 'MCQs',
                      correctAnswer: 'To minimize exposure to financial losses',
                  },
                  {
                      question: 'How does insurance planning contribute to financial planning?',
                      choices: ['By increasing risks', 'By minimizing exposure to financial losses', 'By avoiding insurance altogether', 'By ignoring financial security'],
                      type: 'MCQs',
                      correctAnswer: 'By minimizing exposure to financial losses',
                  }
              ]
          }
      ]
  }
];
const Quiz = ({params}) => {
  const currentQuiz = quizzes.find(quiz => quiz.mod === params);

  if (params !== undefined) {
    var pa=params.slice(0,4); // Example slice usage
  }
 

// Destructure the content from the current quiz
const { content } = currentQuiz;

const [activeQuestion, setActiveQuestion] = useState(0);
const [selectedAnswer, setSelectedAnswer] = useState('');
const [showResult, setShowResult] = useState(false);
const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
const [result, setResult] = useState({
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
});

// Access questions from content
const { questions } = content[0];

const { question, choices, correctAnswer } = questions[activeQuestion];

  const onClickNext = () => {
    setSelectedAnswerIndex(null)
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    )
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
    } else {
      setActiveQuestion(0)
      setShowResult(true)
    }
  }

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index)
    if (answer === correctAnswer) {
      setSelectedAnswer(true)
    } else {
      setSelectedAnswer(false)
    }
  }

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)


  return (
    <>
       <Image className='absolute z-10 h-screen w-screen' src={bg}/>
    <div className="quiz-container z-20">
      {!showResult ? (
        <div>
          <div>
            <span className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
            <span className="total-question">/{addLeadingZero(questions.length)}</span>
          </div>
          <h2>{question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={selectedAnswerIndex === index ? 'selected-answer' : null}>
                {answer}
              </li>
            ))}
          </ul>
          <div className="flex-right">
            <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
              {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      ) : (
        <>
        <div className="result">
        

          <h3>Result</h3>
          <div className='ml-36'>
          
          <CircularProgress color="primary" sx={{ '--CircularProgress-size': '80px' }} determinate value={(result.correctAnswers/5)*100}>
          {(result.correctAnswers/5)*100 }%
      </CircularProgress>
      </div>
      {/* <!-- question - start --> */}
      <div  className="border-b">
        <div  className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
          <span  className="font-semibold transition duration-100 md:text-lg"> Total Question: </span>

          <span  className="text-indigo-500 text-xl">
          {questions.length}
          </span>
        </div>

      </div>
      {/* <!-- question - end -->

  

      <!-- question - start --> */}
      <div  className="border-b">
        <div  className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
          <span  className="font-semibold transition duration-100 md:text-lg">Correct Answers:</span>

          <span  className="text-indigo-500 text-xl">
          {result.correctAnswers}
          </span>
        </div>
      </div>
      <div  className="border-b">
        <div  className="flex cursor-pointer justify-between gap-2 py-4 text-black  active:text-indigo-600">
          <span  className="font-semibold transition duration-100 md:text-lg">Wrong Answers:</span>

          <span  className="text-indigo-500 text-xl">
          {result.wrongAnswers}
          </span>
      
      </div>
        </div>
        </div>

        {
          result.wrongAnswers>5/2?
          <Image src={sad} className='ml-20'/>
          :
          result.correctAnswers==5
          ?
          <Image src={img} className='ml-20'/>
          :
          <Image src={ok} className='ml-20'/>
          
         
        }
        {
          pa==4?
          <a href={`/Path`}> <button className='ml-3'>Go to Another Module</button>
          </a>
     
       :
       <>
       <div className='flex'>
       <a href={`/Learn/${pa}6`}> <button className='ml-3'>Continue</button>
       </a>
       <a href={`/Path`}> <button className='ml-3'>Next Module</button>
       </a>
       </div>
        </>
        }
        </>
      )}
    </div>
    </>
  )
}

export default Quiz