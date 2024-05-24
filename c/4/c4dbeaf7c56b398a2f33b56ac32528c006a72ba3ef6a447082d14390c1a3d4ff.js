const optaGroups = {
    "groupname": {
        "group-a": { "group": "A", "group_no": "1" },
        "group-b": { "group": "B", "group_no": "2" },
        "group-c": { "group": "C", "group_no": "3" },
        "group-d": { "group": "D", "group_no": "4" }
    }
};

const optaTeams = {
    "teamname": {
        "newzealand": {"team": "850", "optateam": "850", "group": "A",  "group_no": "1"},
        "france": {"team": "650", "optateam": "650", "group": "A",  "group_no": "1"},
        "italy": {"team": "952", "optateam": "952", "group": "A",  "group_no": "1"},
        "uruguay": {"team": "2800", "optateam": "2800", "group": "A",  "group_no": "1"},
        "namibia": {"team": "2900", "optateam": "2900", "group": "A",  "group_no": "1"},
        "south-africa": {"team": "900", "optateam": "900", "group": "B",  "group_no": "2"},
        "ireland": {"team": "600", "optateam": "600", "group": "B",  "group_no": "2"},
        "scotland": {"team": "700", "optateam": "700", "group": "B",  "group_no": "2"},
        "tonga": {"team": "750", "optateam": "750", "group": "B",  "group_no": "2"},
        "romania": {"team": "951", "optateam": "951", "group": "B",  "group_no": "2"},
        "wales": {"team": "500", "optateam": "500", "group": "C",  "group_no": "3"},
        "australia": {"team": "100", "optateam": "100", "group": "C",  "group_no": "3"},
        "fiji": {"team": "954", "optateam": "954", "group": "C",  "group_no": "3"},
        "georgia": {"team": "2850", "optateam": "2850", "group": "C",  "group_no": "3"},
        "portugal": {"team": "958", "optateam": "958", "group": "C",  "group_no": "3"},
        "japan": {"team": "3000", "optateam": "3000", "group": "D",  "group_no": "4"},
        "chile": {"team": "19574", "optateam": "19574", "group": "D",  "group_no": "4"},
        "england": {"team": "550", "optateam": "550", "group": "D",  "group_no": "4"},
        "samoa": {"team": "950", "optateam": "950", "group": "D",  "group_no": "4"},
        "argentina": {"team": "800", "optateam": "800", "group": "D",  "group_no": "4"}
    }
};

const optaPlayers = {
    "playername": {
        "michael-leitch": {"player": "11306", "team": "3000"},
        "inagaki-keita": { "player": "21191", "team": "3000" },
        "craig-millar": { "player": "20930", "team": "3000" },
        "sione-halasili": { "player": "55991", "team": "3000" },
        "gu-jiwon": { "player": "24416", "team": "3000" },
        "kakinaga-shinnosuke": { "player": "22614", "team": "3000" },
        "valu-asaeli-ai": { "player": "26232", "team": "3000" },
        "sakate-atsushi": { "player": "24939", "team": "3000" },
        "horikoshi-kosuke": { "player": "23407", "team": "3000" },
        "horie-shota": { "player": "11304", "team": "3000" },
        "warner-dearns": { "player": "40399", "team": "3000" },
        "james-moore": { "player": "", "team": "3000" },
        "helu-uwe": { "player": "", "team": "3000" },
        "saumaki-amanaki": { "player": "28966", "team": "3000" },
        "amato-fakatava": { "player": "36500", "team": "3000" },
        "fukui-shota": { "player": "29264", "team": "3000" },
        "tevita-tatafu": { "player": "", "team": "3000" },
        "ben-gunter": { "player": "26283", "team": "3000" },
        "himeno-kazuki": { "player": "28962", "team": "3000" },
        "jack-cornelsen": { "player": "23697", "team": "3000" },
        "faulua-makisi": { "player": "", "team": "3000" },
        "nagare-yutaka": { "player": "26492", "team": "3000" },
        "fukuda-kenta": { "player": "36475", "team": "3000" },
        "lee-seungsin": { "player": "37841", "team": "3000" },
        "matsuda-rikiya": { "player": "25307", "team": "3000" },
        "siosaia-fifita": { "player": "30973", "team": "3000" },
        "matsushima-kotaro": { "player": "21961", "team": "3000" },
        "kida-haruto": { "player": "", "team": "3000" },
        "semisi-masirewa": { "player": "18881", "team": "3000" },
        "jone-naikabula": { "player": "28091", "team": "3000" },
        "dylan-riley": { "player": "27652", "team": "3000" },
        "nakano-shogo": { "player": "", "team": "3000" },
        "nakamura-ryoto": { "player": "20606", "team": "3000" },
        "nicholas-mccurran": { "player": "", "team": "3000" },
        "osada-tomoki": { "player": "31059", "team": "3000" },
        "yamanaka-ryohei": { "player": "22646", "team": "3000" },
        "ogura-jumpei": { "player": "26539", "team": "3000" },
        "kobayashi-kenta": { "player": "", "team": "3000" },
        "ito-heiichiro": { "player": "", "team": "3000" },
        "nakamura-shunta": { "player": "", "team": "3000" },
        "pieter-labuschagne": { "player": "19291", "team": "3000" },
        "shimokawa-kanji": { "player": "30962", "team": "3000" },
        "saito-naoto": { "player": "25158", "team": "3000" },
        "shigeno-kaito": { "player": "", "team": "3000" },
        "takahashi-taichi": { "player": "", "team": "3000" },
        "lemeki-lomano-lava": { "player": "24193", "team": "3000" },
        "jamie-joseph": { "player": "", "team": "3000" }
    }
};

const optaMatches = {
    "matchid": {
        "102301": {"memo":"フランス v ニュージーランド"},
        "102305": {"memo":"イングランド v アルゼンチン"},
        "102304": {"memo":"オーストラリア v ジョージア"},
        "102303": {"memo":"アイルランド v ルーマニア"},
        "102302": {"memo":"イタリア v ナミビア"},
        "102308": {"memo":"ウェールズ v フィジー"},
        "102307": {"memo":"南アフリカ v スコットランド"},
        "102306": {"memo":"日本 v チリ"},
        "102309": {"memo":"フランス v ウルグアイ"},
        "102310": {"memo":"ニュージーランド v ナミビア"},
        "102313": {"memo":"アイルランド v トンガ"},
        "102312": {"memo":"ウェールズ v ポルトガル"},
        "102311": {"memo":"サモア v チリ"},
        "102316": {"memo":"イングランド v 日本"},
        "102315": {"memo":"オーストラリア v フィジー"},
        "102314": {"memo":"南アフリカ v ルーマニア"},
        "102317": {"memo":"イタリア v ウルグアイ"},
        "102318": {"memo":"フランス v ナミビア"},
        "102319": {"memo":"アルゼンチン v サモア"},
        "102322": {"memo":"南アフリカ v アイルランド"},
        "102321": {"memo":"イングランド v チリ"},
        "102320": {"memo":"ジョージア v ポルトガル"},
        "102324": {"memo":"ウェールズ v オーストラリア"},
        "102323": {"memo":"スコットランド v トンガ"},
        "102325": {"memo":"ウルグアイ v ナミビア"},
        "102326": {"memo":"日本 v サモア"},
        "102327": {"memo":"ニュージーランド v イタリア"},
        "102330": {"memo":"スコットランド v ルーマニア"},
        "102329": {"memo":"フィジー v ジョージア"},
        "102328": {"memo":"アルゼンチン v チリ"},
        "102332": {"memo":"南アフリカ v トンガ"},
        "102331": {"memo":"オーストラリア v ポルトガル"},
        "102333": {"memo":"ニュージーランド v ウルグアイ"},
        "102334": {"memo":"フランス v イタリア"},
        "102337": {"memo":"アイルランド v スコットランド"},
        "102336": {"memo":"イングランド v サモア"},
        "102335": {"memo":"ウェールズ v ジョージア"},
        "102340": {"memo":"フィジー v ポルトガル"},
        "102339": {"memo":"トンガ v ルーマニア"},
        "102338": {"memo":"日本 v アルゼンチン"},
        "102342": {"memo":"TBC v TBC"},
        "102341": {"memo":"TBC v TBC"},
        "102344": {"memo":"TBC v TBC"},
        "102343": {"memo":"TBC v TBC"},
        "102345": {"memo":"TBC v TBC"},
        "102346": {"memo":"TBC v TBC"},
        "102347": {"memo":"TBC v TBC"},
        "102348": {"memo":"TBC v TBC"},
    }
};

Opta.events.subscribe('widget.drawn', function (widget) {

    // notfoundはaタグを削除
    //jQuery('a.Opta-TournamentTree-MatchLink[href*="notfound"]').hide();
    jQuery('a.Opta-PlayerLink[href*="notfound"],a.Opta-TeamLink[href*="notfound"],a.Opta-MatchLink[href*="notfound"]').contents().unwrap();
    jQuery('.Opta-fixture .Opta-Scoreline').each(function() {
        if (jQuery(this).find('.Opta-Penalties').length > 0 ) {
            jQuerydiv>');
            jQuery(this).parent('.Opta-fixture-content').addClass('Opta-penalties-style');
        }
    });
    // アコーディオンは常にオープン
    jQuery('div.Opta-Accordion h3.Opta-Exp').addClass('Opta-Open');
    jQuery('div.Opta-Accordion ul.Opta-TabbedContent li div').attr('style', 'display: block;');

    // リーチマイケルのリンクをまとめページへ向ける
    jQuery("a[href='/sports/rugby/player/michael-leitch/']").attr("href", "/feature/titlelist/michael-leitch/");

    // undefinedは未定に変更
    //jQuery('td.Opta-Team-undefined.Opta-TeamName').text('（未定）');
    // 日程ページのundefinedを未定に変更
    //jQuery('td.Opta-Team-TBC').text('（未定）');

    //jQuery('.opta-article-tournament-tree a.Opta-TournamentTree-MatchLink').attr('target', '_parent');
});

function consoleDebug(log) {
    //console.log(log);
}

var opta_settings = {
    subscription_id: '46c0497d12d51ca36ea311d1c16041e3',
    language: 'ja_JP',
    timezone: 'Asia/Tokyo',
    link_callback: function (params) {
        var link = '/sports/rugby/';

        // Players
        if (params.player) {
            consoleDebug('params.player:' + params.player);
            for (let playername in optaPlayers['playername']) {
                const row = optaPlayers['playername'][playername];
                if (params.player == row.player) {
                    link += 'player/' + playername + "/";
                    return link;
                }
            }
            return 'notfound';
        }

        // Teams
        if (params.team) {
            consoleDebug('params.team:' + params.team);
            for (let teamname in optaTeams['teamname']) {
                const row = optaTeams['teamname'][teamname];
                if (params.team == row.team || params.team == row.optateam) {
                    link += 'teams/' + teamname + "/";
                    return link;
                }
            }
            return 'notfound';
        }

        // Matches
        if (params.match) {
            consoleDebug('params.match:' + params.match);
            link += 'match/' + params.match + "/";
            return link;
        }
        return 'notfound';
    }
};