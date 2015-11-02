'use strict';

module.exports = {
  // See also: http://docs.sequelizejs.com/en/latest/docs/models-definition/
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('novels', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ncode: {
            type: Sequelize.INTEGER,
            unique: true
        },
        title: Sequelize.STRING,
        url: Sequelize.STRING,
        outline: Sequelize.TEXT,
        state: Sequelize.STRING,
        pageCount: Sequelize.INTEGER,
        authorId: Sequelize.INTEGER,
        authorName: Sequelize.STRING,
        keywords: Sequelize.TEXT,
        category: Sequelize.STRING,
        publishedAt: Sequelize.DATE,
        lastPublishedAt: Sequelize.DATE,
        impressionCount: Sequelize.INTEGER,
        reviewCount: Sequelize.INTEGER,
        bookmarkCount: Sequelize.INTEGER,
        totalRating: Sequelize.INTEGER,
        compositionRating: Sequelize.INTEGER,
        storyRating: Sequelize.INTEGER,
        characterCount: Sequelize.INTEGER,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('novels');
  }
};
