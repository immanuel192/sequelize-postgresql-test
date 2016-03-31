var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var sql = "select * from events order by random() limit 10";
    sequelize.query(sql, { type: sequelize.QueryTypes.SELECT })
        .then(function(data) {
            res.json(data);
        });
});

module.exports = router;
