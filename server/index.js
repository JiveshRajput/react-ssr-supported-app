const app = require("./app2").default;

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
	console.log(`CRA Server listening on port ${PORT}!`);
});
