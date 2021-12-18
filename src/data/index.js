const { readFileSync } = require("fs");

exports.data = {
	menu: JSON.parse(readFileSync("./src/data/menu.json", "utf8")),
	models: JSON.parse(readFileSync("./src/data/models.json", "utf8")),
	social: JSON.parse(readFileSync("./src/data/social.json", "utf8")),
	benefits: JSON.parse(readFileSync("./src/data/benefits.json", "utf8")),
};
