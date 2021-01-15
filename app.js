const fetch = require("node-fetch")

const arg = process.argv[process.argv.length - 1]

function sendReq() {
    const opts = {
        headers: {
            cookie: 'hasCookie=true'
        }
    };
    fetch('https://codequiz.azurewebsites.net', opts).then(res => (
        res.text()
    )).then(function (string) {
        key = "</td><td>"
        startFirst = string.indexOf(arg)
        startSecond = string.indexOf(key, startFirst) + key.length
        end = string.indexOf(key, startSecond)
        console.log(string.slice(startSecond, end))
    });
}

sendReq()
