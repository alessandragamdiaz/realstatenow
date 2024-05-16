import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
  
    audience: "https://localhost:8000",
    issuerBaseURL: "https://dev-sedwqtnvpgco728b.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck