const fetch = require("node-fetch");

module.exports = async (req, res) => {
	let { type, url } = req.query;

	console.log(type, url, 1);
	url = decodeURIComponent(url);
	console.log(type, url, 2);

	let data = await (await fetch(url))[type]();

	res.setHeader("Access-Control-Allow-Credentials", true);
	res.setHeader("Access-Control-Allow-Origin", "*");

	if (type !== "json") type = "send";

	res[type](data);
};
