sap.ui.define(
	['sap/ui/core/mvc/Controller', 'sap/ui/core/routing/History', 'sap/ui/model/json/JSONModel', 'sap/m/MessageBox'],
	function(Controller, History, JSONModel, MessageBox) {
		'use strict';

		return Controller.extend('ui5.template.controller.BaseController', {
			onInit: function() {},

			closeDialog: function(oEvent) {
				let element = oEvent.getMetadata().getName();
				if (element === 'sap.m.Dialog') {
					oEvent.close();
				} else {
					oEvent
						.getSource()
						.getParent()
						.close();
				}
			},

			/**
			 * Convenience method for accessing the router.
			 * @public
			 * @return {sap.ui.core.routing.Router} the router for this component
			 */
			getRouter: function() {
				return sap.ui.core.UIComponent.getRouterFor(this);
			},

			/**
			 * Convenience method for getting the view model by name.
			 * @public
			 * @param {string} [sName] the model name
			 * @return {sap.ui.model.Model} the model instance
			 */
			getModel: function(sName) {
				return this.getView().getModel(sName);
			},

			byId: function(sId) {
				return this.getView().byId(sId);
			},

			/**
			 * Convenience method for setting the view model.
			 * @public
			 * @param {sap.ui.model.Model} oModel the model instance
			 * @param {string} sName the model name
			 * @return {sap.ui.mvc.View} the view instance
			 */
			setModel: function(oModel, sName) {
				return this.getView().setModel(oModel, sName);
			},

			/**
			 * Getter for the resource bundle.
			 * @public
			 * @return {sap.ui.model.resource.ResourceModel} the resourceModel of the component
			 */
			getResourceBundle: function() {
				return this.getOwnerComponent()
					.getModel('i18n')
					.getResourceBundle();
			},

			handleNavBack: function() {
				history.go(-1);
			}
		});
	}
);
