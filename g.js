const { exec } = require('child_process')
let args = process.argv
args.slice(0, 2)
let str = args.join(' ');

console.log(str)
exec('git add .', cbadd)

function cbadd(err, stdout, stdin) {
    if (err) {
        console.log(err)
    }
    //it works
    exec(`git commit -m"${str}"`, cbcommit)
}

function cbcommit(err, stdout, stdin) {
    if (err) {
        console.log(err)
    }
    //it works
    console.log('done')
}