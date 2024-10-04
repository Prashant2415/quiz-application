import React from 'react';

const FAQComponent = () => {
  const faqData = {
    title: "My Name is",
    faqData: [
      {
        ques: "What is your name?",
        ans: [
          {
            a: "My name is Prashant, click",
            link: "/home"
          }
        ]
      },
      {
        ques: "What are your hobbies?",
        ans: [
          {
            a: "I love to eat",
            
          },
          {
            a: "I love to play Football, click",
            link: "/product"
          },
          {
            a: "I love to play Cricket, click",
            link: "/home"
          }
        ]
      }
    ]
  };
  console.log("JSON stringgify ", JSON.stringify(faqData))
  return (
    <div>
      <h1>{faqData.title}</h1>
      {faqData.faqData.map((faq, index) => (
        <div key={index}>
          <h3>{faq.ques}</h3>
          {faq.ans.map((answer, i) => (
            <p key={i}>
              {answer.a}{" "}
              <a href={answer.link} rel="noopener noreferrer">
                here
              </a>
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FAQComponent;
