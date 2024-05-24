body {
	--fsAddBuffer: 0px;
}
[id='coindesk_price_desktop_leaderboard_belowchart'],
[id='coindesk_price_desktop_mrec_right'],
[id='coindesk_price_mobile_leaderboard_belowchart'],
[id='coindesk_article_desktop_leaderboard'],
[id='coindesk_article_desktop_mrec_right'],
[id='coindesk_article_mobile_leaderboard'],
[id='coindesk_homepage_desktop_leaderboard'],
[id='coindesk_homepage_mobile_leaderboard'],
[id='coindesk_article_desktop_highimpactdsk'],
[id='coindesk_price_desktop_highimpactdsk'],
[id='coindesk_price_mobile_highimpactmob'],
[id='coindesk_article_mobile_highimpactmob'],
[id='coindesk_homepage_desktop_highimpactdsk'],
[id='coindesk_homepage_mobile_highimpactmob'] {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	min-height: calc(var(--height) + var(--fsAddBuffer));
	width: 100%;
}
[id='coindesk_article_mobile_highimpactmob'] {
		--height: 280px;
}
[id='coindesk_article_mobile_leaderboard'] {
		--height: 280px;
}
[id='coindesk_homepage_mobile_highimpactmob'] {
		--height: 280px;
}
[id='coindesk_homepage_mobile_leaderboard'] {
		--height: 280px;
}
[id='coindesk_price_mobile_highimpactmob'] {
		--height: 280px;
}
[id='coindesk_price_mobile_leaderboard_belowchart'] {
		--height: 280px;
}
@media only screen and (min-width: 768px) {
	[id='coindesk_article_desktop_highimpactdsk'] {
		--height: 280px;
	}
	[id='coindesk_article_desktop_leaderboard'] {
		--height: 280px;
	}
	[id='coindesk_article_desktop_mrec_right'] {
		--height: 600px;
	}
	[id='coindesk_article_mobile_highimpactmob'] {
		display: none; 
	}
	[id='coindesk_article_mobile_leaderboard'] {
		display: none; 
	}
	[id='coindesk_homepage_desktop_highimpactdsk'] {
		--height: 280px;
	}
	[id='coindesk_homepage_desktop_leaderboard'] {
		--height: 250px;
	}
	[id='coindesk_homepage_mobile_highimpactmob'] {
		display: none; 
	}
	[id='coindesk_homepage_mobile_leaderboard'] {
		display: none; 
	}
	[id='coindesk_price_desktop_highimpactdsk'] {
		--height: 280px;
	}
	[id='coindesk_price_desktop_leaderboard_belowchart'] {
		--height: 180px;
	}
	[id='coindesk_price_desktop_mrec_right'] {
		--height: 250px;
	}
}
@media only screen and (min-width: 1024px) {
	[id='coindesk_price_mobile_highimpactmob'] {
		display: none; 
	}
}
@media only screen and (min-width: 1025px) {
	[id='coindesk_price_mobile_leaderboard_belowchart'] {
		display: none; 
	}
}
@media only screen and (min-width: 1200px) {
	[id='coindesk_article_desktop_highimpactdsk'] {
		--height: 280px;
	}
	[id='coindesk_article_desktop_leaderboard'] {
		--height: 280px;
	}
	[id='coindesk_homepage_desktop_highimpactdsk'] {
		--height: 280px;
	}
	[id='coindesk_price_desktop_highimpactdsk'] {
		--height: 280px;
	}
}
