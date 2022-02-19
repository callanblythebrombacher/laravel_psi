const Axios = require('axios');

/**
 *
 * @param email
 * @param password
 */

export default function Login(email, password) {

    const data = {
        password: password,
        email: email,
    };

    return Axios.post('/api/login', data)
        .then(response => {
            console.log(response.data);
        })
        .then(response => {
            // List errors on response...
          if(response.status === 200){
              Axios.post('/api/redirect-user/').then(r => r.data)
          }else{
              console.log(response.data)
          }

        });
}
