const express = require("express")
const app = express()

const usersRouter = require("./routes/user")

const PORT = process.env.PORT || 9000

//dotenv
require("dotenv").config()

//midleware
app.use(express.json())
app.use("/api", usersRouter)

//routes
app.get("/", (req, res) => {
  res.send("Hola")
})

//conection mongoose
const mongoose = require("mongoose")
mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Base de datos conectada"))
  .catch((error) => console.log(error))



app.listen(PORT, () => {
  console.log(`Puerto listo, http://localhost:${PORT}`)
})