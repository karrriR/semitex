import "./WorkflowStep.css";

function WorkflowStep() {
  const workflowSteps  = [
    {
      number: "01",
      title: "ВЫ ОСТАВЛЯЕТЕ ЗАЯВКУ",
      description:
        "Отправить запрос вы можете любым удобным для вас способом: например, через форму на сайте. Также вы можете связаться с нами напрямую.",
    },
    {
      number: "02",
      title: "МЫ ПРОВЕРЯЕМ НАЛИЧИЕ ПОЗИЦИЙ",
      description:
        "Проверяем наличие на складе, а также актуальность производства (возможна замена, если необходимо.) Если требуется замена - подбираем аналоги и привозим на заказ.",
    },
    {
      number: "03",
      title: "ФОРМИРУЕМ КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ",
      description:
        "На данном этапе мы с вами согласуем ценовое предложение, обговариваем сроки поставки и условия оплаты.",
    },
    {
      number: "04",
      title: "ПРОВОДИМ ОПЛАТУ",
      description:
        "Далее, после получения авансового платежа, мы размещаем заказ.",
    },
    {
      number: "05",
      title: "МЫ ВЫПОЛНЯЕМ ЗАКАЗ",
      description:
        "Товар поступает на склад в Москву или Санкт-Петербург, где мы сверяем правильность поставки и начинаем сборку.",
    },
    {
      number: "06",
      title: "ВЫ ПОЛУЧАЕТЕ ТОВАР",
      description:
        "Поставляем вам товар в надлежащей упаковке в сопровождении оригиналов всех необходимых документов либо вы забираете его самовывозом.",
    },
  ];
  
  return (
    <>
      {workflowSteps.map((step) => (
        <div className="workflow-step" key={step.number}>
          <div className="workflow-step__name-box">
            <span className="workflow-step__number">{step.number}</span>
            <h3 className="workflow-step__title">{step.title}</h3>
          </div>
          <div className="workflow-step__description">
            <p className="workflow-step__text">{step.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default WorkflowStep;
