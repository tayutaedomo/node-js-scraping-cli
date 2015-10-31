'use strict';

module.exports = {
  // See also: http://docs.sequelizejs.com/en/latest/docs/models-definition/
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('novels', {
        ncode: Sequelize.INTEGER,
        outline: Sequelize.TEXT,
        author_id: Sequelize.INTEGER,
        author_name: Sequelize.STRING,
        keywords: Sequelize.TEXT,
        category: Sequelize.STRING,
        published_at: Sequelize.DATE,
        last_published_at: Sequelize.DATE,
        impression_count: Sequelize.INTEGER,
        review_count: Sequelize.INTEGER,
        bookmark_count: Sequelize.INTEGER,
        total_rating: Sequelize.INTEGER,
        composition_rating: Sequelize.INTEGER,
        story_rating: Sequelize.INTEGER,
        character_count: Sequelize.INTEGER,
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('novels');
  }
};
