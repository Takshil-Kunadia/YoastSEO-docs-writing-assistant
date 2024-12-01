export const onOpen = () => {
	try {
		// Add a custom menu to the Google Docs UI.
		DocumentApp.getUi()
			.createAddonMenu()
			.addItem('Show Writing Assistant', 'showSideAppScreen')
			.addToUi();
	} catch (f) {
		Logger.log(f.message);
	}
};
