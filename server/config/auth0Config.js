import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
  
    audience: "https://realstatenow.vercel.app",
    issuerBaseURL: "https://dev-sedwqtnvpgco728b.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck
