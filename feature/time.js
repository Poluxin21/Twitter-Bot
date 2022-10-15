const fs = require('fs')

function TimeData() {
    const time = Date.now();
    const today = new Date(time);
    const createObject = today.toISOString().split('T');
    var ObjectFormat = createObject.pop();
    fs.writeFileSync('./feature/Day.txt', JSON.stringify(createObject).toString().replace("[", "").replace("]", "").replace('"', '').replace('"', '').split('-').join('/'));
    console.log(createObject)
}

TimeData()

module.export = { TimeData }


// GET DATA UTC