export interface Item {
  id: number;
  name: string;
  description: string;
}

export interface ItemContextType {
  items: Item[];
  addItem: (item: Omit<Item, 'id'>) => void;
  updateItem: (item: Item) => void;
  deleteItem: (id: number) => void;
  setSearchTerm: (term: string) => void;
  sortOrder: 'asc' | 'desc';
  setSortOrder: (order: 'asc' | 'desc') => void;
}

export interface ItemFormProps {
  item?: Item;
  onSubmit: (item: Omit<Item, 'id'>) => void;
}