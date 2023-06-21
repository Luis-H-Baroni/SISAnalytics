import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import TopTitleButton from '../../components/TopTitleButton';
import Modal from '../../components/Modal';
import IncidentTable from './components/IncidentTable';
import { 
  addIncident,
  deleteIncident,
  editIncident,
  getConfigurationItems,
  getIncident,
  getIncidentId
} from './service/api';

function Incident () {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(null);
  const [getConfigurationItem, setGetConfigurationItem] = useState([]);
  const [incidentList, setIncidentList] = useState([]);
  const [incidentObj, setIncidentObj] = useState([
    {
      configurationItemId: '',
      incidentAlias: '',
      workaround: '',
    }
  ]);
  
  const handleAddIncident = async () => {
    try {
      if(isEdit) {
        const data = incidentObj[0];
        const newData = {
          ...data,
          incidentId: id
        }
        await editIncident(id, newData);
        setOpen(false);
        setIsEdit(false);
        setId(null);
        clearForm();
        return toast.success('Incidente editado com sucesso!');
      } else {
        const data = incidentObj[0];
        await addIncident(data);
        setOpen(false);
        clearForm();
        return toast.success('Incidente cadastrado com sucesso!');
      }
    } catch(e) {
      let message = '';
      if(isEdit) {
        message = 'Erro ao editar incidente!';
      } else {
        message = 'Erro ao cadastrar incidente!';
      }
      return toast.error(e.response.data.error || message);
    }
  };

  const handleEdit = async (id) => {
    try{
      const data = await getIncidentId(id);
      setIncidentObj(data);
      setOpen(true);
      setId(id);
      setIsEdit(true);
    } catch(e) {
      return toast.error(e.response.data.error || 'Erro ao editar incidente!');
    }
  }

  const handleRemove = async (id) => {
    try {
      const data = await deleteIncident({
        incidentId: id
      })

      if (data) {
        toast.success('Incidente removido com sucesso!');
      }
    } catch(e) {
      return toast.error(e.response.data.error || 'Erro ao remover incidente!');
    }
  }

  const handleInputChange = (e, fieldName) => {
    const { value } = e.target;
    setIncidentObj((prevItems) => {
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
      setIncidentList(await getIncident());
    })();
  }, [incidentList]);

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
    setIncidentObj([
      {
        configurationItemId: '',
        incidentAlias: '',
        workaround: '',
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
      <Modal open={open} onClose={() => handleClose()} onConfirm={handleAddIncident}>
        <div className='text-center w-full'>
          Cadastro de Incidente
          <div className='mx-auto my-4 w-full'>
            <form className="w-full max-w-lg" id='form-incident'>
              <div className='flex flex-wrap -mx-3 mb-6'>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className='opacity-0'>hidden</label>
                  {renderSelect()}
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-incidentAlias">
                    Nome do incidente
                  </label>
                  <input 
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-incidentAlias" 
                    type="text" 
                    placeholder="Nome do incidente"
                    value={incidentObj.incidentAlias}
                    onChange={(e) => handleInputChange(e, 'incidentAlias')}
                  />
                </div>
              </div>
              
              <div className='flex flex-wrap -mx-3 mb-6'>
                <div className="w-full px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-workaround">
                    Solução de contorno
                  </label>
                  <input 
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-workaround" 
                    type="text" 
                    placeholder="Solução"
                    value={incidentObj.workaround}
                    onChange={(e) => handleInputChange(e, 'workaround')}
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
    { name: 'IC', key: 'ic' },
    { name: 'Solução de contorno', key: 'workaround' },
    { name: 'Ação', key: 'actions' },
  ];

  const handleAdd = () => {
    setIsEdit(false);
    setOpen(true);
  };

  return (
    <>
      <TopTitleButton title='Incidentes' button='Adicionar +' onClickFunction={(e) => handleAdd(e) }/>
      
      <IncidentTable headers={handleHeader} data={incidentList} remove={handleRemove} edit={handleEdit} />
      
      {open && handleRenderModal()}
    </>
  );
}

export default Incident;