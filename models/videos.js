'use strict';
module.exports = (sequelize, DataTypes) => {
  const Videos = sequelize.define(
    'Videos',
    {
      // id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   autoIncrement: true,
      //   defaultValue: 0,
      // },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      etag: DataTypes.STRING,
      videoId: DataTypes.STRING,
      channelId: DataTypes.STRING,
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      thumbnail: DataTypes.STRING,
    },
    {}
  );
  Videos.associate = function (models) {
    // Videos.belongsTo(models.Users, { foreignKey: 'id', targetKey: 'id' });
  };
  return Videos;
};
