const fs = require('fs');

const file = './database/data.json';

const saveInfo = (data) => {
    fs.writeFileSync( file, JSON.stringify(data) );
}

const lookBd = () => {
    if ( !fs.existsSync(file)){
        return null;
    }
    const data = fs.readFileSync(file, { encoding: 'utf-8'});
    return JSON.parse(data);
}

module.exports = {
    saveInfo,
    lookBd
}