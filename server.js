// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const Axios = require('axios');
app.use(cors());

// const bodyParser = {
//   json: {limit: '50mb', extended: true},
//   urlencoded: {limit: '50mb', extended: true}
// };
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// --------------------
// const routing = () => {
  app.use('/api/v1/get-detail/:id', async function(req, res, next) {

    Axios.get(`https://www.groupon.com/deals/${req.params.id}`).then(async response => {
      console.log(response.data);
      return res.send(response.data);
    }).catch(error => {
      console.log('error', error);
    })
  })
// }

// routing()

app.get('*', (req, res, next) => {
  return res.send('*** SERVER WORKING ***');
})

app.listen(3001, () => {
  console.log(` ***** server using PORT ${3001} ***** `);
});
