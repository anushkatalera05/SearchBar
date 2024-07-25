import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";

const data = [
  { name: 'apple' },
  { name: 'adventure' },
  { name: 'animal' },
  { name: 'baby' },
  { name: 'boy' },
  { name: 'bat' },
  { name: 'car' },
  { name: 'cat' },
  { name: 'dog' },
  { name: 'drap' },
  { name: 'else' },
  { name: 'example' },
  { name: 'fish' },
  { name: 'follow' },
  { name: 'hash' },
  { name: 'hen' },
  { name: 'grass' },
  { name: 'green' },
];

function SearchBar() {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const onChange = (event) => {
    console.log(event)
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log('search', searchTerm);
    setIsFocused(false); // Hide dropdown after selecting an item
  };

  return (
    <div className='flex gap-5 justify-center '>
      <div>
        <div className='flex gap-5'>
          <input
            type='text'
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() =>  setIsFocused(false)} // Delay to allow click
            className='border-spacing-6 border-black px-2 py-2'
          />
          
        </div>
        {isFocused && (
          <div className='bg-white flex flex-col border border-gray-400 mt-1 rounded max-h-48 overflow-y-auto'>
            {
            data.filter(item => {
              const searchTerm = value.toLowerCase();
              const name = item.name.toLowerCase();

              return searchTerm === "" || name.startsWith(searchTerm);
            }).map((item) => (
              <div
                onMouseDown={() => onSearch(item.name)} 
                key={item.name}
                className='cursor-pointer text-start p-2 hover:bg-gray-200'
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
