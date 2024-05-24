<html>
	<head>
		<link id="default-theme" rel="stylesheet"/>
		<link id="theme" rel="stylesheet"/>
	</head>
	<style type="text/css">
		.hide-logo .vwo-logo {
			display: none
		}
	</style>
	<style id="custom-theme-css"></style>
	<body>
		<!-- Prefix All template ID attribute values with `t-` to differentiate b/w template and other html -->
		<script type="text/template" id="t-welcome">
			<span><%= data.message %></span>
		</script>

		<script type="text/template" id="t-thankyou">
			<span><%= data.message %></span>
		</script>

		<script type="text/template" id="t-askEmail">
			<input type="email" name="email"/>
		</script>

		<script type="text/template" id="t-error-msg">
			<%= errMsg %>
		</script>

		<script type="text/template" id="t-radio-question">
			<ul class="question">
				<% _.forEach(question.options, function (option) { %>
					<li class="choice">
						<input type="radio" id="<%= option.id %>" name="<%= question.id %>" value="<%= option.id %>"/>
						<label class="choice" for="<%= option.id %>"><%= option.name %></label>
						<% if(option.id === 0) { %>
							<input type="text" id="other-input" class="other-input-box" placeholder="Please specify"/>
						<% } %>
					</li>
				<% }) %>
			</ul>
		</script>

		<script type="text/template" id="t-checkbox-question">
			<ul class="question">
				<% _.forEach(question.options, function (option) { %>
					<li class="choice">
						<input type="checkbox" id="<%= option.id %>" name="<%= question.id %>" value="<%= option.id %>"/>
						<label class="choice" for="<%= option.id %>"><%= option.name %></label>
						<% if(option.id === 0) { %>
							<input type="text" id="other-input" class="other-input-box" placeholder="Please specify"/>
						<% } %>
					</li>
				<% }) %>
			</ul>
		</script>

		<script type="text/template" id="t-select-question">
			<select id="dropdown-select" name="<%= question.id %>">
				<option value="">-- Select an option --</option>
				<% _.forEach(question.options, function (option) { %>
					<option value="<%= option.id %>"><%= option.name %></option>
				<% }) %>
			</select>
			<div id="dropdown-select-box" onclick="survey.showDropdownSelect()">
				<div class="selected-option-box">
					<span id="selected-option">-- Select an option --</span>
					<span class="caret"></span>
				</div>
				<ul class="question single">
					<% _.forEach(question.options, function (option, index) { %>
						<%
							// Used index+1 in data-index because we are not adding default option (-- Select an option --) having index 0 in dropdown list
						%>
						<li class="select-choice" value="<%= option.id %>" onclick="survey.setDropdownSelect(event)" data-index="<%= index+1 %>"><%= option.name %></li>
					<% }) %>
				</ul>
			</div>
			<input type="text" id="other-input" class="other-input-box" placeholder="Please specify"/>
		</script>
		<script type="text/template" id="t-multi_select-question">
			<select id="dropdown-select" multiple name="<%= question.id %>">
				<% _.forEach(question.options, function (option) { %>
					<option value="<%= option.id %>"><%= option.name %></option>
				<% }) %>
			</select>
			<div id="dropdown-select-box">
				<ul class="question multiple">
					<% _.forEach(question.options, function (option, index) { %>
						<li class="select-choice" value="<%= option.id %>" onclick="survey.setDropdownSelect(event)" data-index="<%= index %>"><%= option.name %></li>
					<% }) %>
				</ul>
			</div>
			<input type="text" id="other-input" class="other-input-box" placeholder="Please specify"/>
		</script>
		<script type="text/template" id="t-multi_line-question">
			<div class="question">
				<textarea placeholder="<%= question.placeholder %>" name="<%= question.id %>"></textarea>
			</div>
		</script>
		<script type="text/template" id="t-single_line-question">
			<div class="question">
				<input name="<%= question.id %>" placeholder="<%= question.placeholder %>" type="<%= question.inputType %>"/>
			</div>
		</script>

		<script type="text/template" id="t-rating-question">
			<div class="question rating" onclick="survey.setRating(event)">
				<span data-rating="5"></span>
				<span data-rating="4"></span>
				<span data-rating="3"></span>
				<span data-rating="2"></span>
				<span data-rating="1"></span>
				<input id="rating-response" name="<%= question.id %>" type="hidden" />
			</div>
		</script>

		<script type="text/template" id="t-nps-question">
			<ul class="question">
				<% var numbers = [0,1,2,3,4,5,6,7,8,9,10]; %>
				<% _.forEach(numbers, function (num) { %>
					<li class="nps-choice">
						<input type="radio" id="nps-<%= num %>" name="<%= question.id %>" value="<%= num %>"/>
						<label class="nps-choice" for="nps-<%= num %>"><%= num %></label>
					</li>
				<% }) %>
			</ul>
			<div class="nps-info">
				<div class="left-info">Not at all likely</div>
				<div class="right-info">Extremely likely</div>
			</div>
		</script>

		<script type="text/template" id="t-html-question">
			<%= question.html %>
		</script>

		<script type="text/template" id="t-header">
			<% if (ctxt !== 'welcome' && ctxt !== 'thankyou') { %>
				<%= data.title %>
			<% } %>
		</script>
		
		<script type="text/template" id="t-footer">
			<% if(data.survey.customLogo) { %>
			<span class="vwo-logo custom-logo" style="background-image: url('<%= data.survey.logo %>')"></span><% }
			else { %>
			<a class="vwo-logo" target="_blank" href="https://vwo.com/?utm_source=survey&utm_medium=website&utm_campaign=vwo_survey"
			   style="background-image: url('<%= data.survey.logo %>')"></a>
			<% } %>

			<% if (ctxt === 'welcome'){ %> <input id="next" type="button" value="Start"/><% } 
			else if (ctxt === 'askEmail') { %><input id="next" type="button" value="Submit"/><% }
			else if (ctxt === 'question') { %>
				<% if (!data.isLast) { %> <input id="next" type="button" value="Next"/> <% } %>
				<% if (data.isLast) { %> <input id="next" type="button" value="Submit"/> <% } %>
				<% if (data.isSkippable){ %> <input id="skip" type="button" value="Skip"/><% }  %>
			<% } %>
		</script>
		
		<!-- Placeholder in which various views are fitted in -->
		<form action="submit_survey" id="form" novalidate onsubmit="return false;">
			<div id="header"></div>
			<div id="main"></div>
			<div id="error-msg"></div>
		</form>
		
		<div id="footer"></div>
		<!-- Cache certain assets -->
		<iframe id="cache-frame" style="display:none" src="cache-473204f3b76a44bc52746eee12d71fdb.html"></iframe>
		<!-- Execute it after the html so that the elements it tries to find out are there-->
		<script src="survey-ca2ab02bc066da7f91462c87ab0c8ab3.js"></script>
	</body>
</html>
