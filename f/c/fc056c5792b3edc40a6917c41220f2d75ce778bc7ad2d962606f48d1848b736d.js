
(function () {
    if (window.DMAdexInitScript == undefined) {
        window.DMAdexInitScript = true;

                if (typeof window.DMAdexSettings == 'undefined') {
                    window.DMAdexSettings =
                    {
                        PostUrl: "https://adex.dotmetrics.net/adex.dotmetrics",
                        ScriptUrl: "https://adex.dotmetrics.net/Scripts/adexScript.js?v=4",
                        ScriptDebugUrl: "https://download.dotmetrics.net/Script/adexScript.debug.js?v=cc66c406-fd0e-4748-b5c7-677d33856eb2",
                        Debug: false,
                        AdsLimit: 30,
                        LinksLimit: 5,
                        Selectors: "WyIuYmFubmVyIiwiLmJhbm5lcnoiLCIuQmFubmVyIiwiLmJhbmVyV3JhcCIsImlmcmFtZVtpZCo9Z29vZ2xlX2Fkc10iLCJkaXZbaWQqPWdvb2dsZV9hZHNdIiwiaWZyYW1lW3NyYyo9ZG91YmxlY2xpY2tdIiwiaWZyYW1lW3NyYyo9YmFubmVyaWRdIiwiaW1nW3NyYyo9YWRvY2Vhbl0iLCJpZnJhbWVbc3JjKj1hZG9jZWFuXSIsImRpdltpZCo9YWRvY2Vhbl0iLCJpZnJhbWVbc3JjKj1hZHN2Y10iLCJpZnJhbWVbc3JjKj1hZHZcXC5zbG9ib2RuYWRhbG1hY2lqYV0iLCJpZnJhbWVbaWQqPXdwY29tLWlmcmFtZV0iLCJpZnJhbWVbaWQqPWJhbm5lcl0iLCJpZnJhbWVbaWQqPW1hZHNfaWZyYW1lXSIsImlmcmFtZVtpZCo9Z29vZ2xlX2Fkc10iLCJkaXZbaWQqPWdvb2dsZV9pbWFnZV0iLCJpZnJhbWVbc3JjKj1pbnZlbnRhXFwuaHJdIiwiaWZyYW1lW3NyYyo9c3RhdGljXFwuZW1nLW5ldHdvcmtcXC5jb21dIiwiaWZyYW1lW2NsYXNzKj1pbWFnaW5lX3BsYXllcl0iLCJpbWdbc3JjKj1nb29nbGVzeW5kaWNhdGlvbl0iLCJpbWdbc3JjKj1hZHNcXC5kbmV2bmlrXFwuaHJdIiwiaW1nW3NyYyo9c2FzY2RuXSIsImRpdltjbGFzcyo9YmFubmVyXTpub3QoLmpsLWJhbm5lci1zcGFjZSwgLmpsLWJhbm5lci1jb2x1bW4sIC5qbC1zdGlja3ktYmFubmVyKSIsImRpdltjbGFzcyo9YmFubmVyXTpub3QoLmpsLWJhbm5lci1zcGFjZSwgLmpsLWJhbm5lci1jb2x1bW4sIC5qbC1zdGlja3ktYmFubmVyKSBpZnJhbWUiLCJkaXZbY2xhc3MqPXdhbGxwYXBlcl06bm90KC53YWxscGFwZXJfbGVha19maXgsIC5hYm92ZS13YWxscGFwZXIpIiwiZGl2W2NsYXNzKj1kZnBfXSIsImRpdltjbGFzcyo9ZGZwX10gaW1nW2NsYXNzKj1kZnBfXSIsImRpdltjbGFzcyo9aHRfYmxvY2tdIiwiZGl2W2NsYXNzKj1zcGVjaWphbF9pbWdfaGVhZGVyXSIsImRpdltpZCo9YWRfY29udGFpbmVyXSIsImRpdltpZCo9aXByb21dIiwiZGl2W2lkKj1sZWZ0LXdhbGxdIiwiZGl2W2lkKj1yaWdodC13YWxsXSIsImRpdi5pQWRzZXJ2ZXIiLCJkaXYuamwtYmFubmVyLXNwYWNlIiwiaWZyYW1lW3NyYyo9Y2luZXN0YXJdIiwiaWZyYW1lW3NyYyo9YWR2ZXJ0aWN1bVxcLm5ldF0iLCJkaXZbY2xhc3MqPWltYWdpbmUtcGxheWVyXSIsImFbaHJlZio9YmFubmVyaWRdIGltZyIsImFbaHJlZio9YmFubmVyaWRdIHZpZGVvIiwiYVtocmVmKj1hZHNlcnZlclxcLmlwcm9tXFwubmV0XSB2aWRlbyIsImFbaHJlZio9YWRzZXJ2ZXJcXC5pcHJvbVxcLm5ldF0gaW1nIiwiLmNvbHVtbnJpZ2h0IGlmcmFtZSIsImFbaHJlZio9ZXBwXFwuaW5kZXhcXC5ocl0iLCJpZnJhbWVbaWQqPXdhbGxwYXBlci1keW5hbWljXSIsImlmcmFtZVtpZCo9YXN3aWZ0XSIsIi5iYW5uZXJab25lQ29tcG9uZW50IiwiYVtocmVmKj1hZHNlcnZlclxcLmlwcm9tXFwubmV0XSIsIi5jcmVhdGl2ZUFkIHZpZGVvIiwidmlkZW9baWQqPWdlbWl1c10iLCJ2aWRlb1tjbGFzcyo9ZGZwX10iLCIuYWRyb2xsLWJsb2NrIiwiaW5zLmFkc2J5Z29vZ2xlIGlmcmFtZSIsImRpdltjbGFzcyo9YWRzYnlnb29nbGVdIGlmcmFtZSIsImRpdltjbGFzcyo9YWQtZGVza3RvcF0gaWZyYW1lIiwiZGl2W2NsYXNzKj1mcC1oZWFkZXItdmlkZW9dIiwiaW1nW3NyYyo9b2dsYXNpXSIsImlmcmFtZVtzcmMqPWNkbi1zdGF0aWNcXC5ydGxdIiwiaWZyYW1lW3NyYyo9YWRzLWp1dGFybmppXSIsImltZ1tzcmMqPWJhbm5lcl0iLCJkaXZbY2xhc3MqPWFkc10gaW1nW3NyYyo9cmlqZWNhbmluXFwucnRsXSIsImRpdltjbGFzcyo9QmFubmVyWm9uZV0iLCJpZnJhbWVbc3JjKj1ob3N0ZWRfY3JlYXRpdmVzXSIsImlmcmFtZVtjbGFzcyo9ZGZwX10iLCJpbWdbc3JjKj1vc2lqZWswMzFcXC9yZWtsYW1lXSIsImltZ1tzcmMqPWJhbm5lclxcLm1vYlxcLmhyXSIsImlmcmFtZVtzcmMqPW9zaWplazAzMVxcL3Jla2xhbWVdIiwiaWZyYW1lW3NyYyo9bWFya2V0aW5nXFwub3NpamVrMDMxXFwuY29tXSIsImlmcmFtZVtzcmMqPXZpZGVvXFwudmlkNHVcXC5vcmddIiwiaWZyYW1lW3NyYyo9YmFuZXJpXFwudmlkaVxcLmhyXSIsImlmcmFtZVtzcmNkb2MqPXMxXFwuYWRmb3JtXFwubmV0XSIsImlmcmFtZVtzcmMqPWRvdWJsZWNsaWNrXFwubmV0XSIsImlmcmFtZVtpZCo9bWFzX2lmcmFtZV0iLCJpZnJhbWVbaWQqPXJ0bF92aWRlb19mcmFtZV0iLCJpZnJhbWVbc3JjKj1jcml0ZW9cXC5jb21dIiwidmlkZW8ucHVzaGRvd24tdmlkZW8iLCJ2aWRlby5pcHJvbVZpZGVvVGFnIiwiZGl2W2NsYXNzKj1hZC11bml0XSJd",
                        Blacklist: "WyJibG9nLmhyL3NsaWtlIiwibHMuaGl0LmdlbWl1cy5wbCIsImdkZWhyLmhpdC5nZW1pdXMucGwvZ2RlanMvIiwibGlua2VyLmhyIiwiL3NhZmVmcmFtZS8iLCJzdGF0aWN4eC5mYWNlYm9vay5jb20iLCJpbWFzZGsuZ29vZ2xlYXBpcy5jb20vanMvY29yZS9icmlkZ2UiLCJ4LnJhZm9tZWRpYS5jb20iLCJzZWN1cmVwdWJhZHMuZy5kb3VibGVjbGljay5uZXQvcGNzL3ZpZXciLCJ3d3cueW91dHViZS5jb20vZW1iZWQvIiwicG9zYW8uaHIvZmlsZXMvZWxlbWVudGlfemFfb2dsYXNlLyIsIi5jb29saW5hcmlrYS5jb20vcmVjZXB0Iiwid3d3Lmp1dGFybmppLmhyL2luY29taW5nLyIsIi5ydS9zL3QiLCJ0cmF2ZWxhdWRpZW5jZS5jb20iLCJpbnN0YWdyYW0uY29tIiwiaHJ0LmhyL21lZGlhL3VwbG9hZHMvIiwiaW5kZXguaHIvb2dsYXNpL3VzZXJkb2NzaW1hZ2VzLyIsImIucmVmYWRzLnByby9jb2RlIiwiMjRzYXRhLmhyL25ld3MiLCJkcy1yZWNvbW1lbmRlci5zdHlyaWEuaHIvd2lkZ2V0IiwidHJhZmZpYy5zdHlyamEuaHIiLCJwYnMudHdpbWcuY29tL21lZGlhLyIsInNsb2JvZG5hZGFsbWFjaWphLmhyL2JiaW1hZ2VoYW5kbGVyLmFzaHgiLCJuanVza2Fsby5oci9pbWFnZSIsImNlbnRhcnpkcmF2bGphLmhyL3NlcnZlL3d3dy9pbWFnZXMvIiwiYnVybzI0Ny5oci90aHVtYi8iLCJoci5zZWFyY2guZXRhcmdldG5ldC5jb20vZnJvbnRlbmQvbG9nb3MvaHIvIiwiZG9zdGF2ZS5pbmRleC5ociJd",
                        OverrideType: "WyJzZWN1cmVwdWJhZHMuZy5kb3VibGVjbGljay5uZXQiLCAiZ29vZ2xlYWRzLmcuZG91YmxlY2xpY2submV0IiwgIi5tZW4vIl0="
                    };

                    var url = window.location.href;
                    var scriptToLoad;
                    if (url.indexOf("adex_debug=true") >= 0){
                        scriptToLoad= DMAdexSettings.ScriptDebugUrl
                        window.DMAdexSettings.Debug = true;
                    }else{
                        scriptToLoad= DMAdexSettings.ScriptUrl;
                    }

                    var fileref = document.createElement('script');
                    fileref.setAttribute("type", "text/javascript");
                    fileref.setAttribute("async", "async");
                    fileref.setAttribute("src", scriptToLoad);
                    if (typeof fileref != "undefined") {
                        document.getElementsByTagName("head")[0].appendChild(fileref);
                    }
                }
    }
})(window);