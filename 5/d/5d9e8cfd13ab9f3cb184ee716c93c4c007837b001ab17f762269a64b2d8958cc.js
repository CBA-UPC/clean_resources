(function(){var _w=window;_w.Adform=_w.Adform||{};_w.Adform._uid='';})();/TR/html4/strict.dtd">

<!--
  	This page is intended to be integrated as an invisible iFrame into the Telekom Login login page.
		
		<Service>
            <Type>http://login.idm.telekom.com/extensi*
		   * Function to extract the value of a request parameter from the http-request.
		   * 
		   * @name the name of the parameter to extract
		   * @return the value of the parameter or <code>null</code> if the parameter is not present or has no value
		   */
		function getParameterByName(name) {
			name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
			var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			results = regex.exec(location.search);
			return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
		} 
</script>

</head>
<body>

	<!-- Tealium/WebTrekk -->
		<script type="text/javascript">
			var utag_data = {};
			utag_data["page_content_id"] = "www.telekom.de.privatkunden."
				+getParameterByName("page");
				//+getParameterByName("context")+"_"
				//+getParameterByName("mode")+"."
				//+getParameterByName("status");
			utag_data["page_type"] = "authentication.login";
			utag_data["shop_customer_loginstatus"] = "not-logged-in";

			/* 
			 * Expected values:
			 *
			 * Parameter page contains value "login"
			 * Parameter mode conatins values "web", "mobile", "popup" or "embedded" - only "web" is used by Phoenix
			 * Parameter context contains "auth" or "reauth"
			 * Parameter status contains "first_attempt" or "further_attempts"
			 * 
			*/
		</script>
		<script src="//tags-eu.tiqcdn.com/utag/telekom/phoenix/prod/utag.js"></script> 

</body>
</html>

