import React, { useState } from 'react';
import { ChevronDown  } from 'lucide-react';

const CountrySelector = () => {
  const [selected, setSelected] = useState('in');
  const [open, setOpen] = useState(false);

  const countries = {
    in: {
      name: 'India',
      flag: 'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fflags%2Findia.webp&w=1920&q=75',
    },
    us: {
      name: 'America',
      flag: 'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fflags%2Funited-states.webp&w=1920&q=75',
    },
    ca: {
      name: 'Canada',
      flag: 'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fflags%2Fcanada.webp&w=1920&q=75',
    },
    ae: {
      name: 'UAE',
      flag: 'https://flagcdn.com/ae.svg',
    },
    uk:{
        name: 'UK',
      flag: 'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fflags%2Funited-kingdom.webp&w=1920&q=75',
    },
    row: {
      name: 'Rest of World',
      flag: 'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fflags%2Frest-of-the-world.webp&w=1920&q=75',
    },
  };

  return (
    <div className="relative inline-block text-left">
      <button
        className="flex items-center gap-2 hover:text-purple-800 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <img src={countries[selected].flag} alt={countries[selected].name} className="w-5 h-5 rounded-full" />
        <span>{countries[selected].name}</span> 
        <ChevronDown />
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-48 bg-white border rounded shadow-lg">
            
          {Object.entries(countries).map(([c, { name, flag }]) => (
            
            <div key={c} onClick={() => {
                setSelected(c);
                setOpen(false);
              }}
              
              className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-purple-100" > 
              <img src={flag} alt={name} className="w-5 h-5 rounded-full" />
              <span>{name} </span>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountrySelector;
