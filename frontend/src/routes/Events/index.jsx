import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import TopTitleButton from '../../components/TopTitleButton';
import Modal from '../../components/Modal';
import EventTable from './components/EventTable';
import { 
  addEvent,
  deleteEvent,
  editEvent,
  getConfigurationItems,
  getEvent,
  getEventId
} from './service/api';


function Event () {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(null);
  const [getConfigurationItem, setGetConfigurationItem] = useState([]);
  const [eventList, setEventList] = useState([]);
  const [eventObj, setEventObj] = useState([
    {
      configurationItemId: '',
      incidentAlias: '',
      impact: '',
      urgency: '',
    }
  ]);
  
  const handleAddEvent = async () => {
    try {
      if(isEdit) {
        const data = eventObj[0];
        console.log(data)
        await editEvent(id, data);
        setOpen(false);
        setIsEdit(false);
        setId(null);
        clearForm();
        return toast.success('Evento editado com sucesso!');
      } else {
        const data = eventObj[0];
        await addEvent(data);
        setOpen(false);
        clearForm();
        return toast.success('Evento cadastrado com sucesso!');
      }
    } catch(e) {
      let message = '';
      if(isEdit) {
        message = 'Erro ao editar evento!';
      } else {
        message = 'Erro ao cadastrar evento!';
      }
      return toast.error(e.response.data.error || message);
    }
  };

  const handleEdit = async (id) => {
    try{
      const data = await getEventId(id);
      setEventObj(data);
      setOpen(true);
      setId(id);
      setIsEdit(true);
    } catch(e) {
      return toast.error(e.response.data.error || 'Erro ao editar evento!');
    }
  }

  const handleRemove = async (id) => {
    try {
      const data = await deleteEvent(id)

      if (data) {
        toast.success('Evento removido com sucesso!');
      }
    } catch(e) {
      return toast.error(e.response.data.error || 'Erro ao remover evento!');
    }
  }

  const handleInputChange = (e, fieldName) => {
    const { value } = e.target;
    setEventObj((prevItems) => {
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
      setEventList(await getEvent());
    })();
  }, [eventList]);

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
    setEventObj([
      {
        configurationItemId: '',
        incidentAlias: '',
        impact: '',
        urgency: '',
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
      <Modal open={open} onClose={() => handleClose()} onConfirm={handleAddEvent}>
        <div className='text-center w-full'>
          Cadastro de Evento
          <div className='mx-auto my-4 w-full'>
            <form className="w-full max-w-lg" id='form-event'>
              <div className='flex flex-wrap -mx-3 mb-6'>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className='opacity-0'>hidden</label>
                  {renderSelect()}
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-incidentAlias">
                    Nome do Incidente
                  </label>
                  <input 
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-incidentAlias" 
                    type="text" 
                    placeholder="Nome do Incidente"
                    value={eventObj.incidentAlias}
                    onChange={(e) => handleInputChange(e, 'incidentAlias')}
                  />
                </div>
              </div>

              <div className='flex flex-wrap -mx-3 mb-6'>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-impact">
                    Impacto
                  </label>
                  <input 
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-impact" 
                    type="number" 
                    max={5}
                    min={1}
                    placeholder="Impacto"
                    value={eventObj.impact}
                    onChange={(e) => handleInputChange(e, 'impact')}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-urgency">
                    Urgência
                  </label>
                  <input 
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-urgency" 
                    type="number" 
                    max={4}
                    min={1}
                    placeholder="Urgência"
                    value={eventObj.urgency}
                    onChange={(e) => handleInputChange(e, 'urgency')}
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
    { name: 'Impacto', key: 'impact' },
    { name: 'Urgência', key: 'urgency' },
    { name: 'Item de configuração', key: 'configurationItem' },
    { name: 'Ação', key: 'actions' },
  ];

  const handleAdd = () => {
    setIsEdit(false);
    setOpen(true);
  };

  return (
    <>
      <TopTitleButton title='Eventos' button='Adicionar +' onClickFunction={(e) => handleAdd(e) }/>
      
      <EventTable headers={handleHeader} data={eventList} remove={handleRemove} edit={handleEdit} />
      
      {open && handleRenderModal()}
    </>
  );
}

export default Event;