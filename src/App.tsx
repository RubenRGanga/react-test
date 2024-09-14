import React, { useState } from "react";
import { ItemProvider } from "./Components/ItemContext/ItemContext";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import { ItemForm } from "./Components/ItemForm/ItemForm";
import { ItemList } from "./Components/ItemList/ItemList";
import { Button, Card } from "./Components/UIComponents/UIComponents";
import { useItemContext } from "./Components/ItemContext/ItemContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition } from "react-transition-group";
import "./index.scss";
import "./fontawesome";

const AppContent: React.FC = () => {
  const { addItem } = useItemContext();
  const [isAddingItem, setIsAddingItem] = useState(false);

  return (
    <div className="container fade-in">
      <h1>Gestor de Elementos</h1>
      <SearchBar />
      <Button className="add-button" onClick={() => setIsAddingItem(true)}>
        <FontAwesomeIcon icon="plus" /> Agregar Elemento
      </Button>
      <CSSTransition
        in={isAddingItem}
        timeout={500}
        classNames="slide"
        unmountOnExit
      >
        <div className="card-container">
          <Card>
            <div className="card-header">
              <h2>Agregar Nuevo Elemento</h2>
              <Button className="close-button" onClick={() => setIsAddingItem(false)}>
                <FontAwesomeIcon icon="xmark" size="1x"/>
              </Button>
            </div>
            <ItemForm
              onSubmit={(newItem) => {
                addItem(newItem);
              }}
            />
          </Card>
        </div>
      </CSSTransition>
      <ItemList />
    </div>
  );
};

const App: React.FC = () => (
  <ItemProvider>
    <AppContent />
  </ItemProvider>
);

export default App;