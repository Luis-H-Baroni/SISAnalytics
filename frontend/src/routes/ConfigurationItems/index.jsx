import React, { useState } from 'react';

import TopTitleButton from '../../components/TopTitleButton';
import Modal from '../../components/Modal';

function ConfigurationItems () {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <TopTitleButton title='Itens de Configuração' button='Adicionar +' onClickFunction={(e) => setOpen(true) }/>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className='text-center w-full'>
          Cadastro de Item de Configuração
          <div className='mx-auto my-4 w-full'>
            <form class="w-full max-w-lg">

              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Nome do item de configuração
                  </label>
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Item de configuração"/>
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                    Data de compra
                  </label>
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="dd/mm/aaaa"/>
                </div>
              </div>

              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 
                    rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                    after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-600">Status</span>
                  </label>
                </div>
              </div>

            </form>
          </div>
          <div className="flex gap-4">
            <button className='btn btn-danger w-full'>Confirmar</button>
            <button className='btn btn-light w-full' onClick={() => setOpen(false)}>Cancelar</button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ConfigurationItems;