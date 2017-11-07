var orm = require("../config/orm");

var burger = {
	all: function(cb) {
		orm.all("burgers", function(res) {
			cb(res);
		});
	},
	create: function(name, cb) {
		orm.create("burgers", ["burger_name", "devoured"], [name, false])
	}
}