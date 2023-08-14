const TelegramBot = require("node-telegram-bot-api")
const express = require("express")
const cors = require("cors")
const app = express()
require("dotenv").config()

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

const bot = new TelegramBot(process.env.BOTTOKEN)
app.put("/", (req, res) => {
    const { name, age, text } = req.body
    console.log(name)
    console.log(age)
    console.log(text)

    const chatid = process.env.CHATID
    const telegramMessage = `Malumot qo'shildi:\nIsmi: ${name} \nYoshi: ${age} \nMa'lumot: ${text}`;

    bot.sendMessage(chatid, telegramMessage)
        .then(res => console.log(res))
        .catch(error => console.log(error))
})
app.post("/telegram", (req, res) => {
    const { name, email, text, tel } = req.body
    console.log(name)
    console.log(email)
    console.log(text)
    console.log(tel)

    const chatid = process.env.CHATID
    const telegramMessage = `Yangi ma'lumot:\nIsmi: ${name} \nYoshi: ${email} \nMa'lumot: ${text} \nraqami ${tel}`;

    bot.sendMessage(chatid, telegramMessage)
        .then(res => console.log("jo'natildi"))
        .catch(error => console.log(error))
})


app.delete("/deletel", (req, res) => {
    const { name, age, text } = req.body
    console.log(name)
    console.log(age)
    console.log(text)

    const chatid = process.env.CHATID
    const telegramMessage = `Malumot o'chirildi:\nIsmi: ${name} \nYoshi: ${age} \nMa'lumot: ${text}`;

    bot.sendMessage(chatid, telegramMessage)
        .then(res => console.log(res))
        .catch(error => console.log(error))
})





let PORT = 5000
app.listen(PORT, () => {
    console.log(`server post ${PORT}da eshitilmoqda`)
})