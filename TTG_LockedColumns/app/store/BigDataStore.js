/*
 * File: app/store/BigDataStore.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('TouchTreeGrid.store.BigDataStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TouchTreeGrid.model.BigDataModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.util.Grouper'
    ],

    config: {
        autoLoad: true,
        model: 'TouchTreeGrid.model.BigDataModel',
        storeId: 'BigDataStore',
        proxy: {
            type: 'ajax',
            url: './data/BigData.json',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        },
        grouper: {
            property: 'department',
            sortProperty: 'department'
        },
        sorters: [
            {
                property: 'surname'
            },
            {
                property: 'forename'
            }
        ]
    }
});