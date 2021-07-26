sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
		onInit: () => {
			$.ajax({
				url: "/about",
				success: (data,response) => {
					console.log(data);
				},
				error: (oError) => {
					console.log(oError);
				}
			});

			$.ajax({
				url: "/weatherapi?name=bellary",
				success: (data,response) => {
					console.log(data);
				},
				error: (oError) => {
					console.log(oError);
				}
			});
		}
    });
});