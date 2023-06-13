const priorityMatrix = [
  [1, 1, 2, 3, 3],
  [1, 1, 2, 3, 4],
  [1, 2, 3, 4, 4],
  [2, 3, 3, 4, 4],
  [3, 3, 4, 4, 4],
]

exports.getPriorityNumber = (urgency, impact) => {
  if (urgency > 5 || impact > 5) return null
  return priorityMatrix[urgency - 1][impact - 1]
}

exports.getPriority = (priorityNumber) => {
  switch (priorityNumber) {
  case 1:
    return 'Baixa'
  case 2:
    return 'Moderada'
  case 3:
    return 'Elevada'
  case 4:
    return 'Extrema'
  default:
    return null
  }
}

exports.getUrgency = (urgencyNumber) => {
  switch (urgencyNumber) {
  case 1:
    return 'Não Urgente'
  case 2:
    return 'Pouco Urgente'
  case 3:
    return 'Urgente'
  case 4:
    return 'Muito Urgente'
  case 5:
    return 'Imediato'
  default:
    return null
  }
}

exports.getImpact = (impactNumber) => {
  switch (impactNumber) {
  case 1:
    return 'Sem Impacto'
  case 2:
    return 'Leve'
  case 3:
    return 'Médio'
  case 4:
    return 'Grave'
  case 5:
    return 'Gravissimo'
  default:
    return null
  }
}
