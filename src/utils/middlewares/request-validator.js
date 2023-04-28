exports.validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body)

    if (error) {
      const { details } = error
      return res.status(400).json({ error: details[0].message })
    }

    return next()
  }
}
