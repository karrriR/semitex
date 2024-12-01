import WorkflowStep from "../WorkflowStep/WorkflowStep";
import "./Workflow.css";

function Workflow() {
  return (
    <section className="workflow">
        <div className="container">
            <h2 className="workflow__title">Схема работы</h2>
            <p className="workflow__description">Lorem ipsum dolor sit amet consectetur. Augue velit in enim sagittis imperdiet sit mauris. Vitae sit in fusce massa amet.</p>
            <div className="workflow__steps">
                <WorkflowStep />
            </div>
            <button className="workflow__button">Оставить заявку</button>
        </div>
    </section>
  );
}

export default Workflow;