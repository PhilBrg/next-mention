const express = require('express')
const next = require('next')
const axios = require('axios')
const CircularJSON = require('circular-json');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


const config = {
  mentionAPI: {
    token: 'ZDdmNDVmYzU1NWZkMDkwMDc4YjBjMzYyZDk2MDI3NGVlNmFmNTJkZDU5MzBhYWRiZGZmNzAxOGM1NDkzNDYxYQ',
    accountId: '661072_53ca2jsh01c88c4wwkc0wockckk0w4440o4o0w8wkkgco4o888',
    alertId: '1214654'
  },
}

axios.defaults.baseURL = 'https://web.mention.com/api/accounts/661072_53ca2jsh01c88c4wwkc0wockckk0w4440o4o0w8wkkgco4o888/alerts/1214654/mentions'
axios.defaults.headers.common['Authorization'] = 'Bearer ZDdmNDVmYzU1NWZkMDkwMDc4YjBjMzYyZDk2MDI3NGVlNmFmNTJkZDU5MzBhYWRiZGZmNzAxOGM1NDkzNDYxYQ'
axios.defaults.headers.common['Content-Type'] = 'application/json';

app.prepare()
  .then(() => {
    const server = express()

    server.get('/mentionApi/alert', async (req, res) => {
      const result = await axios.get()
      let json = CircularJSON.stringify(result.data)

      return res.send(json)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
