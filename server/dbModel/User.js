// 在你的服务器文件中 - 例如 app.js
const User = sequelize.import(__dirname + "/path/to/models/project")

// 模型已经在 /path/to/models/project.js 中定义好
// 你可能会注意到，DataTypes与上述相同
module.exports = (sequelize, DataTypes) => {
    return sequelize.define("project", {
        name: DataTypes.STRING,
        description: DataTypes.TEXT
    })
}