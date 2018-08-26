module.exports = function(router) {
    router.prefix('/api');
    router.use('/users', require('./routes/users'));
};