const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  db.collection('Users').deleteMany({name: 'Mike'}).then((result) => {
    console.log(result);
  });
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').findOneAndDelete({_id: ObjectID('58fa0ee2602e2a7c0c271469')}).then((result) => {
    console.log(result);
  });
  // db.close();
});
