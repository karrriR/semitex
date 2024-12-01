import FAQItem from "../FAQItem/FAQItem";
import "./FAQ.css";

function FAQ() {
    return(
        <section className="faq">
            <h2 className="faq__title">Ответы на самые популярные вопросы в сфере</h2>
            <div className="faq__items">
                <FAQItem />
                <FAQItem />
                <FAQItem />
                <FAQItem />
                <FAQItem />
            </div>
        </section>
    );
}

export default FAQ;