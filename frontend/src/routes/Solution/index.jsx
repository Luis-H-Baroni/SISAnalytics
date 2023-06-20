import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import TopTitleButton from '../../components/TopTitleButton';
import Modal from '../../components/Modal';
import SolutionTable from './components/SolutionTable';
import { 
  addSolution,
  deleteSolution,
  editSolution,
  getConfigurationItems,
  getSolution,
  getSolutionId
} from './service/api';


function Solution () {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(null);
  const [getConfigurationItem, setGetConfigurationItem] = useState([]);
  const [solutionList, setSolutionList] = useState([]);
  const [solutionObj, setSolutionObj] = useState([
    {
      configurationItemId: '',
      category: '',
      type: '',
      description: '',
      solution: '', 
    }
  ]);
  
  const handleAddSolution = async () => {
    try {
      if(isEdit) {
        const data = solutionObj;
        
        await editSolution(id, data);
        setOpen(false);
        setIsEdit(false);
        setId(null);
        clearForm();
        return toast.success('Item de configuração editado com sucesso!');
      } else {
        const data = solutionObj[0];
        await addSolution(data);
        setOpen(false);
        clearForm();
        return toast.success('Item de configuração cadastrado com sucesso!');
      }
    } catch(e) {
      let message = '';
      if(isEdit) {
        message = 'Erro ao editar item de configuração!';
      } else {
        message = 'Erro ao cadastrar item de configuração!';
      }
      return toast.error(e.response.data.error || message);
    }
  };

  const handleEdit = async (id) => {
    try{
      const data = await getSolutionId(id);
      setSolutionObj(data);
      setOpen(true);
      setId(id);
      setIsEdit(true);
    } catch(e) {
      return toast.error(e.response.data.error || 'Erro ao editar solução!');
    }
  }

  const handleRemove = async (id) => {
    try {
      const data = await deleteSolution(id)

      if (data) {
        toast.success('Solução removida com sucesso!');
      }
    } catch(e) {
      return toast.error(e.response.data.error || 'Erro ao remover solução!');
    }
  }

  const handleInputChange = (e, fieldName) => {
    const { value } = e.target;
    setSolutionObj((prevItems) => {
      const updatedItems = {...prevItems, [fieldName]: value};
      updatedItems[0] = {
        ...updatedItems[0],
        [fieldName]: value
      };
      return updatedItems;
    });
  };

  useEffect(() => {
    (async () => {
      setSolutionList(await getSolution());
    })();
  }, [solutionList]);

  useEffect(() => {
    (async () => {
      setGetConfigurationItem(await getConfigurationItems())
    })();
  }, []);

  const handleClose = () => {
    setOpen(false);
    setIsEdit(false);
    setId(null);
    clearForm();
  };

  const clearForm = () => {
    setSolutionObj([
      {
        configurationItemId: '',
        category: '',
        type: '',
        description: '',
        solution: '',
      }
    ]);
  };

  

  const renderSelect = () => {
    return (
     <>
      <select 
        id="item-de-configuracao" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
         dark:bg-purple-700 dark:border-purple-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onClick={(e) => handleInputChange(e, 'configurationItemId')} 
      >
        <option defaultValue value='' key='off'>Escolha um item de configuração</option>
        {
          getConfigurationItem.map((item) => {
            return (
              <option
                key={item.configurationItemId}
                value={item.configurationItemId}
                className='text-gray-900 dark:text-white'
              >
                {item.configurationItemAlias}
              </option>
            )
          }
        )}
      </select>
      </>
    )
  };

  const handleRenderModal = () => {
    return (
      <Modal open={open} onClose={() => handleClose()} onConfirm={handleAddSolution}>
        <div className='text-center w-full'>
          Cadastro de Solução
          <div className='mx-auto my-4 w-full'>
            <form className="w-full max-w-lg" id='form-solution'>
              <div className='flex flex-wrap -mx-3 mb-6'>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className='opacity-0'>hidden</label>
                  {renderSelect()}
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-categoria">
                    Categoria
                  </label>
                  <input 
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-categoria" 
                    type="text" 
                    placeholder="Categoria"
                    value={solutionObj.category}
                    onChange={(e) => handleInputChange(e, 'category')}
                  />
                </div>
              </div>

              <div className='flex flex-wrap -mx-3 mb-6'>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-type">
                    Tipo
                  </label>
                  <input 
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-type" 
                    type="text" 
                    placeholder="Tipo"
                    value={solutionObj.type}
                    onChange={(e) => handleInputChange(e, 'type')}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-description">
                    Descrição
                  </label>
                  <input 
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-description" 
                    type="text" 
                    placeholder="Descrição"
                    value={solutionObj.description}
                    onChange={(e) => handleInputChange(e, 'description')}
                  />
                </div>
              </div>

              <div className='flex flex-wrap -mx-3 mb-6'>
                <div className="w-full px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-solution">
                    Solução
                  </label>
                  <input 
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-solution" 
                    type="text" 
                    placeholder="Solução"
                    value={solutionObj.solution}
                    onChange={(e) => handleInputChange(e, 'solution')}
                  />
                </div>
              </div>
              

            </form>
          </div>
        </div>
      </Modal>
    )
  };

  const handleHeader = [
    { name: 'Identificação', key: 'id' },
    { name: 'Descrição', key: 'description' },
    { name: 'Ação', key: 'actions' },
  ];

  const handleAdd = () => {
    setIsEdit(false);
    setOpen(true);
  };

  return (
    <>
      <TopTitleButton title='Soluções' button='Adicionar +' onClickFunction={(e) => handleAdd(e) }/>
      
      <SolutionTable headers={handleHeader} data={solutionList} remove={handleRemove} edit={handleEdit} />
      
      {open && handleRenderModal()}
    </>
  );
}

export default Solution;