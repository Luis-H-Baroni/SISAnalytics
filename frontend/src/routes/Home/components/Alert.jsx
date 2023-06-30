import React from "react";

function Alert({ data }) {
  console.log("data", data.color);
  return (
    <div
      class="text-black-700 px-4 py-3 rounded relative mb-2"
      style={{ backgroundColor: data.color }}
      role="alert"
    >
      <span class="block sm:inline">{`${data.configurationItemAlias}: ${
        data.eventAlias.split("#")[3]
      }   ${data.workaround || ""}`}</span>
    </div>
  );
}

export default Alert;
