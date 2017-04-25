const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  // db.collection('Todos').findOneAndUpdate(
  //   {_id: ObjectID('58fa15504dc0e513c62be770')},
  //   {$set: {completed: true}},
  //   {returnOriginal: false}
  // ).then((result) => {
  //   console.log(result);
  // });
  db.collection('Users').findOneAndUpdate(
    {_id: ObjectID('58f933d39786797718e5a632')},
    {$set: {name: 'Bob'}, $inc: {age: 1}},
    {returnOriginal: false}
  ).then((result) => {
    console.log(result);
  })
  // db.close();
});
