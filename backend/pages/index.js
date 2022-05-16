const express = require("express")
const app = express()
const porta = 8080
const mongoose = require("mongoose")
const cors = require("cors")
const bodyparser = require("body-parser")

const db = require("../models/table")

mongoose.connect("mongodb+srv://root:ZLxLsSrLIYo2eLjy@cluster0.427vp.mongodb.net/images", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conectado com sucesso ao Atlas")
}).catch((error) => {
    console.log(`Não foi possível se conectar ao banco de dados: ${error}`)
})

app.use(bodyparser.text())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({ extended: true }))

app.use(cors({
    origin: "http://localhost:3001",
    credentials: true
}))

function VerifyIfSlugExists(request, response, next) {
    const { slug } = request.params
    request.slug = slug

    return next()
}

app.get("/images", async (req, res) => {
    try {
        const response = await db.find()
        return res.json(response)
    } catch (error) {
        response.send("Erro ao buscar o objeto")
        throw Error("Erro ao buscar o objeto")
    }
})

app.get("/users/:slug", VerifyIfSlugExists, async (request, response) => {
    const { slug } = request

    try {
        const finddb = await db.findOne({ _id: slug })
        return response.json(finddb)
    } catch (error) {
        response.send("Erro ao buscar o slug")
        throw Error("Erro ao buscar o slug")
    }
})


app.post("/create", async (request, response) => {
    const { image, url, cidade, pais, slug } = request.body

    try {
        const context = await db.findOneAndUpdate({
            _id: slug
        }, {
            $addToSet: {
                images: {
                    slug: slug,
                    image: image,
                    url: url,
                    cidade: cidade,
                    pais: pais
                }
            }
        })

        return response.send(context)

    } catch {
        return response.send("Erro ao inserir as images")
    }

})

app.listen(porta, () => {
    console.log(`Executando o servidor : ${porta}`)
})