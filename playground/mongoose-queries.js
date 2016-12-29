const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '58645fb7a2caf7241e86c84c11';
//
// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('No todo found')
//   }
//   console.log('Todo By Id', todo)
// }).catch((e) => console.log(e));

var userId = '58644051fda7911cfef9bc86';

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }
  console.log(JSON.stringify(user, undefined, 2))
}).catch((e) => console.log(e));
