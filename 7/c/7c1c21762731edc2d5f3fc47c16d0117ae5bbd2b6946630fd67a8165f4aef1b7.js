<!DOCTYPE html>
<script>
  var query = parseQuery(location.search || "?");
  var userId = get_id("local", query.uid);
  var sessionId = get_id("session", query.sid);

  // bug!
  // mobile safari causes session storage in 3rd party iframe
  // to be merged with local storage
  if (sessionId.id == userId.id) {
    userId = {
      id: query.uid,
      isNew: false
    };
    sessionId = {
      id: query.sid,
      isNew: false
    };
  }

  var ids = { userId: userId, sessionId: sessionId };

  document.write(JSON.stringify(ids));
  if (window.parent != null) {
    window.parent.postMessage(
      JSON.stringify({ name: "sidearm-scids", ids: ids }),
   id, isNew: isNew };
  }

  function generateUUID() {
    var d = Date.now();
    var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxx8).toString(16);
    });
    return uuid;
  }
</script>
