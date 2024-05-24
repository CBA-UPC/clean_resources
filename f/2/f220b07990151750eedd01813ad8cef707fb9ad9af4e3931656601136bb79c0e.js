<html>
    <body>
        <script>
            !function(){function n(t, e){var a = e; a.id = t, parent.postMessage(JSON.stringify(a), "*")}function t(t){var e; try{e = JSON.parse(t.data)} catch (t){}e && ("set" === e.action?function(t, e, a){localStorage.setItem(e, a), n(t, {success:localStorage.getItem(e) === a})}(e.id, e.key, e.value):"get" === e.action?function(t, e){n(t, {key:e, value:localStorage.getItem(e)})}(e.id, e.key):"unset" === e.action?function(t, e){localStorage.removeItem(e), n(t, {})}(e.id, e.key):"key" === e.action?function(t, e){n(t, {key:localStorage.key(e)})}(e.id, e.key):"size" === e.action?function(t){n(t, {size:JSON.stringify(localStorage).len(t, {length:localStorage.length})}(e.id):"clear" === e.action && function(t){localStorage.clear(), n(t, {})}(e.id))}window.addEventListener?window.addEventListener("message", t, !1):window.attachEvent("onmessage", t), function(){try{localStorage.setItem("__blka__", "__blka__"), localStorage.removeItem("__blka__"); parent.postMessage(JSON.stringify({id:"boot"}), "*")} catch (t){}}()}();
        </script>
    </body>
</html>