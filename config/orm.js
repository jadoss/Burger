var connection = require('./connection.js');

function questionMarks(num){
	var arr = [];
	for (var i=0; i < num; i++){
		arr.push('?');
	}
	return arr.toString();
}

function sqlObj(ob){
	var arr = [];
	for (var key in ob){
		arr.push(key + '=' + ob[key]);
	}
	return arr.toString();
}

var orm = {
	selectAll: function(table, cb){
		var queryString = "SELECT * FROM " + table + ";";
		connection.query(queryString, function(err,result){
			if (err) throw err;
			cb(result);
		})
	},
	insertOne: function(table, cols, vals, cb){
		var queryString = "INSERT INTO " + table + " (" + cols.toString() + ") " + "VALUES (" + questionMarks(vals.length) + ") ";
		console.log(cols);
		connection.query(queryString, vals, function(err,result){
			if (err) throw err;
			cb(result);
		});
	},
	updateOne: function(table, sqlObject, condition, cb){
		var queryString = "UPDATE " + table + " SET " + sqlObj(sqlObject) + " WHERE " + condition + ";";
		connection.query(queryString, function(err,result){
			if (err) throw err;
			cb(result);
		});
	}
}

module.exports = orm;