const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.findOneAndRemove()
Todo.findOneAndRemove({_id: '58648e1f16f761d450a21c5b'}).then((todo) => {
  console.log(todo);
})

// Todo.findByIdAndRemove()

Todo.findByIdAndRemove('58648e1f16f761d450a21c5b').then((todo) => {
  console.log(todo);
})
