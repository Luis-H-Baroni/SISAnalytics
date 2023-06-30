import React from "react";

function Alert({ data }) {
  return (
    <div
      class="text-black-700 px-4 py-3 rounded relative mb-2 mr-5 ml-5 mt-2 "
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
