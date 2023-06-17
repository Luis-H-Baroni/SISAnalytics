import React from 'react';
import Button from '../Button';

function Modal({ open, onClose, onConfirm, children }) {  
  return (
    <div
      onClick={onClose}
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
          onClick={onClose}
          className='absolute top-2 right-3 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600'>
          X
        </button>
        { children }
        <div className="flex gap-4">
          <Button type='button-confirm' onClick={onConfirm}>Confirmar</Button>
          <Button type='button-cancel' onClick={onClose}> Cancelar </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;