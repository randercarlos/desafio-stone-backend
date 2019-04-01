
module.exports = app => {

    const PORT = process.env.PORT || 3000
    app.db.sequelize.sync().done(() => {
        app.listen(PORT, () => {
            console.log(`API Funcionários = PORTA ${PORT}`);
        });
    });
}
