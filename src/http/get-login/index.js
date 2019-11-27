let arc = require('@architect/functions')

exports.handler = arc.http.async(login)

async function login(req) {
  try {  
    let account = await github(req)
    return {
      session: {account},
      location: '/?success'
    }
  }
  catch(err) {
    return {
      session: {account},
      location: '/?err=' + err.message
    }  
  }
}
