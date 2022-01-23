const router = require('express').Router()
const utils = require('../utils')
// Get gateway
router.get('/gateway', (req, res) => {
  return utils.wrapRequest(req.rest, 'bot', 'getGateway', res)
})
// Get bot gateway
router.get('/gateway/bot', (req, res) => {
  return utils.wrapRequest(req.rest, 'bot', 'getBotGateway', res)
})
module.exports = router
