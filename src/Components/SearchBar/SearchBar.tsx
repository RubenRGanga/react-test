import React, { useCallback } from 'react';
import { debounce } from 'lodash';
import { useItemContext } from '../ItemContext/ItemContext';
import { Input } from '../UIComponents/UIComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SearchBar: React.FC = () => {
  const { setSearchTerm } = useItemContext();
  
  const debouncedSearch = useCallback(
    debounce((term: string) => setSearchTerm(term), 300),
    [setSearchTerm]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <div style={{ position: 'relative' }}>
        <Input
          type="text"
          placeholder="Buscar elementos..."
          onChange={handleSearch}
          style={{ width: '100%', paddingLeft: '30px' }}
        />
        <FontAwesomeIcon 
          icon="search" 
          style={{
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#888'
          }}
        />
      </div>
    </div>
  );
};
