body.blog,
body.archive {
	background-color: rgba(0,0,0,0.03) !important;
}

body.archive .archive-header {
	display: none;
}

.blog .wrapper,
.archive .wrapper {
	display: flex;
	padding: 0 30px;
	margin: 0 auto;
	max-width: 168rem;
}

.blog .wrapper #site-content,
.archive .wrapper #site-content{ 
	overflow: visible;
}

.blog .post .post-meta-edit-link-wrapper,
.archive .post .post-meta-edit-link-wrapper {
	display: none;
}

.blog .post,
.archive .post {
	background: var(--c-white);
	margin: 2rem 0 4rem;
	max-width: 100%;
	padding-bottom: 4rem;
	position: relative;
}

.blog .post p,
.archive .post p {
	font-size: 1.5rem;
}

.blog .post .entry-title a:after,
.archive .post .entry-title a:after {
	background:url(assets/images/icon-arrow.svg) no-repeat center center;
	content:"";
	height: 24px;
	position: absolute;
	right:4rem;
	top: 4rem;
	transition: .2s ease all;
	width: 24px;
}

.blog .post .entry-title a:hover:after,
.archive .post .entry-title a:hover:after {
	right: 3.5rem;
}

.blog .post .entry-content,
.archive .post .entry-content {
	border-top: 2px solid rgba(0,0,0,0.06);
	padding-top: 4rem;
}

.blog .post .post-author,
.archive .post .post-author {
	display: none;
}

.blog .featured-media,
.archive .featured-media {
	display: none;
}

@media (min-width: 700px) {
	body:not(.singular) main > article.post {
		padding: 4rem 0;
	}

	.blog .post .entry-title,
	.archive .post .entry-title{
		max-width: 90%;
		font-weight: 500;
		font-size: 9rem;
		line-height: .9;
	}

	.blog .post-meta li,
	.archive .post-meta li {
		margin: 0rem 0 0 3rem;
	}
}

.blog .entry-content > *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.is-style-wide),
.archive .entry-content > *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.is-style-wide) {
	max-width: 100rem;
	width: calc(100% - 8rem);
}
