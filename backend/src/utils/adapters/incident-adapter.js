exports.incidentKey = (payload) => {
  const { hostname, incidentAlias } = payload
  return `ITEM#${hostname.toUpperCase()}#INCIDENT#${incidentAlias.toUpperCase()}`
}
