const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  db.collection('Users').find({
    name: 'Mike'
  }).toArray().then((docs) => {
    console.log(JSON.stringify(docs, null, 2));
  });

  // db.collection('Todos').find({
  //   // _id: new ObjectID('58f932cb8154ed76e383763e')
  // }).count().then((count) => {
  //   console.log('Todos');
  //   console.log(`Todos count:  ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });
  // db.close();
});
