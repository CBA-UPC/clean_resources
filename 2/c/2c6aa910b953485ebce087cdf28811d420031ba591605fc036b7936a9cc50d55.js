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
        "georgia": {"team": "", "optateam": "", "group": "C",  "group_no": "3"},
        "portugal": {"team": "", "optateam": "", "group": "C",  "group_no": "3"},
        "japan": {"team": "3000", "optateam": "3000", "group": "D",  "group_no": "4"},
        "chile": {"team": "19574", "optateam": "19574", "group": "D",  "group_no": "4"},
        "england": {"team": "550", "optateam": "550", "group": "D",  "group_no": "4"},
        "samoa": {"team": "950", "optateam": "950", "group": "D",  "group_no": "4"},
        "argentina": {"team": "800", "optateam": "800", "group": "D",  "group_no": "4"}
    }
};

const optaPlayers = {
    "playername": {
        "yamashita-ayaka": {"player": "1vejfm6fcp0xeyk30r6hv79wp", "team": "br892lrczd8pow3crz8nain5d"},
        "hayashi-honoka": {"player": "3fta0gg3ghja3x9ouubjjfzl5", "team": "br892lrczd8pow3crz8nain5d"},
        "takahashi-hana": {"player": "43905outcxyxew16255nb0o2x", "team": "br892lrczd8pow3crz8nain5d"},
        "naomoto-hikaru": {"player": "45olmyo7jom78gzac33zh2l79", "team": "br892lrczd8pow3crz8nain5d"},
        "tanaka-mina": {"player": "46a8lc1hgykm6kdhuadiwjk5x", "team": "br892lrczd8pow3crz8nain5d"},
        "chiba-remina": {"player": "5ysy6y85f4766b3eqasuwpf55", "team": "br892lrczd8pow3crz8nain5d"},
        "tanaka-momoko": {"player": "70tf4zvdb6fljoxqdaaesl1wp", "team": "br892lrczd8pow3crz8nain5d"},
        "hamano-maika": {"player": "7b1wnybwn288obuc03bea8962", "team": "br892lrczd8pow3crz8nain5d"},
        "miyake-shiori": {"player": "7flba3n7l2f22dr50xgi2b179", "team": "br892lrczd8pow3crz8nain5d"},
        "sugita-hina": {"player": "7in4ykzbs8p44qy4jrb10p0wl", "team": "br892lrczd8pow3crz8nain5d"},
        "hirao-chika": {"player": "7m2fv4mhu2by1x4do4zcaowk5", "team": "br892lrczd8pow3crz8nain5d"},
        "shimizu-risa": {"player": "7mdnewy67dddv3ahqw1qhbx05", "team": "br892lrczd8pow3crz8nain5d"},
        "hasegawa-yui": {"player": "7op9czmiln7ktmvetw97scz4l", "team": "br892lrczd8pow3crz8nain5d"},
        "fujino-aoba": {"player": "8i8zuouah6iycf9fdfmkdlppm", "team": "br892lrczd8pow3crz8nain5d"},
        "moriya-miyabi": {"player": "9b94qn8vkpl0e7ujskes2m7d", "team": "br892lrczd8pow3crz8nain5d"},
        "ueki-riko": {"player": "a5ew0j9hz4ounrjkeco7g6iuh", "team": "br892lrczd8pow3crz8nain5d"},
        "endo-jun": {"player": "avhmou9ayqv9te0nocy80aga1", "team": "br892lrczd8pow3crz8nain5d"},
        "ishikawa-rion": {"player": "b47f25s8oh0ys3nwykimvywyy", "team": "br892lrczd8pow3crz8nain5d"},
        "seike-kiko": {"player": "d1fnp3b9t3mfz4aj2csayfhwq", "team": "br892lrczd8pow3crz8nain5d"},
        "kumagai-saki": {"player": "diy9eqdcrua61ao4goq5yges5", "team": "br892lrczd8pow3crz8nain5d"},
        "nagano-fuka": {"player": "efvcf4syatkaw5fbo37i5hat", "team": "br892lrczd8pow3crz8nain5d"},
        "miyazawa-hinata": {"player": "enh0z58rrftq2m6hybzhgf65l", "team": "br892lrczd8pow3crz8nain5d"},
        "minami-moeka": {"player": "f98n454u9g97ngyluh0rd4ut", "team": "br892lrczd8pow3crz8nain5d"}
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
        "102333": {"memo":"ニュージーランド v ウルグアオア"},
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
        }
        return link;
    }
};