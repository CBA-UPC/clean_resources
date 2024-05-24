// Dummy global data handler

var onlylow = false;

function nullDataHandler()
{
}

// Global error data handler
function errorHandler(transaction, error,query)
{
    su_console('E','SQL ERROR:' + error.message +' on Query:' + query,transaction, error);
}

function ajaxRequestMultiplePDF(issueId, issue, pages)
{

	 //su_console('D',"ajaxRequestMultiplePDF: " + BASE_AJAX_URL + '&action=multipledownload&issue=' + issue + pages + '&TAUID='+localStorageX.getItem('TAUID')+ '&MACHINEID=' + localStorageX.getItem('MACHINEID'));
   $.ajax({
      url : BASE_AJAX_URL + '&action=multipledownload&issue=' + issue + pages + '&TAUID='+localStorageX.getItem(udbDatabase+'_TAUID')
            + '&MACHINEID=' + machineId,
      success : function(data) {
         if (validationErrorCheck(data, issue)) {
            var str = JSON.stringify(data);
   //	          su_console('L',"TAERROR : Ajax returned invalid data for index" + JSON.stringify(data));
            if (str.indexOf('ready')<=0) {
                  // Sample [{"issue":"20100609","mtime":"20100610 10:10:16"}]
                su_console('E',"TAERROR : PDF File not generated" + JSON.stringify(data));
            } else {

               var elem = document.getElementById("downloadmask");
               if(browser_prefix === "-moz")
               {
                  elem.innerHTML = messages['pdfGenerated'] + "<br />" +
                  "<input ontouchstart='"+OBJNAME('buildDownloadLink')+"("+JSON.stringify(data)+")' onclick='"+OBJNAME('buildDownloadLink')+"("+JSON.stringify(data)+")' style='margin-left:auto; margin-right:7px; color: white; background-color: rgba(0,0,0,.2); border: 2px solid #fff; -moz-border-radius:4px; width:100px; height:30px' type='button' value='" + labels['downloadButton'] + "'>" +
                  "<input ontouchstart='"+OBJNAME('deleteDownloadmask')+"()' onclick='"+OBJNAME('deleteDownloadmask')+"()' style='margin-left:7px; margin-right:auto; color: white; background-color: rgba(0,0,0,.2); border: 2px solid #fff; -moz-border-radius:4px; width:100px; height:30px' type='button' value='" + labels['cancelButton'] + "'>";
               }
               else if(browser_prefix === "-ms")
               {
                  elem.innerHTML = messages['pdfGenerated'] + "<br />" +
                  "<input ontouchstart='"+OBJNAME('buildDownloadLink')+"("+JSON.stringify(data)+")' onclick='"+OBJNAME('buildDownloadLink')+"("+JSON.stringify(data)+")' style='margin-left:auto; margin-right:7px; color: white; background-color: rgba(0,0,0,.2); border: 2px solid #fff; border-radius:4px; width:100px; height:30px' type='button' value='" + labels['downloadButton'] + "'>" +
                  "<input ontouchstart='"+OBJNAME('deleteDownloadmask')+"()' onclick='"+OBJNAME('deleteDownloadmask')+"()' style='margin-left:7px; margin-right:auto; color: white; background-color: rgba(0,0,0,.2); border: 2px solid #fff; border-radius:4px; width:100px; height:30px' type='button' value='" + labels['cancelButton'] + "'>";
               }
               else
               {
                  elem.innerHTML = messages['pdfGenerated'] + "<br />" +
                  "<input ontouchstart='"+OBJNAME('buildDownloadLink')+"("+JSON.stringify(data)+")' onclick='"+OBJNAME('buildDownloadLink')+"("+JSON.stringify(data)+")' style='margin-left:auto; margin-right:7px; color: white; background-color: rgba(0,0,0,.2); border: 2px solid #fff; -webkit-border-radius:4px; width:100px; height:30px' type='button' value='" + labels['downloadButton'] + "'>" +
                  "<input ontouchstart='"+OBJNAME('deleteDownloadmask')+"()' onclick='"+OBJNAME('deleteDownloadmask')+"()' style='margin-left:7px; margin-right:auto; color: white; background-color: rgba(0,0,0,.2); border: 2px solid #fff; -webkit-border-radius:4px; width:100px; height:30px' type='button' value='" + labels['cancelButton'] + "'>";
               }
            }
         }
      },
      error: function(request, textStatus, error) {
         // Continue offline
         su_console('E',"TAERROR : Unable to read index. " + request + " Status: " + textStatus + " Error: "+ error);
      }
   });
}

// This method must be used only if is NOT from web: seems to be UNUSED
function DB_setFromLocalIssues() {
}

/**
 * Mark all issues as deleted, then start ajax request to
 * compare local issues with remote (newspaper mtime check)
 * @param maxIssues
 * @global DEFAULT_MAX_ISSUES
 */
// This method must be used only if is NOT from web: seems to be UNUSED

/* ************************************************************************** */

/**
 * Ajax request for issues loading remote issues
 * @param maxIssues
 */
function ajaxRequestIssues(maxIssues)
{
   $.ajax({
      url : BASE_AJAX_URL + '&action=issues&maxIssues=' + maxIssues,
      success : function(data) {
      	var datastr = JSON.stringify(data);
			if (datastr.indexOf('issue":')<=0) {
					// Sample [{"issue":"20100609","mtime":"20100610 10:10:16"}]
	          su_console('E',"TAERROR : Ajax returned invalid data requesting Issues ",BASE_AJAX_URL + '&action=issues&maxIssues=' + maxIssues, datastr);
         } else {
            var isMostRecentIssue = true;
            // su_console('L',"returned data : "  ,JSON.stringify(data));
            for (var i = 0; i < data.length && i < maxIssues; i++) {
               if (isMostRecentIssue == true) {
                  currentNewspaper.setIssue(data[i].issue);
               }
               new DB_Issue(data[i], isMostRecentIssue).save();
               isMostRecentIssue = false;
            }
         }
      },
      error: function(request, textStatus, error) {
         // Continue offline
         su_console('E',"TAERROR : Unable to read issues. " + request + " Status: " + textStatus + " Error: "+ error);
      }
   });
}


// ctor for DB_Issue class
// @param data {issue, mtime} issue = "20100624"; mtime = "20100624 10:09:21"
// @param loadIndex if true trigger ajax request to download index
//
function DB_Issue(data, loadIndex) {
   this.data = data;
   this.loadIndex = loadIndex;
	this.downloadIssue = 0;
	this.downloadSettings = -1;
}



 DB_Issue.prototype.download = function(radio)
{
	su_console('D','Download : ', radio);
	this.downloadIssue = 1;
	this.loadIndex = true;
	this.downloadSettings = radio;
	this.save();
}

// * Ajax request for index loading
// This method must be used only if is NOT from web: seems to be UNUSED
function ajaxRequestIndex(issueId, issue, downloadSettings){
   if((enableDebugConsole == '1') && console) { console.log("[tecnavia.db.ajaxRequestIndex] Starting..."); }
}

// This method must be used only if is NOT from web

var db_Called=0;
var db_Created = 0;
function DB_createTables_handler(transaction,results,callback,par1) {
	db_Called--;
	if (db_Called == 0 && callback) {
		callback(db_Created,par1);
	}	
}

// This method must be used only if is NOT from web

// This method must be used only if is NOT from web
function DB_deleteLocalStorage(){
}

// This method must be used only if is NOT from web

// This method must be used only if is NOT from web
var db_alert=0;
function DB_flushOlderDays() {
}

// This method must be used only if is NOT from web

// This method must be used only if is NOT from web
function DB_deleteOldIssueDbAndData(deleteIssue, deletePaper) {
   su_console('D'," - DB_deleteOldIssueDbAndData issue: " + deleteIssue);
}

// This method must be used only if is NOT from web
function DB_deleteOldIssueWithPages(deleteIssueId, deleteIssue, deletePaper) {
   su_console('D'," - DB_deleteOldIssueWithPages issueId: " + deleteIssueId);
}
