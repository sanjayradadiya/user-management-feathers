'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn('contact', 'name', { type: Sequelize.STRING, allowNull: false }, { transaction: t }),
        queryInterface.addColumn('contact', 'dob', { type: Sequelize.DATE, allowNull: false }, { transaction: t }),
        queryInterface.addColumn('contact', 'email', { type: Sequelize.STRING, allowNull: false }, { transaction: t }),
        queryInterface.addColumn('contact', 'gender', { type: Sequelize.STRING, allowNull: false }, { transaction: t }),
        queryInterface.addColumn('contact', 'budget', { type: Sequelize.INTEGER, allowNull: false }, { transaction: t }),
        queryInterface.removeColumn('contact', 'text', { transaction: t }),
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('contact', 'name', { transaction: t }),
        queryInterface.removeColumn('contact', 'dob', { transaction: t }),
        queryInterface.removeColumn('contact', 'email', { transaction: t }),
        queryInterface.removeColumn('contact', 'gender', { transaction: t }),
        queryInterface.removeColumn('contact', 'budget', { transaction: t }),
        queryInterface.addColumn('contact', 'text', { type: Sequelize.INTEGER, allowNull: false }, { transaction: t }),
      ]);
    });
  }
};
