// DailySmart Packages
const exp = require('express')
const port = 80
const app = exp()

// DailySmart Views
app.set('views', './src/views')
app.set('view engine', 'ejs')

// DailySmart Routes
const homePage = require('./src/routes/index')
app.get('/', homePage)



// DailySmart Listen On http://localhost
app.listen(port, () => {
    console.log(`DailySmart app listening at http://localhost:${port}`)
})