sap.ui.define([
	"M4A/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("M4A.controller.Landing", {
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
					var oProperties = {
						ID: "" + parseInt(Math.random() * 10000000),
						CREATEDBY: "D067665",
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
			if(button1 !== null){
			button1.setSelectedButton("__xmlview3--businessToCustomer-button");
			}
		},
		_onNavToLoadProject: function(oEvent) {
			this.getRouter().navTo("loadProject");
		},
		_onDialogInstructionPress: function(oEvent) {
			var i18nModel = this.getView().getModel("i18n");
			var newText = "instruction";
			
			newText = i18nModel.getProperty(newText);
			this._getInstructionDialog().open();
			sap.ui.getCore().byId('inputInstruction').setText(newText);
		},
		_getInstructionDialog : function() {
            // create a fragment with dialog, and pass the selected data
            if (!this.dialog) {
                this.dialog = sap.ui.xmlfragment("M4A.fragment.Instruction", this);
            }
            return this.dialog;
        },
        _onCloseLandingDialog : function() {
                this._getInstructionDialog().close();
        }
	});
});