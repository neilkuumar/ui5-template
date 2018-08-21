sap.ui.define(
	[
		'ui5/template/controller/BaseController',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel',
		'ui5/template/model/formatter',
		'sap/m/MessageBox',
		'sap/m/MessageToast'
	],
	function(BaseController, Controller, JSONModel, formatter, MessageBox, MessageToast) {
		'use strict';

		return BaseController.extend('ui5.template.controller.Monitor', {
			formatter: formatter,

			onInit: function() {
				let oRouter = this.getOwnerComponent().getRouter();
				oRouter.getRoute('Monitor').attachMatched(this._onRouteMatched, this);
			},

			/* ============================================================ */
			/* Internal Methods											    */
			/* ============================================================ */

			_onRouteMatched: function() {}
		});
	}
);
