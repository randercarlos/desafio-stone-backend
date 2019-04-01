
module.exports = app => {

    app.db.sequelize.sync().done(() => {
        app.listen(process.env.PORT || 3000, () => {
            console.log(`API Funcionários = PORTA ${app.get('port')}`);
        });
    });
}
