const express = require("express");
const app = express();

app.use("/api/v1/users", require("./api/v1/users"));

const port = process.env.PORT || 3013;
app.listen(port, () =>
   console.log(`Server running at http://localhost:${port}`)
);
