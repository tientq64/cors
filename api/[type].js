const fetch = require("node-fetch");

module.exports = async (req, res) => {
	const { type, url } = req.query;

	url = decodeURIComponent(url);

	const data = await (await fetch(url))[type]();

	res.setHeader("Access-Control-Allow-Credentials", true);
	res.setHeader("Access-Control-Allow-Origin", "*");

	if (type !== "json") type = "send";

	res[type](data);
}
