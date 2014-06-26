function init() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
    alert("hello");
    document.getElementById("But").onclick = ff;
}

function ff() {
   // var sms = cordova.require("info.asankan.phonegap.smsplugin.smsplugin");
    info.asankan.phonegap.smsplugin.smsplugin.isSupported(Success, Error);
   // sms.send("+79169228588", "test", , Success, Error);
    //  window.plugins.EmailComposer.showEmailComposerWithCallback(Success,"Look at this photo","Take a look at <b>this<b/>:",["deco-bots@ya.ru"],[],[],true,[]);
}

function Success() {

    alert("all right");
}

function Error() {
    allert("error");
}