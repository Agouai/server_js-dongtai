const fs = require('fs')//这句怎么理解

//读取数据库
const usersString = fs.readFileSync('./db/users.json').toString()
const usersArray=JSON.parse(usersString)
console.log(usersArray)
console.log(usersString)
console.log(typeof usersArray)
console.log(typeof usersString)


//写数据库
const user4 = { id: 4, name: 'xiaowang', age: 22 }
usersArray.push(user4)
const string = JSON.stringify(usersArray)
fs.writeFileSync('./db/users.json',string)
