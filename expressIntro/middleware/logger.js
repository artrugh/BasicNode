module.exports = logger = (req, res, next) => {
    console.log("Boom!");
    next();
};