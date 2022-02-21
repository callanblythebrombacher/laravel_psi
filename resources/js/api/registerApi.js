import {csrfToken, xsrfToken} from "../services/csrfToken";

const Axios = require('axios');

/**
 * Creates a user in the database
 *
 * @param {string} email the email of the user
 * @param {string} firstname the first name of the user
 * @param {string} lastname the last name of the user
 * @param {string} password the password decided by the user
 * @param {string} confirm_password the users confirmed password
 * @return {json} returns the servers response
 */

export default function createUser(email, firstname, lastname, password, confirm_password) {

    const data = {
        name:firstname + lastname,
        email:email,
        password:password,
        password_confirmation: confirm_password,
        _token:csrfToken
    };

    const header = {
        headers:{
            'X-XSRF-TOKEN': xsrfToken,
            'X-CSRF-TOKEN': csrfToken,
            'withCredentials': 'true',
        }
    }


    return Axios.post('/api/register-user', data, header )
        .then(response => {
            console.log(response.data);
        })
        .then(response => {
            // List errors on response...
            return  response.data
        });
}
