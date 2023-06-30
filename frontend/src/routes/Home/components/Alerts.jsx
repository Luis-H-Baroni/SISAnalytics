import React from "react";
import { useState, useEffect } from "react";
import io from "socket.io-client";
import Alert from "./Alert";

function Alerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const socket = io.connect("http://localhost:4000");
    socket.on("active_incident", (data) => {
      const newAlerts = alerts;
      const existingAlert = newAlerts.find(
        (alert) => alert.eventAlias === data.eventAlias
      );

      if (!existingAlert) {
        const newAlert = {
          configurationItemAlias: data.configurationItemAlias,
          eventAlias: data.eventAlias,
          workaround: data.workarounds[0],
        };
        if (data.priority === 5) newAlert.color = "#ff9999";
        else if (data.priority === 4) newAlert.color = "#ffcc99";
        else if (data.priority === 3) newAlert.color = "#ffff99";
        else if (data.priority === 2) newAlert.color = "#ccff99";
        else if (data.priority === 1) newAlert.color = "#ccffff";
        newAlerts.push(newAlert);
      }

      setAlerts(newAlerts);
    });
    return () => socket.off("active_incident");
  }, [alerts]);
  return (
    <div className="container">
      <div>
        {alerts.map((alert) => (
          <Alert data={alert} />
        ))}
      </div>
    </div>
  );
}
export default Alerts;
