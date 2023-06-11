import React, { useState } from 'react';
import { IoTrash, IoPencilSharp } from 'react-icons/io5';
import Modal from '../Modal';

function Table ({ headers, data, id }) {
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    return (
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className='text-center w-56'>
          <IoTrash size={56} className='mx-auto text-red-500' />
          <div className='mx-auto my-4 w-48'>
            <p>Tem certeza que deseja remover este item?</p>
          </div>
          <div className="flex gap-4">
            <button className='btn btn-danger w-full' >Remover</button>
            <button className='btn btn-light w-full' onClick={() => setOpen(false)}>Cancelar</button>
          </div>
        </div>
      </Modal>
    )
  }

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-5">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  {headers.map((header) => (
                    <th scope="col" className="px-6 py-4" key={header.key} >{header.name}</th>  
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  item && item !== undefined ? (
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-purple-100">
                      <>
                        <td className="whitespace-nowrap px-6 py-4" key={`${item.configurationItemId}-key`}>{item.configurationItemId}</td>
                        <td className="whitespace-nowrap px-6 py-4" key={`${item.configurationItemAlias}-key`}>{item.configurationItemAlias}</td>
                        <td className="whitespace-nowrap px-6 py-4" key={`${item.model}-key`}>{item.model}</td>
                        <td className="whitespace-nowrap px-6 py-4" key='item.actions-key'>
                          <button className="text-gray-500 hover:text-gray-700 ml-1">
                            <IoPencilSharp size={20} />
                          </button>
                          <button className="text-red-500 hover:text-red-700" onClick={() => { setOpen(true); }}>
                            <IoTrash size={20} />
                          </button>
                        </td>
                      </>
                    </tr>
                  ) : (
                    <p> Sem dados</p>
                  )
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {open && handleDelete()}
    </div>
  );
}

export default Table;