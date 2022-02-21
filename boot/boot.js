const readline = require('readline');
const exec = require('child_process').exec
const sql = require('mssql')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function callback() {
   return console.log('system booted, please proceed to http://localhost:8000')
}

console.log('time to do a little house keeping.... ')
function houseKeeping() {
    exec('killall php')
}

function db_config(db, host, user, pass, port, connection){
    process.env.DB_CONNECTION = connection;
    process.env.DB_DATABASE = db
    process.env.DB_HOST = host
    process.env.DB_PASSWORD = '"' + pass +'"'
    process.env.DB_PORT = port
    process.env.DB_USERNAME = user
}
setTimeout(()=>houseKeeping(), 1000)

console.log("lets start by setting up the database...")

rl.question('Database Name ? : ', function (db) {
    rl.question('Database Host ? : ', function (host) {
        rl.question('Database Port ? :', function (port) {
            rl.question('Database User ? : ', function (user) {
                rl.question('Database connection type (eg: sqlsrv) ? :', function (connType) {
                    rl.question('Database password ? : ', async function (pass) {
                        console.log('Busy putting it all together.... and testing connection')
                        //test connection
                        const conn = await sql.connect(`Server=${host},${port};Database=${db};User Id=${user};Password=${pass};Encrypt=true;trustServerCertificate=true`, err => {
                            if (err) {
                                console.log(err)
                                rl.close()
                            } else {
                                db_config(db, host, user, pass, port, connType)
                                setTimeout(() => {
                                    if (conn) {
                                        console.log('connection to db has been established.... The system will now boot... Please Be Patient')
                                        conn.close()
                                    }
                                }, 5000)
                            }
                        })
                        setTimeout(()=>{
                        rl.question('hello and welcome to my assignment, would you like to begin (type: yes / no) ? ', function (yes) {
                            if(yes==='yes'){
                                rl.question('is your server, single or multi threaded (type: multi/single) ? ', function (multi){
                                    if(multi === 'single'){
                                        exec('cd ../ && php artisan serve --port=8000', (error) =>
                                        {if(error){
                                            return  console.log(error)
                                        }
                                        })
                                        exec('cd ../ && php artisan serve --port=8001', (error) =>
                                        {if(error){
                                            return  console.log(error)
                                        }
                                        })
                                        console.log('Please wait while booting ....')
                                        setTimeout(() => callback(),5000)
                                    } else if(multi === 'multi'){
                                        exec('cd ../ && php artisan serve --port=8000', (error) =>
                                        {if(error){
                                            return  console.log(error)
                                        }
                                        })
                                        exec('cd ../ && php artisan serve --port=8001', (error) =>
                                        {if(error){
                                            return  console.log(error)
                                        }
                                        })
                                        console.log('Please wait while booting ....')
                                        setTimeout(()=>callback(),5000);
                                    }else{
                                        console.log('i did not understand your inputs, could you please try again..... Goodbye');
                                        rl.close();
                                    }
                                })
                            }else{
                                console.log('see ya later alligator..... Goodbye');
                                rl.close();
                            }
                        })}, 6000);
                    })
                })
            })
        })
    })
})

