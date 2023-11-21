const fetch = require("node-fetch");

module.exports = async (req, res) => {
	let { type, url } = req.query;

	url = decodeURIComponent(url);

	let data = await (await fetch(url))[type]();

	res.setHeader("Access-Control-Allow-Credentials", true);
	res.setHeader("Access-Control-Allow-Origin", "*");

	res.end(data);
};
