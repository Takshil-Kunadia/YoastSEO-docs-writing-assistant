global.showHelp = () => {
  Browser.msgBox('Develop Google Apps Script project locally inside VS Code');
};

global.onOpen = () => {
  try {
    // Add a custom menu to the Google Docs UI.
  } catch (f) {
    Logger.log(f.message);
  }
};
