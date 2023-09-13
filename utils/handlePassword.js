const bcrypt = require('bcryptjs');

const encrypt = async(passwordPlain) => {
    const hash = bcrypt.hash(passwordPlain,10);
    return hash;
};

const compare = async (passwordPlain, hash) => {
    return await bcrypt.compare(passwordPlain, hash)
};

module.exports = {
    encrypt,
    compare
}