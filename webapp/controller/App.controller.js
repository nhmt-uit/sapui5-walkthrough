sap.ui.define([
    'sap/ui/core/mvc/Controller',
], function (Controller) {
    'use strict';

    return Controller.extend("sap.ui.demo.walkthrough.App", {
        onShowHello: function(){
            alert("You clicked Say Hi and I say hi to you!")
        }
    });
});