sap.ui.define([
			"sap/ui/model/json/JSONModel",
			"sap/ui/Device",
			"M4A/util/storage"
		], function(JSONModel, Device, storage) {
			"use strict";

			return {

				createDeviceModel: function() {
					var oModel = new JSONModel(Device);
					oModel.setDefaultBindingMode("OneWay");
					return oModel;
				},
				createFactorCatalogModel: function() {
					var oModel = new JSONModel();
					oModel.setDefaultBindingMode("TwoWay");
					oModel.setData(new function() {
						var factorCatalog = JSON.parse(storage.load("factorCatalog"));
						if (factorCatalog === null) {
							factorCatalog = {
								"clientTechnology": [{
									"factor": "mobileUsage",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "moreAtTheOffice",
										"resultInfluence": ["3", "1", "1"]
									}, {
										"key": "halfHalf",
										"resultInfluence": ["1", "2", "2"]
									}, {
										"key": "moreMobile",
										"resultInfluence": ["1", "2", "3"]
									}],
									"enabled": "True"
								}, {
									"factor": "numberOfUsers",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "extreme",
										"resultInfluence": ["3", "1", "2"]
									}, {
										"key": "many",
										"resultInfluence": ["3", "2", "3"]
									}, {
										"key": "few",
										"resultInfluence": ["2", "1", "3"]
									}],
									"enabled": "True"
								}, {
									"factor": "security",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "confidential",
										"resultInfluence": ["1", "2", "3"]
									}, {
										"key": "restricted",
										"resultInfluence": ["2", "2", "3"]
									}, {
										"key": "public",
										"resultInfluence": ["3", "2", "1"]
									}],
									"enabled": "True"
								}, {
									"factor": "useCaseImportance",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "businessCritical",
										"resultInfluence": ["1", "2", "3"]
									}, {
										"key": "revenueEnabling",
										"resultInfluence": ["1", "2", "2"]
									}, {
										"key": "internal",
										"resultInfluence": ["3", "2", "1"]
									}],
									"enabled": "True"
								}, {
									"factor": "appChangeFrequency",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "frequent",
										"resultInfluence": ["3", "2", "1"]
									}, {
										"key": "occasional",
										"resultInfluence": ["2", "3", "2"]
									}, {
										"key": "rare",
										"resultInfluence": ["1", "2", "3"]
									}],
									"enabled": "True"
								}, {
									"factor": "applicationLifetime",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "long",
										"resultInfluence": ["1", "2", "2"]
									}, {
										"key": "medium",
										"resultInfluence": ["1", "2", "1"]
									}, {
										"key": "short",
										"resultInfluence": ["2", "1", "0"]
									}],
									"enabled": "True"
								}, {
									"factor": "performanceExpectation",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "high",
										"resultInfluence": ["1", "2", "4"]
									}, {
										"key": "normal",
										"resultInfluence": ["2", "2", "1"]
									}],
									"enabled": "True"
								}, {
									"factor": "lookAndFeelExpectation",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "amazing",
										"resultInfluence": ["0", "0", "15"]
									}, {
										"key": "normal",
										"resultInfluence": ["2", "2", "2"]
									}, {
										"key": "noMatter",
										"resultInfluence": ["3", "2", "1"]
									}],
									"enabled": "True"
								}, {
									"factor": "devicePlatform",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "single",
										"resultInfluence": ["2", "1", "3"]
									}, {
										"key": "multiple",
										"resultInfluence": ["3", "2", "1"]
									}],
									"enabled": "True"
								}, {
									"factor": "technicalCapabilities",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "specialFeatures",
										"resultInfluence": ["0", "1", "3"]
									}, {
										"key": "noSpecific",
										"resultInfluence": ["2", "2", "2"]
									}],
									"enabled": "True"
								}, {
									"factor": "userProcesses",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "one",
										"resultInfluence": ["3", "2", "1"]
									}, {
										"key": "few",
										"resultInfluence": ["1", "2", "2"]
									}, {
										"key": "many",
										"resultInfluence": ["1", "1", "3"]
									}],
									"enabled": "True"
								}, {
									"factor": "processComplexity",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "high",
										"resultInfluence": ["0", "1", "3"]
									}, {
										"key": "medium",
										"resultInfluence": ["1", "2", "2"]
									}, {
										"key": "low",
										"resultInfluence": ["2", "1", "0"]
									}],
									"enabled": "True"
								}, {
									"factor": "projectBudget",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "high",
										"resultInfluence": ["1", "2", "3"]
									}, {
										"key": "restricted",
										"resultInfluence": ["2", "2", "2"]
									}, {
										"key": "low",
										"resultInfluence": ["3", "1", "1"]
									}, {
										"key": "unknown",
										"resultInfluence": ["2", "1", "1"]
									}],
									"enabled": "True"
								}, {
									"factor": "longTermBudget",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "high",
										"resultInfluence": ["0", "2", "3"]
									}, {
										"key": "restricted",
										"resultInfluence": ["1", "1", "2"]
									}, {
										"key": "low",
										"resultInfluence": ["3", "0", "1"]
									}, {
										"key": "unknown",
										"resultInfluence": ["2", "1", "1"]
									}],
									"enabled": "True"
								}, {
									"factor": "timeToMarket",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "short",
										"resultInfluence": ["3", "1", "1"]
									}, {
										"key": "normal",
										"resultInfluence": ["2", "1", "2"]
									}, {
										"key": "long",
										"resultInfluence": ["1", "2", "3"]
									}],
									"enabled": "True"
								}, {
									"factor": "projectCost",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "single",
										"resultInfluence": ["2", "1", "3"]
									}, {
										"key": "multiple",
										"resultInfluence": ["3", "2", "1"]
									}],
									"enabled": "True"
								}, {
									"factor": "operationsCost",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "single",
										"resultInfluence": ["1", "1", "3"]
									}, {
										"key": "multiple",
										"resultInfluence": ["3", "2", "1"]
									}],
									"enabled": "True"
								}, {
									"factor": "maintenanceCost",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "single",
										"resultInfluence": ["5", "2", "5"]
									}, {
										"key": "multiple",
										"resultInfluence": ["6", "4", "2"]
									}],
									"enabled": "True"
								}, {
									"factor": "extendCost",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "single",
										"resultInfluence": ["1", "1", "3"]
									}, {
										"key": "multiple",
										"resultInfluence": ["2", "2", "1"]
									}],
									"enabled": "True"
								}],
								"dataSync": [{
									"factor": "mobileUsage",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "moreAtTheOffice",
										"resultInfluence": ["3", "2", "1"]
									}, {
										"key": "halfHalf",
										"resultInfluence": ["1", "2", "2"]
									}, {
										"key": "moreMobile",
										"resultInfluence": ["1", "3", "3"]
									}],
									"enabled": "True"
								}, {
									"factor": "numberOfUsers",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "extreme",
										"resultInfluence": ["3", "0", "2"]
									}, {
										"key": "many",
										"resultInfluence": ["3", "1", "3"]
									}, {
										"key": "few",
										"resultInfluence": ["3", "3", "3"]
									}],
									"enabled": "True"
								}, {
									"factor": "security",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "confidential",
										"resultInfluence": ["3", "1", "2"]
									}, {
										"key": "restricted",
										"resultInfluence": ["2", "2", "2"]
									}, {
										"key": "public",
										"resultInfluence": ["3", "1", "1"]
									}],
									"enabled": "True"
								}, {
									"factor": "useCaseImportance",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "businessCritical",
										"resultInfluence": ["1", "2", "3"]
									}, {
										"key": "revenueEnabling",
										"resultInfluence": ["1", "2", "2"]
									}, {
										"key": "internal",
										"resultInfluence": ["3", "2", "1"]
									}],
									"enabled": "True"
								}, {
									"factor": "offlineDataVolume",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "no",
										"resultInfluence": ["10", "1", "1"]
									}, {
										"key": "LT100MB",
										"resultInfluence": ["0", "3", "2"]
									}, {
										"key": "MT100MB",
										"resultInfluence": ["0", "0", "10"]
									}],
									"enabled": "True"
								}, {
									"factor": "dataTraffic",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "plenty",
										"resultInfluence": ["3", "1", "1"]
									}, {
										"key": "moderate",
										"resultInfluence": ["2", "2", "2"]
									}, {
										"key": "little",
										"resultInfluence": ["1", "3", "3"]
									}],
									"enabled": "True"
								}, {
									"factor": "dataLifetime",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "long",
										"resultInfluence": ["2", "2", "3"]
									}, {
										"key": "medium",
										"resultInfluence": ["2", "2", "3"]
									}, {
										"key": "short",
										"resultInfluence": ["3", "1", "2"]
									}],
									"enabled": "True"
								}, {
									"factor": "dataOperations",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "simple",
										"resultInfluence": ["2", "2", "2"]
									}, {
										"key": "complex",
										"resultInfluence": ["2", "1", "3"]
									}],
									"enabled": "True"
								}, {
									"factor": "localDataSearch",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "veryImportant",
										"resultInfluence": ["0", "1", "3"]
									}, {
										"key": "important",
										"resultInfluence": ["1", "2", "2"]
									}, {
										"key": "unimportant",
										"resultInfluence": ["3", "1", "1"]
									}],
									"enabled": "True"
								}, {
									"factor": "dataStructure",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "simple",
										"resultInfluence": ["2", "2", "1"]
									}, {
										"key": "complex",
										"resultInfluence": ["1", "1", "2"]
									}],
									"enabled": "True"
								}, {
									"factor": "userType",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "internal",
										"resultInfluence": ["1", "2", "3"]
									}, {
										"key": "partner",
										"resultInfluence": ["2", "2", "2"]
									}, {
										"key": "consumer",
										"resultInfluence": ["3", "1", "1"]
									}],
									"enabled": "True"
								}, {
									"factor": "projectCost",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "no",
										"resultInfluence": ["3", "0", "0"]
									}, {
										"key": "LT100MB",
										"resultInfluence": ["0", "3", "2"]
									}, {
										"key": "MT100MB",
										"resultInfluence": ["0", "0", "3"]
									}],
									"enabled": "True"
								}, {
									"factor": "operationsCost",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "no",
										"resultInfluence": ["3", "0", "0"]
									}, {
										"key": "LT100MB",
										"resultInfluence": ["0", "3", "2"]
									}, {
										"key": "MT100MB",
										"resultInfluence": ["0", "0", "3"]
									}],
									"enabled": "True"
								}, {
									"factor": "maintenanceCost",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "no",
										"resultInfluence": ["6", "0", "0"]
									}, {
										"key": "LT100MB",
										"resultInfluence": ["0", "6", "4"]
									}, {
										"key": "MT100MB",
										"resultInfluence": ["0", "0", "6"]
									}],
									"enabled": "True"
								}, {
									"factor": "extendCost",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "no",
										"resultInfluence": ["3", "0", "0"]
									}, {
										"key": "LT100MB",
										"resultInfluence": ["0", "3", "2"]
									}, {
										"key": "MT100MB",
										"resultInfluence": ["0", "0", "3"]
									}],
									"enabled": "True"
								}],
								"operationsCenter": [{
									"factor": "existingBackendSystems",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "onPremise",
										"resultInfluence": ["3", "0", "1"]
									}, {
										"key": "hybrid",
										"resultInfluence": ["0", "1", "3"]
									}, {
										"key": "inCloud",
										"resultInfluence": ["0", "3", "0"]
									}],
									"enabled": "True"
								}, {
									"factor": "existingMobileMiddleware",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "onPremise",
										"resultInfluence": ["3", "0", "1"]
									}, {
										"key": "inCloud",
										"resultInfluence": ["0", "3", "1"]
									}],
									"enabled": "True"
								}, {
									"factor": "thirdPartyIntegration",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "onPremise",
										"resultInfluence": ["3", "0", "1"]
									}, {
										"key": "inCloud",
										"resultInfluence": ["0", "3", "1"]
									}],
									"enabled": "True"
								}, {
									"factor": "operationsTeam",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "internal",
										"resultInfluence": ["3", "1", "2"]
									}, {
										"key": "external",
										"resultInfluence": ["1", "3", "2"]
									}],
									"enabled": "True"
								}, {
									"factor": "appChangeFrequency",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "frequent",
										"resultInfluence": ["1", "3", "2"]
									}, {
										"key": "occasional",
										"resultInfluence": ["2", "2", "2"]
									}, {
										"key": "rare",
										"resultInfluence": ["3", "1", "2"]
									}],
									"enabled": "True"
								}, {
									"factor": "applicationLifetime",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "long",
										"resultInfluence": ["3", "1", "2"]
									}, {
										"key": "medium",
										"resultInfluence": ["2", "2", "2"]
									}, {
										"key": "short",
										"resultInfluence": ["1", "3", "2"]
									}],
									"enabled": "True"
								}, {
									"factor": "systemAvailability",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "high",
										"resultInfluence": ["1", "3", "1"]
									}, {
										"key": "normal",
										"resultInfluence": ["2", "2", "1"]
									}, {
										"key": "low",
										"resultInfluence": ["3", "2", "2"]
									}],
									"enabled": "True"
								}, {
									"factor": "possibleExpenditure",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "capex",
										"resultInfluence": ["3", "1", "2"]
									}, {
										"key": "opex",
										"resultInfluence": ["1", "3", "2"]
									}],
									"enabled": "True"
								}, {
									"factor": "projectCost",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "onPremise",
										"resultInfluence": ["3", "0", "1"]
									}, {
										"key": "hybrid",
										"resultInfluence": ["1", "2", "3"]
									}, {
										"key": "inCloud",
										"resultInfluence": ["0", "3", "1"]
									}],
									"enabled": "True"
								}, {
									"factor": "operationsCost",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "onPremise",
										"resultInfluence": ["3", "0", "1"]
									}, {
										"key": "hybrid",
										"resultInfluence": ["1", "1", "3"]
									}, {
										"key": "inCloud",
										"resultInfluence": ["0", "3", "1"]
									}],
									"enabled": "True"
								}, {
									"factor": "maintenanceCost",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "onPremise",
										"resultInfluence": ["6", "0", "2"]
									}, {
										"key": "hybrid",
										"resultInfluence": ["2", "2", "5"]
									}, {
										"key": "inCloud",
										"resultInfluence": ["0", "6", "2"]
									}],
									"enabled": "True"
								}, {
									"factor": "extendCost",
									"type": "calculationFactor",
									"currentSelection": "notSelected",
									"currentWeight": "medium",
									"importance": [{
										"key": "low",
										"weight": "1"
									}, {
										"key": "medium",
										"weight": "2"
									}, {
										"key": "high",
										"weight": "3"
									}],
									"selectionOptions": [{
										"key": "notSelected",
										"resultInfluence": ["0", "0", "0"]
									}, {
										"key": "onPremise",
										"resultInfluence": ["3", "0", "1"]
									}, {
										"key": "hybrid",
										"resultInfluence": ["1", "1", "3"]
									}, {
										"key": "inCloud",
										"resultInfluence": ["0", "3", "1"]
									}],
									"enabled": "True"
								}]
							};
						}
						return factorCatalog;

					});
					return oModel;
				},

				createSavedProjectsModel: function(oContext) {
					//get Odata Model
					var oDataModel = oContext.getModel("savedProjectsOData");
					var oModel = new JSONModel();
					//wait till metadata of odata is loaded
					oDataModel.metadataLoaded().then(this._recreateJSON.bind(this, oContext, oModel));
					return oModel;

				},
				_recreateJSON: function(oContext, oModel) {
					var fnInitiateNewModel = function() {

							var sName = oUserModel.getProperty("/name");
							// Define Filter for current User
							var aFilters = [new sap.ui.model.Filter("CREATEDBY", "EQ", sName)];

							//if read of oData Model is successful
							var success = function(data, resp) {
								console.log(data);
								console.log(resp);
								//get results of filter method and transform strings in json
								var aProjects = data.results;
								for (var i = 0; i < aProjects.length; i++) {
									var sProject = aProjects[i].PROJECT;
									var oProject = JSON.parse(sProject);
									var iProjectId = aProjects[i].ID;
									var sProjectId = JSON.stringify(iProjectId);
									oProject.projectId = sProjectId;
									oProject.lastChangedDate = new Date(oProject.lastChangedDate);
									//oProject.projectId = aProjects[i].ID; im string projectID anlegen
									savedProjects.push(oProject);

								}
								console.log(savedProjects);

								oModel.setData(savedProjects);
								return oModel;

							}; //success

							var error = function(err) {
								console.log(err);

							}; //error
					
							//read oData with Filter
							oContext.getModel("savedProjectsOData").read("/SavedProjectsOData", {
								filters: aFilters,
								success: success,
								error: error
							}); //read

							var savedProjects = [];
							//get Model for UserInformation and wait till data is loaded
};
debugger;
							var oUserModel = oContext.getModel("userapi");
							if (jQuery.isEmptyObject(oUserModel.getData() )) {
								oUserModel.attachRequestCompleted(fnInitiateNewModel);

							} else{
								fnInitiateNewModel();
							}
							//oUserModel.attachRequestCompleted(function() {

							

							return oModel;

						} //recreateJSON
				};
			});