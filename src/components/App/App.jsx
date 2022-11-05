import React from "react";
import "./App.css";
import AppHeader from "../AppHeader/AppHeader";
import Main from "../Main/Main";
import Modal from "../Modal/Modal";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";

function App() {
  const [state, setState] = React.useState({
    visible: false,
    ingredientObject: {},
    modalData: "",
  });

  const updateData = (value, modalValue) => {
    setState({
      ...state,
      visible: true,
      ingredientObject: value,
      modalData: modalValue,
    });
  };

  const deleteData = (value) => {
    setState({
      ...state,
      visible: false,
      ingredientObject: {},
      modalData: "",
    });
  };

  return (
    <div className="App">
      <AppHeader />
      <Main updateData={updateData} />
      {state.visible && (
        <ModalOverlay visible={state.visible} deleteData={deleteData}>
          <Modal deleteData={deleteData}>
            {state.modalData === "ingredient" ? (
              <IngredientDetails
                state={state.modalData}
                ingredientObject={state.ingredientObject}
                onClick={deleteData}
              />
            ) : (
              <OrderDetails state={state.modalData} onClick={deleteData} />
            )}
          </Modal>
        </ModalOverlay>
      )}
    </div>
  );
}

export default App;
