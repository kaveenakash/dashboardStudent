const mongoose = require("mongoose");

mongoose
  .connect('mongodb://localhost:27017/dashboardStudent', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB connected estabilished"))
  .catch((err) => console.log("DB connection error", err));
