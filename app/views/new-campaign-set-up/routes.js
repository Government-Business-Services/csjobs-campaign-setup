const express = require('express')
const router = express.Router()

// Job library entry

router.post("/templates-alterego", function (req, res) {
  var template = req.session.data['template']

if (template == "no") {
  res.redirect('task-list-new-campaign')

} else {
    res.redirect('task-list')
}

})

router.post("/basic-details-alterego", function (req, res) {
  var checker = req.session.data['answers-checked1']

if (checker == "true") {
  res.redirect('new-campaign-set-up/summary-section-1')

} else {
    res.redirect('new-campaign-set-up/job-information')
}

})

router.post("/locations-altergo", function (req, res) {
  var remote = req.session.data['uk']
  var number = req.session.data['number-loc']

if (remote == "Remote") {
  res.redirect('new-campaign-set-up/contract-details')

} else {
    res.redirect('new-campaign-set-up/locations-2')
    if (number == "1") {
      res.render()
    }
}

})

module.exports = router
