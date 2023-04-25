require('dotenv').config()
const express = require('express')
const axios = require('axios')

const app = express()

const port = Number(process.env.PORT) || 4000

const options = {
    method: 'GET',
    url: 'https://dad-jokes.p.rapidapi.com/random/joke',
    headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': 'ac36004e64msh2f03d5e28e75ab5p1a32bfjsn9dc87404b637',
        'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
        Accept: 'application/json'
    }
};

app.get('/', async (req, res) => {
try {
    const response = await axios.request(options);
    console.log(response.data);
} catch (error){
    console.log(error);
    res.status(500).json({
        status: 'failed',
        message : 'Server error'})
}

})


app.listen(port, () => {
    console.log(`server listening on ${port}`)
})