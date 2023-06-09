exports.eventAlias = (payload) => {
  const { itemAlias, incidentAlias } = payload
  return `ITEM#${itemAlias.toUpperCase()}#INCIDENT#${incidentAlias.toUpperCase()}`
}
