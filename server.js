const express = require("express");
const app = express();

app.use("/api/v1/users", require("./api/v1/users"));
app.use("/api/v1/all-exercises", require("./api/v1/all-exercises"));

const port = process.env.PORT || 3013;
app.listen(port, () =>
   console.log(`Server running at http://localhost:${port}`)
);
