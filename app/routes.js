const express = require('express')
const router = express.Router()


// Job library entry

router.post("/templates-altergo", function (req, res) {
  var template = req.session.data['template']

  if (template == "basic-details-progress") {
    res.redirect('task-list-new-campaign')

  } else {
    res.redirect('task-list')
  }

})

router.post("/basic-details-altergo", function (req, res) {
  // const { data } = req.session;
  // const basic-details = data.basic-details;

router.post("/job-information", (req, res, next) => {
res.render('job-information')
})


  if (req.session.data['edit'] == "true") {
    res.redirect('new-campaign-set-up/summary-section-1')

  } else {
    res.redirect('new-campaign-set-up/job-information')
  }

})


router.post("/approval-altergo", function (req, res) {
  var approved = req.session.data['approval-status']
  if (approved == "Yes - approved")  {
    res.redirect('new-campaign-set-up/approval-upload')
  } else {
    res.redirect('new-campaign-set-up/reserve-list')
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
    }
  }

})

router.post("/jobinfo-altergo", function (req, res) {
  res.redirect('new-campaign-set-up/summary-section-1')
})

router.post("/attract-altergo", function (req, res) {
  res.redirect('new-campaign-set-up/summary-section-5')
})

// router.post('/doIt', function (req, res, next) => {
//   const { data } = req.session;
//   const basic = data.basic;
// })
//
// router.post('/check', function (req, res, next) {
//   const { data } = req.session;
//   const section1 = data.section1;
//
//   if (section1.id) {
//     amendSection1(data.sectionIndex, section1);
//   } else {
//     section1.id = data.sectionIndex.length +1;
//     data.sectionIndex.push(section1);
//   }
//   res.render('/summary-section-1', { section1: data.section1 });
// })







module.exports = router
