/*
 * File: app/view/MyFormPanelLong.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
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

Ext.define('TouchTreeGrid.view.MyFormPanelLong', {
    extend: 'Ext.form.Panel',
    alias: 'widget.myFormPanelLong',

    requires: [
        'Ext.form.FieldSet',
        'Ext.Button',
        'Ext.field.TextArea',
        'Ext.field.Select',
        'Ext.Label',
        'Ext.field.Radio',
        'Ext.Spacer',
        'Ext.device.Device'
    ],

    config: {
        readOnly: true,
        cls: 'myForm',
        itemId: 'myFormPanelLong',
        maxWidth: '30em',
        style: 'font-size: .8rem;',
        layout: 'vbox',
        scrollable: false,
        items: [
            {
                xtype: 'fieldset',
                title: '',
                items: [
                    {
                        xtype: 'container',
                        style: 'border-bottom: 1px solid #ddd;',
                        layout: {
                            type: 'hbox',
                            align: 'center'
                        },
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Task:',
                                labelWidth: '4em',
                                name: 'text'
                            },
                            {
                                xtype: 'button',
                                cls: 'myform-edit-btn',
                                docked: 'right',
                                itemId: 'myFormEditBtn',
                                style: 'padding-top: 6px; margin: 5px 10px 0 0;',
                                ui: 'plain',
                                text: 'Edit'
                            }
                        ]
                    },
                    {
                        xtype: 'textareafield',
                        label: 'Comment:',
                        labelWidth: '5.7rem',
                        name: 'comment',
                        maxRows: 2
                    },
                    {
                        xtype: 'selectfield',
                        itemId: 'myselectfield2',
                        label: 'Select',
                        labelWidth: '5.1em',
                        name: 'option',
                        options: [
                            {
                                text: 'First Option',
                                value: null
                            },
                            {
                                text: 'Second Option',
                                value: 'second'
                            },
                            {
                                text: 'Third Option',
                                value: 'third'
                            }
                        ],
                        usePicker: false
                    },
                    {
                        xtype: 'container',
                        height: '35px',
                        style: 'border-bottom: 1px solid #ddd;',
                        layout: {
                            type: 'hbox',
                            pack: 'center'
                        },
                        items: [
                            {
                                xtype: 'label',
                                flex: 1,
                                html: 'Radio',
                                style: 'padding: .6em 0 0 .6em; font-size: .8rem; font-weight: bold; color: #333;'
                            },
                            {
                                xtype: 'radiofield',
                                itemId: 'opt1',
                                style: 'border-bottom: none;',
                                width: '125px',
                                label: 'Opt1',
                                labelWidth: '65px',
                                name: 'myRadioBtn',
                                checked: true
                            },
                            {
                                xtype: 'radiofield',
                                itemId: 'opt2',
                                style: 'border-bottom: none;',
                                width: '125px',
                                label: 'Opt2',
                                labelWidth: '65px',
                                name: 'myRadioBtn'
                            },
                            {
                                xtype: 'spacer',
                                width: 20
                            }
                        ]
                    },
                    {
                        xtype: 'label',
                        html: 'TEST LABEL',
                        style: 'padding-left: .6em; color: red; font-weight: bold;'
                    },
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'container',
                                flex: 1,
                                defaults: {
                                    labelWidth: '6em',
                                    labelAlign: 'right'
                                },
                                items: [
                                    {
                                        xtype: 'checkboxfield',
                                        label: 'Check1',
                                        name: 'check1'
                                    },
                                    {
                                        xtype: 'checkboxfield',
                                        label: 'Check2',
                                        name: 'check2'
                                    },
                                    {
                                        xtype: 'checkboxfield',
                                        label: 'Check3',
                                        name: 'check3'
                                    },
                                    {
                                        xtype: 'checkboxfield',
                                        label: 'Check4',
                                        name: 'check4'
                                    },
                                    {
                                        xtype: 'checkboxfield',
                                        label: 'Check5',
                                        name: 'check5'
                                    },
                                    {
                                        xtype: 'checkboxfield',
                                        label: 'Check6',
                                        name: 'check6'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                flex: 1,
                                defaults: {
                                    labelWidth: '6em',
                                    labelAlign: 'right'
                                },
                                items: [
                                    {
                                        xtype: 'checkboxfield',
                                        label: 'Check7',
                                        name: 'check7'
                                    },
                                    {
                                        xtype: 'checkboxfield',
                                        label: 'Check8',
                                        name: 'check8'
                                    },
                                    {
                                        xtype: 'checkboxfield',
                                        label: 'Check9',
                                        name: 'check9'
                                    },
                                    {
                                        xtype: 'checkboxfield',
                                        label: 'Check10',
                                        name: 'check10'
                                    },
                                    {
                                        xtype: 'checkboxfield',
                                        label: 'Check11',
                                        name: 'check11'
                                    },
                                    {
                                        xtype: 'checkboxfield',
                                        label: 'Check12',
                                        name: 'check12'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },

    postInit: function() {
        // Custom "postInit" function called by TouchTreeGrid renderer_myForm method if it exists
        // Called just prior to rendering content row TPL

        var me = this;
        var myFormEditBtn = me.down('#myFormEditBtn');
        if (Ext.device.Device.platform === 'iOS'){
            myFormEditBtn.setHidden(true);
            // textfield and textarea field edit not fully supported for IOS devices currently
            // Suggest implementing conditional logic to apply form-edit method for IOS devices
        }
        else {
            myFormEditBtn.setText(me.config.readOnly ? 'Edit': 'Done');
            myFormEditBtn.on('tap', me.onMyFormEditBtnTap, me);
        }
    },

    onMyFormEditBtnTap: function(button, e, eOpts) {
        var myFormPanel = button.up("#myFormPanelLong");  // UPDATE FOR YOUR PANEL HERE
        var readOnly, myRec;
        if (myFormPanel) {

            myRec = myFormPanel.record;

            if (myRec){
                readOnly = !myFormPanel.config.readOnly;  // Toggle read-only mode
                myRec.readOnly = readOnly;

                myRec.set('leaf', true);  // Dummy update to force grid refresh
                // TextArea, Text, Select fields support readOnly config and therefore handdled by TouchTreeGrid renderer_MyForm method()
                // Radio and Checkboxes handled in TTG handleFormCheckboxfieldChange() and handleFormRadiofieldCheck() methods
            }
        }
    }

});