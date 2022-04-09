/**
 * Input
 * Array of objects. Each object has 2 keys, amount and currency.
 *
 * Task
 * Read the doc of Frankfurter API (https://www.frankfurter.app/docs/)
 * Convert all the inputs into amount in USD.
 *
 * Input Example
 * [
 *  {"amount": 15000.0, "currency": "IDR"},
 *  {"amount": 3.1, "currency": "EUR}
 * ]
 *
 * Expected Output
 * [1, 2.3]
 */

const Axios = require('axios').default
const fetch = Axios.create({
  baseURL: 'https://api.frankfurter.app'
})

async function currencyConverterToUSD(currencies = []) {
  const { data } = await fetch.get(`latest?from=USD`).catch((err) => {
    console.error(err.response.status, err.response.statusText)
    process.exit(1)
  })
  const { rates } = data
  const result = currencies.reduce((res, val) => {
    const rate = rates[val.currency]
    res.push(Number((val.amount / rate).toFixed(4)))
    return res
  }, [])

  return result
}

module.exports = {
  currencyConverterToUSD
}

