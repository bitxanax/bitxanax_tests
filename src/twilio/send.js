const config = require('../config');
var auth="AC483ed27c63df30a1b60f92adfd1358ea";
var token="af21cedd25bdd1d79fa00cdf273e3677";
const client =require('twilio')(auth,token);
auth
async function sendMessage(){
    try {
        const message = await client.messages.create({
            to: config.phone,
            from:'+12513698714',
            body:'Probando Twilio para el proyecto de grado'
        })
        console.log(message.accountSid);
    } catch (error) {
        console.log(error)
    }

}


sendMessage();