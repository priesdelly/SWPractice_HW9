const sql = require("../config/vacCenterDB");

const VacCenter = function (vacCenter) {
    this.id = vacCenter.id;
    this.name = vacCenter.name;
    this.tel = vacCenter.tel;
};

VacCenter.getAll = result => {
    sql.query("select * from vacCenters", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("vacCenters: ", res);
        res.forEach(element => {
            element.id = element.id.toString('utf8');
        });
        result(null, res);
    });
}

module.exports = VacCenter;