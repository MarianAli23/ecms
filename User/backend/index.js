const express = require("express");
const cors = require("cors");
const apiRouter = require("./routers/routers");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();

const isProduction = process.env.NODE_ENV === "production";

const origin = {
  // origin: isProduction ? process.env.CORS_ORIGIN : "http://localhost:5500",
  // credentials: true,
};


app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cookieParser());

app.use(cors());

app.use(apiRouter);


// app.use((req, res, next) => {
//   next(createError.NotFound());
// });

// app.use((err, req, res, next) => {
//   res.status(err.status || 500);
//   res.send({
//     status: err.status || 500,
//     message: err.message,
//   });
// });

const PORT = process.env.PORT || 5010;

app.listen(PORT, () =>
  console.log(`Listening on port http://localhost:${PORT}`)
);