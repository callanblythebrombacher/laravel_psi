const Axios = require('axios');
import {csrfToken, xsrfToken} from '../services/csrfToken'
/**
 *
 * @param email
 * @param password
 */

export default function Login(email, password) {
    Axios.post('/api/login', {email:email, password:password})
}


