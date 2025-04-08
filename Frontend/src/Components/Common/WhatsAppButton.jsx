import React from 'react';
import FaWhatsapp from '../../assets/icons8-whatsapp.svg';

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6">
      <button className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transform hover:scale-110 transition-all">
        <img src={FaWhatsapp} alt="WhatsApp" className="w-8 h-8" />
      </button>
    </div>
  );
};
  

export default WhatsAppButton;