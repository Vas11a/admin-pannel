import React, { useState } from 'react';

const DropdownInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const items = ['apple', 'banana', 'orange', 'grape', 'pineapple']; // Пример элементов

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const filtered = items.filter(item =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const handleItemClick = (item) => {
    setInputValue(item);
    setFilteredItems([]);
  };

  return (
    <div>
      <input className='bg-gray-200 w-full sm:w-auto rounded-md text-xl px-3 py-2'
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type here..."
      />
      {filteredItems.length > 0 && (
        <ul className=' border border-gray-400 rounded-md p-3 mt-2 max-h-24 overflow-auto '>
          {filteredItems.map((item, index) => (
            <li className='cursor-pointer text-xl' key={index} onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownInput;
