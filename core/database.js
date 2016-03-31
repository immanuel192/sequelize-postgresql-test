// init sequelize connection here
global['Sequelize'] = require('sequelize');

Sequelize.cls = require('continuation-local-storage').createNamespace('sails-sequelize-postgresql');

var adapter = {
    initialize: function(next) {
        next = next || function() { };
        var forceSync = false;
        var hook = this;
        hook.initAdapters();
        hook.initModels();

        var connection, sequelize;
        connection = $config.connection;
        if (connection == null) {
            throw new Error('Connection not found in config/connections');
        }
        connection.options = connection.options || {};

        sequelize = new Sequelize(connection.database, connection.user, connection.password, connection.options);
        global['sequelize'] = sequelize;

        var schemaNames = [];
        return sequelize.showAllSchemas()
            .then(function(schema) {
                schemaNames = schema;
                return schema;
            })
            .done(function(schema) {
                sequelize.sync({ force: forceSync }).then(function() {
                    return next();
                });
            });
    },

    initAdapters: function() {
        global.adapters = global.adapters || {};
    },

    initModels: function() {
        global.models = global.models || {};
    }
};

// finally
module.exports = adapter;