const { eventService, configurationItemService } = require('../services')

exports.getEvents = async (req, res) => {
  try {
    const result = await eventService.getEvents(req.query)
    return res.status(200).json(result)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}

exports.createEvent = async (req, res) => {
  try {
    const existingItem = await configurationItemService.configurationItemGetId(
      req.body.configurationItemId
    )
    if (!existingItem)
      return res.status(400).json({ message: 'Item not found' })

    const result = await eventService.createEvent({
      configurationItemAlias: existingItem.configurationItemAlias,
      ...req.body,
    })
    return res.status(200).json(result)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}

exports.deleteEvent = async (req, res) => {
  try {
    const result = await eventService.deleteEvent(req.body)
    return res.status(200).json(result)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}

exports.updateEvent = async (req, res) => {
  try {
    const result = await eventService.updateEvent({ ...req.query, ...req.body })
    return res.status(200).json(result)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}

exports.createWorkaround = async (req, res) => {
  try {
    const existingEvent = await eventService.getEventById(req.body.eventId)
    if (!existingEvent)
      return res.status(400).json({ message: 'Event not found' })

    const result = await eventService.createWorkaround({
      eventId: existingEvent.eventId,
      workaround: req.body.workaround,
    })
    return res.status(200).json(result)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}
