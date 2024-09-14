import React, { useState } from "react";
import { ItemFormProps } from "../../interfaces/Items";
import { Input, Button } from "../UIComponents/UIComponents";

export const ItemForm: React.FC<ItemFormProps> = ({
  item,
  onSubmit,
}) => {
  const [name, setName] = useState(item ? item.name : "");
  const [description, setDescription] = useState(item ? item.description : "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, description });
    setName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="item-form">
      <div className="inputsContainer">
        <div className="inputBox">
          <label htmlFor="name">Nombre</label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="inputBox">
          <label htmlFor="description">Descripción</label>
          <Input
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="form-actions">
        <Button type="submit" variant="primary">
          {item ? "Actualizar" : "Agregar"}
        </Button>
      </div>
    </form>
  );
};
