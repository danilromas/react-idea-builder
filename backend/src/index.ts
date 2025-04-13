import express from 'express'

const expressApp = express()
expressApp.get("/pong", (req, res) => {
    res.send("pong")
})
expressApp.listen(3000, () => {
    console.info('server running on port http://localhost:3000')
})