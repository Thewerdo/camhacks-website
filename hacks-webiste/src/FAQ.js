import { useState } from "react";

const FAQ = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  }

  const data = [
    {
      question: "What is a hackathon?",
      answer: 'A hackathon is an event where "hackers" team up to create a tech-based project, usually related to software or hardware. After their time is up, they will pitch their project to a panel of judges, where the winners will get cool prizes. Hackathons are a great way to network with people and attend workshops on technology, as well as a great opportunity to learn something new and have fun!'
    },
    {
      question: " Who is able to participate? Are there any requirements?",
      answer: "No! We welcome all hackers who are in high school and university, no experience required. If you do not fall into this age range, feel free to participate as a mentor, judge, or volunteer."
    },
    {
      question: " How much will this cost me to attend?",
      answer: "It is absolutely free to attend!"
    },
    {
      question: "I want to sponsor you guys. Where do I go?",
      answer: <button>Sponsor us!</button>
    }
  ]

    return (  
      <div className="flex-container" id="faq-area">
        <div className="accordion">
        {
          data.map((item, i) => [
            <div className="item">
              <div className="title" onClick={() => toggle(i)}> 
                <strong>{item.question}</strong>
                <span>{selected === i ? '-' : '+'}</span>
              </div>
              <div className={selected === i ? 'content show' : 'content'}>{item.answer}</div>
            </div>
          ])}

        </div>
      </div>
    );
}
 
export default FAQ;