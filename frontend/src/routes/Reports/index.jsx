import React, { useEffect, useState } from 'react';
import { getEvents, getIncidents } from './services/api';

function Reports () {
  const [incidentData, setIncidentData] = useState([]);
  // const [eventData, setEventData] = useState([]);

  useEffect(() => {
    (async () => {
      setIncidentData(await getIncidents());
      // setEventData(await getEvents());
    })();
  }, []);
  
  const backgroundColor = async (incident) => {
    const eventData = await getEvents();
    
    const event = eventData.find((event) => event.eventAlias === incident.incidentAlias);
    return new Promise((resolve) => {
      if(incident.incidentAlias === 'ITEM#DESKTOP-1#INCIDENT#RAM_OVERLOAD'){
        if((event.impact === 1 || event.impact === 2) && (event.urgency === 1 || event.urgency === 2)){
          console.log('1g')
          resolve('bg-green-500');
        }
        if((event.impact === 3 || event.impact === 4) && (event.urgency === 3 || event.urgency === 4)){
          console.log('1y')
          return 'bg-yellow-500'
        }
        if(event.impact === 5 && event.urgency === 5 ){
          console.log('1r')
          return 'bg-red-500'
        }
      }
  
      if(incident.incidentAlias === 'ITEM#DESKTOP-1#INCIDENT#ROM_OVERLOAD'){
        if((event.impact === 1 || event.impact === 2) && (event.urgency === 1 || event.urgency === 2)){
          console.log('2g')
          return 'bg-green-500'
        }
        if((event.impact === 3 || event.impact === 4) && (event.urgency === 3 || event.urgency === 4)){
          console.log('2y')
          return 'bg-yellow-500'
        }
        if(event.impact === 5 && event.urgency === 5 ){
          console.log('2r')
          return 'bg-red-500'
        }
      }
      
      if(incident.incidentAlias === 'ITEM#DESKTOP-2#INCIDENT#RAM_OVERLOAD'){
        if((event.impact === 1 || event.impact === 2) && (event.urgency === 1 || event.urgency === 2)){
          console.log('3g')
          return 'bg-green-500'
        }
        if((event.impact === 3 || event.impact === 4) && (event.urgency === 3 || event.urgency === 4)){
          console.log('3y')
          return 'bg-yellow-500'
        }
        if(event.impact === 5 && event.urgency === 5 ){
          console.log('3r')
          return 'bg-red-500'
        }
      }
      
      if(incident.incidentAlias === 'ITEM#DESKTOP-2#INCIDENT#ROM_OVERLOAD'){
        if((event.impact === 1 || event.impact === 2) && (event.urgency === 1 || event.urgency === 2)){
          return 'bg-green-500'
        }
        if((event.impact === 3 || event.impact === 4) && (event.urgency === 3 || event.urgency === 4)){
          return 'bg-yellow-500'
        }
        if(event.impact === 5 && event.urgency === 5 ){
          return 'bg-red-500'
        }
      }
    });
    
  }

  return (
    <div>
      <h1>Relatórios</h1>
      {
        incidentData && incidentData.map((incident) => {
        
          return (
            <div key={incident._id}>
              {incident.configurationItemId &&
                <div className="max-w-sm w-full lg:max-w-full lg:flex">
                <div 
                  className={`h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden
                    ${backgroundColor(incident)}
                  `
                }
                  // style={{ backgroundColor: backgroundColorTest(incident) }}
                  title={incident.configurationItemId}
                >
                </div>
                <div 
                  className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
                >
                  <div className="mb-8">
                    <div 
                      className="text-gray-900 font-bold text-xl mb-2"
                    >
                      Item de configuração: {incident.configurationItemAlias}
                    </div>
                    <div>
                      <p className="text-gray-700 text-base"> Incidente: {incident.incidentAlias}</p>
                    </div>
                  </div>
                </div>
              </div>
              }
            </div>
          )
        })
      }
    </div>
  );
}

export default Reports;