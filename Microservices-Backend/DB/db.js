const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://nikhil:nikhil@cluster0.x7p2hfa.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connection successful!');
  })
  .catch((error) => {
    console.error('Connection failed:', error);
  });
