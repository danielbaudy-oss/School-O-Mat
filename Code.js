function doGet(e) {
  try {
    var data = e.parameter || {};
    
    // Replace this with YOUR sheet ID from the URL
    var ss = SpreadsheetApp.openById('1WVTlTKCT9RDjqzXb9M04pmQADlXbLHX2gMhPSmKFFDM');
    var sheet = ss.getSheetByName('School-O-Mat Responses');

    sheet.appendRow([
      new Date(),
      data.lang || '',
      data.manzana || '',
      data.distance_pref || '',
      data.pedagogy_pref || '',
      data.facilities_pref || '',
      data.outdoor_pref || '',
      data.arts_pref || '',
      data.top1_code || '',
      data.top1_name || '',
      data.top1_pct || '',
      data.top2_code || '',
      data.top2_name || '',
      data.top2_pct || '',
      data.top3_code || '',
      data.top3_name || '',
      data.top3_pct || ''
    ]);

    return ContentService.createTextOutput('ok');
  } catch(err) {
    return ContentService.createTextOutput('error: ' + err.message);
  }
}