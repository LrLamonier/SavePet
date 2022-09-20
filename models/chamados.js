module.exports = (connection, DataTypes) => {   
    const model = connection.define('Chamados', {
        id_chamado: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false

        },
        tipoPet: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        local:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false,
        tableName: 'chamados'
    })
    model.sync({ alter: true })
    return model
}
console.log("Tabela de chamados criada")