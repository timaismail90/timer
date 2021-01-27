// Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

let myArgs = process.argv.slice(2) // this gives  me array of elements/ inputs from comandline

for (let i = 0; i < myArgs.length; i++) {
    setTimeout(() => {
        process.stdout.write('peeb')

    }, (i) * 500)
}


