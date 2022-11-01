import React from "react";
import OrderModalStyles from "./OrderDetails.module.css";

function OrderDetails(props) {
  return (
    <div className={OrderModalStyles.Container}>
      <h2
        className={`pb-8 text text_type_digits-large ${OrderModalStyles.Number}`}
      >
        034546
      </h2>
      <p
        className={`pb-15 text text_type_main-medium ${OrderModalStyles.OrderId}`}
      >
        идентификатор заказа
      </p>
      <div className={`mb-15 ${OrderModalStyles.Image}`}></div>
      <p
        className={`pb-2 text text_type_main-default ${OrderModalStyles.Text}`}
      >
        Ваш заказ начали готовить
      </p>
      <p
        className={`text text_type_main-default text_color_inactive ${OrderModalStyles.Text}`}
      >
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

export default OrderDetails;
