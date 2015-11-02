module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Novel", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ncode: {
            type: DataTypes.STRING,
            unique: true
        },
        title: DataTypes.STRING,
        url: DataTypes.STRING,
        outline: DataTypes.TEXT,
        state: DataTypes.STRING,
        pageCount: DataTypes.INTEGER,
        authorId: DataTypes.INTEGER,
        authorName: DataTypes.STRING,
        keywords: DataTypes.TEXT,
        category: DataTypes.STRING,
        publishedAt: DataTypes.DATE,
        lastPublishedAt: DataTypes.DATE,
        impressionCount: DataTypes.INTEGER,
        reviewCount: DataTypes.INTEGER,
        bookmarkCount: DataTypes.INTEGER,
        totalRating: DataTypes.INTEGER,
        compositionRating: DataTypes.INTEGER,
        storyRating: DataTypes.INTEGER,
        characterCount: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    })
};

