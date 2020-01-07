const fs = require('fs');
const path = require('path')

const accountDataTmp= fs.readFileSync(
    path.join(__dirname, 'json', 'accounts.json'), 'utf8'
);

const accountsTmp = JSON.parse(accountDataTmp);

const userDataTmp = fs.readFileSync(
    path.join(__dirname, 'json', 'users.json'), 'utf8'
)

const usersTmp = JSON.parse(userDataTmp);

const writeJSON = () => {
    const accountsJSON = JSON.stringify(accountsTmp,  null, 4);
    fs.writeFileSync(path.join('/', 'tmp', 'accounts.json'), accountsJSON, 'utf8');
}
const writeUser= () => {
    const usersJSON = JSON.stringify(usersTmp,  null, 4);
    fs.writeFileSync(path.join('/', 'tmp', 'users.json'), usersJSON, 'utf8');
}

writeJSON();
writeUser();
const accountData = fs.readFileSync(
    path.join('/', 'tmp', 'accounts.json'), 'utf8'
);

const accounts = JSON.parse(accountData);

const userData = fs.readFileSync(
    path.join('/', 'tmp', 'users.json'), 'utf8'
)

const users = JSON.parse(userData);

console.log(accounts)

module.exports = { accounts, users, writeJSON }
