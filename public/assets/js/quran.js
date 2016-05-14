Ext.onReady(function() {
    Ext.tip.QuickTipManager.init();
    var a = Ext.get("loading-mask"),
        b = Ext.get("loading");
    b.fadeOut({
        duration: .2,
        remove: !0
    }), a.setOpacity(.9), a.shift({
        xy: b.getXY(),
        width: b.getWidth(),
        height: b.getHeight(),
        remove: !0,
        duration: 1,
        opacity: .1,
        easing: "bounceOut"
    });
    var c = [];
    Ext.Object.each(getAllLayouts(), function(a, b) {
        c.push(b)
    });
    var d = {
            id: "content-panel",
            region: "center",
            layout: "card",
            margins: "2 5 5 0",
            activeItem: 0,
            border: !1,
            items: c
        },
        e = Ext.create("Ext.data.TreeStore", {
            root: {
                expanded: !0,
                text: "Menu",
                children: [{
                    text: "Menu Utama",
                    expanded: !0,
                    children: [{
                        text: "Al-Qur'an Digital",
                        leaf: !0,
                        id: "start"
                    }, {
                        text: "Al-Qur'an Mobile Web",
                        leaf: !0,
                        id: "mobile"
                    }, {
                        text: "Al-Qur'an Berdasarkan Topik",
                        leaf: !0,
                        id: "topik"
                    }, {
                        text: "Jadwal Sholat (*)",
                        leaf: !0,
                        id: "jadwal"
                    }, {
                        text: "Tentang",
                        leaf: !0,
                        id: "tentang"
                    }]
                }, {
                    text: "Menu Lainnya",
                    expanded: !0,
                    children: [{
                        text: "Buku Tamu",
                        leaf: !0,
                        id: "bukutamu"
                    }, {
                        text: "Download",
                        leaf: !0,
                        id: "download"
                    }, {
                        text: "Referensi",
                        leaf: !0,
                        id: "reff"
                    }]
                }, {
                    text: "Statistik",
                    expanded: !0,
                    children: [{
                        text: "Pengunjung",
                        leaf: !0,
                        id: "pengunjung"
                    }]
                }]
            }
        }),
        f = Ext.create("Ext.tree.Panel", {
            id: "tree-panel",
            region: "center",
            split: !0,
            border: !1,
            minSize: 150,
            rootVisible: !1,
            autoScroll: !0,
            store: e
        }),
        g = {
            id: "details-panel",
            title: "Facebook Page",
            region: "south",
            height: 310,
            border: !1,
            autoScroll: !0,
            margins: "0 0 0 0",
            html: '<iframe src="//www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2Findoquran.web.id&amp;width=292&amp;height=258&amp;show_faces=true&amp;colorscheme=light&amp;stream=false&amp;border_color=white&amp;header=false&amp;appId=462282400477128" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:292px; height:258px;" allowTransparency="true"></iframe>',
            bbar: Ext.create("Ext.ux.StatusBar", {
                items: [clock]
            }),
            listeners: {
                render: {
                    fn: function() {
                        Ext.fly(clock.getEl().parent()).addCls("x-status-text-panel").createChild({
                            cls: "spacer"
                        }), Ext.TaskManager.start({
                            run: function() {
                                Ext.fly(clock.getEl()).update(Ext.Date.format(new Date, "H:i:s"))
                            },
                            interval: 1e3
                        })
                    },
                    delay: 100
                }
            }
        };
    f.getSelectionModel().on("select", function(a, b) {
        b.get("leaf") && Ext.getCmp("content-panel").layout.setActiveItem(b.getId() + "-panel")
    }), Ext.create("Ext.container.Viewport", {
        layout: "border",
        items: [{
            xtype: "box",
            region: "north",
            border: !1,
            height: 48,
            contentEl: "north-div"
        }, {
            layout: "border",
            title: "Menu",
            id: "layout-browser",
            region: "west",
            split: !0,
            collapsible: !0,
            margins: "2 0 5 5",
            width: 300,
            minSize: 100,
            maxSize: 500,
            items: [f, g]
        }, d, {
            region: "south",
            collapsible: !0,
            split: !0,
            height: 50,
            minHeight: 30,
            id: "kataMutiaraText",
            title: "Kata Mutiara",
            listeners: {
                render: {
                    fn: function() {
                        Ext.TaskManager.start({
                            run: function() {
                                dynamicPanel = new Ext.Component({
                                    loader: {
                                        url: base_url + "quran/getRandomKataMutiara",
                                        renderer: "html",
                                        loadMask: !0,
                                        autoLoad: !0,
                                        scripts: !0
                                    }
                                }), Ext.getCmp("kataMutiaraText").removeAll(), Ext.getCmp("kataMutiaraText").add(dynamicPanel)
                            },
                            interval: 12e4
                        })
                    },
                    delay: 100
                }
            }
        }],
        renderTo: Ext.getBody()
    }), randomAyat(), Ext.create("Ext.tip.ToolTip", {
        target: "cocokanCheck",
        anchor: "top",
        anchorOffset: 110,
        autoHide: !1,
        closable: !0,
        html: "Check pilihan ini jika pencarian ingin disesuaikan dengan seluruh kata pada kolom pencarian"
    })
});