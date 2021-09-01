export default {
  api: {
    base: process.env.API_URL,
    timeout: 90000,
    timeout_short: 30000,
    client_secret: process.env.PASSPORT_CLIENT_SECRET,
    client_id: process.env.PASSPORT_CLIENT_ID,
  },
}
