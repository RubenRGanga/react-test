import React, { useState, useEffect, useCallback, createContext, useContext } from 'react';
import { Item, ItemContextType } from '../../interfaces/Items';

const ItemContext = createContext<ItemContextType | undefined>(undefined);

export const ItemProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const addItem = (newItem: Omit<Item, 'id'>) => {
    setItems([...items, { ...newItem, id: Date.now() }]);
  };

  const updateItem = (updatedItem: Item) => {
    setItems(items.map(item => item.id === updatedItem.id ? updatedItem : item));
  };

  const deleteItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const filterAndSortItems = useCallback(() => {
    let result = items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    result.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    setFilteredItems(result);
  }, [items, searchTerm, sortOrder]);

  useEffect(() => {
    filterAndSortItems();
  }, [filterAndSortItems]);

  return (
    <ItemContext.Provider value={{
      items: filteredItems,
      addItem,
      updateItem,
      deleteItem,
      setSearchTerm,
      sortOrder,
      setSortOrder
    }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItemContext = () => {
  const context = useContext(ItemContext);
  if (context === undefined) {
    throw new Error('useItemContext must be used within an ItemProvider');
  }
  return context;
};