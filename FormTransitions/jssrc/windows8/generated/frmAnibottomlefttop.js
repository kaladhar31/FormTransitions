//Form JS File
function addWidgetsfrmAnibottomlefttop() {};

function frmAnibottomlefttopGlobals() {
    var MenuId = [];
    frmAnibottomlefttop = new kony.ui.Form2({
        "id": "frmAnibottomlefttop",
        "title": "bottomleft-top",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmKolalaImgBG",
        "addWidgets": addWidgetsfrmAnibottomlefttop
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "maxAppMenuButtons": 4,
        "layout": constants.Vertical,
        "titleBar": true,
        "directChildrenIDs": [],
        "viewConfig": {
            "referenceHeight": 0,
            "referenceWidth": 0
        }
    });
};