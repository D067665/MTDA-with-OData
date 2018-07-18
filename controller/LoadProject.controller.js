sap.ui.define([
	"M4A/controller/BaseController",
	"M4A/util/storage",
	"jquery.sap.global",
	"sap/ui/core/Fragment",
	"sap/ui/model/Filter",
	"sap/ui/model/Sorter"
], function(BaseController, storage, jQuery, Fragment, Filter, Sorter) {
	"use strict";

	return BaseController.extend("M4A.controller.LoadProject", {

		onInit: function() {
			// set explored app's demo model on this sample
			debugger;
			var oModel = this.getOwnerComponent().getModel("savedProjects");
			this.getView().setModel("savedProjects");
			/*var oModel = this.getView().getModel("savedProjects");
			this.getView().setModel(oModel);*/
			//location.reload(true);
			this.mGroupFunctions = {
				status: function(oContext) {
					var name = oContext.getProperty("status");
					return {
						key: name,
						text: name
					};
				}
			};
		},
		onExit: function() {
			if (this._oDialog) {
				this._oDialog.destroy();
			}
		},
		_handleViewSettingsDialogButtonPressed: function(oEvent) {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("M4A.fragment.Dialog", this);
			}
			// toggle compact style
			jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this._oDialog);
			this._oDialog.open();
		},
		_handleConfirm: function(oEvent) {

			var oView = this.getView();
			var oTable = oView.byId("tableLoadProjects");

			var mParams = oEvent.getParameters();
			var oBinding = oTable.getBinding("items");

			// apply sorter to binding
			// (grouping comes before sorting)
			var aSorters = [];
			if (mParams.groupItem) {
				var sPath = mParams.groupItem.getKey();
				var bDescending = mParams.groupDescending;
				var vGroup = this.mGroupFunctions[sPath];
				aSorters.push(new Sorter(sPath, bDescending, vGroup));
			}
			var sPath = mParams.sortItem.getKey();
			var bDescending = mParams.sortDescending;
			aSorters.push(new Sorter(sPath, bDescending));
			oBinding.sort(aSorters);

			// apply filters to binding
			var aFilters = [];
			jQuery.each(mParams.filterItems, function(i, oItem) {
				var aSplit = oItem.getKey().split("__");
				sPath = aSplit[0];
				var sOperator = aSplit[1];
				var sValue = aSplit[2];
				var oFilter = new Filter(sPath, sOperator, sValue);
				aFilters.push(oFilter);
			});
			oBinding.filter(aFilters);

			// update filter bar
			oView.byId("vsdFilterBar").setVisible(aFilters.length > 0);
			oView.byId("vsdFilterLabel").setText(mParams.filterString);
		},
		_onTableItemPress: function(oEvent) {
			var oItem = oEvent.getParameter("listItem");
			this.getRouter().navTo("createProject", {
				projectIndex: oItem.getTable().getItems().indexOf(oItem)
			});
		},
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
						debugger;
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
			var button2 = sap.ui.getCore().byId("__xmlview3--numberUser");
			if (button1 !== null) {
				button1.setSelectedButton("__xmlview3--businessToCustomer-button");
			}
			if (button2 !== null) {
				button2.setSelectedButton("__xmlview3--fewLT1000-button");
			}
		},
		_handleDelete: function(oEvent) {
			var oList = oEvent.getSource(),
				oItem = oEvent.getParameter("listItem"),

				sPath = oItem.getBindingContext("savedProjects").getPath();
			//get OdataId
			var success = function(data, resp) {
				console.log(data);
				console.log(resp);
				//get results of filter method and transform strings in json

			}; //success

			var error = function(err) {
				console.log(err);

			}; //error
			var sODataProjectIndex = this.getView().getModel("savedProjects").getProperty(sPath + "/projectId");
			var iODataProjectIndex = JSON.parse(sODataProjectIndex);
			var oContext = this.getOwnerComponent().getModel("savedProjectsOData").remove("/SavedProjectsOData(" + iODataProjectIndex + ")", {
				success: success,
				error: error
			});

			// after deletion put the focus back to the list
			oList.attachEventOnce("updateFinished", oList.focus, oList);

			// update the model
			var savedProjectsModel = this.getView().getModel("savedProjects");
			var oItems = savedProjectsModel.getData();
			oItems.splice(parseInt(sPath.substring(1), 10), 1);
			savedProjectsModel.setData(oItems);

			// save new Model to storage
			//storage.save("savedProjects", savedProjectsModel.getJSON());
		},
		_handleCopy: function(oEvent) {
				//get the whole item
				var oItem = oEvent.getSource().getParent();
				// get the Index of Item
				var itemIndex = oItem.getTable().getItems().indexOf(oItem); //0

				var sPath = oItem.getBindingContext("savedProjects").getPath(); //"0"
				//get the savedProjectsModel
				var savedProjectsModel = this.getView().getModel("savedProjects");

				//get Object of savedProjects Model which should be duplicated
				var oModelItemToClone = savedProjectsModel.getProperty(sPath);
				var soldProjectName = oModelItemToClone.applicationName;
				//var oModelItemCloned = oModelItemToClone;
				//var oModelItemCloned = JSON.parse(JSON.stringify(oModelItemToClone)); 
				var oModelItemCloned = jQuery.extend(true, {}, oModelItemToClone);
				oModelItemCloned.applicationName = soldProjectName + " - Copy";
				oModelItemCloned.projectId = "";

				//change the application name so you see it's a copy

				//get the next index for the new Project
				var savedProjects = savedProjectsModel.getData();

				var inewProjectIndex = savedProjects.push(oModelItemCloned) - 1; //wenn nicht stringify
				var snewProjectIndex = JSON.stringify(inewProjectIndex);

				//	savedProjectsModel.setProperty(viewBindingPath + "/" + category + "/" + "operationsCost" + "/" + type, selectedValue);
				//save the duplicate in the savedProjectsModel
				//savedProjectsModel.setProperty("/" + newProjectIndex, oModelItemCloned);
				savedProjectsModel.setData(savedProjects);
				var sModelItemCloned = JSON.stringify(oModelItemCloned);
				var oUserModel = this.getOwnerComponent().getModel("userapi");
				//oUserModel.attachRequestCompleted(function() {
				//var sName = oUserModel.getProperty("/name");
				var oProperties = {
					ID: "" + parseInt(Math.random() * 10000000),
					CREATEDBY: "D067665",
					PROJECT: sModelItemCloned
				};
				var success = function(data, resp) {

					console.log(data);
					console.log(resp);
					var iODataProjectId = data.ID;
					var sODataProjectId = JSON.stringify(iODataProjectId);
					//var oClonedProject = savedProjectsModel.getProperty("/" + snewProjectIndex);
					//oClonedProject.projectId = iODataProjectId;
					//oModelItemCloned.projectId = sODataProjectId;
					var updateProjectId = savedProjectsModel.setProperty("/" + snewProjectIndex + "/projectId", sODataProjectId);
					/*	var updateSavedprojects = savedProjectsModel.setProperty(viewBindingPath + "/additionalInformation",
								aAdditionalInformationSavedProject);*/

					debugger;
				};
				var error = function(err) {
					console.log(err);
					debugger;
				};
				var oContext = this.getOwnerComponent().getModel("savedProjectsOData").createEntry("/SavedProjectsOData", {
					properties: oProperties,
					success: success,
					error: error
				});
				this.getOwnerComponent().getModel("savedProjectsOData").submitChanges();

				//});

			} //handleCopy
	});
});