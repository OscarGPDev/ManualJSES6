const express = require('express')
const mirror = require('./endpoints/mirror')
const app = express()
const port = 3000

app.use(express.json());
app.get('*', mirror);
app.head('*', mirror);
app.post('*', mirror);
app.put('*', mirror);
app.patch('*', mirror);
app.delete('*', mirror);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})