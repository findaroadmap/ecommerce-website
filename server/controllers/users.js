import express from 'express'
const router = express.Router()

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send(`${req.url} - ${req.originalUrl}`)
})

export default router
