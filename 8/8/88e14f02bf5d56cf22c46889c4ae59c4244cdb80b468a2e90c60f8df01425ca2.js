.color-accent,
.color-accent-hover:hover,
.color-accent-hover:focus,
:root .has-accent-color,
.has-drop-cap:not(:focus):first-letter,
.wp-block-button.is-style-outline,
.entry-content a {
	color:var(--c-red);
}

blockquote,
.border-color-accent,
.border-color-accent-hover:hover,
.border-color-accent-hover:focus {
	border-color: var(--c-red) !important;
}

.fill-children-accent,
.fill-children-accent * {
	fill:var(--c-red) !important;
}

.styled-separator {
	display: none;
}
n);Cognito.resources={};Cognito.load=function(){if(window.CognitoV2&&CognitoV2.compat)CognitoV2.compat.load.apply(CognitoV2.compat,arguments);else{var n=arguments;Cognito.deferredLoad=function(t){delete Cognito.deferredLoad;t.load.apply(t,n)}}}})()