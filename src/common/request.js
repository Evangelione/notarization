import fetch from 'dva/fetch'
import router from 'umi/router'

function parseJSON(response) {
  return response.json()
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
//export default async function request
export default function request(url, options) {
  // const response = await fetch(url, options)
  //
  // checkStatus(response)
  //
  // const data = await parseJSON(response)
  //
  // return data
  let opt = options || {}
  return fetch(url, {credentials: 'include', ...opt})
    .then(checkStatus)
    .then(parseJSON)
    .then(data => {
      if (data.code === -1) {
        router.push({
          pathname: '/login',
        })
        return {data}
      } else if (data.code === -2) {
        router.push({
          pathname: '/admin',
        })
        return {data}
      } else {
        return {data}
      }
    })
    .catch(err => ({err}))
}
