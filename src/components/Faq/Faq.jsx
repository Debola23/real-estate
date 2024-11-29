import { useState } from "react";
import Styles from "./Faq.module.css"

export const Faq = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    // Sample FAQs
    const faqs = [
      { question: "Can I schedule a tour for a property?", answer: "To get access further details of a perticular property, call or send a message to any of our agents." },
      { question: "Are there any hidden fees when renting a property?", answer: "No, apart the purchase fee and otherones that will be known to you upon your purchase. There are no hidden fees" },
      { question: "Are all properties listed verified?", answer: "Yes all the listed properties are verified."}
    ]
    // Toggle FAQ item
    const toggleFaq = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  return (
    <div className={Styles.faq}>
       <div className={Styles.faqBox}>
            <div className={Styles.faqH}>
                <div className={Styles.faq2}>
                    Frequently Asked Questions
                </div>
                <p className={Styles.pd}>
                    Frequently Asked Questions About Finding the Right 
                    Property on Our Website: Answers to Common Concerns and Inquiries.
                </p>
            </div>
            <div className="faq-container">
                <div className={Styles.faqList}>
                    {faqs.map((faq, index) => (
                    <div key={index} className={Styles.faqItem}>
                        <div
                        className={Styles.faqQuestion}
                        onClick={() => toggleFaq(index)}
                        >
                        {faq.question}
                        <span className="faq-icon">{activeIndex === index ? "-" : "+"}</span>
                        </div>
                        {activeIndex === index && <div className={Styles.faqAnswer}>{faq.answer}</div>}
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
