const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! will cd working')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// const express = require("express");
// const app = express();
// const port = process.env.PORT || 3000;
// const cors = require("cors");
// const authRoutes = require("./routes/auth")
// const employee = require("./routes/employee")
// // require("./conn/conn");
// app.use(express.json());

// app.use('/uploads', express.static('uploads'))
// app.use(cors());

// app.use("/admin",authRoutes)
// app.use("/employee",employee)
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

// // connect to server
// app.listen(port, () => {
//     console.log(`server listening at http://localhost:${port}`)
// })