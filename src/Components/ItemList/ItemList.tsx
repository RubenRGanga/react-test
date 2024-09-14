import React, { useState } from 'react';
import { useItemContext } from '../ItemContext/ItemContext';
import { Button, Card } from '../UIComponents/UIComponents';
import { ItemForm } from '../ItemForm/ItemForm';
import { Item } from '../../interfaces/Items';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSTransition, TransitionGroup } from 'react-transition-group'; // Importar CSSTransition y TransitionGroup

export const ItemList: React.FC = () => {
  const { items, updateItem, deleteItem, sortOrder, setSortOrder } = useItemContext();
  const [editingItem, setEditingItem] = useState<Item | null>(null);

  const handleEdit = (item: Item) => {
    setEditingItem(item);
  };

  const handleUpdate = (updatedItem: Omit<Item, 'id'>) => {
    if (editingItem) {
      updateItem({ ...updatedItem, id: editingItem.id });
      setEditingItem(null);
    }
  };

  const handleDelete = (id: number) => {
    deleteItem(id);
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="item-list">
      <CSSTransition
        in={items.length > 0} 
        timeout={500} 
        classNames="fade"
        unmountOnExit 
      >
        <div className="item-header">
          <h2>Lista de Elementos</h2>
          <Button onClick={toggleSortOrder} variant="secondary">
            Ordenar {sortOrder === 'asc' ? '▲' : '▼'}
          </Button>
        </div>
      </CSSTransition>

      <TransitionGroup>
        {items.map(item => (
          <CSSTransition
            key={item.id}
            timeout={800} 
            classNames="fade"
          >
            <Card className="item">
              <div className="item-id">ID: {item.id}</div>

              <div className='line'>
                <span>NOMBRE:</span> <h3>{item.name}</h3>
              </div>

              <div className='line'>
                <span>DESCRIPCIÓN:</span> <p>{item.description}</p>
              </div>

              <div className="item-actions">
                <Button onClick={() => handleEdit(item)} variant="secondary">
                  <FontAwesomeIcon icon="edit" /> Editar
                </Button>

                <Button onClick={() => handleDelete(item.id)} variant="danger">
                  <FontAwesomeIcon icon="trash" /> Eliminar
                </Button>
              </div>

              {editingItem && editingItem.id === item.id && (
                <div className="edit-form">
                  <h4>Editar Elemento</h4>
                  <ItemForm
                    item={item}
                    onSubmit={handleUpdate}
                  />
                </div>
              )}
            </Card>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};
