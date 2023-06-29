import React, { useState } from 'react';
import { IoTrash, IoPencilSharp, IoCheckmarkDone } from 'react-icons/io5';
import Modal from '../../../../components/Modal';
import useSound from 'use-sound';
import danger  from '../../../../assets/sounds/danger.wav';
import warning from '../../../../assets/sounds/warning.ogg';
import success from '../../../../assets/sounds/success.wav';
import { getEvents } from '../../service/api';

function IncidentTable ({ headers, data, remove, edit }) {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);
  const [playDanger] = useSound(danger, { volume: 0.25 });
  const [playWarning] = useSound(warning, { volume: 0.25 });
  const [playSuccess] = useSound(success, { volume: 0.25 });
  const [openModal, setOpenModal] = useState(false);
  const handleRemove = async (id) => {
    await remove(id);
    setOpen(false);
  }

  const handleDelete = () => {
    return (
      <Modal open={open} onClose={() => setOpen(!open)} onConfirm={() => handleRemove(id)}>
        <div className='text-center w-56'>
          <IoTrash size={56} className='mx-auto text-red-500' />
          <div className='mx-auto my-4 w-48'>
            <p>Tem certeza que deseja remover este item?</p>
          </div>
        </div>
      </Modal>
    )
  };

  const handleOpenModal = async (id) => {
    setOpen(true);
    setId(id)
  }

  const handleEdit = async (id) => {
    await edit(id);
  }

  const incidentSound = async (incident) => {
    const eventListData = await getEvents();
      eventListData.forEach((event) => {
        if(incident.incidentAlias === event.eventAlias){
          if((event.impact === 1 || event.impact === 2) && (event.urgency === 1 || event.urgency === 2)){
            //('1g')
            playSuccess();
            return;
          }
          if((event.impact === 3 || event.impact === 4) && (event.urgency === 3 || event.urgency === 4)){
            //('1y')
            playWarning();
            return;
          }
          if(event.impact === 5 && event.urgency === 5 ){
            //('1r')
            playDanger();
            return;
          }
        }
    
        if(incident.incidentAlias === 'ITEM#DESKTOP-1#INCIDENT#ROM_OVERLOAD' && event.eventAlias === 'ITEM#DESKTOP-1#EVENT#ROM_OVERLOAD'){
          if((event.impact === 1 || event.impact === 2) && (event.urgency === 1 || event.urgency === 2)){
            //('2g')
            playSuccess();
            return;
          }
          if((event.impact === 3 || event.impact === 4) && (event.urgency === 3 || event.urgency === 4)){
            //('2y')
            playWarning();
            return;
          }
          if(event.impact === 5 && event.urgency === 5 ){
            //('2r')
            playDanger();
            return;
          }
        }
        
        if(incident.incidentAlias === 'ITEM#DESKTOP-2#INCIDENT#RAM_OVERLOAD' && event.eventAlias === 'ITEM#DESKTOP-2#EVENT#RAM_OVERLOAD'){
          if((event.impact === 1 || event.impact === 2) && (event.urgency === 1 || event.urgency === 2)){
            //('3g')
            playSuccess();
            return;
          }
          if((event.impact === 3 || event.impact === 4) && (event.urgency === 3 || event.urgency === 4)){
            //('3y')
            playWarning();
            return;
          }
          if(event.impact === 5 && event.urgency === 5 ){
            //('3r')
            playDanger();
            return;
          }
        }
        
        if(incident.incidentAlias === 'ITEM#DESKTOP-2#INCIDENT#ROM_OVERLOAD' && event.eventAlias === 'ITEM#DESKTOP-2#EVENT#ROM_OVERLOAD'){
          if((event.impact === 1 || event.impact === 2) && (event.urgency === 1 || event.urgency === 2)){
            //('4g')
            playSuccess();
            return;
          }
          if((event.impact === 3 || event.impact === 4) && (event.urgency === 3 || event.urgency === 4)){
            //('4y')
            playWarning();
            return;
          }
          if(event.impact === 5 && event.urgency === 5 ){
            //('4r')
            playDanger();
            return;
          }
        }
    });
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
                {data.map((item, index) => (
                  item && (
                    <tr
                      key={`${index}-tr-${item.incidentId}`} 
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-purple-100"
                    >
                      <>
                        <td className="whitespace-nowrap px-6 py-4" key={`${item.incidentId}-key`} onClick={() => incidentSound(item)}>{item.incidentId}</td>
                        <td className="whitespace-nowrap px-6 py-4" key={`${item.incidentAlias}-key`}>{item.incidentAlias}</td>
                        <td className="whitespace-nowrap px-6 py-4" key={`${item.configurationItemAlias}-key`}>{item.configurationItemAlias}</td>
                        <td className="whitespace-nowrap px-6 py-4" key={`${item.workaround}-key`}>{item.workaround}</td>
                        <td className="whitespace-nowrap px-6 py-4" key='item.actions-key'>
                          <button className="text-gray-500 hover:text-gray-700 ml-1" onClick={() => handleEdit(item.incidentId) }>
                            <IoPencilSharp size={20} />
                          </button>
                          <button className="text-red-500 hover:text-red-700" onClick={() => { handleOpenModal(item.incidentId) }}>
                            <IoTrash size={20} />
                          </button>
                        </td>
                      </>
                    </tr>
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

export default IncidentTable;