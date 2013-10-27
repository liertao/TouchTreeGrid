/*
 * File: app/controller/MyController.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.controller.MyController', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.Menu'
    ],

    config: {
        refs: {
            topBottomMenu: {
                autoCreate: true,
                selector: 'topBottomMenu',
                xtype: 'topBottomMenu'
            },
            changeBottomMenu: {
                autoCreate: true,
                selector: 'changeBottomMenu',
                xtype: 'changeBottomMenu'
            },
            menuItems: {
                autoCreate: true,
                selector: 'menuItems',
                xtype: 'menuItems'
            }
        },

        control: {
            "button#leftBtn": {
                tap: 'onLeftBtnTap'
            },
            "button#rightBtn": {
                tap: 'onRightBtnTap'
            },
            "list#menuoptlist": {
                disclose: 'onMenuOptListDisclose',
                select: 'onMenuOptListSelect'
            },
            "button#topBtn": {
                tap: 'onTopBtnTap'
            },
            "button#bottomBtn": {
                tap: 'onBottomBtnTap'
            },
            "button#changeBottomBtn": {
                tap: 'onChangeBottomBtnTap'
            },
            "button#menuBtn": {
                tap: 'onMenuButtonTap'
            }
        }
    },

    onLeftBtnTap: function(button, e, eOpts) {
        Ext.Viewport.toggleMenu('left');
    },

    onRightBtnTap: function(button, e, eOpts) {
        Ext.Viewport.toggleMenu('right');
    },

    onMenuOptListDisclose: function(list, record, target, index, e, eOpts) {
        // Disclose handled same as item tap
        this.onMenuOptListSelect(null, record);
    },

    onMenuOptListSelect: function(dataview, record, eOpts) {
        if (!record.get('leaf')) {return;}

        console.log('You tapped menu option: ' + record.get('Text'));

        Ext.Viewport.hideAllMenus();
    },

    onTopBtnTap: function(button, e, eOpts) {
        // Example of creating new top menu each time button pressed
        Ext.Viewport.removeMenu('bottom');

        var items = this.getTopBottomMenu();

        Ext.Viewport.setMenu(this.createMenu(items), {  // cover
            side: 'top',
            cover: true
        });

        Ext.Viewport.toggleMenu('top');
    },

    onBottomBtnTap: function(button, e, eOpts) {
        // Example of creating new bottom menu each time button pressed
        Ext.Viewport.removeMenu('bottom');

        var items = this.getTopBottomMenu();

        Ext.Viewport.setMenu(this.createMenu(items), {  // cover
            side: 'bottom',
            cover: true
        });

        Ext.Viewport.toggleMenu('bottom');
    },

    onChangeBottomBtnTap: function(button, e, eOpts) {
        // Example of creating different bottom menu 
        Ext.Viewport.removeMenu('bottom');

        var items = this.getChangeBottomMenu();

        Ext.Viewport.setMenu(this.createMenu(items), {  // cover
            side: 'bottom',
            cover: true
        });

        Ext.Viewport.toggleMenu('bottom');
    },

    onMenuButtonTap: function(button, e, eOpts) {
        Ext.Viewport.hideAllMenus();
    },

    launch: function() {
        var me = this;

        // Place fixed menu's in Launch() or similar method to only create once

        Ext.Viewport.removeMenu('left');
        Ext.Viewport.removeMenu('right');

        var itemsLeft =Ext.create('widget.menuItems', {});
        Ext.Viewport.setMenu(this.createMenu(itemsLeft), {  // slide
            side: 'left',
            cover: false
        });

        var itemsRight =Ext.create('widget.menuItems', {});
        Ext.Viewport.setMenu(this.createMenu(itemsRight), {  // reveal
            side: 'right',
            reveal: true
        });

        // Appears to be bug with Touch 2.3 codebase for edgeswipe.  
        // Be sure to remove this workaround once fixed !
        var viewport = Ext.Viewport;
        viewport.element.on({
            edgeswipe: me.onMyEdgeSwipe,
            scope: me
        });
    },

    createMenu: function(items) {
        var className = 'Ext.Menu';

        return Ext.create(className, {
            baseCls: 'x-menu-touchtreegrid',   // Override baseCls so that we can remove 0 padding, etc...
            items: items
        });
    },

    onMyEdgeSwipe: function(e, el) {
        // Appears to be bug with Touch 2.3 codebase for edgeswipe.  
        // Be sure to remove this workaround once fixed !

        var dir = e.direction;
        if (dir === 'left') {
            // swiping from right edge
            Ext.Viewport.toggleMenu('right');    
        }
        if (dir === 'right') {
            // swiping from left edge
            Ext.Viewport.toggleMenu('left');    

        }

    }

});