const mapConsoleActionBar = {
  id: "map_console_action_bar",
  view: {
    items: [
      {
        "key": "manageTags",
        "component": "button",
        "title": "Manage",
        "on-click": "reports.manage_report",
        "label": "Manage",
        "icon": "s2AppGear",
        "type": "secondary",
        "variant": "action",
        "quiet": true,
        "show": "@showManageTags",
        "disabled": "$$extensionMap.overrideShowManageTags",
        target: {
          key: "title", value: "Manage",
          viewState: 'replace'
        }
      },
      {

        "key": "selectAll",
        "component": "button",
        "title": "@selectAllTitle",
        "on-click": "SELECT_ALL",
        "label": "@selectAllTitle",
        "variant": "action",
        "extraclass": "select-all-button",
        "quiet": true,
        "show": "@showSelectAllButton",
        "hide": "$$extensionMap.overrideShowManageTags",
        target: {
          key: "key", value: "selectAll",
          viewState: 'replace'
        }
      },
    ]
  }
}

function getAutoCheckoutConfigFromAppModel() {
  const config = tcx.model.getValue(tcx.model.KEYS.EDITOR_CHECKOUT_CONFIG)
  return config === true || config === 'true'
}

const bulkMetadataEditorController = {
  id: "bulkmetadata_report_view",
  controller: {
    rowSelectionChanged() {
      const selectedItems = this.getValue('selectedItems');
      let areReadOnlyFilesSelected = false;
      let autoCheckoutConfig = getAutoCheckoutConfigFromAppModel();

      for (let idx = 0; idx < selectedItems.length; idx++) {
        const item = selectedItems[idx].obj;
        const isLocked = Boolean(item.isCheckedOut);

        if (autoCheckoutConfig && !isLocked) {
          areReadOnlyFilesSelected = true;
          break;
        }
      }

      this.setExtensionAppState('overrideShowManageTags', areReadOnlyFilesSelected);
    }
  }
}

export {
  mapConsoleActionBar,
  bulkMetadataEditorController
}
