import "./FAQItem.css";
import React, { useState } from "react";
import arrowClose from "../../images/icons/icon-exit-faq.png";
import arrowOpen from "../../images/icons/icon-open-faq.png";

function FAQItem() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Lorem ipsum dolor sit amet consectetur. Ultrices aliquam.",
            answer: [
                "Like the phrase “stem cell” itself, “stem cell therapy” is often used to describe a variety of different medical therapies that utilize stem cells in some form to treat a patient. Sometimes the term is used incorrectly to refer to platelet rich plasma (PRP) injections. The term is also used to refer to stem cell transplants, also known as bone marrow transplants.",
                "Most commonly “stem cell therapy” is used to describe a procedure where the patient’s adult stem cells and other potentially regenerative cells are harvested from a tissue sample of either fat or bone marrow taken from the patient. These concentrated regenerative cells are then used to treat specific injuries typically by injecting them into the afflicted area. It should be said that this type of stem cell therapy is currently not FDA approved and clinics performing it illegally in the US or in other countries perform various versions of the procedure to treat illnesses and injuries with little to no clinical evidence.",
                "At InGeneron we use the term “regenerative cell therapy” since there are many different cell types and regenerative properties collected and used by our therapy along with adult stem cells. Importantly we do not treat patients outside of our approved clinical trials and we are dedicated to securing FDA approval through rigorous clinical testing."
            ],
        }
    ];

    return(
        <>
        {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
                <div className="faq-item__question" onClick={() => toggleFAQ(index)}>
                    <span>{faq.question}</span>
                    <button className="faq-item__toggle">
                        {activeIndex === index ? <img src={arrowClose} alt="Закрыть" className="faq-item__arrow-close" /> : <img src={arrowOpen} alt="Открыть" className="faq-item__arrow-open" />}
                    </button>
                </div>
                {activeIndex === index && (
                <div className="faq-item__answer">
                    {faq.answer.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                    ))}
                </div>
                )}
            </div>
        ))}
        </>
    );
}

export default FAQItem;