exports.eventAlias = (payload) => {
  const { configurationItemAlias, incidentAlias } = payload
  return `ITEM#${configurationItemAlias.toUpperCase()}#INCIDENT#${incidentAlias.toUpperCase()}`
}
