const mongoose = require("mongoose");

const dbConnect = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGODB_URL);
		console.log(`db connection => ${conn.connection.host}`.cyan.underline);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

module.exports = dbConnect;
