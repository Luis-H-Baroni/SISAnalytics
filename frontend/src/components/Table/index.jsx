import React from 'react';
import { IoTrash, IoPencilSharp } from 'react-icons/io5';

function Table ({ headers, data }) {
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
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-purple-600">
                      <>
                        <td className="whitespace-nowrap px-6 py-4" key={`${item.configurationItemId}-key`}>{item.configurationItemId}</td>
                        <td className="whitespace-nowrap px-6 py-4" key={`${item.configurationItemAlias}-key`}>{item.configurationItemAlias}</td>
                        <td className="whitespace-nowrap px-6 py-4" key={`${item.model}-key`}>{item.model}</td>
                        <td className="whitespace-nowrap px-6 py-4" key='item.actions-key'>
                          <button className="text-gray-500 hover:text-gray-700 ml-1">
                            <IoPencilSharp size={20} />
                          </button>
                          <button className="text-red-500 hover:text-red-700">
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
    </div>
  );
}

export default Table;