//Form JS File
function addWidgetsfrmAniMoveInFromBottom() {};

function frmAniMoveInFromBottomGlobals() {
    var MenuId = [];
    frmAniMoveInFromBottom = new kony.ui.Form2({
        "id": "frmAniMoveInFromBottom",
        "title": "MoveInFromBottom",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmKolalaImgBG",
        "addWidgets": addWidgetsfrmAniMoveInFromBottom
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};