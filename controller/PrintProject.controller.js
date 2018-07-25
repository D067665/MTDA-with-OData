sap.ui.define([
	'sap/m/MessageBox',
	'sap/m/Dialog',
	'sap/m/MessageToast',
	'sap/m/Button',
	'sap/m/Text',
	"M4A/controller/BaseController",
	"M4A/model/formatter",
	"M4A/util/storage",
	"M4A/model/models",
	"sap/ui/core/Fragment"

], function(MessageBox, MessageToast, Dialog, Button, Text, BaseController, formatter, storage, models) {
	"use strict";
	return BaseController.extend("M4A.controller.PrintProject", {
		formatter: formatter,
		globalVariableIndex:0,
		onInit: function() {
			debugger;
			var oRouter = this.getRouter();
		
			oRouter.getRoute("printProject").attachMatched(this.onRouteMatched, this);
			
			this.getView("printProjectPage").addEventDelegate({
				"onAfterRendering": function(){
						var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
						oRoter.navTo("loadProject");
						oRouter.navTo("createProject", {
        		projectIndex: this.globalVariableIndex
                	});
				}
			},this);  

		},
		onRouteMatched: function(oEvent) {
		//getProject Index
		//test test test
			var oArgs = oEvent.getParameter("arguments");
			

			this.getView().bindElement({
				path: "/" + oArgs.index,
				model: "savedProjects"
			});
			this.globalVariableIndex = oArgs.index;
			
			
			setTimeout(function() {
			// instantiate dialog
			if (!this._dialog) {
				this._dialog = sap.ui.xmlfragment("M4A.fragment.BusyWhilePrintDialog", this);
				this.getView().addDependent(this._dialog);
			}

			 //open dialog
			jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this._dialog);
			this._dialog.open();
			
			//printPDF
			var element = this.getView().byId("printProjectPage").getDomRef().innerHTML;
			var opt = {
				margin: 0.5,
				filename: 'MobileTechnologyDecisionAdvisor.pdf',
				
				html2canvas: {
					scale: 2
				},
				jsPDF: {
					unit: 'in',
					format: 'letter',
					orientation: 'landscape'
				}
			};
				html2pdf().from(element).set(opt).save();
				this._dialog.close(oEvent);
				this._navBackToOverview(oEvent);
			}.bind(this), 100);
		},
		
		_onDialogClosed: function(){
			this._navBackToOverview();
		},

		 _navBackToOverview: function(oEvent){
		 	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        	oRouter.navTo("LoadProject", {
        		projectIndex: this.globalVariableIndex
        	});
		 }
	});
});