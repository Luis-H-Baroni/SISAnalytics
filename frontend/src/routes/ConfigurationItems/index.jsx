import React, { useState } from 'react';
import { toast } from 'react-toastify';

import TopTitleButton from '../../components/TopTitleButton';
import Modal from '../../components/Modal';
import { validateBlankValue } from '../../helpers';
import { addConfigurationItem } from './service/api';


function ConfigurationItems () {
  const [open, setOpen] = useState(false);
  const [configurationItemsAdd, setConfigurationItemsAdd] = useState([
    {
      configurationItemAlias: '',
      serial: '',
      category: '',
      type: '',
      model: '',
      local: '',
      licenseOfUse: '',
      purchase: '',
      responsible: '',
      supplier: '',
      quantityOfProblems: '',
      quantityOfIncidents: '',
      status: '',
      comments: ''
    }
  ]);
  
  const handleAddConfigurationItem = async () => {
    try {
      const data = configurationItemsAdd[0];
      const temCampoEmBranco = validateBlankValue(data);
      if (temCampoEmBranco) {
        toast.error('Preencha todos os campos!');
        return;
      } else {
        await addConfigurationItem(data);
        setOpen(false);
        return toast.success('Item de configuração cadastrado com sucesso!');
      }
    } catch(e) {
      console.log('catch', e)
      return toast.error('Erro ao cadastrar item de configuração!');
    }    
  };

  const handleInputChange = (e, fieldName) => {
    const { value, type } = e.target;
    const fieldValue = type === 'checkbox' ? e.target.checked : value;

    setConfigurationItemsAdd((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[0] = {
        ...updatedItems[0],
        [fieldName]: fieldValue
      };
      return updatedItems;
    });
  };

  return (
    <>
      <TopTitleButton title='Itens de Configuração' button='Adicionar +' onClickFunction={(e) => setOpen(true) }/>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className='text-center w-full'>
          Cadastro de Item de Configuração
          <div className='mx-auto my-4 w-full'>
            <form className="w-full max-w-lg" id='form-configuration-item'>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-name-item-configuration">
                    Nome do item de configuração
                  </label>
                  <input 
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-name-item-configuration" 
                    type="text" 
                    placeholder="Item de configuração"
                    value={configurationItemsAdd.configurationItemAlias}
                    onChange={(e) => handleInputChange(e, 'configurationItemAlias')}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-serial">
                    Serial
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-serial" 
                    type="text" 
                    placeholder="Serial"
                    value={configurationItemsAdd.serial}
                    onChange={(e) => handleInputChange(e, 'serial')}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-category">
                    Categoria
                  </label>
                  <input 
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-category" 
                    type="text" 
                    placeholder="Categoria"
                    value={configurationItemsAdd.category}
                    onChange={(e) => handleInputChange(e, 'category')}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-type">
                    Tipo
                  </label>
                  <input 
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-type" 
                    type="text" 
                    placeholder="Tipo"
                    value={configurationItemsAdd.type}
                    onChange={(e) => handleInputChange(e, 'type')}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-model">
                    Modelo
                  </label>
                  <input 
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-model" 
                    type="text" 
                    placeholder="Modelo"
                    value={configurationItemsAdd.model}
                    onChange={(e) => handleInputChange(e, 'model')}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-local">
                    Local
                  </label>
                  <input 
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-local" 
                    type="text" 
                    placeholder="Local"
                    value={configurationItemsAdd.local}
                    onChange={(e) => handleInputChange(e, 'local')}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-license">
                    Licença de uso
                  </label>
                  <input 
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-license" 
                    type="text" 
                    placeholder="Licença de uso"
                    value={configurationItemsAdd.licenseOfUse}
                    onChange={(e) => handleInputChange(e, 'licenseOfUse')}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-purchase-date">
                    Data de compra
                  </label>
                  <input 
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-purchase-date" 
                    type="text" 
                    placeholder="dd/mm/aaaa"
                    value={configurationItemsAdd.purchase}
                    onChange={(e) => handleInputChange(e, 'purchase')}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-responsible">
                    Responsável
                  </label>
                  <input 
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-responsible" 
                    type="text" 
                    placeholder="Responsável"
                    value={configurationItemsAdd.responsible}
                    onChange={(e) => handleInputChange(e, 'responsible')}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-supplier">
                    Fornecedor
                  </label>
                  <input 
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-supplier" 
                    type="text" 
                    placeholder="Fornecedor"
                    value={configurationItemsAdd.supplier}
                    onChange={(e) => handleInputChange(e, 'supplier')}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-quantity-problems">
                    Quantidade de problemas
                  </label>
                  <input 
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-quantity-problems" 
                    type="number" 
                    placeholder="Quantidade de problemas"
                    value={configurationItemsAdd.quantityOfProblems}
                    onChange={(e) => handleInputChange(e, 'quantityOfProblems')}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-quantity-incidents">
                    Quantidade de incidentes
                  </label>
                  <input 
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-quantity-incidents" 
                    type="number" 
                    placeholder="Quantidade de incidentes"
                    value={configurationItemsAdd.quantityOfIncidents}
                    onChange={(e) => handleInputChange(e, 'quantityOfIncidents')}
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" checked={configurationItemsAdd.status} onChange={(e) => {handleInputChange(e, 'status')}} />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 
                    rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                    after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-600">Status</span>
                  </label>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-comments">
                    Comentários
                  </label>
                  <input 
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-comments"
                    type="text"
                    placeholder="Comentários"
                    value={configurationItemsAdd.comments}
                    onChange={(e) => handleInputChange(e, 'comments')}
                  />
                </div>
              </div>

            </form>
          </div>
          <div className="flex gap-4">
            <button className='btn btn-danger w-full' onClick={() => handleAddConfigurationItem()}>Confirmar</button>
            <button className='btn btn-light w-full' onClick={() => setOpen(false)}>Cancelar</button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ConfigurationItems;