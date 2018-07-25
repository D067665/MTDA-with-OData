sap.ui.define([
	"M4A/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("M4A.controller.Landing", {
		onAfterRendering: function() {
			
			var oDeviceModel = this.getOwnerComponent().getModel("device");
			var bDevice = oDeviceModel.getProperty("/system/phone");
			var oImage = this.getView().byId("landingImage");
			var oFragment = sap.ui.xmlfragment("M4A.fragment.LandingFooterDevice", this);

			if (bDevice === true) {
				oImage.addStyleClass("img");
				
				this.byId("landingPage").setFooter(oFragment);

			}
		},
		//test

		_onNavToCreateProject: function(oEvent) {
			var that = this;
			var sUrl = jQuery.sap.getModulePath("M4A.model", "/newProject.json");
			$.ajax({
				type: "GET",
				url: sUrl,
				contentType: "application/json",
				dataType: "json",
				data: {},
				success: function(data) {
					var newProject = data;
					var sNewProject = JSON.stringify(newProject);
					var savedProjectsModel = that.getView().getModel("savedProjects");
					var savedProjects = savedProjectsModel.getData();
					var newProjectIndex = savedProjects.push(newProject) - 1; //push returns new length
					var sNewProjectIndex = JSON.stringify(newProjectIndex);

					var success = function(data, resp) {
						console.log(data);
						console.log(resp);
						var iODataProjectId = data.ID;
						var sODataProjectId = JSON.stringify(iODataProjectId);
						//var oClonedProject = savedProjectsModel.getProperty("/" + snewProjectIndex);
						//oClonedProject.projectId = iODataProjectId;
						//oModelItemCloned.projectId = sODataProjectId;
						var updateProjectId = savedProjectsModel.setProperty("/" + sNewProjectIndex + "/projectId", sODataProjectId);
						/*	var updateSavedprojects = savedProjectsModel.setProperty(viewBindingPath + "/additionalInformation",
									aAdditionalInformationSavedProject);*/
						that.getRouter().navTo("createProject", {
							"projectIndex": newProjectIndex
						});

					};
					var error = function(err) {
						console.log(err);
					};
					var oUserModel = that.getOwnerComponent().getModel("userapi");

					//oUserModel.attachRequestCompleted(function() {
					var sName = oUserModel.getProperty("/name");
					var oProperties = {
						ID: "" + parseInt(Math.random() * 10000000),
						CREATEDBY: sName,
						PROJECT: sNewProject
					};
					var oContext = that.getOwnerComponent().getModel("savedProjectsOData").createEntry("/SavedProjectsOData", {
						properties: oProperties,
						success: success,
						error: error
					});
					that.getOwnerComponent().getModel("savedProjectsOData").submitChanges();
				},
				error: function(jqXHR, textStatus, errorThrown) {
					alert(textStatus.toString());
				}
			});
			var button1 = sap.ui.getCore().byId("__xmlview3--audienceGroup");
			if (button1 !== null) {
				button1.setSelectedButton("__xmlview3--businessToCustomer-button");
			}
		},
		_onNavToLoadProject: function(oEvent) {
			this.getRouter().navTo("loadProject");
		},
		_onDialogInstructionPress: function(oEvent) {
			debugger;
			var i18nModel = this.getView().getModel("i18n");
			var newText = "instruction";

			newText = i18nModel.getProperty(newText);
			this._getInstructionDialog().open();
			sap.ui.getCore().byId('inputInstruction').setText(newText);
		},
		_getInstructionDialog: function() {
			// create a fragment with dialog, and pass the selected data

			this.dialog = sap.ui.xmlfragment("M4A.fragment.Instruction", this);

			return this.dialog;
		},
		_onDialogIncludedEnhancementsPress: function(oEvent) {
			this._getIncludedEnhancementsDialog().open();

		},
		_getIncludedEnhancementsDialog: function() {

			this.dialog = sap.ui.xmlfragment("M4A.fragment.IncludedEnhancements", this);

			return this.dialog;
		},

		_onCloseLandingDialog: function() {
			this.dialog.close();
			this._getInstructionDialog().destroy(true);
		}
	});
});