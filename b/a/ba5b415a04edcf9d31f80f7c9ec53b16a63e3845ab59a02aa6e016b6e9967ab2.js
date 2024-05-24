// NOTE: This file does not include any tracking logic.
// It is solely used to detect whether an AdBlocker exists by mocking the import of a javascript file
// that matches a naming convention from the widely used easylist repository.
// Reference: https://github.com/easylist/easylist/blob/master/easylist/easylist_general_block.txt
window.snapMarketingWeb = window.snapMarketingWeb ?? {};
window.snapMarketingWeb.hasAdBlocker = false;
