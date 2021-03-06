/*
 * File: app/view/BigDataCont.js
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

Ext.define('TouchTreeGrid.view.BigDataCont', {
    extend: 'Ext.Container',
    alias: 'widget.bigDataCont',

    requires: [
        'Ext.TitleBar'
    ],

    config: {
        itemId: 'bigDataCont',
        layout: 'hbox',
        items: [
            {
                xtype: 'touchtreegrid',
                store: 'BigDataStore',
                columns: [
                    {
                        header: 'Id',
                        dataIndex: 'employeeNo',
                        width: '70px',
                        style: 'text-align: center;',
                        sortable: true
                    },
                    {
                        header: 'Name',
                        dataIndex: 'surname',
                        width: '150px',
                        style: 'text-align: left; padding-left: 8px; border-right: none;',
                        renderer: 'this.fullName(values.forename, values.surname)',
                        sortable: true
                    }
                ],
                header: {
                    maxHeight: '59px',
                    minHeight: '59px'
                },
                variableHeights: false,
                itemHeight: 24,
                listItemId: 'bigDataListX',
                renderers: {
                    fullName: function(forename, surname)
                {return forename + ' ' + surname;}
                },
                headerTplOverride: '<div class="css-header-row ">\r\n<div class="touchtreegrid-header-cell " style="width:70px !important;text-align: center;" \r\n     dataindex="employeeNo">Id</div>\r\n<div class="touchtreegrid-header-cell " style="width:150px !important;text-align: left; padding-left: .5em;" \r\n     dataindex="surname">Name</div>\r\n</div>',
                helpHtml: './resources/html/BigDataExample.html',
                simpleList: true,
                columnSorting: true,
                additionalListConfigs: {
                    grouped: true
                },
                infinite: true,
                linkedGridsParentItemId: 'bigDataCont',
                linkedGridsArr: [
                    {
                        itemId: 'bigData'
                    }
                ],
                includeThumb: true,
                thumbConfig: {
                    height: '49px',
                    width: '26px',
                    offset: '14px',
                    top: '5px',
                    style: 'background-color: #605d52; opacity:0.85; border-radius: .5em 0 0 .5em; border: 1px solid gray;'
                },
                cls: [
                    'x-touchtreegrid-list',
                    'x-touchtreegrid-list-bigData'
                ],
                itemId: 'bigDataX',
                style: 'border-right: 2px solid gray;',
                width: '220px'
            },
            {
                xtype: 'container',
                flex: 1,
                layout: 'hbox',
                scrollable: {
                    direction: 'horizontal',
                    directionLock: true
                },
                items: [
                    {
                        xtype: 'touchtreegrid',
                        store: 'BigDataStore',
                        columns: [
                            {
                                header: 'Date of Birth',
                                dataIndex: 'dob',
                                width: '120px',
                                style: 'text-align: left;',
                                renderer: 'Ext.Date.format(values.dob, "m/d/Y")',
                                sortable: true
                            },
                            {
                                header: 'Join Date',
                                dataIndex: 'joinDate',
                                width: '120px',
                                style: 'text-align: left;',
                                renderer: 'Ext.Date.format(values.joinDate, "m/d/Y")',
                                sortable: true
                            },
                            {
                                header: 'Illness',
                                dataIndex: 'sickDays',
                                width: '100px',
                                style: 'text-align: left;',
                                sortable: false
                            },
                            {
                                header: 'Holidays',
                                dataIndex: 'holidayDays',
                                width: '100px',
                                style: 'text-align: left;',
                                sortable: false
                            },
                            {
                                header: 'Holiday Allowance',
                                dataIndex: 'holidayAllowance',
                                width: '150px',
                                style: 'text-align: left;',
                                sortable: false
                            },
                            {
                                header: 'Notice Period',
                                dataIndex: 'noticePeriod',
                                width: '120px',
                                style: 'text-align: left;',
                                sortable: true
                            },
                            {
                                header: 'Email address',
                                dataIndex: 'email',
                                width: '200px',
                                style: 'text-align: left;',
                                renderer: 'this.emailFormat(values.email)',
                                sortable: true
                            },
                            {
                                header: 'Rating',
                                dataIndex: 'rating',
                                width: '70px',
                                style: 'text-align: left;',
                                sortable: true
                            },
                            {
                                header: 'Salary',
                                dataIndex: 'salary',
                                width: '110px',
                                style: 'text-align: right; padding-right: 8px;',
                                sortable: true,
                                renderer: 'this.formatNumbers(values.salary,  0, \'$\')'
                            }
                        ],
                        header: {
                            maxHeight: '59px',
                            minHeight: '59px'
                        },
                        variableHeights: false,
                        itemHeight: 24,
                        listItemId: 'bigDataList',
                        renderers: {
                            emailFormat: function(email)
                        {
                        return email;
                        //return '<a href="mailto:' + email + '">' + email + '</a>';
                        }
                        },
                        headerTplOverride: '<div class="css-header-row ">\n<div class="touchtreegrid-header-cell " style="width:120px !important;text-align: left;" dataindex="dob">Date of Birth</div>\n<div class="touchtreegrid-header-cell " style="width:120px !important;text-align: left;" dataindex="joinDate">Join Date</div>\n\n<table cellpadding="0" cellspacing="0">\n<tr class="touchtreegrid-header-cell " style="line-height: 29px; border-bottom: 1px solid #c0c0c0; \n	border-right: 1px solid #c0c0c0; width:350px !important;text-align: center;"><td colspan="3">Absences</td></tr>\n<tr>\n<td class="touchtreegrid-header-cell " style="line-height: 30px; width:100px !important;text-align: left;">Illness</td>\n<td class="touchtreegrid-header-cell " style="line-height: 30px; width:100px !important;text-align: left;">Holidays</td>\n<td class="touchtreegrid-header-cell " style="line-height: 30px; width:150px !important;text-align: left;">Holiday Allowance</td>\n</tr>\n</table>\n\n<div class="touchtreegrid-header-cell " style="width:120px !important;text-align: left;" dataindex="noticePeriod">Notice Period</div>\n<div class="touchtreegrid-header-cell " style="width:200px !important;text-align: left;" dataindex="email">Email address</div>\n<div class="touchtreegrid-header-cell " style="width:70px !important;text-align: left;" dataindex="rating">Rating</div>\n<div class="touchtreegrid-header-cell " style="width:110px !important;text-align: right;padding-right: 8px;" dataindex="salary">Salary</div>\n</div>',
                        helpHtml: './resources/html/BigDataExample.html',
                        simpleList: true,
                        columnSorting: true,
                        additionalListConfigs: {
                            grouped: true
                        },
                        infinite: true,
                        linkedGridsParentItemId: 'bigDataCont',
                        linkedGridsArr: [
                            {
                                itemId: 'bigDataX'
                            }
                        ],
                        flex: 1,
                        cls: [
                            'x-touchtreegrid-list',
                            'x-touchtreegrid-list-bigData'
                        ],
                        itemId: 'bigData',
                        minWidth: '1200px',
                        width: '1200px'
                    }
                ]
            },
            {
                xtype: 'titlebar',
                docked: 'top',
                ui: 'light',
                title: 'Simulate EXTJS BigData Example'
            }
        ]
    },

    initialize: function() {
        this.callParent();
        var me = this;

        var device = ((Ext.os.is.Phone) ? 'phone' : 'tablet');
        var orient = ((Ext.Viewport.getWindowWidth() > Ext.Viewport.getWindowHeight()) ? 'landscape' : 'portrait');
        var thisItem = this.down('#bigDataX');
        var thisListItem = this.down('#bigDataListX');

        // Uncomment this line to see how to only add thumb for phones
        thisItem.setIncludeThumb(device==='phone');

        if (device==='phone'){
           thisItem.setWidth('160px');  // Provides for more initial realestate in right-side grid for phones
           thisListItem.setWidth('220px');  //Keep underlying list width the same to avoid text wrap
        }

        // Ensure that thumb gets created due to timing issues for some scenarios
        me.down('#bigDataX').prepLinkedGridsArr();
    }

});