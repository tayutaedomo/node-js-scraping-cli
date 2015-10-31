module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Novel", {
        ncode: DataTypes.STRING,
        outline: DataTypes.TEXT,
        author_id: DataTypes.INTEGER,
        author_name: DataTypes.STRING,
        keywords: DataTypes.TEXT,
        category: DataTypes.STRING,
        published_at: DataTypes.DATE,
        last_published_at: DataTypes.DATE,
        impression_count: DataTypes.INTEGER,
        review_count: DataTypes.INTEGER,
        bookmark_count: DataTypes.INTEGER,
        total_rating: DataTypes.INTEGER,
        composition_rating: DataTypes.INTEGER,
        story_rating: DataTypes.INTEGER,
        character_count: DataTypes.INTEGER,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE
    })
};

