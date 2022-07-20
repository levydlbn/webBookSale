import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import connectDatabase from './config/MongoDb.js'
import ImportData from './DataImport.js'
import productRoute from './routes/ProductRoutes.js'
import auth from './routes/AuthRoute.js'
import userRoute from './routes/UserRoute.js'
import orderRoute from './routes/OrderRoute.js'

dotenv.config()
connectDatabase()

const app = express()
const PORT = process.env.PORT || 1000

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())


//API
app.use("/api/import", ImportData)
app.use("/api/products", productRoute)
app.use("/auth", auth)
app.use("/cart", userRoute)
app.use("/order", orderRoute)

// //ERROR HANDLER
// app.use(notFound) 
// app.use(errorHandler)
// app.use('/posts', posts)



app.get("/", (req, res) => {
    res.send('SUCCESS')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})