const bcrypt = require('bcrypt');

exports.hashPassword = function(strpwd) {
    const salt = bcrypt.genSaltSync(6);
    const hashedpwd = bcrypt.hashSync(strpwd, salt);
    return hashedpwd;

}

exports.comparePassword = function(strpwd, hashedpwd) {
    return bcrypt.compareSync(strpwd, hashedpwd);
}