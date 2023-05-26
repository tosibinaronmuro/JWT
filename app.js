require('dotenv').config()
//  async errors
require('express-async-errors')
const express=require('express')
const app=express()

// error middlewares
const errorHandlerMiddleware=require('./middleware/errorhandler')
const notFoundMiddleware=require('./middleware/notfound')
const { log } = require('console')

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('<p> welcome to the home page</p>')
})

app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)

const port=process.env.PORT || 5000
const start = async ()=>{
    try {
        // await connectdb(process.env.MONGO_URL)
        app.listen(port,console.log(`app is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}
start()