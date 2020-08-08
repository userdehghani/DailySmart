const exp = require('express')
const router = exp.Router()

router.route('/')
    .get((req, res) => {
        let title = 'DailySmart | HomePage'
        res.render('index', { title })
    })

module.exports = router