const app = require("./app");
const connectDB = require("./config/dbConnection");
let port = process.env.PORT || 5000;

connectDB();

app.listen(port, () => {
	console.log(`server has started on ${port}`);
});
