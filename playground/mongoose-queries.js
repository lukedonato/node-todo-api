const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// let id = '58fe611a39b28fe92eae0a1e11';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid!');
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
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo', todo);
// }).catch((e) => console.log(e));

User.findById('58fa71b2b6a34b9f189e7245').then((user) => {
  if (!user) {
    return console.log('Invalid user id');
  }

  console.log('User', user);
}, (e) => {
  console.log(e)
})
