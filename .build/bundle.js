/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/dd/i18n/i18n.properties":
/*!***************************************************!*\
  !*** ./build.definitions/dd/i18n/i18n.properties ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "Header_table=Header table\nHeader_table_Detail=Header table Detail\nCreate_Header_table_Detail=Create Header table Detail\nUpdate_Header_table_Detail=Update Header table Detail\nCreate_Item_table=Create Item table\nItem_table=Item table\nItem_table_Detail=Item table Detail\nCreate_Item_table_Detail=Create Item table Detail\nUpdate_Item_table_Detail=Update Item table Detail"

/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
	let dd_actions_application_appupdate_action = __webpack_require__(/*! ./dd/Actions/Application/AppUpdate.action */ "./build.definitions/dd/Actions/Application/AppUpdate.action")
	let dd_actions_application_appupdatefailuremessage_action = __webpack_require__(/*! ./dd/Actions/Application/AppUpdateFailureMessage.action */ "./build.definitions/dd/Actions/Application/AppUpdateFailureMessage.action")
	let dd_actions_application_appupdateprogressbanner_action = __webpack_require__(/*! ./dd/Actions/Application/AppUpdateProgressBanner.action */ "./build.definitions/dd/Actions/Application/AppUpdateProgressBanner.action")
	let dd_actions_application_appupdatesuccessmessage_action = __webpack_require__(/*! ./dd/Actions/Application/AppUpdateSuccessMessage.action */ "./build.definitions/dd/Actions/Application/AppUpdateSuccessMessage.action")
	let dd_actions_application_logout_action = __webpack_require__(/*! ./dd/Actions/Application/Logout.action */ "./build.definitions/dd/Actions/Application/Logout.action")
	let dd_actions_application_navtoabout_action = __webpack_require__(/*! ./dd/Actions/Application/NavToAbout.action */ "./build.definitions/dd/Actions/Application/NavToAbout.action")
	let dd_actions_application_navtoactivitylog_action = __webpack_require__(/*! ./dd/Actions/Application/NavToActivityLog.action */ "./build.definitions/dd/Actions/Application/NavToActivityLog.action")
	let dd_actions_application_navtosupport_action = __webpack_require__(/*! ./dd/Actions/Application/NavToSupport.action */ "./build.definitions/dd/Actions/Application/NavToSupport.action")
	let dd_actions_application_onwillupdate_action = __webpack_require__(/*! ./dd/Actions/Application/OnWillUpdate.action */ "./build.definitions/dd/Actions/Application/OnWillUpdate.action")
	let dd_actions_application_reset_action = __webpack_require__(/*! ./dd/Actions/Application/Reset.action */ "./build.definitions/dd/Actions/Application/Reset.action")
	let dd_actions_application_resetmessage_action = __webpack_require__(/*! ./dd/Actions/Application/ResetMessage.action */ "./build.definitions/dd/Actions/Application/ResetMessage.action")
	let dd_actions_application_usermenupopover_action = __webpack_require__(/*! ./dd/Actions/Application/UserMenuPopover.action */ "./build.definitions/dd/Actions/Application/UserMenuPopover.action")
	let dd_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./dd/Actions/CloseModalPage_Cancel.action */ "./build.definitions/dd/Actions/CloseModalPage_Cancel.action")
	let dd_actions_closemodalpage_complete_action = __webpack_require__(/*! ./dd/Actions/CloseModalPage_Complete.action */ "./build.definitions/dd/Actions/CloseModalPage_Complete.action")
	let dd_actions_closepage_action = __webpack_require__(/*! ./dd/Actions/ClosePage.action */ "./build.definitions/dd/Actions/ClosePage.action")
	let dd_actions_createentityfailuremessage_action = __webpack_require__(/*! ./dd/Actions/CreateEntityFailureMessage.action */ "./build.definitions/dd/Actions/CreateEntityFailureMessage.action")
	let dd_actions_createentitysuccessmessage_action = __webpack_require__(/*! ./dd/Actions/CreateEntitySuccessMessage.action */ "./build.definitions/dd/Actions/CreateEntitySuccessMessage.action")
	let dd_actions_deleteconfirmation_action = __webpack_require__(/*! ./dd/Actions/DeleteConfirmation.action */ "./build.definitions/dd/Actions/DeleteConfirmation.action")
	let dd_actions_deleteentityfailuremessage_action = __webpack_require__(/*! ./dd/Actions/DeleteEntityFailureMessage.action */ "./build.definitions/dd/Actions/DeleteEntityFailureMessage.action")
	let dd_actions_deleteentitysuccessmessage_action = __webpack_require__(/*! ./dd/Actions/DeleteEntitySuccessMessage.action */ "./build.definitions/dd/Actions/DeleteEntitySuccessMessage.action")
	let dd_actions_errorarchive_errorarchive_syncfailure_action = __webpack_require__(/*! ./dd/Actions/ErrorArchive/ErrorArchive_SyncFailure.action */ "./build.definitions/dd/Actions/ErrorArchive/ErrorArchive_SyncFailure.action")
	let dd_actions_errorarchive_navtoerrorarchive_detail_action = __webpack_require__(/*! ./dd/Actions/ErrorArchive/NavToErrorArchive_Detail.action */ "./build.definitions/dd/Actions/ErrorArchive/NavToErrorArchive_Detail.action")
	let dd_actions_errorarchive_navtoerrorarchive_list_action = __webpack_require__(/*! ./dd/Actions/ErrorArchive/NavToErrorArchive_List.action */ "./build.definitions/dd/Actions/ErrorArchive/NavToErrorArchive_List.action")
	let dd_actions_genericbannermessage_action = __webpack_require__(/*! ./dd/Actions/GenericBannerMessage.action */ "./build.definitions/dd/Actions/GenericBannerMessage.action")
	let dd_actions_genericmessagebox_action = __webpack_require__(/*! ./dd/Actions/GenericMessageBox.action */ "./build.definitions/dd/Actions/GenericMessageBox.action")
	let dd_actions_genericnavigation_action = __webpack_require__(/*! ./dd/Actions/GenericNavigation.action */ "./build.definitions/dd/Actions/GenericNavigation.action")
	let dd_actions_generictoastmessage_action = __webpack_require__(/*! ./dd/Actions/GenericToastMessage.action */ "./build.definitions/dd/Actions/GenericToastMessage.action")
	let dd_actions_logging_loguploadfailure_action = __webpack_require__(/*! ./dd/Actions/Logging/LogUploadFailure.action */ "./build.definitions/dd/Actions/Logging/LogUploadFailure.action")
	let dd_actions_logging_loguploadsuccessful_action = __webpack_require__(/*! ./dd/Actions/Logging/LogUploadSuccessful.action */ "./build.definitions/dd/Actions/Logging/LogUploadSuccessful.action")
	let dd_actions_logging_uploadlog_action = __webpack_require__(/*! ./dd/Actions/Logging/UploadLog.action */ "./build.definitions/dd/Actions/Logging/UploadLog.action")
	let dd_actions_logging_uploadlogprogress_action = __webpack_require__(/*! ./dd/Actions/Logging/UploadLogProgress.action */ "./build.definitions/dd/Actions/Logging/UploadLogProgress.action")
	let dd_actions_purl_header_table_header_table_createentity_action = __webpack_require__(/*! ./dd/Actions/purl/Header_table/Header_table_CreateEntity.action */ "./build.definitions/dd/Actions/purl/Header_table/Header_table_CreateEntity.action")
	let dd_actions_purl_header_table_header_table_createitem_table_action = __webpack_require__(/*! ./dd/Actions/purl/Header_table/Header_table_CreateItem_table.action */ "./build.definitions/dd/Actions/purl/Header_table/Header_table_CreateItem_table.action")
	let dd_actions_purl_header_table_header_table_deleteentity_action = __webpack_require__(/*! ./dd/Actions/purl/Header_table/Header_table_DeleteEntity.action */ "./build.definitions/dd/Actions/purl/Header_table/Header_table_DeleteEntity.action")
	let dd_actions_purl_header_table_header_table_detailpopover_action = __webpack_require__(/*! ./dd/Actions/purl/Header_table/Header_table_DetailPopover.action */ "./build.definitions/dd/Actions/purl/Header_table/Header_table_DetailPopover.action")
	let dd_actions_purl_header_table_header_table_updateentity_action = __webpack_require__(/*! ./dd/Actions/purl/Header_table/Header_table_UpdateEntity.action */ "./build.definitions/dd/Actions/purl/Header_table/Header_table_UpdateEntity.action")
	let dd_actions_purl_header_table_navtoheader_table_create_action = __webpack_require__(/*! ./dd/Actions/purl/Header_table/NavToHeader_table_Create.action */ "./build.definitions/dd/Actions/purl/Header_table/NavToHeader_table_Create.action")
	let dd_actions_purl_header_table_navtoheader_table_createitem_table_action = __webpack_require__(/*! ./dd/Actions/purl/Header_table/NavToHeader_table_CreateItem_table.action */ "./build.definitions/dd/Actions/purl/Header_table/NavToHeader_table_CreateItem_table.action")
	let dd_actions_purl_header_table_navtoheader_table_detail_action = __webpack_require__(/*! ./dd/Actions/purl/Header_table/NavToHeader_table_Detail.action */ "./build.definitions/dd/Actions/purl/Header_table/NavToHeader_table_Detail.action")
	let dd_actions_purl_header_table_navtoheader_table_edit_action = __webpack_require__(/*! ./dd/Actions/purl/Header_table/NavToHeader_table_Edit.action */ "./build.definitions/dd/Actions/purl/Header_table/NavToHeader_table_Edit.action")
	let dd_actions_purl_header_table_navtoheader_table_list_action = __webpack_require__(/*! ./dd/Actions/purl/Header_table/NavToHeader_table_List.action */ "./build.definitions/dd/Actions/purl/Header_table/NavToHeader_table_List.action")
	let dd_actions_purl_item_table_item_table_createentity_action = __webpack_require__(/*! ./dd/Actions/purl/Item_table/Item_table_CreateEntity.action */ "./build.definitions/dd/Actions/purl/Item_table/Item_table_CreateEntity.action")
	let dd_actions_purl_item_table_item_table_deleteentity_action = __webpack_require__(/*! ./dd/Actions/purl/Item_table/Item_table_DeleteEntity.action */ "./build.definitions/dd/Actions/purl/Item_table/Item_table_DeleteEntity.action")
	let dd_actions_purl_item_table_item_table_updateentity_action = __webpack_require__(/*! ./dd/Actions/purl/Item_table/Item_table_UpdateEntity.action */ "./build.definitions/dd/Actions/purl/Item_table/Item_table_UpdateEntity.action")
	let dd_actions_purl_item_table_navtoitem_table_create_action = __webpack_require__(/*! ./dd/Actions/purl/Item_table/NavToItem_table_Create.action */ "./build.definitions/dd/Actions/purl/Item_table/NavToItem_table_Create.action")
	let dd_actions_purl_item_table_navtoitem_table_detail_action = __webpack_require__(/*! ./dd/Actions/purl/Item_table/NavToItem_table_Detail.action */ "./build.definitions/dd/Actions/purl/Item_table/NavToItem_table_Detail.action")
	let dd_actions_purl_item_table_navtoitem_table_edit_action = __webpack_require__(/*! ./dd/Actions/purl/Item_table/NavToItem_table_Edit.action */ "./build.definitions/dd/Actions/purl/Item_table/NavToItem_table_Edit.action")
	let dd_actions_purl_item_table_navtoitem_table_list_action = __webpack_require__(/*! ./dd/Actions/purl/Item_table/NavToItem_table_List.action */ "./build.definitions/dd/Actions/purl/Item_table/NavToItem_table_List.action")
	let dd_actions_purl_service_closeoffline_action = __webpack_require__(/*! ./dd/Actions/purl/Service/CloseOffline.action */ "./build.definitions/dd/Actions/purl/Service/CloseOffline.action")
	let dd_actions_purl_service_closeofflinefailuremessage_action = __webpack_require__(/*! ./dd/Actions/purl/Service/CloseOfflineFailureMessage.action */ "./build.definitions/dd/Actions/purl/Service/CloseOfflineFailureMessage.action")
	let dd_actions_purl_service_closeofflinesuccessmessage_action = __webpack_require__(/*! ./dd/Actions/purl/Service/CloseOfflineSuccessMessage.action */ "./build.definitions/dd/Actions/purl/Service/CloseOfflineSuccessMessage.action")
	let dd_actions_purl_service_downloadoffline_action = __webpack_require__(/*! ./dd/Actions/purl/Service/DownloadOffline.action */ "./build.definitions/dd/Actions/purl/Service/DownloadOffline.action")
	let dd_actions_purl_service_downloadstartedmessage_action = __webpack_require__(/*! ./dd/Actions/purl/Service/DownloadStartedMessage.action */ "./build.definitions/dd/Actions/purl/Service/DownloadStartedMessage.action")
	let dd_actions_purl_service_initializeoffline_action = __webpack_require__(/*! ./dd/Actions/purl/Service/InitializeOffline.action */ "./build.definitions/dd/Actions/purl/Service/InitializeOffline.action")
	let dd_actions_purl_service_initializeofflinefailuremessage_action = __webpack_require__(/*! ./dd/Actions/purl/Service/InitializeOfflineFailureMessage.action */ "./build.definitions/dd/Actions/purl/Service/InitializeOfflineFailureMessage.action")
	let dd_actions_purl_service_syncfailuremessage_action = __webpack_require__(/*! ./dd/Actions/purl/Service/SyncFailureMessage.action */ "./build.definitions/dd/Actions/purl/Service/SyncFailureMessage.action")
	let dd_actions_purl_service_syncstartedmessage_action = __webpack_require__(/*! ./dd/Actions/purl/Service/SyncStartedMessage.action */ "./build.definitions/dd/Actions/purl/Service/SyncStartedMessage.action")
	let dd_actions_purl_service_uploadoffline_action = __webpack_require__(/*! ./dd/Actions/purl/Service/UploadOffline.action */ "./build.definitions/dd/Actions/purl/Service/UploadOffline.action")
	let dd_actions_updateentityfailuremessage_action = __webpack_require__(/*! ./dd/Actions/UpdateEntityFailureMessage.action */ "./build.definitions/dd/Actions/UpdateEntityFailureMessage.action")
	let dd_actions_updateentitysuccessmessage_action = __webpack_require__(/*! ./dd/Actions/UpdateEntitySuccessMessage.action */ "./build.definitions/dd/Actions/UpdateEntitySuccessMessage.action")
	let dd_globals_application_appdefinition_version_global = __webpack_require__(/*! ./dd/Globals/Application/AppDefinition_Version.global */ "./build.definitions/dd/Globals/Application/AppDefinition_Version.global")
	let dd_globals_application_applicationname_global = __webpack_require__(/*! ./dd/Globals/Application/ApplicationName.global */ "./build.definitions/dd/Globals/Application/ApplicationName.global")
	let dd_globals_application_supportemail_global = __webpack_require__(/*! ./dd/Globals/Application/SupportEmail.global */ "./build.definitions/dd/Globals/Application/SupportEmail.global")
	let dd_globals_application_supportphone_global = __webpack_require__(/*! ./dd/Globals/Application/SupportPhone.global */ "./build.definitions/dd/Globals/Application/SupportPhone.global")
	let dd_i18n_i18n_properties = __webpack_require__(/*! ./dd/i18n/i18n.properties */ "./build.definitions/dd/i18n/i18n.properties")
	let dd_jsconfig_json = __webpack_require__(/*! ./dd/jsconfig.json */ "./build.definitions/dd/jsconfig.json")
	let dd_pages_application_about_page = __webpack_require__(/*! ./dd/Pages/Application/About.page */ "./build.definitions/dd/Pages/Application/About.page")
	let dd_pages_application_support_page = __webpack_require__(/*! ./dd/Pages/Application/Support.page */ "./build.definitions/dd/Pages/Application/Support.page")
	let dd_pages_application_useractivitylog_page = __webpack_require__(/*! ./dd/Pages/Application/UserActivityLog.page */ "./build.definitions/dd/Pages/Application/UserActivityLog.page")
	let dd_pages_errorarchive_errorarchive_detail_page = __webpack_require__(/*! ./dd/Pages/ErrorArchive/ErrorArchive_Detail.page */ "./build.definitions/dd/Pages/ErrorArchive/ErrorArchive_Detail.page")
	let dd_pages_errorarchive_errorarchive_list_page = __webpack_require__(/*! ./dd/Pages/ErrorArchive/ErrorArchive_List.page */ "./build.definitions/dd/Pages/ErrorArchive/ErrorArchive_List.page")
	let dd_pages_main_page = __webpack_require__(/*! ./dd/Pages/Main.page */ "./build.definitions/dd/Pages/Main.page")
	let dd_pages_purl_header_table_header_table_create_page = __webpack_require__(/*! ./dd/Pages/purl_Header_table/Header_table_Create.page */ "./build.definitions/dd/Pages/purl_Header_table/Header_table_Create.page")
	let dd_pages_purl_header_table_header_table_createitem_table_page = __webpack_require__(/*! ./dd/Pages/purl_Header_table/Header_table_CreateItem_table.page */ "./build.definitions/dd/Pages/purl_Header_table/Header_table_CreateItem_table.page")
	let dd_pages_purl_header_table_header_table_detail_page = __webpack_require__(/*! ./dd/Pages/purl_Header_table/Header_table_Detail.page */ "./build.definitions/dd/Pages/purl_Header_table/Header_table_Detail.page")
	let dd_pages_purl_header_table_header_table_edit_page = __webpack_require__(/*! ./dd/Pages/purl_Header_table/Header_table_Edit.page */ "./build.definitions/dd/Pages/purl_Header_table/Header_table_Edit.page")
	let dd_pages_purl_header_table_header_table_list_page = __webpack_require__(/*! ./dd/Pages/purl_Header_table/Header_table_List.page */ "./build.definitions/dd/Pages/purl_Header_table/Header_table_List.page")
	let dd_pages_purl_item_table_item_table_create_page = __webpack_require__(/*! ./dd/Pages/purl_Item_table/Item_table_Create.page */ "./build.definitions/dd/Pages/purl_Item_table/Item_table_Create.page")
	let dd_pages_purl_item_table_item_table_detail_page = __webpack_require__(/*! ./dd/Pages/purl_Item_table/Item_table_Detail.page */ "./build.definitions/dd/Pages/purl_Item_table/Item_table_Detail.page")
	let dd_pages_purl_item_table_item_table_edit_page = __webpack_require__(/*! ./dd/Pages/purl_Item_table/Item_table_Edit.page */ "./build.definitions/dd/Pages/purl_Item_table/Item_table_Edit.page")
	let dd_pages_purl_item_table_item_table_list_page = __webpack_require__(/*! ./dd/Pages/purl_Item_table/Item_table_List.page */ "./build.definitions/dd/Pages/purl_Item_table/Item_table_List.page")
	let dd_rules_application_appupdatefailure_js = __webpack_require__(/*! ./dd/Rules/Application/AppUpdateFailure.js */ "./build.definitions/dd/Rules/Application/AppUpdateFailure.js")
	let dd_rules_application_appupdatesuccess_js = __webpack_require__(/*! ./dd/Rules/Application/AppUpdateSuccess.js */ "./build.definitions/dd/Rules/Application/AppUpdateSuccess.js")
	let dd_rules_application_clientismultiusermode_js = __webpack_require__(/*! ./dd/Rules/Application/ClientIsMultiUserMode.js */ "./build.definitions/dd/Rules/Application/ClientIsMultiUserMode.js")
	let dd_rules_application_getclientsupportversions_js = __webpack_require__(/*! ./dd/Rules/Application/GetClientSupportVersions.js */ "./build.definitions/dd/Rules/Application/GetClientSupportVersions.js")
	let dd_rules_application_getclientversion_js = __webpack_require__(/*! ./dd/Rules/Application/GetClientVersion.js */ "./build.definitions/dd/Rules/Application/GetClientVersion.js")
	let dd_rules_application_onwillupdate_js = __webpack_require__(/*! ./dd/Rules/Application/OnWillUpdate.js */ "./build.definitions/dd/Rules/Application/OnWillUpdate.js")
	let dd_rules_application_resetappsettingsandlogout_js = __webpack_require__(/*! ./dd/Rules/Application/ResetAppSettingsAndLogout.js */ "./build.definitions/dd/Rules/Application/ResetAppSettingsAndLogout.js")
	let dd_rules_logging_loglevels_js = __webpack_require__(/*! ./dd/Rules/Logging/LogLevels.js */ "./build.definitions/dd/Rules/Logging/LogLevels.js")
	let dd_rules_logging_settracecategories_js = __webpack_require__(/*! ./dd/Rules/Logging/SetTraceCategories.js */ "./build.definitions/dd/Rules/Logging/SetTraceCategories.js")
	let dd_rules_logging_setuserloglevel_js = __webpack_require__(/*! ./dd/Rules/Logging/SetUserLogLevel.js */ "./build.definitions/dd/Rules/Logging/SetUserLogLevel.js")
	let dd_rules_logging_togglelogging_js = __webpack_require__(/*! ./dd/Rules/Logging/ToggleLogging.js */ "./build.definitions/dd/Rules/Logging/ToggleLogging.js")
	let dd_rules_logging_tracecategories_js = __webpack_require__(/*! ./dd/Rules/Logging/TraceCategories.js */ "./build.definitions/dd/Rules/Logging/TraceCategories.js")
	let dd_rules_logging_userlogsetting_js = __webpack_require__(/*! ./dd/Rules/Logging/UserLogSetting.js */ "./build.definitions/dd/Rules/Logging/UserLogSetting.js")
	let dd_rules_purl_errorarchive_checkforsyncerror_js = __webpack_require__(/*! ./dd/Rules/purl/ErrorArchive_CheckForSyncError.js */ "./build.definitions/dd/Rules/purl/ErrorArchive_CheckForSyncError.js")
	let dd_rules_purl_header_table_header_table_deleteconfirmation_js = __webpack_require__(/*! ./dd/Rules/purl/Header_table/Header_table_DeleteConfirmation.js */ "./build.definitions/dd/Rules/purl/Header_table/Header_table_DeleteConfirmation.js")
	let dd_rules_purl_item_table_item_table_deleteconfirmation_js = __webpack_require__(/*! ./dd/Rules/purl/Item_table/Item_table_DeleteConfirmation.js */ "./build.definitions/dd/Rules/purl/Item_table/Item_table_DeleteConfirmation.js")
	let dd_rules_service_initialize_js = __webpack_require__(/*! ./dd/Rules/Service/Initialize.js */ "./build.definitions/dd/Rules/Service/Initialize.js")
	let dd_services_purl_service = __webpack_require__(/*! ./dd/Services/purl.service */ "./build.definitions/dd/Services/purl.service")
	let dd_styles_styles_css = __webpack_require__(/*! ./dd/Styles/Styles.css */ "./build.definitions/dd/Styles/Styles.css")
	let dd_styles_styles_less = __webpack_require__(/*! ./dd/Styles/Styles.less */ "./build.definitions/dd/Styles/Styles.less")
	let dd_styles_styles_light_css = __webpack_require__(/*! ./dd/Styles/Styles.light.css */ "./build.definitions/dd/Styles/Styles.light.css")
	let dd_styles_styles_light_json = __webpack_require__(/*! ./dd/Styles/Styles.light.json */ "./build.definitions/dd/Styles/Styles.light.json")
	let dd_styles_styles_light_nss = __webpack_require__(/*! ./dd/Styles/Styles.light.nss */ "./build.definitions/dd/Styles/Styles.light.nss")
	let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
	let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")
	
	module.exports = {
		application_app : application_app,
		dd_actions_application_appupdate_action : dd_actions_application_appupdate_action,
		dd_actions_application_appupdatefailuremessage_action : dd_actions_application_appupdatefailuremessage_action,
		dd_actions_application_appupdateprogressbanner_action : dd_actions_application_appupdateprogressbanner_action,
		dd_actions_application_appupdatesuccessmessage_action : dd_actions_application_appupdatesuccessmessage_action,
		dd_actions_application_logout_action : dd_actions_application_logout_action,
		dd_actions_application_navtoabout_action : dd_actions_application_navtoabout_action,
		dd_actions_application_navtoactivitylog_action : dd_actions_application_navtoactivitylog_action,
		dd_actions_application_navtosupport_action : dd_actions_application_navtosupport_action,
		dd_actions_application_onwillupdate_action : dd_actions_application_onwillupdate_action,
		dd_actions_application_reset_action : dd_actions_application_reset_action,
		dd_actions_application_resetmessage_action : dd_actions_application_resetmessage_action,
		dd_actions_application_usermenupopover_action : dd_actions_application_usermenupopover_action,
		dd_actions_closemodalpage_cancel_action : dd_actions_closemodalpage_cancel_action,
		dd_actions_closemodalpage_complete_action : dd_actions_closemodalpage_complete_action,
		dd_actions_closepage_action : dd_actions_closepage_action,
		dd_actions_createentityfailuremessage_action : dd_actions_createentityfailuremessage_action,
		dd_actions_createentitysuccessmessage_action : dd_actions_createentitysuccessmessage_action,
		dd_actions_deleteconfirmation_action : dd_actions_deleteconfirmation_action,
		dd_actions_deleteentityfailuremessage_action : dd_actions_deleteentityfailuremessage_action,
		dd_actions_deleteentitysuccessmessage_action : dd_actions_deleteentitysuccessmessage_action,
		dd_actions_errorarchive_errorarchive_syncfailure_action : dd_actions_errorarchive_errorarchive_syncfailure_action,
		dd_actions_errorarchive_navtoerrorarchive_detail_action : dd_actions_errorarchive_navtoerrorarchive_detail_action,
		dd_actions_errorarchive_navtoerrorarchive_list_action : dd_actions_errorarchive_navtoerrorarchive_list_action,
		dd_actions_genericbannermessage_action : dd_actions_genericbannermessage_action,
		dd_actions_genericmessagebox_action : dd_actions_genericmessagebox_action,
		dd_actions_genericnavigation_action : dd_actions_genericnavigation_action,
		dd_actions_generictoastmessage_action : dd_actions_generictoastmessage_action,
		dd_actions_logging_loguploadfailure_action : dd_actions_logging_loguploadfailure_action,
		dd_actions_logging_loguploadsuccessful_action : dd_actions_logging_loguploadsuccessful_action,
		dd_actions_logging_uploadlog_action : dd_actions_logging_uploadlog_action,
		dd_actions_logging_uploadlogprogress_action : dd_actions_logging_uploadlogprogress_action,
		dd_actions_purl_header_table_header_table_createentity_action : dd_actions_purl_header_table_header_table_createentity_action,
		dd_actions_purl_header_table_header_table_createitem_table_action : dd_actions_purl_header_table_header_table_createitem_table_action,
		dd_actions_purl_header_table_header_table_deleteentity_action : dd_actions_purl_header_table_header_table_deleteentity_action,
		dd_actions_purl_header_table_header_table_detailpopover_action : dd_actions_purl_header_table_header_table_detailpopover_action,
		dd_actions_purl_header_table_header_table_updateentity_action : dd_actions_purl_header_table_header_table_updateentity_action,
		dd_actions_purl_header_table_navtoheader_table_create_action : dd_actions_purl_header_table_navtoheader_table_create_action,
		dd_actions_purl_header_table_navtoheader_table_createitem_table_action : dd_actions_purl_header_table_navtoheader_table_createitem_table_action,
		dd_actions_purl_header_table_navtoheader_table_detail_action : dd_actions_purl_header_table_navtoheader_table_detail_action,
		dd_actions_purl_header_table_navtoheader_table_edit_action : dd_actions_purl_header_table_navtoheader_table_edit_action,
		dd_actions_purl_header_table_navtoheader_table_list_action : dd_actions_purl_header_table_navtoheader_table_list_action,
		dd_actions_purl_item_table_item_table_createentity_action : dd_actions_purl_item_table_item_table_createentity_action,
		dd_actions_purl_item_table_item_table_deleteentity_action : dd_actions_purl_item_table_item_table_deleteentity_action,
		dd_actions_purl_item_table_item_table_updateentity_action : dd_actions_purl_item_table_item_table_updateentity_action,
		dd_actions_purl_item_table_navtoitem_table_create_action : dd_actions_purl_item_table_navtoitem_table_create_action,
		dd_actions_purl_item_table_navtoitem_table_detail_action : dd_actions_purl_item_table_navtoitem_table_detail_action,
		dd_actions_purl_item_table_navtoitem_table_edit_action : dd_actions_purl_item_table_navtoitem_table_edit_action,
		dd_actions_purl_item_table_navtoitem_table_list_action : dd_actions_purl_item_table_navtoitem_table_list_action,
		dd_actions_purl_service_closeoffline_action : dd_actions_purl_service_closeoffline_action,
		dd_actions_purl_service_closeofflinefailuremessage_action : dd_actions_purl_service_closeofflinefailuremessage_action,
		dd_actions_purl_service_closeofflinesuccessmessage_action : dd_actions_purl_service_closeofflinesuccessmessage_action,
		dd_actions_purl_service_downloadoffline_action : dd_actions_purl_service_downloadoffline_action,
		dd_actions_purl_service_downloadstartedmessage_action : dd_actions_purl_service_downloadstartedmessage_action,
		dd_actions_purl_service_initializeoffline_action : dd_actions_purl_service_initializeoffline_action,
		dd_actions_purl_service_initializeofflinefailuremessage_action : dd_actions_purl_service_initializeofflinefailuremessage_action,
		dd_actions_purl_service_syncfailuremessage_action : dd_actions_purl_service_syncfailuremessage_action,
		dd_actions_purl_service_syncstartedmessage_action : dd_actions_purl_service_syncstartedmessage_action,
		dd_actions_purl_service_uploadoffline_action : dd_actions_purl_service_uploadoffline_action,
		dd_actions_updateentityfailuremessage_action : dd_actions_updateentityfailuremessage_action,
		dd_actions_updateentitysuccessmessage_action : dd_actions_updateentitysuccessmessage_action,
		dd_globals_application_appdefinition_version_global : dd_globals_application_appdefinition_version_global,
		dd_globals_application_applicationname_global : dd_globals_application_applicationname_global,
		dd_globals_application_supportemail_global : dd_globals_application_supportemail_global,
		dd_globals_application_supportphone_global : dd_globals_application_supportphone_global,
		dd_i18n_i18n_properties : dd_i18n_i18n_properties,
		dd_jsconfig_json : dd_jsconfig_json,
		dd_pages_application_about_page : dd_pages_application_about_page,
		dd_pages_application_support_page : dd_pages_application_support_page,
		dd_pages_application_useractivitylog_page : dd_pages_application_useractivitylog_page,
		dd_pages_errorarchive_errorarchive_detail_page : dd_pages_errorarchive_errorarchive_detail_page,
		dd_pages_errorarchive_errorarchive_list_page : dd_pages_errorarchive_errorarchive_list_page,
		dd_pages_main_page : dd_pages_main_page,
		dd_pages_purl_header_table_header_table_create_page : dd_pages_purl_header_table_header_table_create_page,
		dd_pages_purl_header_table_header_table_createitem_table_page : dd_pages_purl_header_table_header_table_createitem_table_page,
		dd_pages_purl_header_table_header_table_detail_page : dd_pages_purl_header_table_header_table_detail_page,
		dd_pages_purl_header_table_header_table_edit_page : dd_pages_purl_header_table_header_table_edit_page,
		dd_pages_purl_header_table_header_table_list_page : dd_pages_purl_header_table_header_table_list_page,
		dd_pages_purl_item_table_item_table_create_page : dd_pages_purl_item_table_item_table_create_page,
		dd_pages_purl_item_table_item_table_detail_page : dd_pages_purl_item_table_item_table_detail_page,
		dd_pages_purl_item_table_item_table_edit_page : dd_pages_purl_item_table_item_table_edit_page,
		dd_pages_purl_item_table_item_table_list_page : dd_pages_purl_item_table_item_table_list_page,
		dd_rules_application_appupdatefailure_js : dd_rules_application_appupdatefailure_js,
		dd_rules_application_appupdatesuccess_js : dd_rules_application_appupdatesuccess_js,
		dd_rules_application_clientismultiusermode_js : dd_rules_application_clientismultiusermode_js,
		dd_rules_application_getclientsupportversions_js : dd_rules_application_getclientsupportversions_js,
		dd_rules_application_getclientversion_js : dd_rules_application_getclientversion_js,
		dd_rules_application_onwillupdate_js : dd_rules_application_onwillupdate_js,
		dd_rules_application_resetappsettingsandlogout_js : dd_rules_application_resetappsettingsandlogout_js,
		dd_rules_logging_loglevels_js : dd_rules_logging_loglevels_js,
		dd_rules_logging_settracecategories_js : dd_rules_logging_settracecategories_js,
		dd_rules_logging_setuserloglevel_js : dd_rules_logging_setuserloglevel_js,
		dd_rules_logging_togglelogging_js : dd_rules_logging_togglelogging_js,
		dd_rules_logging_tracecategories_js : dd_rules_logging_tracecategories_js,
		dd_rules_logging_userlogsetting_js : dd_rules_logging_userlogsetting_js,
		dd_rules_purl_errorarchive_checkforsyncerror_js : dd_rules_purl_errorarchive_checkforsyncerror_js,
		dd_rules_purl_header_table_header_table_deleteconfirmation_js : dd_rules_purl_header_table_header_table_deleteconfirmation_js,
		dd_rules_purl_item_table_item_table_deleteconfirmation_js : dd_rules_purl_item_table_item_table_deleteconfirmation_js,
		dd_rules_service_initialize_js : dd_rules_service_initialize_js,
		dd_services_purl_service : dd_services_purl_service,
		dd_styles_styles_css : dd_styles_styles_css,
		dd_styles_styles_less : dd_styles_styles_less,
		dd_styles_styles_light_css : dd_styles_styles_light_css,
		dd_styles_styles_light_json : dd_styles_styles_light_json,
		dd_styles_styles_light_nss : dd_styles_styles_light_nss,
		tsconfig_json : tsconfig_json,
		version_mdkbundlerversion : version_mdkbundlerversion
	}

/***/ }),

/***/ "./build.definitions/dd/Rules/Application/AppUpdateFailure.js":
/*!********************************************************************!*\
  !*** ./build.definitions/dd/Rules/Application/AppUpdateFailure.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
    let result = clientAPI.actionResults.AppUpdate.error.toString();
    var message;
    console.log(result);
    if (result.startsWith('Error: Uncaught app extraction failure:')) {
        result = 'Error: Uncaught app extraction failure:';
    }
    if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
        result = 'Application instance is not up or running';
    }
    if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
        result = 'Service instance not found.';
    }

    switch (result) {
        case 'Service instance not found.':
            message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
            break;
        case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
            message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
            break;
        case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
            message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
            break;
        case 'Error: Uncaught app extraction failure:':
            message = 'Error extracting metadata. Please redeploy and try again.';
            break;
        case 'Application instance is not up or running':
            message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
            break;
        default:
            message = result;
            break;
    }
    return clientAPI.getPageProxy().executeAction({
        "Name": "/dd/Actions/Application/AppUpdateFailureMessage.action",
        "Properties": {
            "Duration": 0,
            "Message": message
        }
    });
}

/***/ }),

/***/ "./build.definitions/dd/Rules/Application/AppUpdateSuccess.js":
/*!********************************************************************!*\
  !*** ./build.definitions/dd/Rules/Application/AppUpdateSuccess.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
    return (new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, ms);
    }));
}
function AppUpdateSuccess(clientAPI) {
    var message;
    // Force a small pause to let the progress banner show in case there is no new version available
    return sleep(500).then(function() {
        let result = clientAPI.actionResults.AppUpdate.data;
        console.log(result);

        let versionNum = result.split(': ')[1];
        if (result.startsWith('Current version is already up to date')) {
            return clientAPI.getPageProxy().executeAction({
                "Name": "/dd/Actions/Application/AppUpdateSuccessMessage.action",
                "Properties": {
                    "Message": `You are already using the latest version: ${versionNum}`,
                    "NumberOfLines": 2
                }
            });
        } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
            message = 'No Application metadata found. Please deploy your application and try again.';
            return clientAPI.getPageProxy().executeAction({
                "Name": "/dd/Actions/Application/AppUpdateSuccessMessage.action",
                "Properties": {
                    "Duration": 5,
                    "Message": message,
                    "NumberOfLines": 2
                }
            });
        }
    });
}

/***/ }),

/***/ "./build.definitions/dd/Rules/Application/ClientIsMultiUserMode.js":
/*!*************************************************************************!*\
  !*** ./build.definitions/dd/Rules/Application/ClientIsMultiUserMode.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientIsMultiUserMode)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ClientIsMultiUserMode(clientAPI) {
    return clientAPI.isAppInMultiUserMode();
}

/***/ }),

/***/ "./build.definitions/dd/Rules/Application/GetClientSupportVersions.js":
/*!****************************************************************************!*\
  !*** ./build.definitions/dd/Rules/Application/GetClientSupportVersions.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientSupportVersions)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientSupportVersions(clientAPI) {
    let versionInfo = clientAPI.getVersionInfo();
    let versionStr = '';
    Object.keys(versionInfo).forEach(function(key, index) {
        // key: the name of the object key
        // index: the ordinal position of the key within the object
        //console.log(`Key: ${key}   Index: ${index}`);
        if (key != 'Application Version') {
            versionStr += `${key}: ${versionInfo[key]}\n`;
        }
    });
    return versionStr;
}

/***/ }),

/***/ "./build.definitions/dd/Rules/Application/GetClientVersion.js":
/*!********************************************************************!*\
  !*** ./build.definitions/dd/Rules/Application/GetClientVersion.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientVersion)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientVersion(clientAPI) {
    let versionInfo = clientAPI.getVersionInfo();
    if (versionInfo.hasOwnProperty('Application Version')) {
        return versionInfo['Application Version'];
    }
}

/***/ }),

/***/ "./build.definitions/dd/Rules/Application/OnWillUpdate.js":
/*!****************************************************************!*\
  !*** ./build.definitions/dd/Rules/Application/OnWillUpdate.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
    return clientAPI.executeAction('/dd/Actions/Application/OnWillUpdate.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/dd/Actions/purl/Service/CloseOffline.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Offline Odata Close Failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/dd/Rules/Application/ResetAppSettingsAndLogout.js":
/*!*****************************************************************************!*\
  !*** ./build.definitions/dd/Rules/Application/ResetAppSettingsAndLogout.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ResetAppSettingsAndLogout(clientAPI) {
    let logger = clientAPI.getLogger();
    let platform = clientAPI.nativescript.platformModule;
    let appSettings = clientAPI.nativescript.appSettingsModule;
    var appId;
    if (platform && (platform.isIOS || platform.isAndroid)) {
        appId = clientAPI.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
    } else {
        appId = 'WindowsClient';
    }
    try {
        // Remove any other app specific settings
        appSettings.getAllKeys().forEach(key => {
            if (key.substring(0, appId.length) === appId) {
                appSettings.remove(key);
            }
        });
    } catch (err) {
        logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
    } finally {
        // Logout 
        return clientAPI.getPageProxy().executeAction('/dd/Actions/Application/Reset.action');
    }
}

/***/ }),

/***/ "./build.definitions/dd/Rules/Logging/LogLevels.js":
/*!*********************************************************!*\
  !*** ./build.definitions/dd/Rules/Logging/LogLevels.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogLevels)
/* harmony export */ });
function LogLevels(clientAPI) {
    var levels = [];
    levels.push({
        'DisplayValue': 'Error',
        'ReturnValue': 'Error',
    });
    levels.push({
        'DisplayValue': 'Warning',
        'ReturnValue': 'Warn',
    });
    levels.push({
        'DisplayValue': 'Info',
        'ReturnValue': 'Info',
    });
    levels.push({
        'DisplayValue': 'Debug',
        'ReturnValue': 'Debug',
    });
    levels.push({
        'DisplayValue': 'Trace',
        'ReturnValue': 'Trace',
    });
    return levels;
}

/***/ }),

/***/ "./build.definitions/dd/Rules/Logging/SetTraceCategories.js":
/*!******************************************************************!*\
  !*** ./build.definitions/dd/Rules/Logging/SetTraceCategories.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetTraceCategories)
/* harmony export */ });
function SetTraceCategories(clientAPI) {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
    const odataTrace = fcsection.getControl('odataTrace');

    try {
        if (traceCategory.getValue()) {
            var values = traceCategory.getValue();
            var categories = [];

            if (values && values.length) {
                categories = values.map((value) => {
                    return 'mdk.trace.' + value.ReturnValue;
                });
            }
            clientAPI.setDebugSettings(odataTrace.getValue(), true, categories);
        }
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

/***/ }),

/***/ "./build.definitions/dd/Rules/Logging/SetUserLogLevel.js":
/*!***************************************************************!*\
  !*** ./build.definitions/dd/Rules/Logging/SetUserLogLevel.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetUserLogLevel)
/* harmony export */ });
function SetUserLogLevel(clientAPI) {
    try {
        if (clientAPI.getValue() && clientAPI.getValue()[0]) {
            var logger = clientAPI.getLogger();
            var listPickerValue = clientAPI.getValue()[0].ReturnValue;
            if (listPickerValue) {
                switch (listPickerValue) {
                    case 'Debug':
                        logger.setLevel('Debug');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Error':
                        logger.setLevel('Error');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Warn':
                        logger.setLevel('Warn');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Info':
                        logger.setLevel('Info');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Trace':
                        logger.setLevel('Trace');
                        ShowTraceOptions(clientAPI, true);
                        break;
                    default:
                        // eslint-disable-next-line no-console
                        console.log(`unrecognized key ${listPickerValue}`);
                }
                return listPickerValue;
            }
        }
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

function ShowTraceOptions(clientAPI, tracingEnabled) {
    let categories = clientAPI.getPageProxy().getControl('SectionedTable').getControl('TracingCategoriesListPicker');
    let odataTrace = clientAPI.getPageProxy().getControl('SectionedTable').getControl('odataTrace');

    categories.setVisible(tracingEnabled);
    odataTrace.setVisible(tracingEnabled);
}

/***/ }),

/***/ "./build.definitions/dd/Rules/Logging/ToggleLogging.js":
/*!*************************************************************!*\
  !*** ./build.definitions/dd/Rules/Logging/ToggleLogging.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleLogging)
/* harmony export */ });
function ToggleLogging(clientAPI) {
    try {
        var logger = clientAPI.getLogger();
        const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
        const fcsection = sectionedTable.getSection('FormCellSection0');
        const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
        const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
        let switchValue = enableLogSwitch.getValue();
        if (switchValue) {
            logger.on();
            logLevelListPicker.setVisible(true);
            logLevelListPicker.setEditable(true);
            logLevelListPicker.redraw();
        } else {
            logger.off();
            logLevelListPicker.setEditable(false);
            logLevelListPicker.setVisible(false);
            logLevelListPicker.redraw();
        }
        return switchValue;
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

/***/ }),

/***/ "./build.definitions/dd/Rules/Logging/TraceCategories.js":
/*!***************************************************************!*\
  !*** ./build.definitions/dd/Rules/Logging/TraceCategories.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TraceCategories)
/* harmony export */ });
function TraceCategories(clientAPI) {
    var categories = ['action', 'api', 'app', 'binding', 'branding',
        'core', 'i18n', 'lcms', 'logging', 'odata', 'onboarding', 'profiling', 'push',
        'restservice', 'settings', 'targetpath', 'ui'
    ];

    var values = [];
    categories.forEach((category) => {
        values.push({
            'DisplayValue': category,
            'ReturnValue': category,
        });
    });

    return values;
}

/***/ }),

/***/ "./build.definitions/dd/Rules/Logging/UserLogSetting.js":
/*!**************************************************************!*\
  !*** ./build.definitions/dd/Rules/Logging/UserLogSetting.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserLogSetting)
/* harmony export */ });
function UserLogSetting(clientAPI) {

    try {
        var logger = clientAPI.getLogger();

        const sectionedTable = clientAPI.getControl('SectionedTable');
        const fcsection = sectionedTable.getSection('FormCellSection0');
        const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
        const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
        const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
        const odataTrace = fcsection.getControl('odataTrace');


        //Persist the user logging preferences
        if (logger) {
            console.log("in logger state");
            if (logger.isTurnedOn()) {
                if (enableLogSwitch) {
                    enableLogSwitch.setValue(true);
                }
                if (logLevelListPicker) {
                    logLevelListPicker.setEditable(true);
                }
            } else {
                if (enableLogSwitch) {
                    enableLogSwitch.setValue(false);
                }
                if (logLevelListPicker) {
                    logLevelListPicker.setEditable(false);
                }
            }
            var logLevel = logger.getLevel();
            if (logLevel) {
                if (logLevelListPicker) {
                    logLevelListPicker.setValue([logLevel]);
                }
            }
            if (logLevel === 'Trace') {
                traceCategory.setVisible(true);
                odataTrace.setVisible(true);
            }

            //Upon selecting a value in the List picker and clicking the back button 
            //will enable the onload page rule. This will set the selected value
            //in the control
            if (logLevelListPicker.getValue()[0]) {
                var returnValue = logLevelListPicker.getValue()[0].ReturnValue;
                if (returnValue) {
                    logLevelListPicker.setValue([returnValue]);
                    logger.setLevel(returnValue);
                }
            }
        }
    } catch (exception) {
        // eslint-disable-next-line no-console
        console.log(String(exception), 'Error User Logger could not be set');
    }
}

/***/ }),

/***/ "./build.definitions/dd/Rules/Service/Initialize.js":
/*!**********************************************************!*\
  !*** ./build.definitions/dd/Rules/Service/Initialize.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Initialize)
/* harmony export */ });
function Initialize(context) {

    // Perform pre data initialization task

    // Initialize all your Data sources
    let _purl = context.executeAction('/dd/Actions/purl/Service/InitializeOffline.action');

    //You can add more service initialize actions here

    return Promise.all([_purl]).then(() => {
        // After Initializing the DB connections

        // Display successful initialization  message to the user
        return context.executeAction({

            "Name": "/dd/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": "Application Services Initialized",
                "Animated": true,
                "Duration": 1,
                "IsIconHidden": true,
                "NumberOfLines": 1
            }
        });
    }).catch(() => {
        return false;
    });
}

/***/ }),

/***/ "./build.definitions/dd/Rules/purl/ErrorArchive_CheckForSyncError.js":
/*!***************************************************************************!*\
  !*** ./build.definitions/dd/Rules/purl/ErrorArchive_CheckForSyncError.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckForSyncError)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} context
 */
function CheckForSyncError(context) {
    context.count('/dd/Services/purl.service', 'ErrorArchive', '').then(errorCount => {
        if (errorCount > 0) {
            return context.getPageProxy().executeAction('/dd/Actions/ErrorArchive/ErrorArchive_SyncFailure.action').then(function() {
                return Promise.reject(false);
            });
        }
    });
}

/***/ }),

/***/ "./build.definitions/dd/Rules/purl/Header_table/Header_table_DeleteConfirmation.js":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/dd/Rules/purl/Header_table/Header_table_DeleteConfirmation.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/dd/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/dd/Actions/purl/Header_table/Header_table_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/dd/Rules/purl/Item_table/Item_table_DeleteConfirmation.js":
/*!*************************************************************************************!*\
  !*** ./build.definitions/dd/Rules/purl/Item_table/Item_table_DeleteConfirmation.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/dd/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/dd/Actions/purl/Item_table/Item_table_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/dd/Styles/Styles.css":
/*!************************************************!*\
  !*** ./build.definitions/dd/Styles/Styles.css ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/
	`, "",{"version":3,"sources":["webpack://./build.definitions/dd/Styles/Styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n\t"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/dd/Styles/Styles.less":
/*!*************************************************!*\
  !*** ./build.definitions/dd/Styles/Styles.less ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/`, "",{"version":3,"sources":["webpack://./build.definitions/dd/Styles/Styles.less"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/dd/Styles/Styles.light.css":
/*!******************************************************!*\
  !*** ./build.definitions/dd/Styles/Styles.light.css ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/dd/Styles/Styles.light.nss":
/*!******************************************************!*\
  !*** ./build.definitions/dd/Styles/Styles.light.nss ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../../../css-loader/dist/runtime/api.js":
/*!**************************************************!*\
  !*** ../../../../css-loader/dist/runtime/api.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../../../css-loader/dist/runtime/sourceMaps.js":
/*!*********************************************************!*\
  !*** ../../../../css-loader/dist/runtime/sourceMaps.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./build.definitions/dd/Pages/Application/About.page":
/*!***********************************************************!*\
  !*** ./build.definitions/dd/Pages/Application/About.page ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"KeyAndValues":[{"_Name":"KeyValue0","KeyName":"User ID","Value":"#Application/#AppData/UserId","Visible":true},{"Value":"#Application/#AppData/DeviceId","_Name":"KeyValue1","KeyName":"Device ID","Visible":true},{"Value":"/dd/Globals/Application/ApplicationName.global","_Name":"KeyValue2","KeyName":"Application","Visible":true},{"Value":"/dd/Globals/Application/AppDefinition_Version.global","_Name":"KeyValue3","KeyName":"Application Metadata Version","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}},{"KeyAndValues":[{"Value":"/dd/Rules/Application/GetClientVersion.js","_Name":"KeyValue4","KeyName":"Client Version","Visible":"$(PLT,true,true,false)"},{"Value":"/dd/Rules/Application/GetClientSupportVersions.js","_Name":"KeyValue5","KeyName":"Client Support Versions","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue1","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"About","Caption":"About","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/dd/Actions/CloseModalPage_Complete.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/dd/Pages/Application/Support.page":
/*!*************************************************************!*\
  !*** ./build.definitions/dd/Pages/Application/Support.page ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ContactCell","_Name":"SectionContactCellTable1","EmptySection":{"FooterVisible":false},"ContactCells":[{"ContactCell":{"_Name":"ContactCellItem0","Headline":"Contact Support","ActivityItems":[{"ActivityType":"Phone","ActivityValue":"/dd/Globals/Application/SupportPhone.global"},{"ActivityType":"Email","ActivityValue":"/dd/Globals/Application/SupportEmail.global"},{"ActivityType":"Message","ActivityValue":"/dd/Globals/Application/SupportPhone.global"}]}}]},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":false,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.SimplePropertyCollection","_Name":"SectionSimplePropertyCollection0","Visible":"$(PLT,true,true,false)","EmptySection":{"FooterVisible":false},"SimplePropertyCells":[{"SimplePropertyCell":{"_Name":"SectionSimplePropertyCell0","KeyName":"Activity Log","AccessoryType":"DisclosureIndicator","Visible":"$(PLT,true,true,false)","OnPress":"/dd/Actions/Application/NavToActivityLog.action"}}],"Layout":{"NumberOfColumns":1,"MinimumInteritemSpacing":66}}]}],"_Type":"Page","_Name":"Settings","Caption":"Settings","PrefersLargeCaption":false,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/dd/Actions/CloseModalPage_Complete.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/dd/Pages/Application/UserActivityLog.page":
/*!*********************************************************************!*\
  !*** ./build.definitions/dd/Pages/Application/UserActivityLog.page ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Controls":[{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"EnableLogSwitch","IsVisible":true,"Separator":true,"Caption":"Enable Logging","OnValueChange":"/dd/Rules/Logging/ToggleLogging.js","IsEditable":true},{"IsSearchEnabled":false,"_Type":"Control.Type.FormCell.ListPicker","_Name":"LogLevelListPicker","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Log Level","OnValueChange":"/dd/Rules/Logging/SetUserLogLevel.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":false,"PickerItems":"/dd/Rules/Logging/LogLevels.js"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"TracingCategoriesListPicker","IsVisible":false,"Separator":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Tracing Categories","PickerPrompt":"Select Categories for Tracing","OnValueChange":"/dd/Rules/Logging/SetTraceCategories.js","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":"/dd/Rules/Logging/TraceCategories.js"},{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"odataTrace","IsVisible":false,"Separator":true,"Caption":"OData Tracing","OnValueChange":"/dd/Rules/Logging/SetTraceCategories.js","IsEditable":true}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection0"},{"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"Send","IsVisible":true,"Separator":true,"Title":"Send Activity Log","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Enabled":true,"OnPress":"/dd/Actions/Logging/UploadLogProgress.action"}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection1"}]}],"_Type":"Page","_Name":"UserActivityLog","Caption":"Activity Log","PrefersLargeCaption":false,"OnLoaded":"/dd/Rules/Logging/UserLogSetting.js"}

/***/ }),

/***/ "./build.definitions/dd/Pages/ErrorArchive/ErrorArchive_Detail.page":
/*!**************************************************************************!*\
  !*** ./build.definitions/dd/Pages/ErrorArchive/ErrorArchive_Detail.page ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"KeyAndValues":[{"Value":"{Message}","_Name":"KeyValue0","KeyName":"Error","Visible":true},{"Value":"{RequestBody}","_Name":"KeyValue1","KeyName":"Request Body","Visible":true},{"Value":"{RequestURL}","_Name":"KeyValue2","KeyName":"Request URL","Visible":true},{"Value":"{HTTPStatusCode}","_Name":"KeyValue3","KeyName":"HTTP Status Code","Visible":true},{"Value":"{RequestMethod}","_Name":"KeyValue4","KeyName":"Request Method","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"ErrorArchive_Detail","Caption":"Details","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/dd/Pages/ErrorArchive/ErrorArchive_List.page":
/*!************************************************************************!*\
  !*** ./build.definitions/dd/Pages/ErrorArchive/ErrorArchive_List.page ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ObjectTable","Target":{"Service":"/dd/Services/purl.service","EntitySet":"ErrorArchive"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false,"Caption":"No record found!"},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{HTTPStatusCode}","Subhead":"{RequestURL}","Footnote":"{Message}","StatusText":"{RequestMethod}","AvatarStack":{"ImageIsCircular":false},"PreserveIconStackSpacing":false,"AccessoryType":"None","OnPress":"/dd/Actions/ErrorArchive/NavToErrorArchive_Detail.action","Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"ErrorArchive_List","Caption":"Error List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/dd/Pages/Main.page":
/*!**********************************************!*\
  !*** ./build.definitions/dd/Pages/Main.page ***!
  \**********************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable","Sections":[{"Header":{"_Name":"SectionHeader_purl","AccessoryType":"None","UseTopPadding":true,"Caption":"purl","_Type":"SectionCommon.Type.Header"},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Buttons":[{"OnPress":"/dd/Actions/purl/Header_table/NavToHeader_table_List.action","Alignment":"Center","Title":"Header_table","ButtonType":"Text","Semantic":"Tint","_Type":"ButtonTable.Type.Button"},{"OnPress":"/dd/Actions/purl/Item_table/NavToItem_table_List.action","Alignment":"Center","Title":"Item_table","ButtonType":"Text","Semantic":"Tint","_Type":"ButtonTable.Type.Button"}],"_Name":"SectionButtonTable_purl","_Type":"Section.Type.ButtonTable"}]}],"_Name":"Main","_Type":"Page","Caption":"Main","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"User Menu","Icon":"sap-icon://customer","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/dd/Actions/Application/UserMenuPopover.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/dd/Pages/purl_Header_table/Header_table_Create.page":
/*!*******************************************************************************!*\
  !*** ./build.definitions/dd/Pages/purl_Header_table/Header_table_Create.page ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/dd/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/dd/Actions/purl/Header_table/Header_table_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"$(L,Create_Header_table_Detail)","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","_Name":"doc_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"eventTypeName","_Name":"eventTypeName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"title","_Name":"title","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"status","_Name":"status","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"date_created","_Name":"date_created","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Header_table_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/dd/Pages/purl_Header_table/Header_table_CreateItem_table.page":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/dd/Pages/purl_Header_table/Header_table_CreateItem_table.page ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/dd/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/dd/Actions/purl/Header_table/Header_table_CreateItem_table.action","Position":"Right","SystemItem":"Save"}]},"Caption":"$(L,Create_Item_table)","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Header_table","Service":"/dd/Services/purl.service"}},"_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker","Value":"{doc_id}"},{"Caption":"itemid","_Name":"itemid","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"item_name","_Name":"item_name","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"improvise_amount","KeyboardType":"Number","_Name":"improvise_amount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"price","_Name":"price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"quantity","_Name":"quantity","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Header_table_CreateItem_table","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/dd/Pages/purl_Header_table/Header_table_Detail.page":
/*!*******************************************************************************!*\
  !*** ./build.definitions/dd/Pages/purl_Header_table/Header_table_Detail.page ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,Header_table_Detail)","DesignTimeTarget":{"Service":"/dd/Services/purl.service","EntitySet":"Header_table","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/dd/Actions/purl/Header_table/NavToHeader_table_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/dd/Actions/purl/Header_table/Header_table_DetailPopover.action","Position":"Right","Caption":"More"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{title}","Subhead":"{doc_id}","BodyText":"","Footnote":"{status}","Description":"{eventTypeName}","StatusText":"{date_created}","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"doc_id","Value":"{doc_id}"},{"KeyName":"eventTypeName","Value":"{eventTypeName}"},{"KeyName":"title","Value":"{title}"},{"KeyName":"status","Value":"{status}"},{"KeyName":"date_created","Value":"{date_created}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"header_item_rel","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{itemid}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{item_name}","Footnote":"{improvise_amount}","PreserveIconStackSpacing":false,"StatusText":"{price}","Subhead":"{doc_id}","SubstatusText":"{quantity}","OnPress":"/dd/Actions/purl/Item_table/NavToItem_table_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/header_item_rel","Service":"/dd/Services/purl.service"},"_Type":"Section.Type.ObjectTable"}],"DataSubscriptions":["Item_table"],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Header_table_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/dd/Pages/purl_Header_table/Header_table_Edit.page":
/*!*****************************************************************************!*\
  !*** ./build.definitions/dd/Pages/purl_Header_table/Header_table_Edit.page ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,Update_Header_table_Detail)","DesignTimeTarget":{"Service":"/dd/Services/purl.service","EntitySet":"Header_table","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/dd/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/dd/Actions/purl/Header_table/Header_table_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","_Name":"doc_id","Value":"{doc_id}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"eventTypeName","_Name":"eventTypeName","Value":"{eventTypeName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"title","_Name":"title","Value":"{title}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"status","_Name":"status","Value":"{status}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"date_created","_Name":"date_created","Value":"{date_created}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Header_table_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/dd/Pages/purl_Header_table/Header_table_List.page":
/*!*****************************************************************************!*\
  !*** ./build.definitions/dd/Pages/purl_Header_table/Header_table_List.page ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,Header_table)","ActionBar":{"Items":[{"OnPress":"/dd/Actions/purl/Header_table/NavToHeader_table_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{eventTypeName}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/dd/Actions/purl/Header_table/NavToHeader_table_Detail.action","StatusImage":"","Title":"{title}","Footnote":"{status}","PreserveIconStackSpacing":false,"StatusText":"{date_created}","Subhead":"{doc_id}","SubstatusText":""},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Header_table","Service":"/dd/Services/purl.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Header_table_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/dd/Pages/purl_Item_table/Item_table_Create.page":
/*!***************************************************************************!*\
  !*** ./build.definitions/dd/Pages/purl_Item_table/Item_table_Create.page ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/dd/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/dd/Actions/purl/Item_table/Item_table_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"$(L,Create_Item_table_Detail)","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Header_table","Service":"/dd/Services/purl.service"}},"_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"itemid","_Name":"itemid","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"item_name","_Name":"item_name","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"improvise_amount","KeyboardType":"Number","_Name":"improvise_amount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"price","_Name":"price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"quantity","_Name":"quantity","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Item_table_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/dd/Pages/purl_Item_table/Item_table_Detail.page":
/*!***************************************************************************!*\
  !*** ./build.definitions/dd/Pages/purl_Item_table/Item_table_Detail.page ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,Item_table_Detail)","DesignTimeTarget":{"Service":"/dd/Services/purl.service","EntitySet":"Item_table","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/dd/Actions/purl/Item_table/NavToItem_table_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/dd/Rules/purl/Item_table/Item_table_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{item_name}","Subhead":"{doc_id}","BodyText":"","Footnote":"{improvise_amount}","Description":"{itemid}","StatusText":"{price}","StatusImage":"","SubstatusImage":"","SubstatusText":"{quantity}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"doc_id","Value":"{doc_id}"},{"KeyName":"itemid","Value":"{itemid}"},{"KeyName":"item_name","Value":"{item_name}"},{"KeyName":"improvise_amount","Value":"{improvise_amount}"},{"KeyName":"price","Value":"{price}"},{"KeyName":"quantity","Value":"{quantity}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Item_table_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/dd/Pages/purl_Item_table/Item_table_Edit.page":
/*!*************************************************************************!*\
  !*** ./build.definitions/dd/Pages/purl_Item_table/Item_table_Edit.page ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,Update_Item_table_Detail)","DesignTimeTarget":{"Service":"/dd/Services/purl.service","EntitySet":"Item_table","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/dd/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/dd/Actions/purl/Item_table/Item_table_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Header_table","Service":"/dd/Services/purl.service"}},"Value":"{doc_id}","_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker","IsEditable":false},{"Caption":"itemid","_Name":"itemid","Value":"{itemid}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"item_name","_Name":"item_name","Value":"{item_name}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"improvise_amount","_Name":"improvise_amount","Value":"{improvise_amount}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"price","_Name":"price","Value":"{price}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"quantity","_Name":"quantity","Value":"{quantity}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Item_table_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/dd/Pages/purl_Item_table/Item_table_List.page":
/*!*************************************************************************!*\
  !*** ./build.definitions/dd/Pages/purl_Item_table/Item_table_List.page ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,Item_table)","ActionBar":{"Items":[{"OnPress":"/dd/Actions/purl/Item_table/NavToItem_table_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{itemid}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/dd/Actions/purl/Item_table/NavToItem_table_Detail.action","StatusImage":"","Title":"{item_name}","Footnote":"{improvise_amount}","PreserveIconStackSpacing":false,"StatusText":"{price}","Subhead":"{doc_id}","SubstatusText":"{quantity}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Item_table","Service":"/dd/Services/purl.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Item_table_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"_Name":"dd","Version":"/dd/Globals/Application/AppDefinition_Version.global","MainPage":"/dd/Pages/Main.page","OnLaunch":"/dd/Rules/Service/Initialize.js","OnWillUpdate":"/dd/Rules/Application/OnWillUpdate.js","OnDidUpdate":"/dd/Rules/Service/Initialize.js","Styles":"/dd/Styles/Styles.css","Localization":"/dd/i18n/i18n.properties","_SchemaVersion":"24.7","StyleSheets":{"Styles":{"css":"/dd/Styles/Styles.light.css","ios":"/dd/Styles/Styles.light.nss","android":"/dd/Styles/Styles.light.json"}},"SDKStyles":{"ios":"/dd/Styles/Styles.light.nss","android":"/dd/Styles/Styles.light.json"}}

/***/ }),

/***/ "./build.definitions/dd/Actions/Application/AppUpdate.action":
/*!*******************************************************************!*\
  !*** ./build.definitions/dd/Actions/Application/AppUpdate.action ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/dd/Rules/Application/AppUpdateFailure.js","OnSuccess":"/dd/Rules/Application/AppUpdateSuccess.js"}

/***/ }),

/***/ "./build.definitions/dd/Actions/Application/AppUpdateFailureMessage.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/dd/Actions/Application/AppUpdateFailureMessage.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to update application - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/dd/Actions/Application/AppUpdateProgressBanner.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/dd/Actions/Application/AppUpdateProgressBanner.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/dd/Actions/Application/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/dd/Actions/Application/AppUpdateSuccessMessage.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/dd/Actions/Application/AppUpdateSuccessMessage.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Update application complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/dd/Actions/Application/Logout.action":
/*!****************************************************************!*\
  !*** ./build.definitions/dd/Actions/Application/Logout.action ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":true}

/***/ }),

/***/ "./build.definitions/dd/Actions/Application/NavToAbout.action":
/*!********************************************************************!*\
  !*** ./build.definitions/dd/Actions/Application/NavToAbout.action ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/dd/Pages/Application/About.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/dd/Actions/Application/NavToActivityLog.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/dd/Actions/Application/NavToActivityLog.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/dd/Pages/Application/UserActivityLog.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/dd/Actions/Application/NavToSupport.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/dd/Actions/Application/NavToSupport.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"NavigationType":"Cross","PageToOpen":"/dd/Pages/Application/Support.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/dd/Actions/Application/OnWillUpdate.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/dd/Actions/Application/OnWillUpdate.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"A new version of the application is now ready to apply. Do you want to update to this version?","Title":"New Version Available!","OKCaption":"Now","CancelCaption":"Later","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ }),

/***/ "./build.definitions/dd/Actions/Application/Reset.action":
/*!***************************************************************!*\
  !*** ./build.definitions/dd/Actions/Application/Reset.action ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":false}

/***/ }),

/***/ "./build.definitions/dd/Actions/Application/ResetMessage.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/dd/Actions/Application/ResetMessage.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?","Title":"Reset","OKCaption":"Yes","OnOK":"/dd/Rules/Application/ResetAppSettingsAndLogout.js","CancelCaption":"No"}

/***/ }),

/***/ "./build.definitions/dd/Actions/Application/UserMenuPopover.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/dd/Actions/Application/UserMenuPopover.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Enabled":true,"Icon":"sap-icon://synchronize","OnPress":"/dd/Actions/purl/Service/SyncStartedMessage.action","Title":"Sync Changes","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://headset","OnPress":"/dd/Actions/Application/NavToSupport.action","Title":"Support","Visible":true},{"Enabled":true,"Icon":"sap-icon://refresh","OnPress":"/dd/Actions/Application/AppUpdateProgressBanner.action","Title":"Check for Updates","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://hint","OnPress":"/dd/Actions/Application/NavToAbout.action","Title":"About","Visible":true},{"Enabled":true,"Icon":"sap-icon://reset","OnPress":"/dd/Actions/Application/ResetMessage.action","Title":"Reset","Visible":true},{"Enabled":true,"Icon":"sap-icon://log","OnPress":"/dd/Actions/Application/Logout.action","Title":"Logout","Visible":"/dd/Rules/Application/ClientIsMultiUserMode.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/dd/Actions/CloseModalPage_Cancel.action":
/*!*******************************************************************!*\
  !*** ./build.definitions/dd/Actions/CloseModalPage_Cancel.action ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/dd/Actions/CloseModalPage_Complete.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/dd/Actions/CloseModalPage_Complete.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/dd/Actions/ClosePage.action":
/*!*******************************************************!*\
  !*** ./build.definitions/dd/Actions/ClosePage.action ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/dd/Actions/CreateEntityFailureMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/dd/Actions/CreateEntityFailureMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Create entity failure - {#ActionResults:create/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/dd/Actions/CreateEntitySuccessMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/dd/Actions/CreateEntitySuccessMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity created","IsIconHidden":true,"OnSuccess":"/dd/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/dd/Actions/DeleteConfirmation.action":
/*!****************************************************************!*\
  !*** ./build.definitions/dd/Actions/DeleteConfirmation.action ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"Delete current entity?","Title":"Confirmation","OKCaption":"OK","CancelCaption":"Cancel","ActionResult":{"_Name":"DeleteConfirmation"}}

/***/ }),

/***/ "./build.definitions/dd/Actions/DeleteEntityFailureMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/dd/Actions/DeleteEntityFailureMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Delete entity failure - {#ActionResults:delete/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/dd/Actions/DeleteEntitySuccessMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/dd/Actions/DeleteEntitySuccessMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity deleted","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/dd/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/dd/Actions/ErrorArchive/ErrorArchive_SyncFailure.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/dd/Actions/ErrorArchive/ErrorArchive_SyncFailure.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","Message":"Upload failed!","Duration":0,"Animated":false,"OnActionLabelPress":"/dd/Actions/ErrorArchive/NavToErrorArchive_List.action","ActionLabel":"View Errors"}

/***/ }),

/***/ "./build.definitions/dd/Actions/ErrorArchive/NavToErrorArchive_Detail.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/dd/Actions/ErrorArchive/NavToErrorArchive_Detail.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/dd/Pages/ErrorArchive/ErrorArchive_Detail.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/dd/Actions/ErrorArchive/NavToErrorArchive_List.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/dd/Actions/ErrorArchive/NavToErrorArchive_List.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/dd/Pages/ErrorArchive/ErrorArchive_List.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/dd/Actions/GenericBannerMessage.action":
/*!******************************************************************!*\
  !*** ./build.definitions/dd/Actions/GenericBannerMessage.action ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","ActionResult":{"_Name":"GenericBannerMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/dd/Actions/GenericMessageBox.action":
/*!***************************************************************!*\
  !*** ./build.definitions/dd/Actions/GenericMessageBox.action ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"GenericMessageBox"},"Message":"Message","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/dd/Actions/GenericNavigation.action":
/*!***************************************************************!*\
  !*** ./build.definitions/dd/Actions/GenericNavigation.action ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"GenericNavigation"},"PageToOpen":"/dd/Pages/Main.page"}

/***/ }),

/***/ "./build.definitions/dd/Actions/GenericToastMessage.action":
/*!*****************************************************************!*\
  !*** ./build.definitions/dd/Actions/GenericToastMessage.action ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ToastMessage","ActionResult":{"_Name":"GenericToastMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/dd/Actions/Logging/LogUploadFailure.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/dd/Actions/Logging/LogUploadFailure.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Uploading log file failed with error: {#ActionResults:UploadLog/error}","OKCaption":"OK","Title":"Log Upload Failed","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/dd/Actions/Logging/LogUploadSuccessful.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/dd/Actions/Logging/LogUploadSuccessful.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":3,"IsIconHidden":false,"MaxNumberOfLines":1,"Message":"Log File Uploaded","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/dd/Actions/Logging/UploadLog.action":
/*!***************************************************************!*\
  !*** ./build.definitions/dd/Actions/Logging/UploadLog.action ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"ActionResult":{"_Name":"UploadLog"},"ActivityIndicatorText":"Uploading...","OnFailure":"/dd/Actions/Logging/LogUploadFailure.action","OnSuccess":"/dd/Actions/Logging/LogUploadSuccessful.action","ShowActivityIndicator":false,"_Type":"Action.Type.Logger.Upload"}

/***/ }),

/***/ "./build.definitions/dd/Actions/Logging/UploadLogProgress.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/dd/Actions/Logging/UploadLogProgress.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionMessage":"Logs Uploaded","CompletionTimeout":2,"Message":"Uploading Log Files...","OnSuccess":"/dd/Actions/Logging/UploadLog.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/dd/Actions/UpdateEntityFailureMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/dd/Actions/UpdateEntityFailureMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Update entity failure - {#ActionResults:update/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/dd/Actions/UpdateEntitySuccessMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/dd/Actions/UpdateEntitySuccessMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity updated","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/dd/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/dd/Actions/purl/Header_table/Header_table_CreateEntity.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/dd/Actions/purl/Header_table/Header_table_CreateEntity.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/dd/Actions/CreateEntityFailureMessage.action","OnSuccess":"/dd/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#Value","eventTypeName":"#Control:eventTypeName/#Value","title":"#Control:title/#Value","status":"#Control:status/#Value","date_created":"#Control:date_created/#Value"},"Target":{"EntitySet":"Header_table","Service":"/dd/Services/purl.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/dd/Actions/purl/Header_table/Header_table_CreateItem_table.action":
/*!*********************************************************************************************!*\
  !*** ./build.definitions/dd/Actions/purl/Header_table/Header_table_CreateItem_table.action ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"header_item_rel","Target":{"EntitySet":"Header_table","ReadLink":"{@odata.readLink}"}},"OnFailure":"/dd/Actions/CreateEntityFailureMessage.action","OnSuccess":"/dd/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#SelectedValue","itemid":"#Control:itemid/#Value","item_name":"#Control:item_name/#Value","improvise_amount":"#Control:improvise_amount/#Value","price":"#Control:price/#Value","quantity":"#Control:quantity/#Value"},"Target":{"EntitySet":"Item_table","Service":"/dd/Services/purl.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/dd/Actions/purl/Header_table/Header_table_DeleteEntity.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/dd/Actions/purl/Header_table/Header_table_DeleteEntity.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Header_table","Service":"/dd/Services/purl.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/dd/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/dd/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/dd/Actions/purl/Header_table/Header_table_DetailPopover.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/dd/Actions/purl/Header_table/Header_table_DetailPopover.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Title":"Add Item_table","OnPress":"/dd/Actions/purl/Header_table/NavToHeader_table_CreateItem_table.action"},{"Title":"Delete","OnPress":"/dd/Rules/purl/Header_table/Header_table_DeleteConfirmation.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/dd/Actions/purl/Header_table/Header_table_UpdateEntity.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/dd/Actions/purl/Header_table/Header_table_UpdateEntity.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Header_table","Service":"/dd/Services/purl.service","ReadLink":"{@odata.readLink}"},"Properties":{"doc_id":"#Control:doc_id/#Value","eventTypeName":"#Control:eventTypeName/#Value","title":"#Control:title/#Value","status":"#Control:status/#Value","date_created":"#Control:date_created/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/dd/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/dd/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/dd/Actions/purl/Header_table/NavToHeader_table_Create.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/dd/Actions/purl/Header_table/NavToHeader_table_Create.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/dd/Pages/purl_Header_table/Header_table_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/dd/Actions/purl/Header_table/NavToHeader_table_CreateItem_table.action":
/*!**************************************************************************************************!*\
  !*** ./build.definitions/dd/Actions/purl/Header_table/NavToHeader_table_CreateItem_table.action ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/dd/Pages/purl_Header_table/Header_table_CreateItem_table.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/dd/Actions/purl/Header_table/NavToHeader_table_Detail.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/dd/Actions/purl/Header_table/NavToHeader_table_Detail.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/dd/Pages/purl_Header_table/Header_table_Detail.page"}

/***/ }),

/***/ "./build.definitions/dd/Actions/purl/Header_table/NavToHeader_table_Edit.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/dd/Actions/purl/Header_table/NavToHeader_table_Edit.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/dd/Pages/purl_Header_table/Header_table_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/dd/Actions/purl/Header_table/NavToHeader_table_List.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/dd/Actions/purl/Header_table/NavToHeader_table_List.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/dd/Pages/purl_Header_table/Header_table_List.page"}

/***/ }),

/***/ "./build.definitions/dd/Actions/purl/Item_table/Item_table_CreateEntity.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/dd/Actions/purl/Item_table/Item_table_CreateEntity.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/dd/Actions/CreateEntityFailureMessage.action","OnSuccess":"/dd/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#SelectedValue","itemid":"#Control:itemid/#Value","item_name":"#Control:item_name/#Value","improvise_amount":"#Control:improvise_amount/#Value","price":"#Control:price/#Value","quantity":"#Control:quantity/#Value"},"Target":{"EntitySet":"Item_table","Service":"/dd/Services/purl.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/dd/Actions/purl/Item_table/Item_table_DeleteEntity.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/dd/Actions/purl/Item_table/Item_table_DeleteEntity.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Item_table","Service":"/dd/Services/purl.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/dd/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/dd/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/dd/Actions/purl/Item_table/Item_table_UpdateEntity.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/dd/Actions/purl/Item_table/Item_table_UpdateEntity.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Item_table","Service":"/dd/Services/purl.service","ReadLink":"{@odata.readLink}"},"Properties":{"doc_id":"#Control:doc_id/#SelectedValue","itemid":"#Control:itemid/#Value","item_name":"#Control:item_name/#Value","improvise_amount":"#Control:improvise_amount/#Value","price":"#Control:price/#Value","quantity":"#Control:quantity/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/dd/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/dd/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/dd/Actions/purl/Item_table/NavToItem_table_Create.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/dd/Actions/purl/Item_table/NavToItem_table_Create.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/dd/Pages/purl_Item_table/Item_table_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/dd/Actions/purl/Item_table/NavToItem_table_Detail.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/dd/Actions/purl/Item_table/NavToItem_table_Detail.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/dd/Pages/purl_Item_table/Item_table_Detail.page"}

/***/ }),

/***/ "./build.definitions/dd/Actions/purl/Item_table/NavToItem_table_Edit.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/dd/Actions/purl/Item_table/NavToItem_table_Edit.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/dd/Pages/purl_Item_table/Item_table_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/dd/Actions/purl/Item_table/NavToItem_table_List.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/dd/Actions/purl/Item_table/NavToItem_table_List.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/dd/Pages/purl_Item_table/Item_table_List.page"}

/***/ }),

/***/ "./build.definitions/dd/Actions/purl/Service/CloseOffline.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/dd/Actions/purl/Service/CloseOffline.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OfflineOData.Close","Service":"/dd/Services/purl.service","Force":true,"ActionResult":{"_Name":"close"},"OnSuccess":"/dd/Actions/purl/Service/CloseOfflineSuccessMessage.action","OnFailure":"/dd/Actions/purl/Service/CloseOfflineFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/dd/Actions/purl/Service/CloseOfflineFailureMessage.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/dd/Actions/purl/Service/CloseOfflineFailureMessage.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failure closing data service - {#ActionResults:close/error}","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/dd/Actions/purl/Service/CloseOfflineSuccessMessage.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/dd/Actions/purl/Service/CloseOfflineSuccessMessage.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Data service closed successfully","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/dd/Actions/purl/Service/DownloadOffline.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/dd/Actions/purl/Service/DownloadOffline.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/dd/Services/purl.service","DefiningRequests":[{"Name":"Header_table","Query":"Header_table"},{"Name":"Item_table","Query":"Item_table"}],"_Type":"Action.Type.OfflineOData.Download","ActionResult":{"_Name":"sync"},"OnFailure":"/dd/Actions/purl/Service/SyncFailureMessage.action","OnSuccess":"/dd/Rules/purl/ErrorArchive_CheckForSyncError.js"}

/***/ }),

/***/ "./build.definitions/dd/Actions/purl/Service/DownloadStartedMessage.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/dd/Actions/purl/Service/DownloadStartedMessage.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Download in progress...","CompletionMessage":"Download Successful","CompletionTimeout":7,"OnSuccess":"/dd/Actions/purl/Service/DownloadOffline.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/dd/Actions/purl/Service/InitializeOffline.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/dd/Actions/purl/Service/InitializeOffline.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/dd/Services/purl.service","DefiningRequests":[{"Name":"Header_table","Query":"Header_table"},{"Name":"Item_table","Query":"Item_table"}],"_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"ActivityIndicatorText":"Downloading...","ActionResult":{"_Name":"init"},"OnFailure":"/dd/Actions/purl/Service/InitializeOfflineFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/dd/Actions/purl/Service/InitializeOfflineFailureMessage.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/dd/Actions/purl/Service/InitializeOfflineFailureMessage.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/dd/Actions/purl/Service/SyncFailureMessage.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/dd/Actions/purl/Service/SyncFailureMessage.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Sync offline data service failure - {#ActionResults:sync/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/dd/Actions/purl/Service/SyncStartedMessage.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/dd/Actions/purl/Service/SyncStartedMessage.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Upload in progress...","CompletionMessage":"Sync completed","CompletionTimeout":7,"OnSuccess":"/dd/Actions/purl/Service/UploadOffline.action","OnFailure":"/dd/Actions/purl/Service/SyncFailureMessage.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/dd/Actions/purl/Service/UploadOffline.action":
/*!************************************************************************!*\
  !*** ./build.definitions/dd/Actions/purl/Service/UploadOffline.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/dd/Services/purl.service","_Type":"Action.Type.OfflineOData.Upload","ActionResult":{"_Name":"sync"},"OnSuccess":"/dd/Actions/purl/Service/DownloadStartedMessage.action","OnFailure":"/dd/Actions/purl/Service/SyncFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/dd/Globals/Application/AppDefinition_Version.global":
/*!*******************************************************************************!*\
  !*** ./build.definitions/dd/Globals/Application/AppDefinition_Version.global ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/dd/Globals/Application/ApplicationName.global":
/*!*************************************************************************!*\
  !*** ./build.definitions/dd/Globals/Application/ApplicationName.global ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"MDK App","_Type":"String"}

/***/ }),

/***/ "./build.definitions/dd/Globals/Application/SupportEmail.global":
/*!**********************************************************************!*\
  !*** ./build.definitions/dd/Globals/Application/SupportEmail.global ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"Value":"support@mycompany.com","_Type":"String"}

/***/ }),

/***/ "./build.definitions/dd/Globals/Application/SupportPhone.global":
/*!**********************************************************************!*\
  !*** ./build.definitions/dd/Globals/Application/SupportPhone.global ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1-800-677-7271","_Type":"String"}

/***/ }),

/***/ "./build.definitions/dd/Services/purl.service":
/*!****************************************************!*\
  !*** ./build.definitions/dd/Services/purl.service ***!
  \****************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"purl","OfflineEnabled":true,"LanguageURLParam":"","OnlineOptions":{},"OfflineOptions":{"StoreParameters":{}},"PathSuffix":"","SourceType":"Mobile","ServiceUrl":""}

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "1.1\n";

/***/ }),

/***/ "webpack/container/entry/bundle.js":
/*!***********************!*\
  !*** container entry ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var moduleMap = {
	".": () => {
		return Promise.resolve().then(() => (() => ((__webpack_require__(/*! ./build.definitions/application-index.js */ "./build.definitions/application-index.js")))));
	}
};
var get = (module, getScope) => {
	__webpack_require__.R = getScope;
	getScope = (
		__webpack_require__.o(moduleMap, module)
			? moduleMap[module]()
			: Promise.resolve().then(() => {
				throw new Error('Module "' + module + '" does not exist in container.');
			})
	);
	__webpack_require__.R = undefined;
	return getScope;
};
var init = (shareScope, initScope) => {
	if (!__webpack_require__.S) return;
	var name = "default"
	var oldScope = __webpack_require__.S[name];
	if(oldScope && oldScope !== shareScope) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
	__webpack_require__.S[name] = shareScope;
	return __webpack_require__.I(name, initScope);
};

// This exports getters to disallow modifications
__webpack_require__.d(exports, {
	get: () => (get),
	init: () => (init)
});

/***/ }),

/***/ "./build.definitions/dd/Styles/Styles.light.json":
/*!*******************************************************!*\
  !*** ./build.definitions/dd/Styles/Styles.light.json ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "./build.definitions/dd/jsconfig.json":
/*!********************************************!*\
  !*** ./build.definitions/dd/jsconfig.json ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"compilerOptions":{"module":"esnext","target":"es2019","moduleResolution":"node","lib":["esnext","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	(() => {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = (name, initScope) => {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = (msg) => {
/******/ 				if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 			};
/******/ 			var uniqueName = undefined;
/******/ 			var register = (name, version, factory, eager) => {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			var initExternal = (id) => {
/******/ 				var handleError = (err) => (warn("Initialization of sharing external failed: " + err));
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = (module) => (module && module.init && module.init(__webpack_require__.S[name], initScope))
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("webpack/container/entry/bundle.js");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map