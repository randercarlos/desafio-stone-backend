
module.exports = (sequelize, DataType) => {
    const Funcionario = sequelize.define('Funcionario', {
        id_funcionario: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nm_funcionario: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        },
        vl_idade: {
            type: DataType.INTEGER,
            allowNull: false,
            defaultValue: false,
        },
        nm_cargo: {
            type: DataType.STRING,
            allowNull: false,
            defaultValue: false,
        }

    });

    return Funcionario;
};
