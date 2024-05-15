function doPost(e) {
  var data = Utilities.base64Decode(e.parameters.data);
  var blob = Utilities.newBlob(
    data,
    e.parameters.mimetype,
    e.parameters.filename
  );
  DriveApp.createFile(blob);
  var output = HtmlService.createHtmlOutput("<b>Done!</b>");
  output.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return output;
}
