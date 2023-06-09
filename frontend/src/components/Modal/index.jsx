import React from 'react';

function Modal({ open, onClose, children }) {  
  return (
    <div
      onClick={ onClose }
      className={`
        fixed inset-0 flex justify-center items-center
        transition-colors
        ${open ? 'visible bg-black/20' : 'hidden'}
      `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          bg-white rounded-xl shadow p-6 transition-all
          ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}
        `}
      >
        <button 
          onClick={ onClose }
          className='absolute top-2 right-3 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600'>
          X
        </button>
        { children }
      </div>
    </div>
  );
}

export default Modal;