/* Copyright (c) 2006-2024 Livesport s.r.o.
 * You are not allowed to copy or redistribute this file.
 */


	


	document.disable_refresh_check_once = 


	document.refresh_alert = };


	window.onunload };

	var inside = false;
	var check_count = 0;
	var checked = false;
	var dont_check_me = false;

/**
 * Get existing league ID
 *
 * @param object
 * @param id
 * @returns Data_Item|null
 *}

/** Set league display
*}}


window.Criteo = window.Criteo || {}; window.Criteo.events = window.Criteo.events || []}
window.callAdblock = window.callAdblock || callAdblock;

// global variables {{{
    // config variables
var cjs = {
        'classes': {},
        'constants':
        {
            'soundSportConfig': {"soccer":{"finished":"commonEndOfGame","correction":"commonCorrection","score-incremented":"commonCheers"},"tennis":{"finished":"tennisGameSetMatch","correction":"commonCorrection","score-incremented":"tennisGameSet","tennis-game":"tennisGame"},"basketball":{"finished":"commonEndOfGame","correction":"commonCorrection"},"hockey":{"finished":"commonEndOfGame","correction":"commonCorrection","score-incremented":"commonCheers"},"american-football":{"finished":"commonEndOfGame","correction":"commonCorrection","score-incremented":"commonCheers"},"baseball":{"finished":"commonEndOfGame","correction":"commonCorrection"},"handball":{"finished":"commonEndOfGame","correction":"commonCorrection"},"rugby-union":{"finished":"commonEndOfGame","correction":"commonCorrection","score-incremented":"commonCheers"},"floorball":{"finished":"commonEndOfGame","correction":"commonCorrection","score-incremented":"commonCheers"},"bandy":{"finished":"commonEndOfGame","correction":"commonCorrection","score-incremented":"commonCheers"},"futsal":{"finished":"commonEndOfGame","correction":"commonCorrection","score-incremented":"commonCheers"},"volleyball":{"correction":"commonCorrection","score-incremented":"commonCheers"},"aussie-rules":{"finished":"commonEndOfGame","correction":"commonCorrection"},"rugby-league":{"finished":"commonEndOfGame","correction":"commonCorrection","score-incremented":"commonCheers"},"cricket":{"finished":"commonEndOfGame","correction":"commonCorrection"},"darts":{"finished":"commonEndOfGame","correction":"commonCorrection"},"snooker":{"finished":"commonEndOfGame","correction":"commonCorrection"},"boxing":{"finished":"commonEndOfGame","correction":"commonCorrection"},"beach-volleyball":{"finished":"commonEndOfGame","correction":"commonCorrection"},"badminton":{"correction":"commonCorrection"},"water-polo":{"finished":"commonEndOfGame","correction":"commonCorrection"},"field-hockey":{"finished":"commonEndOfGame","correction":"commonCorrection"},"table-tennis":{"correction":"commonCorrection"},"beach-soccer":{"finished":"commonEndOfGame","correction":"commonCorrection"},"mma":{"finished":"commonEndOfGame","correction":"commonCorrection"},"netball":{"finished":"commonEndOfGame","correction":"commonCorrection"},"pesapallo":{"finished":"commonEndOfGame","correction":"commonCorrection"},"golf":{"finished":"commonEndOfGame"},"motorsport":[],"motorsport-auto-racing":[],"motorsport-moto-racing":[],"cycling":[],"horse-racing":[],"esports":{"finished":"commonEndOfGame","correction":"commonCorrection"},"winter-sports":[],"winter-sports-ski-jumping":[],"winter-sports-alpine-skiing":[],"winter-sports-cross-country":[],"winter-sports-biathlon":[],"kabaddi":{"finished":"commonEndOfGame","correction":"commonCorrection"}},
            'sportOddsTypeList': {"1":"1x2","2":"12","3":"12","4":"1x2","5":"12","6":"12","7":"1x2","8":"1x2","9":"1x2","10":"1x2","11":"1x2","12":"12","18":"12","19":"1x2","13":"12","14":"12","15":"12","16":"1x2","17":"12","21":"12","22":"1x2","24":"1x2","25":"12","26":"1x2","28":"12","29":"12","30":"1x2","23":"12","31":"12","32":"12","33":"12","34":"12","35":"12","36":"12","37":"12","38":"12","39":"12","40":"12","41":"12","42":"1x2"}        },
        'noDuelSports': [23,31,32,33,34,35,37,38,39,40,41],
        'parentSports': {"32":31,"33":31,"38":37,"39":37,"40":37,"41":37},
        'childSportsCount': 38,
        'categorySports': [2,16,17,21,25,28,23,31,32,33,34,36,37,38,39,40,41],
        eventId: null,
        fromGlobalScope: {},
        'portable': {},
        initialFeeds: [],
        ...cjs,
    };

                    cjs.search = {
            'sortedSports': {"1":0,"2":1,"3":2,"23":3,"4":4,"6":5,"15":6,"21":7,"7":8,"10":9,"16":10,"35":11,"34":12,"13":13,"14":14,"37":15,"36":16,"5":17,"18":18,"26":19,"11":20,"24":21,"42":22,"28":23,"31":24,"29":25,"30":26,"8":27,"19":28,"25":29,"9":30,"12":31,"17":32,"22":33}        };

        cjs.superTemplateDefinition = {"5724":{"flag":"3473162","sport_id":"2","category_id":9011},"5725":{"flag":"3473164","sport_id":"2","category_id":9012},"5726":{"flag":"3473163","sport_id":"2","category_id":9021},"5727":{"flag":"3473165","sport_id":"2","category_id":9022},"5728":{"flag":"3473167","sport_id":"2","category_id":9030},"5729":{"flag":"3473162","sport_id":"2","category_id":9001},"5730":{"flag":"3473164","sport_id":"2","category_id":9010},"5731":{"flag":"3473163","sport_id":"2","category_id":9003},"5732":{"flag":"3473165","sport_id":"2","category_id":9013},"5733":{"flag":"3473162","sport_id":"2","category_id":9002},"5734":{"flag":"3473164","sport_id":"2","category_id":9006},"5735":{"flag":"3473163","sport_id":"2","category_id":9004},"5736":{"flag":"3473165","sport_id":"2","category_id":9007},"5737":{"flag":"3473162","sport_id":"2","category_id":9008},"5738":{"flag":"3473164","sport_id":"2","category_id":9009},"5739":{"flag":"3473163","sport_id":"2","category_id":9014},"5740":{"flag":"3473165","sport_id":"2","category_id":9015},"5741":{"flag":"3473163","sport_id":"2","category_id":9992},"5743":{"flag":"3473167","sport_id":"2","category_id":9994},"6393":{"flag":"3473165","sport_id":"2","category_id":9993},"7897":{"flag":"3473162","sport_id":"2","category_id":9016},"7898":{"flag":"3473163","sport_id":"2","category_id":9018},"7899":{"flag":"3473164","sport_id":"2","category_id":9017},"7900":{"flag":"3473165","sport_id":"2","category_id":9019},"8430":{"flag":"3473166","sport_id":"2","category_id":null},"10883":{"flag":"3473167","sport_id":"2","category_id":null},"5744":{"flag":"3473162","sport_id":"16","category_id":9050},"5745":{"flag":"3473164","sport_id":"16","category_id":null},"5746":{"flag":"3473162","sport_id":"16","category_id":9052},"5747":{"flag":"3473164","sport_id":"16","category_id":null},"5748":{"flag":"3473162","sport_id":"16","category_id":9054},"5749":{"flag":"3473164","sport_id":"16","category_id":9055},"5750":{"flag":"3473162","sport_id":"16","category_id":9056},"5751":{"flag":"3473164","sport_id":"16","category_id":9057},"5752":{"flag":"3473162","sport_id":"16","category_id":9058},"5753":{"flag":"3473164","sport_id":"16","category_id":9059},"5754":{"flag":"3473162","sport_id":"16","category_id":9060},"5755":{"flag":"3473164","sport_id":"16","category_id":9061},"5756":{"flag":"3473162","sport_id":"16","category_id":9062},"5757":{"flag":"3473164","sport_id":"16","category_id":9063},"5758":{"flag":"3473162","sport_id":"16","category_id":9064},"5759":{"flag":"3473164","sport_id":"16","category_id":9065},"5760":{"flag":"3473162","sport_id":"16","category_id":9066},"5761":{"flag":"3473164","sport_id":"16","category_id":9067},"5762":{"flag":"3473162","sport_id":"16","category_id":9068},"5763":{"flag":"3473164","sport_id":"16","category_id":9069},"5764":{"flag":"3473162","sport_id":"16","category_id":9070},"5765":{"flag":"3473164","sport_id":"16","category_id":9071},"5766":{"flag":"3473162","sport_id":"16","category_id":9072},"5767":{"flag":"3473164","sport_id":"16","category_id":9073},"5768":{"flag":"3473162","sport_id":"16","category_id":9074},"5769":{"flag":"3473164","sport_id":"16","category_id":9075},"5770":{"flag":"3473162","sport_id":"16","category_id":9076},"5771":{"flag":"3473164","sport_id":"16","category_id":9077},"5772":{"flag":"3473162","sport_id":"16","category_id":9078},"5773":{"flag":"3473164","sport_id":"16","category_id":9079},"5774":{"flag":"3473162","sport_id":"16","category_id":9080},"5775":{"flag":"3473164","sport_id":"16","category_id":9081},"5776":{"flag":"3473162","sport_id":"16","category_id":9082},"5777":{"flag":"3473164","sport_id":"16","category_id":9083},"5778":{"flag":"3473162","sport_id":"16","category_id":9084},"5779":{"flag":"3473164","sport_id":"16","category_id":9085},"5780":{"flag":"3473162","sport_id":"16","category_id":9086},"5781":{"flag":"3473164","sport_id":"16","category_id":9089},"5782":{"flag":"3473162","sport_id":"16","category_id":9088},"5783":{"flag":"3473164","sport_id":"16","category_id":9087},"5784":{"flag":"3473162","sport_id":"16","category_id":9090},"5785":{"flag":"3473164","sport_id":"16","category_id":9091},"14529":{"flag":"3473162","sport_id":"16","category_id":null},"23281":{"flag":"3473162","sport_id":"16","category_id":null},"23282":{"flag":"3473164","sport_id":"16","category_id":null},"5788":{"flag":"3473163","sport_id":"17","category_id":8050},"5789":{"flag":"3473165","sport_id":"17","category_id":8051},"5790":{"flag":"3473163","sport_id":"17","category_id":8052},"5791":{"flag":"3473165","sport_id":"17","category_id":8053},"5792":{"flag":"3473163","sport_id":"17","category_id":8054},"5793":{"flag":"3473165","sport_id":"17","category_id":8055},"5794":{"flag":"3473163","sport_id":"17","category_id":8056},"5795":{"flag":"3473165","sport_id":"17","category_id":8057},"5796":{"flag":"3473163","sport_id":"17","category_id":8058},"5797":{"flag":"3473165","sport_id":"17","category_id":8059},"5798":{"flag":"3473163","sport_id":"17","category_id":8060},"5799":{"flag":"3473165","sport_id":"17","category_id":8061},"5800":{"flag":"3473163","sport_id":"17","category_id":8062},"5801":{"flag":"3473165","sport_id":"17","category_id":8063},"5802":{"flag":"3473163","sport_id":"17","category_id":8066},"5803":{"flag":"3473165","sport_id":"17","category_id":8067},"5804":{"flag":"3473163","sport_id":"17","category_id":8064},"5805":{"flag":"3473165","sport_id":"17","category_id":8065},"7103":{"flag":"3473163","sport_id":"17","category_id":8068},"7104":{"flag":"3473165","sport_id":"17","category_id":8069},"8991":{"flag":"3473163","sport_id":"17","category_id":null},"8992":{"flag":"3473163","sport_id":"17","category_id":null},"8993":{"flag":"3473163","sport_id":"17","category_id":null},"8994":{"flag":"3473163","sport_id":"17","category_id":null},"8996":{"flag":"3473163","sport_id":"17","category_id":null},"8997":{"flag":"3473165","sport_id":"17","category_id":null},"8998":{"flag":"3473165","sport_id":"17","category_id":null},"8999":{"flag":"3473165","sport_id":"17","category_id":null},"9000":{"flag":"3473165","sport_id":"17","category_id":null},"9001":{"flag":"3473165","sport_id":"17","category_id":null},"9358":{"flag":"3473163","sport_id":"17","category_id":null},"9359":{"flag":"3473165","sport_id":"17","category_id":null},"16823":{"flag":"3473163","sport_id":"17","category_id":null},"16824":{"flag":"3473163","sport_id":"17","category_id":null},"16825":{"flag":"3473165","sport_id":"17","category_id":null},"16826":{"flag":"3473163","sport_id":"17","category_id":null},"16827":{"flag":"3473165","sport_id":"17","category_id":null},"16828":{"flag":"3473165","sport_id":"17","category_id":null},"5806":{"flag":"3473162","sport_id":"21","category_id":8001},"5807":{"flag":"3473164","sport_id":"21","category_id":8002},"5808":{"flag":"3473163","sport_id":"21","category_id":8003},"5809":{"flag":"3473165","sport_id":"21","category_id":8004},"5810":{"flag":"3473167","sport_id":"21","category_id":8005},"5811":{"flag":"3473162","sport_id":"21","category_id":8006},"5812":{"flag":"3473164","sport_id":"21","category_id":8007},"5813":{"flag":"3473163","sport_id":"21","category_id":8008},"5814":{"flag":"3473165","sport_id":"21","category_id":8009},"5815":{"flag":"3473167","sport_id":"21","category_id":8010},"5816":{"flag":"3473162","sport_id":"21","category_id":8011},"5817":{"flag":"3473164","sport_id":"21","category_id":8012},"5818":{"flag":"3473163","sport_id":"21","category_id":8013},"5819":{"flag":"3473165","sport_id":"21","category_id":8014},"5820":{"flag":"3473167","sport_id":"21","category_id":8015},"5821":{"flag":"3473163","sport_id":"21","category_id":9992},"5823":{"flag":"3473167","sport_id":"21","category_id":9994},"5824":{"flag":"3473162","sport_id":"21","category_id":9995},"5826":{"flag":"3473163","sport_id":"21","category_id":9997},"5828":{"flag":"3473167","sport_id":"21","category_id":9999},"5951":{"flag":"3473165","sport_id":"21","category_id":9993},"5954":{"flag":"3473164","sport_id":"21","category_id":9996},"5956":{"flag":"3473165","sport_id":"21","category_id":9998},"9960":{"flag":"3473162","sport_id":"21","category_id":null},"9961":{"flag":"3473164","sport_id":"21","category_id":null},"9962":{"flag":"3473163","sport_id":"21","category_id":null},"9963":{"flag":"3473165","sport_id":"21","category_id":null},"9964":{"flag":"3473167","sport_id":"21","category_id":null},"5829":{"flag":"3473162","sport_id":"25","category_id":8100},"5830":{"flag":"3473164","sport_id":"25","category_id":8101},"5831":{"flag":"3473163","sport_id":"25","category_id":8102},"5832":{"flag":"3473165","sport_id":"25","category_id":8103},"5833":{"flag":"3473167","sport_id":"25","category_id":8104},"5834":{"flag":"3473163","sport_id":"25","category_id":9992},"5836":{"flag":"3473167","sport_id":"25","category_id":9994},"5837":{"flag":"3473162","sport_id":"25","category_id":9995},"5839":{"flag":"3473163","sport_id":"25","category_id":9997},"5841":{"flag":"3473167","sport_id":"25","category_id":9999},"6376":{"flag":"3473165","sport_id":"25","category_id":9993},"6379":{"flag":"3473164","sport_id":"25","category_id":9996},"6381":{"flag":"3473165","sport_id":"25","category_id":9998},"5842":{"flag":"3473162","sport_id":"28","category_id":9054},"5843":{"flag":"3473162","sport_id":"28","category_id":9058},"5844":{"flag":"3473162","sport_id":"28","category_id":9062},"5845":{"flag":"3473162","sport_id":"28","category_id":9066},"5846":{"flag":"3473162","sport_id":"28","category_id":9072},"5847":{"flag":"3473162","sport_id":"28","category_id":9078},"5848":{"flag":"3473162","sport_id":"28","category_id":9090},"5849":{"flag":"3473162","sport_id":"28","category_id":9084},"5850":{"flag":"3473162","sport_id":"28","category_id":9086},"8011":{"flag":"3473164","sport_id":"28","category_id":9059},"8012":{"flag":"3473164","sport_id":"28","category_id":9092},"8108":{"flag":"3473164","sport_id":"28","category_id":null},"8110":{"flag":"3473164","sport_id":"28","category_id":null},"8122":{"flag":"3473164","sport_id":"28","category_id":null},"9525":{"flag":"3473162","sport_id":"28","category_id":null},"9526":{"flag":"3473164","sport_id":"28","category_id":null},"13710":{"flag":"3473164","sport_id":"28","category_id":null},"17958":{"flag":"3473164","sport_id":"28","category_id":null},"5852":{"flag":"3473162","sport_id":"23","category_id":8150},"5853":{"flag":"3473162","sport_id":"23","category_id":8151},"5854":{"flag":"3473164","sport_id":"23","category_id":8161},"5855":{"flag":"3473162","sport_id":"23","category_id":8153},"5856":{"flag":"3473162","sport_id":"23","category_id":8154},"5857":{"flag":"3473162","sport_id":"23","category_id":8156},"5858":{"flag":"3473162","sport_id":"23","category_id":8157},"5859":{"flag":"3473162","sport_id":"23","category_id":8158},"6157":{"flag":"3473162","sport_id":"23","category_id":null},"7059":{"flag":"3473162","sport_id":"23","category_id":null},"7326":{"flag":"3473162","sport_id":"23","category_id":8159},"7693":{"flag":"3473164","sport_id":"23","category_id":8152},"8424":{"flag":"3473166","sport_id":"23","category_id":null},"12497":{"flag":"3473164","sport_id":"23","category_id":null},"16919":{"flag":"3473162","sport_id":"23","category_id":null},"17844":{"flag":"3473162","sport_id":"23","category_id":null},"22846":{"flag":"3473162","sport_id":"23","category_id":null},"22847":{"flag":"3473162","sport_id":"23","category_id":null},"22848":{"flag":"3473162","sport_id":"23","category_id":null},"5860":{"flag":null,"sport_id":"32","category_id":7100},"6575":{"flag":null,"sport_id":"32","category_id":7102},"6576":{"flag":null,"sport_id":"32","category_id":7204},"6577":{"flag":null,"sport_id":"32","category_id":7101},"6653":{"flag":null,"sport_id":"32","category_id":7103},"6654":{"flag":null,"sport_id":"32","category_id":7104},"7771":{"flag":null,"sport_id":"32","category_id":7207},"7977":{"flag":null,"sport_id":"32","category_id":7209},"7978":{"flag":null,"sport_id":"32","category_id":7210},"7979":{"flag":null,"sport_id":"32","category_id":7211},"7980":{"flag":null,"sport_id":"32","category_id":7212},"7981":{"flag":null,"sport_id":"32","category_id":7213},"8390":{"flag":null,"sport_id":"32","category_id":null},"9047":{"flag":null,"sport_id":"32","category_id":null},"12207":{"flag":null,"sport_id":"32","category_id":null},"12917":{"flag":null,"sport_id":"32","category_id":null},"5861":{"flag":null,"sport_id":"33","category_id":7200},"6495":{"flag":null,"sport_id":"33","category_id":7201},"6496":{"flag":null,"sport_id":"33","category_id":7202},"6578":{"flag":null,"sport_id":"33","category_id":7203},"7862":{"flag":null,"sport_id":"33","category_id":7208},"9574":{"flag":null,"sport_id":"33","category_id":null},"10998":{"flag":null,"sport_id":"33","category_id":null},"7205":{"flag":null,"sport_id":"34","category_id":7300},"7206":{"flag":null,"sport_id":"34","category_id":7301},"7310":{"flag":7400,"sport_id":"36","category_id":7400},"7311":{"flag":7401,"sport_id":"36","category_id":7401},"7360":{"flag":7402,"sport_id":"36","category_id":7402},"7361":{"flag":7403,"sport_id":"36","category_id":7403},"7362":{"flag":7404,"sport_id":"36","category_id":7404},"9027":{"flag":"7613333","sport_id":"36","category_id":null},"9028":{"flag":"7613334","sport_id":"36","category_id":null},"12390":{"flag":"15836321","sport_id":"36","category_id":null},"12438":{"flag":"15836322","sport_id":"36","category_id":null},"12534":{"flag":"15836323","sport_id":"36","category_id":null},"12535":{"flag":"15836324","sport_id":"36","category_id":null},"12608":{"flag":"15932604","sport_id":"36","category_id":null},"12649":{"flag":"16296163","sport_id":"36","category_id":null},"8401":{"flag":"3473162","sport_id":"39","category_id":null},"8402":{"flag":"3473164","sport_id":"39","category_id":null},"8403":{"flag":"3473162","sport_id":"39","category_id":null},"8404":{"flag":"3473164","sport_id":"39","category_id":null},"8405":{"flag":"3473162","sport_id":"39","category_id":null},"8406":{"flag":"3473164","sport_id":"39","category_id":null},"8407":{"flag":"3473162","sport_id":"39","category_id":null},"8408":{"flag":"3473164","sport_id":"39","category_id":null},"8409":{"flag":"3473162","sport_id":"39","category_id":null},"8410":{"flag":"3473164","sport_id":"39","category_id":null},"8645":{"flag":"3473162","sport_id":"39","category_id":null},"8653":{"flag":"3473164","sport_id":"39","category_id":null},"8962":{"flag":"3473162","sport_id":"39","category_id":null},"9060":{"flag":"3473164","sport_id":"39","category_id":null},"9083":{"flag":"3473167","sport_id":"39","category_id":null},"8416":{"flag":"3473162","sport_id":"38","category_id":null},"8417":{"flag":"3473164","sport_id":"38","category_id":null},"8418":{"flag":"3473162","sport_id":"38","category_id":null},"8419":{"flag":"3473164","sport_id":"38","category_id":null},"8420":{"flag":"3473162","sport_id":"38","category_id":null},"8491":{"flag":"3473163","sport_id":"38","category_id":null},"8544":{"flag":"3473163","sport_id":"38","category_id":null},"8646":{"flag":"3473162","sport_id":"38","category_id":null},"8648":{"flag":"3473164","sport_id":"38","category_id":null},"13911":{"flag":"3473167","sport_id":"38","category_id":null},"14157":{"flag":"3473162","sport_id":"38","category_id":null},"19685":{"flag":"3473163","sport_id":"38","category_id":null},"8446":{"flag":"3473162","sport_id":"41","category_id":null},"8447":{"flag":"3473164","sport_id":"41","category_id":null},"8448":{"flag":"3473162","sport_id":"41","category_id":null},"8449":{"flag":"3473164","sport_id":"41","category_id":null},"8450":{"flag":"3473162","sport_id":"41","category_id":null},"8451":{"flag":"3473164","sport_id":"41","category_id":null},"8452":{"flag":"3473162","sport_id":"41","category_id":null},"8453":{"flag":"3473164","sport_id":"41","category_id":null},"8454":{"flag":"3473163","sport_id":"41","category_id":null},"8455":{"flag":"3473165","sport_id":"41","category_id":null},"8456":{"flag":"3473167","sport_id":"41","category_id":null},"8457":{"flag":"3473166","sport_id":"41","category_id":null},"8641":{"flag":"3473162","sport_id":"41","category_id":null},"8642":{"flag":"3473164","sport_id":"41","category_id":null},"8460":{"flag":"3473162","sport_id":"40","category_id":null},"8461":{"flag":"3473164","sport_id":"40","category_id":null},"8462":{"flag":"3473162","sport_id":"40","category_id":null},"8463":{"flag":"3473164","sport_id":"40","category_id":null},"8464":{"flag":"3473162","sport_id":"40","category_id":null},"8465":{"flag":"3473164","sport_id":"40","category_id":null},"8466":{"flag":"3473162","sport_id":"40","category_id":null},"8467":{"flag":"3473164","sport_id":"40","category_id":null},"8468":{"flag":"3473162","sport_id":"40","category_id":null},"8469":{"flag":"3473164","sport_id":"40","category_id":null},"8472":{"flag":"3473163","sport_id":"40","category_id":null},"8473":{"flag":"3473165","sport_id":"40","category_id":null},"8474":{"flag":"3473163","sport_id":"40","category_id":null},"8475":{"flag":"3473165","sport_id":"40","category_id":null},"8527":{"flag":"3473162","sport_id":"40","category_id":null},"8528":{"flag":"3473164","sport_id":"40","category_id":null},"8529":{"flag":"3473162","sport_id":"40","category_id":null},"8530":{"flag":"3473164","sport_id":"40","category_id":null},"8531":{"flag":"3473162","sport_id":"40","category_id":null},"8532":{"flag":"3473164","sport_id":"40","category_id":null},"8535":{"flag":"3473162","sport_id":"40","category_id":null},"8536":{"flag":"3473164","sport_id":"40","category_id":null},"8537":{"flag":"3473163","sport_id":"40","category_id":null},"8538":{"flag":"3473165","sport_id":"40","category_id":null},"8643":{"flag":"3473162","sport_id":"40","category_id":null},"8652":{"flag":"3473164","sport_id":"40","category_id":null},"11627":{"flag":"3473167","sport_id":"40","category_id":null},"17024":{"flag":"3473167","sport_id":"40","category_id":null},"8827":{"flag":"3473162","sport_id":"15","category_id":null},"8841":{"flag":null,"sport_id":"14","category_id":null}};
    document.lsadvert_display = document.lsadvert_display || function() {};
    document.displayTrustedAdvert = document.displayTrustedAdvert || function() {};
    cjs.full_loaded = false;
    cjs.repair_loaded = false;
    cjs.hourFormat = 'H:i';
    cjs.dateTimeFormat = 'd.m. H:i';
    cjs.fullDateTimeFormat = 'd.m.Y H:i';
    cjs.fullDateFormat = 'd.m.Y';
    cjs.fullDateShortFormat = 'd.m.Y';
    cjs.dateFormat = 'd.m.';
    cjs.geoIP = null;
    cjs.geoIPCityName = null;
    cjs.geoIPSubdivisionName0 = null;
    cjs.geoIPSubdivisionCode0 = null;
    cjs.geoIPIsoSubdivisionCode0 = null;
    cjs.geoIPSubdivisionName1 = null;
    cjs.prepareGeoIP };
    var feed_sign = 'SW9D1eZo';
    // data containers
    var fs_counter;
    var fsEventsUpdatedStartTime = {};
cjs._config = {"css_serial":"1678000000","js_serial":"2174000000","js":{"time_keep_match_live":180},"app":{"lang":{"charset":"es_ES","web":"es","dc":13,"meta_content":"es"},"lang_combo":{"enable":false,"project_list":false},"layout":"wide","noduel_events":{"mygames":10,"main":{"default":40,"golf":30,"motorsport-auto-racing":40,"motorsport-moto-racing":40,"cycling":10,"winter-sports-ski-jumping":10,"winter-sports-alpine-skiing":10,"winter-sports-cross-country":10,"winter-sports-biathlon":10},"tournament_page":{"winter-sports-ski-jumping":1000,"winter-sports-alpine-skiing":1000,"winter-sports-cross-country":1000,"winter-sports-biathlon":1000},"participant_page":{"meetings":{"winter-sports-ski-jumping":5,"winter-sports-alpine-skiing":5,"winter-sports-cross-country":5,"winter-sports-biathlon":5},"events":{"motorsport-auto-racing":10,"motorsport-moto-racing":10,"cycling":10}},"categories":{"6576":10,"7771":10}},"mygames":{"enable":true,"position":"left","groups":{"enable":false},"past_days":1,"future_days":7,"maximum_count":500},"calendar_range":7,"google_analytics":{"enable":true},"video_highlights_live_icon":{"enable":true},"US_time_format":false,"US_style_win_loss_mark":false,"project_type":{"id":1,"name":"_fs","us_web":false},"popup":false,"js_redirect":false,"myteams":{"enable":true,"maximum_count":100},"has_category_page":[2,21,23,31,32,33,36],"banner":{"zone_list":{"background":{"id":1061,"width_max":3000,"height_max":2000,"dynamic_background":true,"element_notice_selector":".footer__advertBackground"},"background_tennis":{"id":1626,"width_max":3000,"height_max":2000,"dynamic_background":true,"element_notice_selector":".footer__advertBackground","condition":{"height":1,"zones":["background"]}},"left_menu_1":{"id":87,"width_max":140,"height_max":400},"left_menu_1_tennis":{"id":722,"width_max":140,"height_max":400,"condition":{"height":1,"zones":["left_menu_1"]}},"left_menu_1_basketball":{"id":723,"width_max":140,"height_max":400,"condition":{"height":1,"zones":["left_menu_1"]}},"left_menu_1_hockey":{"id":724,"width_max":140,"height_max":400,"condition":{"height":1,"zones":["left_menu_1"]}},"left_menu_1_horse-racing":{"id":2521,"width_max":140,"height_max":400,"condition":{"height":1,"zones":["left_menu_1"]}},"left_menu_2":{"id":204,"width_max":140,"height_max":400},"left_menu_2_tennis":{"id":781,"width_max":140,"height_max":400,"condition":{"height":1,"zones":["left_menu_2"]}},"left_menu_2_basketball":{"id":780,"width_max":140,"height_max":400,"condition":{"height":1,"zones":["left_menu_2"]}},"left_menu_3":{"id":3564,"width_max":140,"height_max":400},"right_top":{"id":6574,"width_max":300,"height_max":600},"right_zone_1":{"id":6575,"width_max":300,"height_max":600},"right_zone_2":{"id":6576,"width_max":300,"height_max":600},"right_zone_4_adsence":{"id":730,"width_max":200,"height_max":1000},"right_criteo":{"id":3190,"width_max":300,"height_max":600},"top":{"id":86,"width_max":1000,"height_max":300,"vertical":true},"top_american-football":{"id":126,"width_max":1000,"height_max":300,"vertical":true,"condition":{"height":1,"zones":["top"]}},"top_baseball":{"id":124,"width_max":1000,"height_max":300,"vertical":true,"condition":{"height":1,"zones":["top"]}},"top_basketball":{"id":125,"width_max":1000,"height_max":300,"vertical":true,"condition":{"height":1,"zones":["top"]}},"top_hockey":{"id":123,"width_max":1000,"height_max":300,"vertical":true,"condition":{"height":1,"zones":["top"]}},"top_tennis":{"id":122,"width_max":1000,"height_max":300,"vertical":true,"condition":{"height":1,"zones":["top"]}},"top_horse-racing":{"id":2523,"width_max":1000,"height_max":300,"vertical":true,"condition":{"height":1,"zones":["top"]}},"content_top":{"id":2581,"width_max":970,"height_max":150,"vertical":true},"content_bottom":{"id":127,"width_max":660,"height_max":400,"condition":{"breakpoint":[1,9999]}},"content_bottom_horse-racing":{"id":2524,"width_max":660,"height_max":400,"condition":{"breakpoint":[1,9999],"height":1,"zones":["content_bottom"]}},"content_bottom_criteo":{"id":3191,"width_max":660,"height_max":400,"condition":{"breakpoint":[1,9999]}},"detail":{"id":88,"width_max":550,"height_max":500,"condition":{"breakpoint":[1,9999],"client_type_only":["PC","mobile","tablet"]}},"detail_leaderboard":{"id":5006,"width_max":640,"height_max":100,"vertical":true,"condition":{"breakpoint":[640,9999],"client_type_only":["PC"]}},"detail_leaderboard_mobile":{"id":5004,"width_max":320,"height_max":50,"body_class":"mobile_ad","refresh":45,"condition":{"breakpoint":[320,639]}},"detail_leaderboard_tablet":{"id":5005,"width_max":640,"height_max":100,"vertical":true,"body_class":"tablet_ad","refresh":45,"condition":{"breakpoint":[640,9999],"client_type_only":["mobile","tablet"]}},"detail_tennis":{"id":1301,"width_max":550,"height_max":500,"condition":{"height":1,"zones":["detail"]}},"detail_basketball":{"id":1302,"width_max":550,"height_max":500,"condition":{"height":1,"zones":["detail"]}},"detail_criteo":{"id":3189,"width_max":550,"height_max":500,"condition":{"breakpoint":[1,9999],"client_type_only":["PC"]}},"standings_top":{"id":549,"width_max":500,"height_max":60},"responsive_standings_fixed_bottom_mobile":{"id":3530,"refresh":45,"width_max":320,"height_max":50,"body_class":"mobile_ad","condition":{"breakpoint":[320,727],"client_type_only":["mobile","tablet"]}},"responsive_standings_fixed_bottom_tablet":{"id":3531,"refresh":45,"width_max":728,"height_max":90,"body_class":"tablet_ad","condition":{"breakpoint":[728,999],"client_type_only":["mobile","tablet"]}},"responsive_fixed_bottom_mobile":{"id":3528,"refresh":45,"width_max":320,"height_max":50,"body_class":"mobile_ad","condition":{"breakpoint":[320,727]}},"responsive_detail_fixed_bottom_mobile":{"id":3530,"refresh":45,"width_max":320,"height_max":50,"body_class":"mobile_ad","condition":{"breakpoint":[320,727],"client_type_only":["mobile","tablet"]}},"responsive_fixed_bottom_tablet":{"id":3529,"refresh":45,"width_max":728,"height_max":90,"body_class":"tablet_ad","condition":{"breakpoint":[728,999]}},"responsive_detail_fixed_bottom_tablet":{"id":3531,"refresh":45,"width_max":728,"height_max":90,"body_class":"tablet_ad","condition":{"breakpoint":[728,999],"client_type_only":["mobile","tablet"]}},"premium_square_mobile":{"id":6120,"width_max":480,"height_max":480,"body_class":"mobile_ad","client_type_only":["mobile","tablet"],"condition":{"breakpoint":[300,639]}},"fsnews_right_zone_1":{"id":5693,"width_max":300,"height_max":600},"fsnews_right_zone_2":{"id":5694,"width_max":300,"height_max":600},"fsnews_right_zone_3":{"id":5695,"width_max":300,"height_max":600},"fsnews_content_bottom":{"id":5692,"width_max":970,"height_max":500,"condition":{"breakpoint":[1,9999]}},"fsnews_top":{"id":5696,"width_max":970,"height_max":250,"vertical":true},"fsnews_responsive_fixed_bottom_mobile":{"id":5699,"refresh":45,"width_max":320,"height_max":50,"body_class":"mobile_ad","condition":{"breakpoint":[320,727],"client_type_only":["mobile","tablet"]}},"fsnews_responsive_fixed_bottom_tablet":{"id":5701,"refresh":45,"width_max":728,"height_max":90,"body_class":"tablet_ad","condition":{"breakpoint":[728,999],"client_type_only":["mobile","tablet"]}},"fsnews_background":{"id":5697,"width_max":3000,"height_max":2000,"dynamic_background":true,"element_notice_selector":".footer__advertBackground"},"fsnews_content_bottom_detail":{"id":5687,"width_max":970,"height_max":500,"condition":{"breakpoint":[1,9999]}},"fsnews_responsive_fixed_bottom_mobile_detail":{"id":5698,"refresh":45,"width_max":320,"height_max":50,"body_class":"mobile_ad","condition":{"breakpoint":[320,727],"client_type_only":["mobile","tablet"]}},"fsnews_responsive_fixed_bottom_tablet_detail":{"id":5700,"refresh":45,"width_max":728,"height_max":90,"body_class":"tablet_ad","condition":{"breakpoint":[728,999],"client_type_only":["mobile","tablet"]}},"fsnews_top_detail":{"id":5691,"width_max":970,"height_max":250,"vertical":true},"fsnews_right_zone_1_detail":{"id":5688,"width_max":300,"height_max":600},"fsnews_right_zone_2_detail":{"id":5689,"width_max":300,"height_max":600},"fsnews_right_zone_3_detail":{"id":5690,"width_max":300,"height_max":600},"fsnews_article":{"id":6180,"width_max":720,"height_max":1280,"body_class":"mobile_ad","condition":{"breakpoint":[320,639],"client_type_only":["mobile","tablet"]}}},"show_advertisement_label":true},"project":{"id":13,"name":"Flashscore.es","default_geo_ip_country_code":"ES","default_geo_ip_subdivision_code":false},"odds":{"layout":"default","format":"eu","format_list":["eu"],"ah_override":false,"us_handicap":false,"enable":true,"iframe":true,"my_fs":false,"sport_page":false,"hide_tab":false,"odds_disabled_countries":[],"betslip":false,"betslip_detail_window":false,"betslip_window_size":[],"bookmakers_sp_allowed":[16],"betting_light_version":false,"light_live_bet_icon":false,"hide_live_bet_icon":false,"odds_comparison_show_copyright":true,"probability_to_win":false,"odds_powered_by_geo_ip":[],"odds_powered_by_enabled_for_summary":false},"redirector":{"types":{"event":1,"tournament_template":2,"participant":3,"player":4,"detail_page":5}},"fs_stats":{"enable":true,"url":{"mygames":"remote-stats.flashscore.com\/mg","adblocked":"","search_stats":"remote-stats.flashscore.com\/ss"}},"empty_logo_small_path":{"logo_team":"image\/empty-logo-team-small.png"},"game_notification_push":{"enable":true},"user_functions":{"server_domain":"lsid.eu","serverAPI":"http:\/\/lsid.edrive.intra:82\/","enable":true,"use_only_local":true,"namespace":"flashscore","facebook_app_id":"125754474284594","google_client_id":"199503525252-89hptckd4dhego166b0lopiqdfkkecb9.apps.googleusercontent.com","apple_client_id":"com.flashscore.siwa","apple_redirect_uri":"https:\/\/www.lsid.eu:8443\/apple-proxy\/","server":"https:\/\/lsid.eu\/","facebook_client_access_token":"7e668e19b4cc5bef31c05199ee5b3585"},"user_function":{"use_only_local":false},"registration":{"version":1,"no_remote":false,"sign_out_in_drop_down":true,"project_has_initial_tou":true},"captcha_sitekey":"6LdnlAoTAAAAAIzaLLR8ezPKKnLeM2LozP6OQKj_","european_union_states":{"codes":["BE","BG","CZ","DK","EE","FI","FR","HR","IE","IT","CY","LT","LV","LU","HU","MT","DE","NL","PL","PT","AT","RO","GR","SK","SI","GB","ES","SE"]},"url_prefix":"","project_moved":[],"sports_without_detail":[35],"tournament_pages":{"enable":true,"disabled_sports":[],"block_summary_match_limit":10,"data_part_match_limit":100},"new_mobile_page":{"enable":true},"box_over_content":{"split":{"columns":3}},"detail_live_betting_strip":{"rotation_time":30000},"sports_with_participant_no_duel_page":[38,39,40,41,32,33,34],"match_comments":{"enable":true},"new_live_betting_icon":{"enable":true,"version":1},"live_streaming":{"disabled_bookmakers_by_geoip":[],"bookmakers_with_disabled_link":[]},"facelift":{"main_class":"flat"},"timezone":{"default":1},"icon_list":{"info":true,"shirt":true,"tv":true},"react":{"enabled":false,"sports":false},"responsive":{"breakpoint":800,"breakpoint_mobile":640},"tv_program":{"enable":true},"mixed_feed":{"link_to_more_games":false,"homepage_enabled":false},"team_transfers":{"sports":[1,4]},"team_news":{"enabled":false},"native_notifications":{"enabled":true,"lsnp":"https:\/\/lsnp.flashscore.com\/web-","firebase":{"apiKey":"AIzaSyAW9FbqeajkSTftCCbFlcbojPETqu1IThs","authDomain":"flashscore-web-notifications.firebaseapp.com","databaseURL":"https:\/\/flashscore-web-notifications.firebaseio.com","projectId":"flashscore-web-notifications","storageBucket":"flashscore-web-notifications.appspot.com","messagingSenderId":"258573697417","appId":"1:258573697417:web:d00c8d0c079ac7a2986158"}},"feed_sign":"SW9D1eZo","detail":{"window_size":{"width":688,"height":900}},"audio_comments":{"enabled":true,"authRequired":true,"tabEnabled":false},"tv":false,"apple_sign_in":{"enable":true},"recombee":{"enabled":false,"database_id":"livesport-eu-prod","public_token":"FEi4XEiLW3jsljzduaSyR10SOCxIMtgcBY06ssPMenRjEMFut9SeGnOmR7WtICKC","scenario":"1"},"advanced_tennis":{"enable":true,"point_by_point":true},"reversed_time":{"enable":false,"sports":{"3":{"stages":[22,23,24,25],"extra_time_stages":[6],"stage_time":10,"extra_time":5},"4":{"stages":[14,15,16],"extra_time_stages":[6],"stage_time":20,"extra_time":5},"5":{"stages":[22,23,24,25],"extra_time_stages":[6],"stage_time":15,"extra_time":15}}},"sports_with_player_profile":[1,4,3],"empty_logo_path":{"face_man":"image\/empty-face-man-share.gif","face_woman":"image\/empty-face-woman-share.gif","logo_team":"image\/empty-logo-team-share.gif"},"team_logo":{"enable":true,"detail":true,"standings":false,"h2h":true,"iframe":true},"lang_box":{"enabled":true,"redirects":{"US":{"title":"Follow our live scores in English!","description":"Go to <a href=\"https:\/\/www.flashscore.com\/\">Flashscore.com<\/a>"},"AU":{"title":"Follow our live scores on our Aussie website!","description":"Go to <a href=\"https:\/\/www.flashscore.com.au\/\">Flashscore.com.au<\/a>"},"UK":{"title":"Follow our live scores on our UK website!","description":"Go to <a href=\"https:\/\/www.flashscore.co.uk\/\">Flashscore.co.uk<\/a>"},"CA":{"title":"Follow our live scores on our Canadian website!","description":"Go to <a href=\"https:\/\/www.flashscore.ca\/\">Flashscore.ca<\/a>"},"DK":{"title":"Følg vores live resultater på dansk.","description":"Gå til <a href=\"https:\/\/www.flashscore.dk\/\">Flashscore.dk<\/a>"},"BG":{"title":"Следвай нашите резултати на български!","description":"Отиди на <a href=\"https:\/\/www.flashscore.bg\/\">Flashscore.bg<\/a>"},"BR":{"title":"Acompanhe nossos resultados ao vivo em português!","description":"Siga para <a href=\"https:\/\/www.flashscore.com.br\/\">Flashscore.com.br<\/a>","lang_combo":{"--":401},"lang_dialog_translations":{"title":"Lançamos um Flashscore Brasil totalmente novo e localizado para você!","redirect":"Clique no botão para confirmar que você deseja acessá-lo.","button":"Confirmar e avançar","stay_button":"Quero continuar no Flashscore.com"}},"DE":{"title":"Verfolge unsere Livescores auf deutsch!","description":"Hier geht es zu <a href=\"https:\/\/www.flashscore.de\/\">Flashscore.de<\/a>"},"AT":{"title":"Folge unseren Live-Ergebnissen auf Deutsch!","description":"Gehe auf <a href=\"https:\/\/www.flashscore.at\/\">Flashscore.at<\/a>"},"CH":{"parent":"DE"},"GR":{"title":"Παρακολουθήστε τα ζωντανά μας αποτελέσματα στα ελληνικά!","description":"Μεταβείτε στο <a href=\"https:\/\/www.flashscore.gr\/\">Flashscore.gr<\/a>"},"ES-CT":{"flag":"cat","title":"Segueix tots els marcadors en català!","description":"Visita <a href=\"https:\/\/www.flashscore.cat\/\">Flashscore.cat<\/a>"},"ES":{"title":"¡Sigue nuestros marcadores en directo en español!","description":"Accede a <a href=\"https:\/\/www.flashscore.es\/\">Flashscore.es<\/a>"},"BO":{"parent":"ES"},"GF":{"parent":"ES"},"GY":{"parent":"ES"},"PY":{"parent":"ES"},"SR":{"title":"Pratite naše rezultate uživo na srpskom!","description":"Idite na <a href=\"https:\/\/www.livescore.in\/rs\">LiveScore.in\/rs<\/a>"},"UY":{"parent":"ES"},"PA":{"parent":"ES"},"JM":{"parent":"ES"},"GT":{"parent":"ES"},"NI":{"parent":"ES"},"CU":{"parent":"ES"},"PH":{"title":"Sundan ng live ang mga iskor sa Tagalog!","description":"Pumunta sa <a href=\"https:\/\/www.flashscore.ph\/\">Flashscore.ph<\/a>"},"CL":{"title":"¡Sigue nuestros marcadores en vivo en español!","description":"Ingresa a <a href=\"https:\/\/www.flashscore.cl\/\">Flashscore.cl<\/a>"},"CO":{"title":"¡Sigue nuestros marcadores en vivo y en Español!","description":"Ingresa a <a href=\"https:\/\/www.flashscore.co\/\">Flashscore.co<\/a>"},"AR":{"title":"¡Seguí nuestros resultados en vivo en español!","description":"Visitá <a href=\"https:\/\/www.flashscore.com.ar\/\">Flashscore.com.ar<\/a>"},"MX":{"title":"¡Sigue los resultados en vivo en Español!","description":"Ve a <a href=\"https:\/\/www.flashscore.com.mx\/\">Flashscore.com.mx<\/a>"},"VE":{"title":"¡Sigue nuestros marcadores en vivo en Español!","description":"Ve a <a href=\"https:\/\/www.flashscore.com.ve\/\">Flashscore.com.ve<\/a>"},"PE":{"title":"¡Sigue nuestros resultados en vivo en español!","description":"Ve a <a href=\"https:\/\/www.flashscore.pe\/\">Flashscore.pe<\/a>"},"FI":{"title":"Seuraa tuloksiamme livenä suomeksi!","description":"Siirry <a href=\"https:\/\/www.flashscore.fi\/\">Flashscore.fi<\/a>-sivuille!"},"FR":{"title":"Suivez nos scores en direct en français!","description":"Rendez-vous sur <a href=\"https:\/\/www.flashscore.fr\/\">Flashscore.fr<\/a>","lang_combo":{"--":16},"lang_dialog_translations":{"title":"Nous avons lancé un nouveau site web local pour vous, Flashscore France !","redirect":"Cliquez sur le bouton suivant pour confirmer que vous souhaitez accéder au site local.","button":"Confirmez et allez-y","stay_button":"Je veux rester sur Flashscore.com"}},"GE":{"title":"ცოცხალი ანგარიშები ქართულად!","description":"<a href=\"https:\/\/www.flashscore.ge\/\">Flashscore.ge<\/a>"},"MY":{"title":"Ikuti skor langsung kami dalam Bahasa Melayu!","description":"Pergi ke <a href=\"https:\/\/www.flashscore.com.my\/\">Flashscore.com.my<\/a>"},"HR":{"title":"Pratite naše rezultate uživo na hrvatskom!","description":"Idite na <a href=\"https:\/\/www.rezultati.com\/\">Rezultati.com<\/a>"},"LT":{"title":"Sekite rezultatus lietuviškai!","description":"Eikite į <a href=\"https:\/\/www.flashscore.in\/\">Flashscore.in<\/a>"},"HU":{"title":"Kövesd az élő eredményeket magyar nyelven!","description":"Az <a href=\"https:\/\/www.eredmenyek.com\/\">Eredmenyek.com<\/a> megnyitása"},"KO":{"title":"한국어로 실시간 스코어를 확인하세요!","description":"<a href=\"https:\/\/www.flashscore.co.kr\/\">Flashscore.co.kr<\/a>로 이동"},"IN":{"title":"Follow our live scores on our Indian websites!","description":"Go to <a href=\"https:\/\/www.flashscore.in\/\">Flashscore.in<\/a>","lang_combo":{"--":26,"hi":261,"bn":262,"te":265,"ta":263,"kn":264},"lang_dialog_translations":{"title":"We just launched a brand new, fully localised Flashscore India for you!","local_project_title":"New languages available!","perex":"Pick your language and give it try!","button":"Confirm and go","local_project_button":"Confirm","stay_button":"I want to stay on Flashscore.com"}},"IT":{"title":"Segui i nostri risultati in italiano!","description":"Vai su <a href=\"https:\/\/www.flashscore.it\/\">Flashscore.it<\/a>"},"ID":{"title":"Ikutilah Skor langsung kami dalam Bahasa Indonesia!","description":"Kunjungilah <a href=\"https:\/\/www.flashscore.co.id\/\">Flashscore.co.id<\/a>"},"JP":{"title":"ぜひ、私どもの日本版ライブスコアをフォローください！","description":"<a href=\"https:\/\/www.flashscore.co.jp\/\">Flashscore.co.jp<\/a> はこちら"},"KZ":{"title":"Live нәтижелерді Қазақ тілінде бақылаңыз!","description":"<a href=\"https:\/\/www.flashscorekz.com\/\">FlashscoreKZ.com<\/a> желісіне өту"},"NL":{"title":"Volg onze live uitslagen in het Nederlands!","description":"Ga naar <a href=\"https:\/\/www.flashscore.nl\/\">Flashscore.nl<\/a>"},"PL":{"title":"Śledź nasze wyniki na żywo po polsku!","description":"Przejdź na <a href=\"https:\/\/www.flashscore.pl\/\">Flashscore.pl<\/a>","lang_combo":{"--":3},"lang_dialog_translations":{"title":"Właśnie uruchomiliśmy dla Ciebie nowy, lokalny Flashscore Polska","redirect":"Kliknij poniższy przycisk, aby potwierdzić, że chcesz uzyskać dostęp do lokalnej witryny.","button":"Potwierdź i przejdź","stay_button":"Chcę pozostać na Flashscore.com"}},"PT":{"title":"Segue os resultados ao vivo em Português!","description":"Visita <a href=\"https:\/\/www.flashscore.pt\/\">Flashscore.pt<\/a>"},"PT-BR":{"title":"Acompanhe nossos resultados ao vivo em português!","description":"Siga para <a href=\"https:\/\/www.flashscore.com.br\/\">Flashscore.com.br<\/a>"},"RO":{"title":"Urmărește scoruri live în Română!","description":"Du-te pe <a href=\"https:\/\/www.flashscore.ro\/\">Flashscore.ro<\/a>"},"SK":{"title":"Sledujte naše live výsledky v slovenčine!","description":"Prejsť na <a href=\"https:\/\/www.flashscore.sk\/\">Flashscore.sk<\/a>"},"SI":{"title":"Spremljajte rezultate v živo v Slovenščini!","description":"Obiščite <a href=\"https:\/\/www.flashscore.si\/\">Flashscore.si<\/a>"},"SE":{"title":"Följ vår livescore på svenska!","description":"Gå till <a href=\"https:\/\/www.flashscore.se\/\">Flashscore.se<\/a>"},"VN":{"title":"Theo dõi tỷ số trực tiếp bằng Tiếng Việt!","description":"Hãy đến <a href=\"https:\/\/www.flashscore.vn\/\">Flashscore.vn<\/a>"},"UA":{"title":"Стежте за нашими live результатами українською!","description":"Перейти на <a href=\"https:\/\/www.flashscore.ua\/\">Flashscore.ua<\/a>"},"VI":{"title":"Để xem trực tiếp tỉ số bằng tiếng Việt!","description":"Hãy dùng <a href=\"https:\/\/www.flashscore.vn\/\">Flashscore.vn<\/a>"},"TR":{"title":"Canlı skorları Türkçe takip edin!","description":"<a href=\"https:\/\/www.flashscore.com.tr\/\">Flashscore.com.tr<\/a>'ye gidin"},"CZ":{"title":"Sledujte naše live výsledky v češtině!","description":"Přejít na <a href=\"https:\/\/www.livesport.cz\/\">Livesport.cz<\/a>"},"JA":{"title":"私どもの日本版ライブスコアをフォローください！","description":"<a href=\"https:\/\/www.flashscore.co.jp\/\">Flashscore.co.jp<\/a> はこちら。"},"KR":{"title":"한국어로 실시간 스코어를 확인하세요!","description":"<a href=\"https:\/\/www.flashscore.co.kr\/\">Flashscore.co.kr<\/a> 바로가기"}},"show_after_visits":3},"confirmation_box":{"enabled":false},"myfs":{"enabled":true,"newsfeed":{"past_days":14,"count":15,"allowed_counts":[3,15,30]},"refresh_tolerance":4},"swap_participants":{"sports":[],"show_at_sign":false},"legal_age_confirmation":{"enabled":true,"geoip":["ES"]},"gambling":{"is_gambling_project":false,"is_AU_gambling_project":false,"is_CA_gambling_project":false,"is_DK_gambling_project":false,"is_FR_gambling_project":false,"is_FR_allowed_gambling_project":false,"is_GR_gambling_project":false,"is_GR_allowed_gambling_project":false,"is_IT_gambling_project":false,"is_SE_gambling_project":false,"is_UK_gambling_project":false},"last_matches_stats_order":{"3":[595,169,713,541,696,697],"4":[596,541,169,777,715,649,781],"1":[595,596,541,599,600]},"disabled_pages":{"geoip":["TR","GR"]},"disabled_betting_in_live":{"geoip":[""]},"dark_mode":{"enabled":true,"theme_switcher":true,"dark_is_default":false},"sports_with_flag":[2,14,16,28,25,15,17,21],"onetrust":{"show_privacy_shield":true,"enable":true},"pop_ups":{"russians_redirect":{"enabled":false,"domains":[]}},"wizard":{"enabled":false},"myleagues":{"position_of_banner":10},"match_previews_require_login":{"enabled":false},"team_page":{"duel":[3,4,5,6,7,8,9,10,11,12,15,16,17,18,19,21,22,24,25,26,28,29,30,36,42]},"fsds":{"client_url":"https:\/\/13.ds.lsapp.eu\/pq_graphql"},"fs_news":{"enabled":true,"widgets":{"live_table":{"enabled":true},"detail":{"enabled":true,"blacklisted_sport_id":[]},"tournament_page_summary_tab":{"enabled":true},"h2h_page":{"enabled":true}},"video_api":{"host":"https:\/\/media.lsmedialib.com"}},"line_up":{"used_substitutes":{"enabled":true,"sports":[1]},"sports_with_participant_images":[1,3,4],"player_ratings":[1],"live_player_ratings":false},"promo_bar":{"multi_language_bar":{"enabled":false,"new_languages":[],"hide_for_geo_ip":[]}},"frontend_logging":{"enable":true,"server":"https:\/\/logging-service.livesport.services\/","token":"Y3uhIv5Ges46mMdAZm53akso95sYOogk","percentage_of_sessions_to_log":1},"static_fs_cdn":{"enabled":true,"url":"https:\/\/static.flashscore.com"},"feed_resolver":{"local":[{"url":"https:\/\/local-spanish.flashscore.ninja","weight":1,"countries":["AL","AD","AM","AT","AZ","BY","BE","BA","BG","HR","CY","CZ","DK","EE","FO","FI","FR","GI","GR","HU","IS","IE","IL","IT","KZ","XK","LV","LI","LT","LU","MK","MD","MC","ME","NL","NO","PL","RO","RU","SM","RS","SK","SI","ES","SE","CH","TR","UA","GB"]}],"global":[],"default_url":"https:\/\/global.flashscore.ninja"},"sport_list":{"soccer":1,"tennis":2,"basketball":3,"hockey":4,"american-football":5,"baseball":6,"handball":7,"rugby-union":8,"floorball":9,"bandy":10,"futsal":11,"volleyball":12,"cricket":13,"darts":14,"snooker":15,"boxing":16,"beach-volleyball":17,"aussie-rules":18,"rugby-league":19,"badminton":21,"water-polo":22,"golf":23,"field-hockey":24,"table-tennis":25,"beach-soccer":26,"mma":28,"netball":29,"pesapallo":30,"motorsport":31,"motorsport-auto-racing":32,"motorsport-moto-racing":33,"cycling":34,"horse-racing":35,"esports":36,"winter-sports":37,"winter-sports-ski-jumping":38,"winter-sports-alpine-skiing":39,"winter-sports-cross-country":40,"winter-sports-biathlon":41,"kabaddi":42},"lang_box_dialog":{"enabled":false,"enabled_on_local":false,"hidden_flags_for_geo_ip":[],"langs_with_new_badge":[]},"odds_api":{"new_odds_comparison":true,"new_live_prematch_odds":false},"match_poll":{"url":"https:\/\/poll-service.livesport.services","sports":[1,4,3],"enable":false,"show_without_login":false},"full_page_match_detail":{"enabled":false},"single_sport":{"enabled":false},"live_table":{"standings_link_without_popup":false},"event_previews":{"enabled":false},"match_detail":{"top_statistics":{"enable":false}},"sphinxsearch":{"server_domain":"s.livesport.services","search_path":"\/api\/v2\/search\/","top_search_path":"\/api\/v2\/top-search\/","enable":true,"client_server":"s.livesport.services\/api\/v2\/search\/","top_search_client_server":"s.livesport.services\/api\/v2\/top-search\/"}},"portable_apps":{"android":{"enable":true,"app-id":"eu.livesport.MisMarcadores_com","app-name":"Flashscore ES","url":"\/mobile\/#android","header-url":"","footer-url":"","apk-url":"https:\/\/t.flashscore.es\/android\/flashscore-com.apk","store-url":"https:\/\/play.google.com\/store\/apps\/details?id=eu.livesport.FlashScore_com"},"info":{"name":"Flashscore.es","developer":"Flashscore"}},"ajax":{"sync_time":{"default":10,"update":5,"game":5,"live_tables":10},"goal_duration_time":60,"correction_duration_time":15,"penalty_duration_time":60,"counter_duration_time":60,"scores_changed_duration_time":60,"prematch_odds_sync_time":60,"prematch_odds_cache_time":180,"sql_cache_time":30},"timezone":{"list":{"-8":"Los Angeles","-7":"Denver","-6":"Chicago","-5":"New York","-4":"St. John's, Caracas, Santiago","-3":"Brasilia, Buenos Aires, Nuuk","+0":"London, Dublin, Lisbon","+1":"Berlin, Prague, Vienna","+2":"Ankara, Athens, Helsinki"},"dst_list":[],"name_list":false},"cache":{"feed_x":"x"},"core_debugger":{"internal":false},"mobi":{"geoip_restriction":["GR"]},"push":{"namespace":"fs3_"}};cjs.Api.config.initConfig({"css_serial":"1678000000","js_serial":"2174000000","js":{"time_keep_match_live":180},"app":{"lang":{"charset":"es_ES","web":"es","dc":13,"meta_content":"es"},"lang_combo":{"enable":false,"project_list":false},"layout":"wide","noduel_events":{"mygames":10,"main":{"default":40,"golf":30,"motorsport-auto-racing":40,"motorsport-moto-racing":40,"cycling":10,"winter-sports-ski-jumping":10,"winter-sports-alpine-skiing":10,"winter-sports-cross-country":10,"winter-sports-biathlon":10},"tournament_page":{"winter-sports-ski-jumping":1000,"winter-sports-alpine-skiing":1000,"winter-sports-cross-country":1000,"winter-sports-biathlon":1000},"participant_page":{"meetings":{"winter-sports-ski-jumping":5,"winter-sports-alpine-skiing":5,"winter-sports-cross-country":5,"winter-sports-biathlon":5},"events":{"motorsport-auto-racing":10,"motorsport-moto-racing":10,"cycling":10}},"categories":{"6576":10,"7771":10}},"mygames":{"enable":true,"position":"left","groups":{"enable":false},"past_days":1,"future_days":7,"maximum_count":500},"calendar_range":7,"google_analytics":{"enable":true},"video_highlights_live_icon":{"enable":true},"US_time_format":false,"US_style_win_loss_mark":false,"project_type":{"id":1,"name":"_fs","us_web":false},"popup":false,"js_redirect":false,"myteams":{"enable":true,"maximum_count":100},"has_category_page":[2,21,23,31,32,33,36],"banner":{"zone_list":{"background":{"id":1061,"width_max":3000,"height_max":2000,"dynamic_background":true,"element_notice_selector":".footer__advertBackground"},"background_tennis":{"id":1626,"width_max":3000,"height_max":2000,"dynamic_background":true,"element_notice_selector":".footer__advertBackground","condition":{"height":1,"zones":["background"]}},"left_menu_1":{"id":87,"width_max":140,"height_max":400},"left_menu_1_tennis":{"id":722,"width_max":140,"height_max":400,"condition":{"height":1,"zones":["left_menu_1"]}},"left_menu_1_basketball":{"id":723,"width_max":140,"height_max":400,"condition":{"height":1,"zones":["left_menu_1"]}},"left_menu_1_hockey":{"id":724,"width_max":140,"height_max":400,"condition":{"height":1,"zones":["left_menu_1"]}},"left_menu_1_horse-racing":{"id":2521,"width_max":140,"height_max":400,"condition":{"height":1,"zones":["left_menu_1"]}},"left_menu_2":{"id":204,"width_max":140,"height_max":400},"left_menu_2_tennis":{"id":781,"width_max":140,"height_max":400,"condition":{"height":1,"zones":["left_menu_2"]}},"left_menu_2_basketball":{"id":780,"width_max":140,"height_max":400,"condition":{"height":1,"zones":["left_menu_2"]}},"left_menu_3":{"id":3564,"width_max":140,"height_max":400},"right_top":{"id":6574,"width_max":300,"height_max":600},"right_zone_1":{"id":6575,"width_max":300,"height_max":600},"right_zone_2":{"id":6576,"width_max":300,"height_max":600},"right_zone_4_adsence":{"id":730,"width_max":200,"height_max":1000},"right_criteo":{"id":3190,"width_max":300,"height_max":600},"top":{"id":86,"width_max":1000,"height_max":300,"vertical":true},"top_american-football":{"id":126,"width_max":1000,"height_max":300,"vertical":true,"condition":{"height":1,"zones":["top"]}},"top_baseball":{"id":124,"width_max":1000,"height_max":300,"vertical":true,"condition":{"height":1,"zones":["top"]}},"top_basketball":{"id":125,"width_max":1000,"height_max":300,"vertical":true,"condition":{"height":1,"zones":["top"]}},"top_hockey":{"id":123,"width_max":1000,"height_max":300,"vertical":true,"condition":{"height":1,"zones":["top"]}},"top_tennis":{"id":122,"width_max":1000,"height_max":300,"vertical":true,"condition":{"height":1,"zones":["top"]}},"top_horse-racing":{"id":2523,"width_max":1000,"height_max":300,"vertical":true,"condition":{"height":1,"zones":["top"]}},"content_top":{"id":2581,"width_max":970,"height_max":150,"vertical":true},"content_bottom":{"id":127,"width_max":660,"height_max":400,"condition":{"breakpoint":[1,9999]}},"content_bottom_horse-racing":{"id":2524,"width_max":660,"height_max":400,"condition":{"breakpoint":[1,9999],"height":1,"zones":["content_bottom"]}},"content_bottom_criteo":{"id":3191,"width_max":660,"height_max":400,"condition":{"breakpoint":[1,9999]}},"detail":{"id":88,"width_max":550,"height_max":500,"condition":{"breakpoint":[1,9999],"client_type_only":["PC","mobile","tablet"]}},"detail_leaderboard":{"id":5006,"width_max":640,"height_max":100,"vertical":true,"condition":{"breakpoint":[640,9999],"client_type_only":["PC"]}},"detail_leaderboard_mobile":{"id":5004,"width_max":320,"height_max":50,"body_class":"mobile_ad","refresh":45,"condition":{"breakpoint":[320,639]}},"detail_leaderboard_tablet":{"id":5005,"width_max":640,"height_max":100,"vertical":true,"body_class":"tablet_ad","refresh":45,"condition":{"breakpoint":[640,9999],"client_type_only":["mobile","tablet"]}},"detail_tennis":{"id":1301,"width_max":550,"height_max":500,"condition":{"height":1,"zones":["detail"]}},"detail_basketball":{"id":1302,"width_max":550,"height_max":500,"condition":{"height":1,"zones":["detail"]}},"detail_criteo":{"id":3189,"width_max":550,"height_max":500,"condition":{"breakpoint":[1,9999],"client_type_only":["PC"]}},"standings_top":{"id":549,"width_max":500,"height_max":60},"responsive_standings_fixed_bottom_mobile":{"id":3530,"refresh":45,"width_max":320,"height_max":50,"body_class":"mobile_ad","condition":{"breakpoint":[320,727],"client_type_only":["mobile","tablet"]}},"responsive_standings_fixed_bottom_tablet":{"id":3531,"refresh":45,"width_max":728,"height_max":90,"body_class":"tablet_ad","condition":{"breakpoint":[728,999],"client_type_only":["mobile","tablet"]}},"responsive_fixed_bottom_mobile":{"id":3528,"refresh":45,"width_max":320,"height_max":50,"body_class":"mobile_ad","condition":{"breakpoint":[320,727]}},"responsive_detail_fixed_bottom_mobile":{"id":3530,"refresh":45,"width_max":320,"height_max":50,"body_class":"mobile_ad","condition":{"breakpoint":[320,727],"client_type_only":["mobile","tablet"]}},"responsive_fixed_bottom_tablet":{"id":3529,"refresh":45,"width_max":728,"height_max":90,"body_class":"tablet_ad","condition":{"breakpoint":[728,999]}},"responsive_detail_fixed_bottom_tablet":{"id":3531,"refresh":45,"width_max":728,"height_max":90,"body_class":"tablet_ad","condition":{"breakpoint":[728,999],"client_type_only":["mobile","tablet"]}},"premium_square_mobile":{"id":6120,"width_max":480,"height_max":480,"body_class":"mobile_ad","client_type_only":["mobile","tablet"],"condition":{"breakpoint":[300,639]}},"fsnews_right_zone_1":{"id":5693,"width_max":300,"height_max":600},"fsnews_right_zone_2":{"id":5694,"width_max":300,"height_max":600},"fsnews_right_zone_3":{"id":5695,"width_max":300,"height_max":600},"fsnews_content_bottom":{"id":5692,"width_max":970,"height_max":500,"condition":{"breakpoint":[1,9999]}},"fsnews_top":{"id":5696,"width_max":970,"height_max":250,"vertical":true},"fsnews_responsive_fixed_bottom_mobile":{"id":5699,"refresh":45,"width_max":320,"height_max":50,"body_class":"mobile_ad","condition":{"breakpoint":[320,727],"client_type_only":["mobile","tablet"]}},"fsnews_responsive_fixed_bottom_tablet":{"id":5701,"refresh":45,"width_max":728,"height_max":90,"body_class":"tablet_ad","condition":{"breakpoint":[728,999],"client_type_only":["mobile","tablet"]}},"fsnews_background":{"id":5697,"width_max":3000,"height_max":2000,"dynamic_background":true,"element_notice_selector":".footer__advertBackground"},"fsnews_content_bottom_detail":{"id":5687,"width_max":970,"height_max":500,"condition":{"breakpoint":[1,9999]}},"fsnews_responsive_fixed_bottom_mobile_detail":{"id":5698,"refresh":45,"width_max":320,"height_max":50,"body_class":"mobile_ad","condition":{"breakpoint":[320,727],"client_type_only":["mobile","tablet"]}},"fsnews_responsive_fixed_bottom_tablet_detail":{"id":5700,"refresh":45,"width_max":728,"height_max":90,"body_class":"tablet_ad","condition":{"breakpoint":[728,999],"client_type_only":["mobile","tablet"]}},"fsnews_top_detail":{"id":5691,"width_max":970,"height_max":250,"vertical":true},"fsnews_right_zone_1_detail":{"id":5688,"width_max":300,"height_max":600},"fsnews_right_zone_2_detail":{"id":5689,"width_max":300,"height_max":600},"fsnews_right_zone_3_detail":{"id":5690,"width_max":300,"height_max":600},"fsnews_article":{"id":6180,"width_max":720,"height_max":1280,"body_class":"mobile_ad","condition":{"breakpoint":[320,639],"client_type_only":["mobile","tablet"]}}},"show_advertisement_label":true},"project":{"id":13,"name":"Flashscore.es","default_geo_ip_country_code":"ES","default_geo_ip_subdivision_code":false},"odds":{"layout":"default","format":"eu","format_list":["eu"],"ah_override":false,"us_handicap":false,"enable":true,"iframe":true,"my_fs":false,"sport_page":false,"hide_tab":false,"odds_disabled_countries":[],"betslip":false,"betslip_detail_window":false,"betslip_window_size":[],"bookmakers_sp_allowed":[16],"betting_light_version":false,"light_live_bet_icon":false,"hide_live_bet_icon":false,"odds_comparison_show_copyright":true,"probability_to_win":false,"odds_powered_by_geo_ip":[],"odds_powered_by_enabled_for_summary":false},"redirector":{"types":{"event":1,"tournament_template":2,"participant":3,"player":4,"detail_page":5}},"fs_stats":{"enable":true,"url":{"mygames":"remote-stats.flashscore.com\/mg","adblocked":"","search_stats":"remote-stats.flashscore.com\/ss"}},"empty_logo_small_path":{"logo_team":"image\/empty-logo-team-small.png"},"game_notification_push":{"enable":true},"user_functions":{"server_domain":"lsid.eu","serverAPI":"http:\/\/lsid.edrive.intra:82\/","enable":true,"use_only_local":true,"namespace":"flashscore","facebook_app_id":"125754474284594","google_client_id":"199503525252-89hptckd4dhego166b0lopiqdfkkecb9.apps.googleusercontent.com","apple_client_id":"com.flashscore.siwa","apple_redirect_uri":"https:\/\/www.lsid.eu:8443\/apple-proxy\/","server":"https:\/\/lsid.eu\/","facebook_client_access_token":"7e668e19b4cc5bef31c05199ee5b3585"},"user_function":{"use_only_local":false},"registration":{"version":1,"no_remote":false,"sign_out_in_drop_down":true,"project_has_initial_tou":true},"captcha_sitekey":"6LdnlAoTAAAAAIzaLLR8ezPKKnLeM2LozP6OQKj_","european_union_states":{"codes":["BE","BG","CZ","DK","EE","FI","FR","HR","IE","IT","CY","LT","LV","LU","HU","MT","DE","NL","PL","PT","AT","RO","GR","SK","SI","GB","ES","SE"]},"url_prefix":"","project_moved":[],"sports_without_detail":[35],"tournament_pages":{"enable":true,"disabled_sports":[],"block_summary_match_limit":10,"data_part_match_limit":100},"new_mobile_page":{"enable":true},"box_over_content":{"split":{"columns":3}},"detail_live_betting_strip":{"rotation_time":30000},"sports_with_participant_no_duel_page":[38,39,40,41,32,33,34],"match_comments":{"enable":true},"new_live_betting_icon":{"enable":true,"version":1},"live_streaming":{"disabled_bookmakers_by_geoip":[],"bookmakers_with_disabled_link":[]},"facelift":{"main_class":"flat"},"timezone":{"default":1},"icon_list":{"info":true,"shirt":true,"tv":true},"react":{"enabled":false,"sports":false},"responsive":{"breakpoint":800,"breakpoint_mobile":640},"tv_program":{"enable":true},"mixed_feed":{"link_to_more_games":false,"homepage_enabled":false},"team_transfers":{"sports":[1,4]},"team_news":{"enabled":false},"native_notifications":{"enabled":true,"lsnp":"https:\/\/lsnp.flashscore.com\/web-","firebase":{"apiKey":"AIzaSyAW9FbqeajkSTftCCbFlcbojPETqu1IThs","authDomain":"flashscore-web-notifications.firebaseapp.com","databaseURL":"https:\/\/flashscore-web-notifications.firebaseio.com","projectId":"flashscore-web-notifications","storageBucket":"flashscore-web-notifications.appspot.com","messagingSenderId":"258573697417","appId":"1:258573697417:web:d00c8d0c079ac7a2986158"}},"feed_sign":"SW9D1eZo","detail":{"window_size":{"width":688,"height":900}},"audio_comments":{"enabled":true,"authRequired":true,"tabEnabled":false},"tv":false,"apple_sign_in":{"enable":true},"recombee":{"enabled":false,"database_id":"livesport-eu-prod","public_token":"FEi4XEiLW3jsljzduaSyR10SOCxIMtgcBY06ssPMenRjEMFut9SeGnOmR7WtICKC","scenario":"1"},"advanced_tennis":{"enable":true,"point_by_point":true},"reversed_time":{"enable":false,"sports":{"3":{"stages":[22,23,24,25],"extra_time_stages":[6],"stage_time":10,"extra_time":5},"4":{"stages":[14,15,16],"extra_time_stages":[6],"stage_time":20,"extra_time":5},"5":{"stages":[22,23,24,25],"extra_time_stages":[6],"stage_time":15,"extra_time":15}}},"sports_with_player_profile":[1,4,3],"empty_logo_path":{"face_man":"image\/empty-face-man-share.gif","face_woman":"image\/empty-face-woman-share.gif","logo_team":"image\/empty-logo-team-share.gif"},"team_logo":{"enable":true,"detail":true,"standings":false,"h2h":true,"iframe":true},"lang_box":{"enabled":true,"redirects":{"US":{"title":"Follow our live scores in English!","description":"Go to <a href=\"https:\/\/www.flashscore.com\/\">Flashscore.com<\/a>"},"AU":{"title":"Follow our live scores on our Aussie website!","description":"Go to <a href=\"https:\/\/www.flashscore.com.au\/\">Flashscore.com.au<\/a>"},"UK":{"title":"Follow our live scores on our UK website!","description":"Go to <a href=\"https:\/\/www.flashscore.co.uk\/\">Flashscore.co.uk<\/a>"},"CA":{"title":"Follow our live scores on our Canadian website!","description":"Go to <a href=\"https:\/\/www.flashscore.ca\/\">Flashscore.ca<\/a>"},"DK":{"title":"Følg vores live resultater på dansk.","description":"Gå til <a href=\"https:\/\/www.flashscore.dk\/\">Flashscore.dk<\/a>"},"BG":{"title":"Следвай нашите резултати на български!","description":"Отиди на <a href=\"https:\/\/www.flashscore.bg\/\">Flashscore.bg<\/a>"},"BR":{"title":"Acompanhe nossos resultados ao vivo em português!","description":"Siga para <a href=\"https:\/\/www.flashscore.com.br\/\">Flashscore.com.br<\/a>","lang_combo":{"--":401},"lang_dialog_translations":{"title":"Lançamos um Flashscore Brasil totalmente novo e localizado para você!","redirect":"Clique no botão para confirmar que você deseja acessá-lo.","button":"Confirmar e avançar","stay_button":"Quero continuar no Flashscore.com"}},"DE":{"title":"Verfolge unsere Livescores auf deutsch!","description":"Hier geht es zu <a href=\"https:\/\/www.flashscore.de\/\">Flashscore.de<\/a>"},"AT":{"title":"Folge unseren Live-Ergebnissen auf Deutsch!","description":"Gehe auf <a href=\"https:\/\/www.flashscore.at\/\">Flashscore.at<\/a>"},"CH":{"parent":"DE"},"GR":{"title":"Παρακολουθήστε τα ζωντανά μας αποτελέσματα στα ελληνικά!","description":"Μεταβείτε στο <a href=\"https:\/\/www.flashscore.gr\/\">Flashscore.gr<\/a>"},"ES-CT":{"flag":"cat","title":"Segueix tots els marcadors en català!","description":"Visita <a href=\"https:\/\/www.flashscore.cat\/\">Flashscore.cat<\/a>"},"ES":{"title":"¡Sigue nuestros marcadores en directo en español!","description":"Accede a <a href=\"https:\/\/www.flashscore.es\/\">Flashscore.es<\/a>"},"BO":{"parent":"ES"},"GF":{"parent":"ES"},"GY":{"parent":"ES"},"PY":{"parent":"ES"},"SR":{"title":"Pratite naše rezultate uživo na srpskom!","description":"Idite na <a href=\"https:\/\/www.livescore.in\/rs\">LiveScore.in\/rs<\/a>"},"UY":{"parent":"ES"},"PA":{"parent":"ES"},"JM":{"parent":"ES"},"GT":{"parent":"ES"},"NI":{"parent":"ES"},"CU":{"parent":"ES"},"PH":{"title":"Sundan ng live ang mga iskor sa Tagalog!","description":"Pumunta sa <a href=\"https:\/\/www.flashscore.ph\/\">Flashscore.ph<\/a>"},"CL":{"title":"¡Sigue nuestros marcadores en vivo en español!","description":"Ingresa a <a href=\"https:\/\/www.flashscore.cl\/\">Flashscore.cl<\/a>"},"CO":{"title":"¡Sigue nuestros marcadores en vivo y en Español!","description":"Ingresa a <a href=\"https:\/\/www.flashscore.co\/\">Flashscore.co<\/a>"},"AR":{"title":"¡Seguí nuestros resultados en vivo en español!","description":"Visitá <a href=\"https:\/\/www.flashscore.com.ar\/\">Flashscore.com.ar<\/a>"},"MX":{"title":"¡Sigue los resultados en vivo en Español!","description":"Ve a <a href=\"https:\/\/www.flashscore.com.mx\/\">Flashscore.com.mx<\/a>"},"VE":{"title":"¡Sigue nuestros marcadores en vivo en Español!","description":"Ve a <a href=\"https:\/\/www.flashscore.com.ve\/\">Flashscore.com.ve<\/a>"},"PE":{"title":"¡Sigue nuestros resultados en vivo en español!","description":"Ve a <a href=\"https:\/\/www.flashscore.pe\/\">Flashscore.pe<\/a>"},"FI":{"title":"Seuraa tuloksiamme livenä suomeksi!","description":"Siirry <a href=\"https:\/\/www.flashscore.fi\/\">Flashscore.fi<\/a>-sivuille!"},"FR":{"title":"Suivez nos scores en direct en français!","description":"Rendez-vous sur <a href=\"https:\/\/www.flashscore.fr\/\">Flashscore.fr<\/a>","lang_combo":{"--":16},"lang_dialog_translations":{"title":"Nous avons lancé un nouveau site web local pour vous, Flashscore France !","redirect":"Cliquez sur le bouton suivant pour confirmer que vous souhaitez accéder au site local.","button":"Confirmez et allez-y","stay_button":"Je veux rester sur Flashscore.com"}},"GE":{"title":"ცოცხალი ანგარიშები ქართულად!","description":"<a href=\"https:\/\/www.flashscore.ge\/\">Flashscore.ge<\/a>"},"MY":{"title":"Ikuti skor langsung kami dalam Bahasa Melayu!","description":"Pergi ke <a href=\"https:\/\/www.flashscore.com.my\/\">Flashscore.com.my<\/a>"},"HR":{"title":"Pratite naše rezultate uživo na hrvatskom!","description":"Idite na <a href=\"https:\/\/www.rezultati.com\/\">Rezultati.com<\/a>"},"LT":{"title":"Sekite rezultatus lietuviškai!","description":"Eikite į <a href=\"https:\/\/www.flashscore.in\/\">Flashscore.in<\/a>"},"HU":{"title":"Kövesd az élő eredményeket magyar nyelven!","description":"Az <a href=\"https:\/\/www.eredmenyek.com\/\">Eredmenyek.com<\/a> megnyitása"},"KO":{"title":"한국어로 실시간 스코어를 확인하세요!","description":"<a href=\"https:\/\/www.flashscore.co.kr\/\">Flashscore.co.kr<\/a>로 이동"},"IN":{"title":"Follow our live scores on our Indian websites!","description":"Go to <a href=\"https:\/\/www.flashscore.in\/\">Flashscore.in<\/a>","lang_combo":{"--":26,"hi":261,"bn":262,"te":265,"ta":263,"kn":264},"lang_dialog_translations":{"title":"We just launched a brand new, fully localised Flashscore India for you!","local_project_title":"New languages available!","perex":"Pick your language and give it try!","button":"Confirm and go","local_project_button":"Confirm","stay_button":"I want to stay on Flashscore.com"}},"IT":{"title":"Segui i nostri risultati in italiano!","description":"Vai su <a href=\"https:\/\/www.flashscore.it\/\">Flashscore.it<\/a>"},"ID":{"title":"Ikutilah Skor langsung kami dalam Bahasa Indonesia!","description":"Kunjungilah <a href=\"https:\/\/www.flashscore.co.id\/\">Flashscore.co.id<\/a>"},"JP":{"title":"ぜひ、私どもの日本版ライブスコアをフォローください！","description":"<a href=\"https:\/\/www.flashscore.co.jp\/\">Flashscore.co.jp<\/a> はこちら"},"KZ":{"title":"Live нәтижелерді Қазақ тілінде бақылаңыз!","description":"<a href=\"https:\/\/www.flashscorekz.com\/\">FlashscoreKZ.com<\/a> желісіне өту"},"NL":{"title":"Volg onze live uitslagen in het Nederlands!","description":"Ga naar <a href=\"https:\/\/www.flashscore.nl\/\">Flashscore.nl<\/a>"},"PL":{"title":"Śledź nasze wyniki na żywo po polsku!","description":"Przejdź na <a href=\"https:\/\/www.flashscore.pl\/\">Flashscore.pl<\/a>","lang_combo":{"--":3},"lang_dialog_translations":{"title":"Właśnie uruchomiliśmy dla Ciebie nowy, lokalny Flashscore Polska","redirect":"Kliknij poniższy przycisk, aby potwierdzić, że chcesz uzyskać dostęp do lokalnej witryny.","button":"Potwierdź i przejdź","stay_button":"Chcę pozostać na Flashscore.com"}},"PT":{"title":"Segue os resultados ao vivo em Português!","description":"Visita <a href=\"https:\/\/www.flashscore.pt\/\">Flashscore.pt<\/a>"},"PT-BR":{"title":"Acompanhe nossos resultados ao vivo em português!","description":"Siga para <a href=\"https:\/\/www.flashscore.com.br\/\">Flashscore.com.br<\/a>"},"RO":{"title":"Urmărește scoruri live în Română!","description":"Du-te pe <a href=\"https:\/\/www.flashscore.ro\/\">Flashscore.ro<\/a>"},"SK":{"title":"Sledujte naše live výsledky v slovenčine!","description":"Prejsť na <a href=\"https:\/\/www.flashscore.sk\/\">Flashscore.sk<\/a>"},"SI":{"title":"Spremljajte rezultate v živo v Slovenščini!","description":"Obiščite <a href=\"https:\/\/www.flashscore.si\/\">Flashscore.si<\/a>"},"SE":{"title":"Följ vår livescore på svenska!","description":"Gå till <a href=\"https:\/\/www.flashscore.se\/\">Flashscore.se<\/a>"},"VN":{"title":"Theo dõi tỷ số trực tiếp bằng Tiếng Việt!","description":"Hãy đến <a href=\"https:\/\/www.flashscore.vn\/\">Flashscore.vn<\/a>"},"UA":{"title":"Стежте за нашими live результатами українською!","description":"Перейти на <a href=\"https:\/\/www.flashscore.ua\/\">Flashscore.ua<\/a>"},"VI":{"title":"Để xem trực tiếp tỉ số bằng tiếng Việt!","description":"Hãy dùng <a href=\"https:\/\/www.flashscore.vn\/\">Flashscore.vn<\/a>"},"TR":{"title":"Canlı skorları Türkçe takip edin!","description":"<a href=\"https:\/\/www.flashscore.com.tr\/\">Flashscore.com.tr<\/a>'ye gidin"},"CZ":{"title":"Sledujte naše live výsledky v češtině!","description":"Přejít na <a href=\"https:\/\/www.livesport.cz\/\">Livesport.cz<\/a>"},"JA":{"title":"私どもの日本版ライブスコアをフォローください！","description":"<a href=\"https:\/\/www.flashscore.co.jp\/\">Flashscore.co.jp<\/a> はこちら。"},"KR":{"title":"한국어로 실시간 스코어를 확인하세요!","description":"<a href=\"https:\/\/www.flashscore.co.kr\/\">Flashscore.co.kr<\/a> 바로가기"}},"show_after_visits":3},"confirmation_box":{"enabled":false},"myfs":{"enabled":true,"newsfeed":{"past_days":14,"count":15,"allowed_counts":[3,15,30]},"refresh_tolerance":4},"swap_participants":{"sports":[],"show_at_sign":false},"legal_age_confirmation":{"enabled":true,"geoip":["ES"]},"gambling":{"is_gambling_project":false,"is_AU_gambling_project":false,"is_CA_gambling_project":false,"is_DK_gambling_project":false,"is_FR_gambling_project":false,"is_FR_allowed_gambling_project":false,"is_GR_gambling_project":false,"is_GR_allowed_gambling_project":false,"is_IT_gambling_project":false,"is_SE_gambling_project":false,"is_UK_gambling_project":false},"last_matches_stats_order":{"3":[595,169,713,541,696,697],"4":[596,541,169,777,715,649,781],"1":[595,596,541,599,600]},"disabled_pages":{"geoip":["TR","GR"]},"disabled_betting_in_live":{"geoip":[""]},"dark_mode":{"enabled":true,"theme_switcher":true,"dark_is_default":false},"sports_with_flag":[2,14,16,28,25,15,17,21],"onetrust":{"show_privacy_shield":true,"enable":true},"pop_ups":{"russians_redirect":{"enabled":false,"domains":[]}},"wizard":{"enabled":false},"myleagues":{"position_of_banner":10},"match_previews_require_login":{"enabled":false},"team_page":{"duel":[3,4,5,6,7,8,9,10,11,12,15,16,17,18,19,21,22,24,25,26,28,29,30,36,42]},"fsds":{"client_url":"https:\/\/13.ds.lsapp.eu\/pq_graphql"},"fs_news":{"enabled":true,"widgets":{"live_table":{"enabled":true},"detail":{"enabled":true,"blacklisted_sport_id":[]},"tournament_page_summary_tab":{"enabled":true},"h2h_page":{"enabled":true}},"video_api":{"host":"https:\/\/media.lsmedialib.com"}},"line_up":{"used_substitutes":{"enabled":true,"sports":[1]},"sports_with_participant_images":[1,3,4],"player_ratings":[1],"live_player_ratings":false},"promo_bar":{"multi_language_bar":{"enabled":false,"new_languages":[],"hide_for_geo_ip":[]}},"frontend_logging":{"enable":true,"server":"https:\/\/logging-service.livesport.services\/","token":"Y3uhIv5Ges46mMdAZm53akso95sYOogk","percentage_of_sessions_to_log":1},"static_fs_cdn":{"enabled":true,"url":"https:\/\/static.flashscore.com"},"feed_resolver":{"local":[{"url":"https:\/\/local-spanish.flashscore.ninja","weight":1,"countries":["AL","AD","AM","AT","AZ","BY","BE","BA","BG","HR","CY","CZ","DK","EE","FO","FI","FR","GI","GR","HU","IS","IE","IL","IT","KZ","XK","LV","LI","LT","LU","MK","MD","MC","ME","NL","NO","PL","RO","RU","SM","RS","SK","SI","ES","SE","CH","TR","UA","GB"]}],"global":[],"default_url":"https:\/\/global.flashscore.ninja"},"sport_list":{"soccer":1,"tennis":2,"basketball":3,"hockey":4,"american-football":5,"baseball":6,"handball":7,"rugby-union":8,"floorball":9,"bandy":10,"futsal":11,"volleyball":12,"cricket":13,"darts":14,"snooker":15,"boxing":16,"beach-volleyball":17,"aussie-rules":18,"rugby-league":19,"badminton":21,"water-polo":22,"golf":23,"field-hockey":24,"table-tennis":25,"beach-soccer":26,"mma":28,"netball":29,"pesapallo":30,"motorsport":31,"motorsport-auto-racing":32,"motorsport-moto-racing":33,"cycling":34,"horse-racing":35,"esports":36,"winter-sports":37,"winter-sports-ski-jumping":38,"winter-sports-alpine-skiing":39,"winter-sports-cross-country":40,"winter-sports-biathlon":41,"kabaddi":42},"lang_box_dialog":{"enabled":false,"enabled_on_local":false,"hidden_flags_for_geo_ip":[],"langs_with_new_badge":[]},"odds_api":{"new_odds_comparison":true,"new_live_prematch_odds":false},"match_poll":{"url":"https:\/\/poll-service.livesport.services","sports":[1,4,3],"enable":false,"show_without_login":false},"full_page_match_detail":{"enabled":false},"single_sport":{"enabled":false},"live_table":{"standings_link_without_popup":false},"event_previews":{"enabled":false},"match_detail":{"top_statistics":{"enable":false}},"sphinxsearch":{"server_domain":"s.livesport.services","search_path":"\/api\/v2\/search\/","top_search_path":"\/api\/v2\/top-search\/","enable":true,"client_server":"s.livesport.services\/api\/v2\/search\/","top_search_client_server":"s.livesport.ser.get("app","project","id"nfig){windowFromLiveDataServer.banners_backup_callbacks||(windowFromLiveDataServer.banners_backup_callbacks=[]),windowFromLiveDataServer.callAdblock(config.id,config.html,(function(callback){return windowFromLiveDataServer.banners_backup_callbacks.push(callback)}))}));var geoIpResolver,legalAgeConfirmationEnabled,legalAgeConfirmationGeoIps,_a,windowFromLiveDataServer,clientStorage}))})()})();var AdblockPlus = new function () {
    var usesABP;
    var isInProgress;
    var waitingCallbacks = [];
    this.detect = function (px, callback) {
        if (typeof usesABP !== 'undefined')
        {
            return callback(usesABP);
        }
        else
        {
            waitingCallbacks.push(callback);
            if (isInProgress) return;
        }

        isInProgress = true;
        var detected = false;

        var checksRemain = 2;
        var error1 = false;
        var error2 = false;
        if (typeof callback != "function") return;

        px += "?ch=*&rn=*";

        function beforeCheck(callback, timeout) {
            if (checksRemain === 0 || timeout > 1E3)
            {
                usesABP = checksRemain === 0 && detected;
                isInProgress = false;
                waitingCallbacks.forEach(function(cb) {
                    cb(usesABP);
                });
                waitingCallbacks = [];
            }
            else
                setTimeout(function () {
                    beforeCheck(callback, timeout * 2)
                }, timeout * 2);
        }

        function checkImages() {
            if (--checksRemain) {
                return;
            }
            detected = !error1 && error2;
        }

        var random = Math.random() * 11;
        var img1 = new Image;
        img1.onload = checkImages;
        img1.onerror =
            function () {
                error1 = true;
                checkImages()
            };
        img1.src = px.replace(/\*/, 1).replace(/\*/, random);
        var img2 = new Image;
        img2.onload = checkImages;
        img2.onerror = function () {
            error2 = true;
            checkImages();
        };
        img2.src = px.replace(/\*/, 2).replace(/\*/, random);
        beforeCheck(callback, 250);
    }
};
    reset_env();
    var ajax            = new Array();
    // runtime variables
    var prefered_sport_id;
    var matches;
    var sport            = null;
    var sport_id        = null;
    var country            = null;
    var tournament        = null;
    var participant        = null;
    var series        = null;
    cjs.pageTab = null;
    var updater            = null;
    var category        = 0;
    var sub_category = null;
    var page_is_initialized = false;
    var sudate            = 0; // selected day server utime (GMT)
    var tudate;
    var refresh_utime    = 0;
    var default_tz        = default_tz || null;
    var interval_live    = null;
    var bookmaker_link        = '/bookmaker/';
    var odds_betslip        =    false;
    var ODDS_FORMAT_LIST = {"eu":{"id":1,"ident":"eu","name_iframe":"TRANS_ODDS_FORMAT_IFRAME_EU","name_detail":"TRANS_ODDS_FORMAT_DETAIL_EU","name_title":"TRANS_ODDS_FORMAT_TITLE_EU","example":"1.50"},"uk":{"id":2,"ident":"uk","name_iframe":"TRANS_ODDS_FORMAT_IFRAME_UK","name_detail":"TRANS_ODDS_FORMAT_DETAIL_UK","name_title":"TRANS_ODDS_FORMAT_TITLE_UK","example":"1\/2"},"us":{"id":3,"ident":"us","name_iframe":"TRANS_ODDS_FORMAT_IFRAME_US","name_detail":"TRANS_ODDS_FORMAT_DETAIL_US","name_title":"TRANS_ODDS_FORMAT_TITLE_US","example":"-200"},"hk":{"id":4,"ident":"hk","name_iframe":"TRANS_ODDS_FORMAT_IFRAME_HK","name_detail":"TRANS_ODDS_FORMAT_DETAIL_HK","name_title":"TRANS_ODDS_FORMAT_TITLE_HK","example":"0.50"},"ma":{"id":5,"ident":"ma","name_iframe":"TRANS_ODDS_FORMAT_IFRAME_MA","name_detail":"TRANS_ODDS_FORMAT_DETAIL_MA","name_title":"TRANS_ODDS_FORMAT_TITLE_MA","example":"0.50"},"in":{"id":6,"ident":"in","name_iframe":"TRANS_ODDS_FORMAT_IFRAME_IN","name_detail":"TRANS_ODDS_FORMAT_DETAIL_IN","name_title":"TRANS_ODDS_FORMAT_TITLE_IN","example":"-2.00"}};
    var counter_duration_time = 60;
    var project_type_id = 1;
    var project_type_name    = '_fs';
    var locationOrigin = location.origin;
    if (typeof locationOrigin === "undefined")
    {
        locationOrigin = location.protocol + "//" + location.host;
    }
    var base_url_protocol = locationOrigin;
    var req_url = locationOrigin + '/x/' + 'req/';
    var u_304 = 'd41d8cd98f00b204e9800998ecf8427e';
    var default_odds_format   = 'eu';
    var service_status = 0;
    var ajax_updater = '';
    var swap = {};
    var odds_enable = false;
    var ff_data = '';
    var sys_interval_checker = null;
    var counter_update_interval = null;
    var calendar = {
        "buttons":{"prev_day":true,"next_day":true},
        "range":7    };
    // separators
    var JS_ROW_END        = '~';
    var JS_CELL_END        = '¬';
    var JS_INDEX        = '÷';
    // tooltip ident
    var tt = null;
    var xmt;
    var xmtpending = false;
    var componentRefresh = {};

    // push engine
    var mpe_delivery = 'a';

    var base_image_data_url = 'https://static.flashscore.com/res/image/' + 'data/';

    clientStorage = cjs.Api.clientStorage;
    cjs.Api.ajaxSyncTime.init(cjs.Api.config.get("ajax", "sync_time") || {});
    cjs.Api.timezone.initTimezone(
        {
            timezoneList: cjs.Api.config.get("timezone", "list"),
            timezoneDstList: cjs.Api.config.get("timezone", "dst_list"),
            timezoneDefault: cjs.Api.config.get("app", "timezone", "default")
        },
        cjs.dic.get('util_date'),
        change_tz_callback
    );

    // iframe top lang box init variables
    var project_id = 0;

    // odds
    
    var odds_betting_types = {"1":1,"2":3,"3":3,"4":1,"5":3,"6":3,"7":1,"8":1,"9":1,"10":1,"11":1,"12":3,"18":3,"19":1,"13":3,"14":3,"15":3,"16":1,"17":3,"21":3,"22":1,"24":1,"25":3,"26":1,"28":3,"29":3,"30":1,"23":101,"31":101,"32":101,"33":101,"34":101,"35":16,"36":3,"37":101,"38":101,"39":101,"40":101,"41":101,"42":1};

    var SPORT_LIST                    = new Array();
    var SPORT_LIST_BY_ID            = {};
    var SPORT_URL_BY_ID            = [];
	SPORT_LIST['soccer'] = 1;
	SPORT_LIST_BY_ID['1'] = 'soccer';
	SPORT_URL_BY_ID['1'] = '/futbol/';
	SPORT_LIST['tennis'] = 2;
	SPORT_LIST_BY_ID['2'] = 'tennis';
	SPORT_URL_BY_ID['2'] = '/tenis/';
	SPORT_LIST['basketball'] = 3;
	SPORT_LIST_BY_ID['3'] = 'basketball';
	SPORT_URL_BY_ID['3'] = '/baloncesto/';
	SPORT_LIST['hockey'] = 4;
	SPORT_LIST_BY_ID['4'] = 'hockey';
	SPORT_URL_BY_ID['4'] = '/hockey/';
	SPORT_LIST['american-football'] = 5;
	SPORT_LIST_BY_ID['5'] = 'american-football';
	SPORT_URL_BY_ID['5'] = '/futbol-americano/';
	SPORT_LIST['baseball'] = 6;
	SPORT_LIST_BY_ID['6'] = 'baseball';
	SPORT_URL_BY_ID['6'] = '/beisbol/';
	SPORT_LIST['handball'] = 7;
	SPORT_LIST_BY_ID['7'] = 'handball';
	SPORT_URL_BY_ID['7'] = '/balonmano/';
	SPORT_LIST['rugby-union'] = 8;
	SPORT_LIST_BY_ID['8'] = 'rugby-union';
	SPORT_URL_BY_ID['8'] = '/rugby/';
	SPORT_LIST['floorball'] = 9;
	SPORT_LIST_BY_ID['9'] = 'floorball';
	SPORT_URL_BY_ID['9'] = '/unihockey/';
	SPORT_LIST['bandy'] = 10;
	SPORT_LIST_BY_ID['10'] = 'bandy';
	SPORT_URL_BY_ID['10'] = '/bandy/';
	SPORT_LIST['futsal'] = 11;
	SPORT_LIST_BY_ID['11'] = 'futsal';
	SPORT_URL_BY_ID['11'] = '/futbol-sala/';
	SPORT_LIST['volleyball'] = 12;
	SPORT_LIST_BY_ID['12'] = 'volleyball';
	SPORT_URL_BY_ID['12'] = '/voleibol/';
	SPORT_LIST['cricket'] = 13;
	SPORT_LIST_BY_ID['13'] = 'cricket';
	SPORT_URL_BY_ID['13'] = '/cricket/';
	SPORT_LIST['darts'] = 14;
	SPORT_LIST_BY_ID['14'] = 'darts';
	SPORT_URL_BY_ID['14'] = '/dardos/';
	SPORT_LIST['snooker'] = 15;
	SPORT_LIST_BY_ID['15'] = 'snooker';
	SPORT_URL_BY_ID['15'] = '/snooker/';
	SPORT_LIST['boxing'] = 16;
	SPORT_LIST_BY_ID['16'] = 'boxing';
	SPORT_URL_BY_ID['16'] = '/boxeo/';
	SPORT_LIST['beach-volleyball'] = 17;
	SPORT_LIST_BY_ID['17'] = 'beach-volleyball';
	SPORT_URL_BY_ID['17'] = '/voley-playa/';
	SPORT_LIST['aussie-rules'] = 18;
	SPORT_LIST_BY_ID['18'] = 'aussie-rules';
	SPORT_URL_BY_ID['18'] = '/futbol-australiano/';
	SPORT_LIST['rugby-league'] = 19;
	SPORT_LIST_BY_ID['19'] = 'rugby-league';
	SPORT_URL_BY_ID['19'] = '/rugby-league/';
	SPORT_LIST['badminton'] = 21;
	SPORT_LIST_BY_ID['21'] = 'badminton';
	SPORT_URL_BY_ID['21'] = '/badminton/';
	SPORT_LIST['water-polo'] = 22;
	SPORT_LIST_BY_ID['22'] = 'water-polo';
	SPORT_URL_BY_ID['22'] = '/waterpolo/';
	SPORT_LIST['golf'] = 23;
	SPORT_LIST_BY_ID['23'] = 'golf';
	SPORT_URL_BY_ID['23'] = '/golf/';
	SPORT_LIST['field-hockey'] = 24;
	SPORT_LIST_BY_ID['24'] = 'field-hockey';
	SPORT_URL_BY_ID['24'] = '/hockey-hierba/';
	SPORT_LIST['table-tennis'] = 25;
	SPORT_LIST_BY_ID['25'] = 'table-tennis';
	SPORT_URL_BY_ID['25'] = '/tenis-de-mesa/';
	SPORT_LIST['beach-soccer'] = 26;
	SPORT_LIST_BY_ID['26'] = 'beach-soccer';
	SPORT_URL_BY_ID['26'] = '/futbol-playa/';
	SPORT_LIST['mma'] = 28;
	SPORT_LIST_BY_ID['28'] = 'mma';
	SPORT_URL_BY_ID['28'] = '/mma/';
	SPORT_LIST['netball'] = 29;
	SPORT_LIST_BY_ID['29'] = 'netball';
	SPORT_URL_BY_ID['29'] = '/netball/';
	SPORT_LIST['pesapallo'] = 30;
	SPORT_LIST_BY_ID['30'] = 'pesapallo';
	SPORT_URL_BY_ID['30'] = '/pesapallo/';
	SPORT_LIST['motorsport'] = 31;
	SPORT_LIST_BY_ID['31'] = 'motorsport';
	SPORT_URL_BY_ID['31'] = '/motor/';
	SPORT_LIST['motorsport-auto-racing'] = 32;
	SPORT_LIST_BY_ID['32'] = 'motorsport-auto-racing';
	SPORT_URL_BY_ID['32'] = '/automovilismo/';
	SPORT_LIST['motorsport-moto-racing'] = 33;
	SPORT_LIST_BY_ID['33'] = 'motorsport-moto-racing';
	SPORT_URL_BY_ID['33'] = '/motociclismo/';
	SPORT_LIST['cycling'] = 34;
	SPORT_LIST_BY_ID['34'] = 'cycling';
	SPORT_URL_BY_ID['34'] = '/ciclismo/';
	SPORT_LIST['horse-racing'] = 35;
	SPORT_LIST_BY_ID['35'] = 'horse-racing';
	SPORT_URL_BY_ID['35'] = '/carreras-de-caballos/';
	SPORT_LIST['esports'] = 36;
	SPORT_LIST_BY_ID['36'] = 'esports';
	SPORT_URL_BY_ID['36'] = '/esports/';
	SPORT_LIST['winter-sports'] = 37;
	SPORT_LIST_BY_ID['37'] = 'winter-sports';
	SPORT_URL_BY_ID['37'] = '/deportes-de-invierno/';
	SPORT_LIST['winter-sports-ski-jumping'] = 38;
	SPORT_LIST_BY_ID['38'] = 'winter-sports-ski-jumping';
	SPORT_URL_BY_ID['38'] = '/salto-de-esqui/';
	SPORT_LIST['winter-sports-alpine-skiing'] = 39;
	SPORT_LIST_BY_ID['39'] = 'winter-sports-alpine-skiing';
	SPORT_URL_BY_ID['39'] = '/esqui-alpino/';
	SPORT_LIST['winter-sports-cross-country'] = 40;
	SPORT_LIST_BY_ID['40'] = 'winter-sports-cross-country';
	SPORT_URL_BY_ID['40'] = '/esqui-de-fondo/';
	SPORT_LIST['winter-sports-biathlon'] = 41;
	SPORT_LIST_BY_ID['41'] = 'winter-sports-biathlon';
	SPORT_URL_BY_ID['41'] = '/biatlon/';
	SPORT_LIST['kabaddi'] = 42;
	SPORT_LIST_BY_ID['42'] = 'kabaddi';
	SPORT_URL_BY_ID['42'] = '/kabaddi/';

    var SPORT_SCORE_PART_LIST                    = new Array();
	SPORT_SCORE_PART_LIST['soccer'] = 1;
	SPORT_SCORE_PART_LIST['tennis'] = 5;
	SPORT_SCORE_PART_LIST['basketball'] = 5;
	SPORT_SCORE_PART_LIST['hockey'] = 5;
	SPORT_SCORE_PART_LIST['american-football'] = 5;
	SPORT_SCORE_PART_LIST['baseball'] = 10;
	SPORT_SCORE_PART_LIST['handball'] = 3;
	SPORT_SCORE_PART_LIST['rugby-union'] = 4;
	SPORT_SCORE_PART_LIST['floorball'] = 5;
	SPORT_SCORE_PART_LIST['bandy'] = 4;
	SPORT_SCORE_PART_LIST['futsal'] = 4;
	SPORT_SCORE_PART_LIST['volleyball'] = 5;
	SPORT_SCORE_PART_LIST['cricket'] = 2;
	SPORT_SCORE_PART_LIST['darts'] = 0;
	SPORT_SCORE_PART_LIST['snooker'] = 0;
	SPORT_SCORE_PART_LIST['boxing'] = 0;
	SPORT_SCORE_PART_LIST['beach-volleyball'] = 3;
	SPORT_SCORE_PART_LIST['aussie-rules'] = 4;
	SPORT_SCORE_PART_LIST['rugby-league'] = 4;
	SPORT_SCORE_PART_LIST['badminton'] = 3;
	SPORT_SCORE_PART_LIST['water-polo'] = 6;
	SPORT_SCORE_PART_LIST['golf'] = 0;
	SPORT_SCORE_PART_LIST['field-hockey'] = 4;
	SPORT_SCORE_PART_LIST['table-tennis'] = 7;
	SPORT_SCORE_PART_LIST['beach-soccer'] = 5;
	SPORT_SCORE_PART_LIST['mma'] = 0;
	SPORT_SCORE_PART_LIST['netball'] = 5;
	SPORT_SCORE_PART_LIST['pesapallo'] = 11;
	SPORT_SCORE_PART_LIST['motorsport'] = 0;
	SPORT_SCORE_PART_LIST['motorsport-auto-racing'] = 0;
	SPORT_SCORE_PART_LIST['motorsport-moto-racing'] = 0;
	SPORT_SCORE_PART_LIST['cycling'] = 0;
	SPORT_SCORE_PART_LIST['horse-racing'] = 0;
	SPORT_SCORE_PART_LIST['esports'] = 0;
	SPORT_SCORE_PART_LIST['winter-sports'] = 0;
	SPORT_SCORE_PART_LIST['winter-sports-ski-jumping'] = 0;
	SPORT_SCORE_PART_LIST['winter-sports-alpine-skiing'] = 0;
	SPORT_SCORE_PART_LIST['winter-sports-cross-country'] = 0;
	SPORT_SCORE_PART_LIST['winter-sports-biathlon'] = 0;
	SPORT_SCORE_PART_LIST['kabaddi'] = 3;

    var TXT_SPORT                    = new Array();
	TXT_SPORT['soccer']                = new Array();
	TXT_SPORT['soccer']['name'] = 'Fútbol';
	TXT_SPORT['soccer']['1'] = '&nbsp;';
	TXT_SPORT['soccer']['45'] = 'Por terminar';
	TXT_SPORT['soccer']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['soccer']['2'] = 'En directo';
	TXT_SPORT['soccer']['12'] = '1er Tiempo';
	TXT_SPORT['soccer']['13'] = '2º Tiempo';
	TXT_SPORT['soccer']['6'] = 'Prórroga';
	TXT_SPORT['soccer']['7'] = 'Penaltis';
	TXT_SPORT['soccer']['38'] = 'Descanso';
	TXT_SPORT['soccer']['46'] = 'Descanso';
	TXT_SPORT['soccer']['3'] = 'Finalizado';
	TXT_SPORT['soccer']['10'] = 'Tras la prórroga';
	TXT_SPORT['soccer']['11'] = 'Tras los penaltis';
	TXT_SPORT['soccer']['9'] = 'Walkover';
	TXT_SPORT['soccer']['43'] = 'Retrasado';
	TXT_SPORT['soccer']['36'] = 'Parado';
	TXT_SPORT['soccer']['4'] = 'Aplazado';
	TXT_SPORT['soccer']['5'] = 'Anulado';
	TXT_SPORT['soccer']['37'] = 'Suspendido';
	TXT_SPORT['soccer']['54'] = 'Por perdido';
	TXT_SPORT['tennis']                = new Array();
	TXT_SPORT['tennis']['name'] = 'Tenis';
	TXT_SPORT['tennis']['1'] = '&nbsp;';
	TXT_SPORT['tennis']['45'] = 'Por terminar';
	TXT_SPORT['tennis']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['tennis']['2'] = 'En directo';
	TXT_SPORT['tennis']['17'] = '1er Set';
	TXT_SPORT['tennis']['18'] = '2º Set';
	TXT_SPORT['tennis']['19'] = '3er Set';
	TXT_SPORT['tennis']['20'] = '4º Set';
	TXT_SPORT['tennis']['21'] = '5º Set';
	TXT_SPORT['tennis']['47'] = '1er Set<br />Tiebreak';
	TXT_SPORT['tennis']['48'] = '2º Set<br />Tiebreak';
	TXT_SPORT['tennis']['49'] = '3er Set<br />Tiebreak';
	TXT_SPORT['tennis']['50'] = '4º Set<br />Tiebreak';
	TXT_SPORT['tennis']['51'] = '5º Set<br />Tiebreak';
	TXT_SPORT['tennis']['46'] = 'Descanso';
	TXT_SPORT['tennis']['3'] = 'Finalizado';
	TXT_SPORT['tennis']['8'] = 'Finalizado<br />(retirada)';
	TXT_SPORT['tennis']['9'] = 'Walkover';
	TXT_SPORT['tennis']['43'] = 'Retrasado';
	TXT_SPORT['tennis']['36'] = 'Parado';
	TXT_SPORT['tennis']['4'] = 'Aplazado';
	TXT_SPORT['tennis']['5'] = 'Anulado';
	TXT_SPORT['tennis']['37'] = 'Suspendido';
	TXT_SPORT['tennis']['54'] = 'Por perdido';
	TXT_SPORT['tennis']['57'] = 'Tras<br />día 1';
	TXT_SPORT['tennis']['58'] = 'Tras<br />día 2';
	TXT_SPORT['tennis']['335'] = 'Médico';
	TXT_SPORT['basketball']                = new Array();
	TXT_SPORT['basketball']['name'] = 'Baloncesto';
	TXT_SPORT['basketball']['1'] = '&nbsp;';
	TXT_SPORT['basketball']['45'] = 'Por terminar';
	TXT_SPORT['basketball']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['basketball']['2'] = 'En directo';
	TXT_SPORT['basketball']['22'] = '1er Cuarto';
	TXT_SPORT['basketball']['23'] = '2º Cuarto';
	TXT_SPORT['basketball']['24'] = '3er Cuarto';
	TXT_SPORT['basketball']['25'] = '4º Cuarto';
	TXT_SPORT['basketball']['6'] = 'Prórroga';
	TXT_SPORT['basketball']['38'] = 'Descanso';
	TXT_SPORT['basketball']['46'] = 'Descanso';
	TXT_SPORT['basketball']['3'] = 'Finalizado';
	TXT_SPORT['basketball']['10'] = 'Tras la prórroga';
	TXT_SPORT['basketball']['9'] = 'Walkover';
	TXT_SPORT['basketball']['43'] = 'Retrasado';
	TXT_SPORT['basketball']['36'] = 'Parado';
	TXT_SPORT['basketball']['4'] = 'Aplazado';
	TXT_SPORT['basketball']['5'] = 'Anulado';
	TXT_SPORT['basketball']['37'] = 'Suspendido';
	TXT_SPORT['basketball']['54'] = 'Por perdido';
	TXT_SPORT['hockey']                = new Array();
	TXT_SPORT['hockey']['name'] = 'Hockey';
	TXT_SPORT['hockey']['1'] = '&nbsp;';
	TXT_SPORT['hockey']['45'] = 'Por terminar';
	TXT_SPORT['hockey']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['hockey']['2'] = 'En directo';
	TXT_SPORT['hockey']['14'] = '1er Periodo';
	TXT_SPORT['hockey']['15'] = '2º Periodo';
	TXT_SPORT['hockey']['16'] = '3er Periodo';
	TXT_SPORT['hockey']['6'] = 'Prórroga';
	TXT_SPORT['hockey']['7'] = 'Penaltis';
	TXT_SPORT['hockey']['46'] = 'Descanso';
	TXT_SPORT['hockey']['3'] = 'Finalizado';
	TXT_SPORT['hockey']['10'] = 'Tras la<br />prórroga';
	TXT_SPORT['hockey']['11'] = 'Tras los<br />penaltis';
	TXT_SPORT['hockey']['9'] = 'Walkover';
	TXT_SPORT['hockey']['43'] = 'Retrasado';
	TXT_SPORT['hockey']['36'] = 'Parado';
	TXT_SPORT['hockey']['4'] = 'Aplazado';
	TXT_SPORT['hockey']['5'] = 'Anulado';
	TXT_SPORT['hockey']['37'] = 'Suspendido';
	TXT_SPORT['hockey']['54'] = 'Por perdido';
	TXT_SPORT['american-football']                = new Array();
	TXT_SPORT['american-football']['name'] = 'Fútbol Americano';
	TXT_SPORT['american-football']['1'] = '&nbsp;';
	TXT_SPORT['american-football']['45'] = 'Por terminar';
	TXT_SPORT['american-football']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['american-football']['2'] = 'En directo';
	TXT_SPORT['american-football']['22'] = '1er Cuarto';
	TXT_SPORT['american-football']['23'] = '2º Cuarto';
	TXT_SPORT['american-football']['24'] = '3er Cuarto';
	TXT_SPORT['american-football']['25'] = '4º Cuarto';
	TXT_SPORT['american-football']['6'] = 'Prórroga';
	TXT_SPORT['american-football']['38'] = 'Descanso';
	TXT_SPORT['american-football']['46'] = 'Descanso';
	TXT_SPORT['american-football']['3'] = 'Finalizado';
	TXT_SPORT['american-football']['10'] = 'Tras la prórroga';
	TXT_SPORT['american-football']['9'] = 'Walkover';
	TXT_SPORT['american-football']['43'] = 'Retrasado';
	TXT_SPORT['american-football']['36'] = 'Parado';
	TXT_SPORT['american-football']['4'] = 'Aplazado';
	TXT_SPORT['american-football']['5'] = 'Anulado';
	TXT_SPORT['american-football']['37'] = 'Suspendido';
	TXT_SPORT['american-football']['54'] = 'Por perdido';
	TXT_SPORT['baseball']                = new Array();
	TXT_SPORT['baseball']['name'] = 'Béisbol';
	TXT_SPORT['baseball']['1'] = '&nbsp;';
	TXT_SPORT['baseball']['45'] = 'Por terminar';
	TXT_SPORT['baseball']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['baseball']['2'] = 'En directo';
	TXT_SPORT['baseball']['26'] = '1a Entrada';
	TXT_SPORT['baseball']['27'] = '2a Entrada';
	TXT_SPORT['baseball']['28'] = '3a Entrada';
	TXT_SPORT['baseball']['29'] = '4a Entrada';
	TXT_SPORT['baseball']['30'] = '5a Entrada';
	TXT_SPORT['baseball']['31'] = '6a Entrada';
	TXT_SPORT['baseball']['32'] = '7a Entrada';
	TXT_SPORT['baseball']['33'] = '8a Entrada';
	TXT_SPORT['baseball']['34'] = '9a Entrada';
	TXT_SPORT['baseball']['35'] = 'Entrada<br />Extra';
	TXT_SPORT['baseball']['46'] = 'Descanso';
	TXT_SPORT['baseball']['3'] = 'Finalizado';
	TXT_SPORT['baseball']['9'] = 'Walkover';
	TXT_SPORT['baseball']['43'] = 'Retrasado';
	TXT_SPORT['baseball']['36'] = 'Parado';
	TXT_SPORT['baseball']['4'] = 'Aplazado';
	TXT_SPORT['baseball']['5'] = 'Anulado';
	TXT_SPORT['baseball']['37'] = 'Suspendido';
	TXT_SPORT['baseball']['54'] = 'Por perdido';
	TXT_SPORT['handball']                = new Array();
	TXT_SPORT['handball']['name'] = 'Balonmano';
	TXT_SPORT['handball']['1'] = '&nbsp;';
	TXT_SPORT['handball']['45'] = 'Por terminar';
	TXT_SPORT['handball']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['handball']['2'] = 'En directo';
	TXT_SPORT['handball']['12'] = '1er Tiempo';
	TXT_SPORT['handball']['38'] = 'Descanso';
	TXT_SPORT['handball']['13'] = '2º Tiempo';
	TXT_SPORT['handball']['6'] = 'Prórroga';
	TXT_SPORT['handball']['7'] = 'Penaltis';
	TXT_SPORT['handball']['46'] = 'Descanso';
	TXT_SPORT['handball']['3'] = 'Finalizado';
	TXT_SPORT['handball']['10'] = 'Tras la<br />prórroga';
	TXT_SPORT['handball']['11'] = 'Tras los<br />penaltis';
	TXT_SPORT['handball']['9'] = 'Walkover';
	TXT_SPORT['handball']['43'] = 'Retrasado';
	TXT_SPORT['handball']['36'] = 'Parado';
	TXT_SPORT['handball']['4'] = 'Aplazado';
	TXT_SPORT['handball']['5'] = 'Anulado';
	TXT_SPORT['handball']['37'] = 'Suspendido';
	TXT_SPORT['handball']['54'] = 'Por perdido';
	TXT_SPORT['rugby-union']                = new Array();
	TXT_SPORT['rugby-union']['name'] = 'Rugby';
	TXT_SPORT['rugby-union']['1'] = '&nbsp;';
	TXT_SPORT['rugby-union']['45'] = 'Por terminar';
	TXT_SPORT['rugby-union']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['rugby-union']['2'] = 'En directo';
	TXT_SPORT['rugby-union']['12'] = '1er Tiempo';
	TXT_SPORT['rugby-union']['38'] = 'Descanso';
	TXT_SPORT['rugby-union']['13'] = '2º Tiempo';
	TXT_SPORT['rugby-union']['6'] = 'Prórroga';
	TXT_SPORT['rugby-union']['7'] = 'Penaltis';
	TXT_SPORT['rugby-union']['46'] = 'Descanso';
	TXT_SPORT['rugby-union']['3'] = 'Finalizado';
	TXT_SPORT['rugby-union']['10'] = 'Tras la prórroga';
	TXT_SPORT['rugby-union']['11'] = 'Tras los penaltis';
	TXT_SPORT['rugby-union']['9'] = 'Walkover';
	TXT_SPORT['rugby-union']['43'] = 'Retrasado';
	TXT_SPORT['rugby-union']['36'] = 'Parado';
	TXT_SPORT['rugby-union']['4'] = 'Aplazado';
	TXT_SPORT['rugby-union']['5'] = 'Anulado';
	TXT_SPORT['rugby-union']['37'] = 'Suspendido';
	TXT_SPORT['rugby-union']['54'] = 'Por perdido';
	TXT_SPORT['floorball']                = new Array();
	TXT_SPORT['floorball']['name'] = 'Unihockey';
	TXT_SPORT['floorball']['1'] = '&nbsp;';
	TXT_SPORT['floorball']['45'] = 'Por terminar';
	TXT_SPORT['floorball']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['floorball']['2'] = 'En directo';
	TXT_SPORT['floorball']['14'] = '1er Periodo';
	TXT_SPORT['floorball']['15'] = '2º Periodo';
	TXT_SPORT['floorball']['16'] = '3er Periodo';
	TXT_SPORT['floorball']['6'] = 'Prórroga';
	TXT_SPORT['floorball']['7'] = 'Penaltis';
	TXT_SPORT['floorball']['46'] = 'Descanso';
	TXT_SPORT['floorball']['3'] = 'Finalizado';
	TXT_SPORT['floorball']['10'] = 'Tras la prórroga';
	TXT_SPORT['floorball']['11'] = 'Tras los penaltis';
	TXT_SPORT['floorball']['9'] = 'Walkover';
	TXT_SPORT['floorball']['43'] = 'Retrasado';
	TXT_SPORT['floorball']['36'] = 'Parado';
	TXT_SPORT['floorball']['4'] = 'Aplazado';
	TXT_SPORT['floorball']['5'] = 'Anulado';
	TXT_SPORT['floorball']['37'] = 'Suspendido';
	TXT_SPORT['floorball']['54'] = 'Por perdido';
	TXT_SPORT['bandy']                = new Array();
	TXT_SPORT['bandy']['name'] = 'Bandy';
	TXT_SPORT['bandy']['1'] = '&nbsp;';
	TXT_SPORT['bandy']['45'] = 'Por terminar';
	TXT_SPORT['bandy']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['bandy']['2'] = 'En directo';
	TXT_SPORT['bandy']['12'] = '1er Tiempo';
	TXT_SPORT['bandy']['38'] = 'Descanso';
	TXT_SPORT['bandy']['13'] = '2º Tiempo';
	TXT_SPORT['bandy']['6'] = 'Prórroga';
	TXT_SPORT['bandy']['7'] = 'Penaltis';
	TXT_SPORT['bandy']['46'] = 'Descanso';
	TXT_SPORT['bandy']['3'] = 'Finalizado';
	TXT_SPORT['bandy']['10'] = 'Tras la prórroga';
	TXT_SPORT['bandy']['11'] = 'Tras los penaltis';
	TXT_SPORT['bandy']['9'] = 'Walkover';
	TXT_SPORT['bandy']['43'] = 'Retrasado';
	TXT_SPORT['bandy']['36'] = 'Parado';
	TXT_SPORT['bandy']['4'] = 'Aplazado';
	TXT_SPORT['bandy']['5'] = 'Anulado';
	TXT_SPORT['bandy']['37'] = 'Suspendido';
	TXT_SPORT['bandy']['54'] = 'Por perdido';
	TXT_SPORT['futsal']                = new Array();
	TXT_SPORT['futsal']['name'] = 'Fútbol Sala';
	TXT_SPORT['futsal']['1'] = '&nbsp;';
	TXT_SPORT['futsal']['45'] = 'Por terminar';
	TXT_SPORT['futsal']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['futsal']['2'] = 'En directo';
	TXT_SPORT['futsal']['12'] = '1er Tiempo';
	TXT_SPORT['futsal']['38'] = 'Descanso';
	TXT_SPORT['futsal']['13'] = '2º Tiempo';
	TXT_SPORT['futsal']['6'] = 'Prórroga';
	TXT_SPORT['futsal']['7'] = 'Penaltis';
	TXT_SPORT['futsal']['46'] = 'Descanso';
	TXT_SPORT['futsal']['3'] = 'Finalizado';
	TXT_SPORT['futsal']['10'] = 'Tras la prórroga';
	TXT_SPORT['futsal']['11'] = 'Tras los penaltis';
	TXT_SPORT['futsal']['9'] = 'Walkover';
	TXT_SPORT['futsal']['43'] = 'Retrasado';
	TXT_SPORT['futsal']['36'] = 'Parado';
	TXT_SPORT['futsal']['4'] = 'Aplazado';
	TXT_SPORT['futsal']['5'] = 'Anulado';
	TXT_SPORT['futsal']['37'] = 'Suspendido';
	TXT_SPORT['futsal']['54'] = 'Por perdido';
	TXT_SPORT['volleyball']                = new Array();
	TXT_SPORT['volleyball']['name'] = 'Voleibol';
	TXT_SPORT['volleyball']['1'] = '&nbsp;';
	TXT_SPORT['volleyball']['45'] = 'Por terminar';
	TXT_SPORT['volleyball']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['volleyball']['2'] = 'En directo';
	TXT_SPORT['volleyball']['17'] = '1er Set';
	TXT_SPORT['volleyball']['18'] = '2º Set';
	TXT_SPORT['volleyball']['19'] = '3er Set';
	TXT_SPORT['volleyball']['20'] = '4º Set';
	TXT_SPORT['volleyball']['21'] = '5º Set';
	TXT_SPORT['volleyball']['55'] = '6º Set';
	TXT_SPORT['volleyball']['56'] = '7º Set';
	TXT_SPORT['volleyball']['46'] = 'Descanso';
	TXT_SPORT['volleyball']['3'] = 'Finalizado';
	TXT_SPORT['volleyball']['9'] = 'Walkover';
	TXT_SPORT['volleyball']['43'] = 'Retrasado';
	TXT_SPORT['volleyball']['36'] = 'Parado';
	TXT_SPORT['volleyball']['4'] = 'Aplazado';
	TXT_SPORT['volleyball']['5'] = 'Anulado';
	TXT_SPORT['volleyball']['37'] = 'Suspendido';
	TXT_SPORT['volleyball']['54'] = 'Por perdido';
	TXT_SPORT['cricket']                = new Array();
	TXT_SPORT['cricket']['name'] = 'Cricket';
	TXT_SPORT['cricket']['1'] = '&nbsp;';
	TXT_SPORT['cricket']['45'] = 'Por terminar';
	TXT_SPORT['cricket']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['cricket']['2'] = 'En directo';
	TXT_SPORT['cricket']['26'] = '1a Entrada';
	TXT_SPORT['cricket']['27'] = '2a Entrada';
	TXT_SPORT['cricket']['57'] = 'Tras<br />día 1';
	TXT_SPORT['cricket']['58'] = 'Tras<br />día 2';
	TXT_SPORT['cricket']['59'] = 'Tras<br />día 3';
	TXT_SPORT['cricket']['60'] = 'Tras<br />día 4';
	TXT_SPORT['cricket']['61'] = 'Tras<br />día 5';
	TXT_SPORT['cricket']['46'] = 'Descanso';
	TXT_SPORT['cricket']['3'] = 'Finalizado';
	TXT_SPORT['cricket']['9'] = 'Walkover';
	TXT_SPORT['cricket']['43'] = 'Retrasado';
	TXT_SPORT['cricket']['36'] = 'Parado';
	TXT_SPORT['cricket']['4'] = 'Aplazado';
	TXT_SPORT['cricket']['5'] = 'Anulado';
	TXT_SPORT['cricket']['37'] = 'Suspendido';
	TXT_SPORT['cricket']['54'] = 'Por perdido';
	TXT_SPORT['cricket']['333'] = 'Lunch';
	TXT_SPORT['cricket']['334'] = 'Tea';
	TXT_SPORT['darts']                = new Array();
	TXT_SPORT['darts']['name'] = 'Dardos';
	TXT_SPORT['darts']['1'] = '&nbsp;';
	TXT_SPORT['darts']['45'] = 'Por terminar';
	TXT_SPORT['darts']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['darts']['2'] = 'En directo';
	TXT_SPORT['darts']['17'] = '1er Set';
	TXT_SPORT['darts']['18'] = '2º Set';
	TXT_SPORT['darts']['19'] = '3er Set';
	TXT_SPORT['darts']['20'] = '4º Set';
	TXT_SPORT['darts']['21'] = '5º Set';
	TXT_SPORT['darts']['55'] = '6º Set';
	TXT_SPORT['darts']['56'] = '7º Set';
	TXT_SPORT['darts']['324'] = '8º Set';
	TXT_SPORT['darts']['325'] = '9º Set';
	TXT_SPORT['darts']['326'] = '10º Set';
	TXT_SPORT['darts']['327'] = '11º Set';
	TXT_SPORT['darts']['328'] = '12º Set';
	TXT_SPORT['darts']['329'] = '13º Set';
	TXT_SPORT['darts']['46'] = 'Descanso';
	TXT_SPORT['darts']['3'] = 'Finalizado';
	TXT_SPORT['darts']['9'] = 'Walkover';
	TXT_SPORT['darts']['43'] = 'Retrasado';
	TXT_SPORT['darts']['36'] = 'Parado';
	TXT_SPORT['darts']['4'] = 'Aplazado';
	TXT_SPORT['darts']['5'] = 'Anulado';
	TXT_SPORT['darts']['37'] = 'Suspendido';
	TXT_SPORT['darts']['54'] = 'Por perdido';
	TXT_SPORT['snooker']                = new Array();
	TXT_SPORT['snooker']['name'] = 'Snooker';
	TXT_SPORT['snooker']['1'] = '&nbsp;';
	TXT_SPORT['snooker']['45'] = 'Por terminar';
	TXT_SPORT['snooker']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['snooker']['2'] = 'En directo';
	TXT_SPORT['snooker']['46'] = 'Descanso';
	TXT_SPORT['snooker']['3'] = 'Finalizado';
	TXT_SPORT['snooker']['9'] = 'Walkover';
	TXT_SPORT['snooker']['43'] = 'Retrasado';
	TXT_SPORT['snooker']['36'] = 'Parado';
	TXT_SPORT['snooker']['4'] = 'Aplazado';
	TXT_SPORT['snooker']['5'] = 'Anulado';
	TXT_SPORT['snooker']['37'] = 'Suspendido';
	TXT_SPORT['snooker']['54'] = 'Por perdido';
	TXT_SPORT['boxing']                = new Array();
	TXT_SPORT['boxing']['name'] = 'Boxeo';
	TXT_SPORT['boxing']['1'] = '&nbsp;';
	TXT_SPORT['boxing']['45'] = 'Por terminar';
	TXT_SPORT['boxing']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['boxing']['2'] = 'En directo';
	TXT_SPORT['boxing']['46'] = 'Descanso';
	TXT_SPORT['boxing']['3'] = 'Finalizado';
	TXT_SPORT['boxing']['9'] = 'Walkover';
	TXT_SPORT['boxing']['43'] = 'Retrasado';
	TXT_SPORT['boxing']['36'] = 'Parado';
	TXT_SPORT['boxing']['4'] = 'Aplazado';
	TXT_SPORT['boxing']['5'] = 'Anulado';
	TXT_SPORT['boxing']['37'] = 'Suspendido';
	TXT_SPORT['boxing']['54'] = 'Por perdido';
	TXT_SPORT['beach-volleyball']                = new Array();
	TXT_SPORT['beach-volleyball']['name'] = 'Voley Playa';
	TXT_SPORT['beach-volleyball']['1'] = '&nbsp;';
	TXT_SPORT['beach-volleyball']['45'] = 'Por terminar';
	TXT_SPORT['beach-volleyball']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['beach-volleyball']['2'] = 'En directo';
	TXT_SPORT['beach-volleyball']['17'] = '1er Set';
	TXT_SPORT['beach-volleyball']['18'] = '2º Set';
	TXT_SPORT['beach-volleyball']['19'] = '3er Set';
	TXT_SPORT['beach-volleyball']['20'] = '4º Set';
	TXT_SPORT['beach-volleyball']['21'] = '5º Set';
	TXT_SPORT['beach-volleyball']['46'] = 'Descanso';
	TXT_SPORT['beach-volleyball']['3'] = 'Finalizado';
	TXT_SPORT['beach-volleyball']['8'] = 'Finalizado<br />(retirada)';
	TXT_SPORT['beach-volleyball']['9'] = 'Walkover';
	TXT_SPORT['beach-volleyball']['43'] = 'Retrasado';
	TXT_SPORT['beach-volleyball']['36'] = 'Parado';
	TXT_SPORT['beach-volleyball']['4'] = 'Aplazado';
	TXT_SPORT['beach-volleyball']['5'] = 'Anulado';
	TXT_SPORT['beach-volleyball']['37'] = 'Suspendido';
	TXT_SPORT['beach-volleyball']['54'] = 'Por perdido';
	TXT_SPORT['aussie-rules']                = new Array();
	TXT_SPORT['aussie-rules']['name'] = 'Fútbol Australiano';
	TXT_SPORT['aussie-rules']['1'] = '&nbsp;';
	TXT_SPORT['aussie-rules']['45'] = 'Por terminar';
	TXT_SPORT['aussie-rules']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['aussie-rules']['2'] = 'En directo';
	TXT_SPORT['aussie-rules']['22'] = '1er Cuarto';
	TXT_SPORT['aussie-rules']['23'] = '2º Cuarto';
	TXT_SPORT['aussie-rules']['24'] = '3er Cuarto';
	TXT_SPORT['aussie-rules']['25'] = '4º Cuarto';
	TXT_SPORT['aussie-rules']['6'] = 'Prórroga';
	TXT_SPORT['aussie-rules']['38'] = 'Descanso';
	TXT_SPORT['aussie-rules']['46'] = 'Descanso';
	TXT_SPORT['aussie-rules']['3'] = 'Finalizado';
	TXT_SPORT['aussie-rules']['10'] = 'Tras la prórroga';
	TXT_SPORT['aussie-rules']['9'] = 'Walkover';
	TXT_SPORT['aussie-rules']['43'] = 'Retrasado';
	TXT_SPORT['aussie-rules']['36'] = 'Parado';
	TXT_SPORT['aussie-rules']['4'] = 'Aplazado';
	TXT_SPORT['aussie-rules']['5'] = 'Anulado';
	TXT_SPORT['aussie-rules']['37'] = 'Suspendido';
	TXT_SPORT['aussie-rules']['54'] = 'Por perdido';
	TXT_SPORT['rugby-league']                = new Array();
	TXT_SPORT['rugby-league']['name'] = 'Rugby League';
	TXT_SPORT['rugby-league']['1'] = '&nbsp;';
	TXT_SPORT['rugby-league']['45'] = 'Por terminar';
	TXT_SPORT['rugby-league']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['rugby-league']['2'] = 'En directo';
	TXT_SPORT['rugby-league']['12'] = '1er Tiempo';
	TXT_SPORT['rugby-league']['38'] = 'Descanso';
	TXT_SPORT['rugby-league']['13'] = '2º Tiempo';
	TXT_SPORT['rugby-league']['6'] = 'Prórroga';
	TXT_SPORT['rugby-league']['7'] = 'Penaltis';
	TXT_SPORT['rugby-league']['46'] = 'Descanso';
	TXT_SPORT['rugby-league']['3'] = 'Finalizado';
	TXT_SPORT['rugby-league']['10'] = 'Tras la<br />prórroga';
	TXT_SPORT['rugby-league']['11'] = 'Tras los<br />penaltis';
	TXT_SPORT['rugby-league']['9'] = 'Walkover';
	TXT_SPORT['rugby-league']['43'] = 'Retrasado';
	TXT_SPORT['rugby-league']['36'] = 'Parado';
	TXT_SPORT['rugby-league']['4'] = 'Aplazado';
	TXT_SPORT['rugby-league']['5'] = 'Anulado';
	TXT_SPORT['rugby-league']['37'] = 'Suspendido';
	TXT_SPORT['rugby-league']['54'] = 'Por perdido';
	TXT_SPORT['badminton']                = new Array();
	TXT_SPORT['badminton']['name'] = 'Bádminton';
	TXT_SPORT['badminton']['1'] = '&nbsp;';
	TXT_SPORT['badminton']['45'] = 'Por terminar';
	TXT_SPORT['badminton']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['badminton']['2'] = 'En directo';
	TXT_SPORT['badminton']['17'] = '1er Set';
	TXT_SPORT['badminton']['18'] = '2º Set';
	TXT_SPORT['badminton']['19'] = '3er Set';
	TXT_SPORT['badminton']['46'] = 'Descanso';
	TXT_SPORT['badminton']['3'] = 'Finalizado';
	TXT_SPORT['badminton']['8'] = 'Finalizado<br />(retirada)';
	TXT_SPORT['badminton']['9'] = 'Walkover';
	TXT_SPORT['badminton']['43'] = 'Retrasado';
	TXT_SPORT['badminton']['36'] = 'Parado';
	TXT_SPORT['badminton']['4'] = 'Aplazado';
	TXT_SPORT['badminton']['5'] = 'Anulado';
	TXT_SPORT['badminton']['37'] = 'Suspendido';
	TXT_SPORT['badminton']['54'] = 'Por perdido';
	TXT_SPORT['water-polo']                = new Array();
	TXT_SPORT['water-polo']['name'] = 'Waterpolo';
	TXT_SPORT['water-polo']['1'] = '&nbsp;';
	TXT_SPORT['water-polo']['45'] = 'Por terminar';
	TXT_SPORT['water-polo']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['water-polo']['2'] = 'En directo';
	TXT_SPORT['water-polo']['22'] = '1er Cuarto';
	TXT_SPORT['water-polo']['23'] = '2º Cuarto';
	TXT_SPORT['water-polo']['24'] = '3er Cuarto';
	TXT_SPORT['water-polo']['25'] = '4º Cuarto';
	TXT_SPORT['water-polo']['6'] = 'Prórroga';
	TXT_SPORT['water-polo']['7'] = 'Penaltis';
	TXT_SPORT['water-polo']['38'] = 'Descanso';
	TXT_SPORT['water-polo']['46'] = 'Descanso';
	TXT_SPORT['water-polo']['3'] = 'Finalizado';
	TXT_SPORT['water-polo']['10'] = 'Tras la<br />prórroga';
	TXT_SPORT['water-polo']['11'] = 'Tras los<br />penaltis';
	TXT_SPORT['water-polo']['9'] = 'Walkover';
	TXT_SPORT['water-polo']['43'] = 'Retrasado';
	TXT_SPORT['water-polo']['36'] = 'Parado';
	TXT_SPORT['water-polo']['4'] = 'Aplazado';
	TXT_SPORT['water-polo']['5'] = 'Anulado';
	TXT_SPORT['water-polo']['37'] = 'Suspendido';
	TXT_SPORT['water-polo']['54'] = 'Por perdido';
	TXT_SPORT['golf']                = new Array();
	TXT_SPORT['golf']['name'] = 'Golf';
	TXT_SPORT['golf']['1'] = '&nbsp;';
	TXT_SPORT['golf']['45'] = 'Por terminar';
	TXT_SPORT['golf']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['golf']['2'] = 'En directo';
	TXT_SPORT['golf']['65'] = 'Vuelta 1';
	TXT_SPORT['golf']['66'] = 'Vuelta 2';
	TXT_SPORT['golf']['67'] = 'Vuelta 3';
	TXT_SPORT['golf']['68'] = 'Vuelta 4';
	TXT_SPORT['golf']['62'] = 'Tras<br />vuelta 1';
	TXT_SPORT['golf']['63'] = 'Tras<br />vuelta 2';
	TXT_SPORT['golf']['64'] = 'Tras<br />vuelta 3';
	TXT_SPORT['golf']['46'] = 'Descanso';
	TXT_SPORT['golf']['3'] = 'Finalizado';
	TXT_SPORT['golf']['8'] = 'Finalizado<br />(retirada)';
	TXT_SPORT['golf']['9'] = 'Walkover';
	TXT_SPORT['golf']['43'] = 'Retrasado';
	TXT_SPORT['golf']['36'] = 'Parado';
	TXT_SPORT['golf']['4'] = 'Aplazado';
	TXT_SPORT['golf']['5'] = 'Anulado';
	TXT_SPORT['golf']['37'] = 'Suspendido';
	TXT_SPORT['golf']['54'] = 'Por perdido';
	TXT_SPORT['field-hockey']                = new Array();
	TXT_SPORT['field-hockey']['name'] = 'Hockey hierba';
	TXT_SPORT['field-hockey']['1'] = '&nbsp;';
	TXT_SPORT['field-hockey']['45'] = 'Por terminar';
	TXT_SPORT['field-hockey']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['field-hockey']['2'] = 'En directo';
	TXT_SPORT['field-hockey']['12'] = '1er Tiempo';
	TXT_SPORT['field-hockey']['38'] = 'Descanso';
	TXT_SPORT['field-hockey']['13'] = '2º Tiempo';
	TXT_SPORT['field-hockey']['6'] = 'Prórroga';
	TXT_SPORT['field-hockey']['7'] = 'Penaltis';
	TXT_SPORT['field-hockey']['46'] = 'Descanso';
	TXT_SPORT['field-hockey']['3'] = 'Finalizado';
	TXT_SPORT['field-hockey']['10'] = 'Tras la prórroga';
	TXT_SPORT['field-hockey']['11'] = 'Tras los penaltis';
	TXT_SPORT['field-hockey']['9'] = 'Walkover';
	TXT_SPORT['field-hockey']['43'] = 'Retrasado';
	TXT_SPORT['field-hockey']['36'] = 'Parado';
	TXT_SPORT['field-hockey']['4'] = 'Aplazado';
	TXT_SPORT['field-hockey']['5'] = 'Anulado';
	TXT_SPORT['field-hockey']['37'] = 'Suspendido';
	TXT_SPORT['field-hockey']['54'] = 'Por perdido';
	TXT_SPORT['table-tennis']                = new Array();
	TXT_SPORT['table-tennis']['name'] = 'Tenis de mesa';
	TXT_SPORT['table-tennis']['1'] = '&nbsp;';
	TXT_SPORT['table-tennis']['45'] = 'Por terminar';
	TXT_SPORT['table-tennis']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['table-tennis']['2'] = 'En directo';
	TXT_SPORT['table-tennis']['17'] = '1er Set';
	TXT_SPORT['table-tennis']['18'] = '2º Set';
	TXT_SPORT['table-tennis']['19'] = '3er Set';
	TXT_SPORT['table-tennis']['20'] = '4º Set';
	TXT_SPORT['table-tennis']['21'] = '5º Set';
	TXT_SPORT['table-tennis']['55'] = '6º Set';
	TXT_SPORT['table-tennis']['56'] = '7º Set';
	TXT_SPORT['table-tennis']['46'] = 'Descanso';
	TXT_SPORT['table-tennis']['3'] = 'Finalizado';
	TXT_SPORT['table-tennis']['8'] = 'Finalizado<br />(retirada)';
	TXT_SPORT['table-tennis']['9'] = 'Walkover';
	TXT_SPORT['table-tennis']['43'] = 'Retrasado';
	TXT_SPORT['table-tennis']['36'] = 'Parado';
	TXT_SPORT['table-tennis']['4'] = 'Aplazado';
	TXT_SPORT['table-tennis']['5'] = 'Anulado';
	TXT_SPORT['table-tennis']['37'] = 'Suspendido';
	TXT_SPORT['table-tennis']['54'] = 'Por perdido';
	TXT_SPORT['beach-soccer']                = new Array();
	TXT_SPORT['beach-soccer']['name'] = 'Fútbol playa';
	TXT_SPORT['beach-soccer']['1'] = '&nbsp;';
	TXT_SPORT['beach-soccer']['45'] = 'Por terminar';
	TXT_SPORT['beach-soccer']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['beach-soccer']['2'] = 'En directo';
	TXT_SPORT['beach-soccer']['14'] = '1er Periodo';
	TXT_SPORT['beach-soccer']['15'] = '2º Periodo';
	TXT_SPORT['beach-soccer']['16'] = '3er Periodo';
	TXT_SPORT['beach-soccer']['6'] = 'Prórroga';
	TXT_SPORT['beach-soccer']['7'] = 'Penaltis';
	TXT_SPORT['beach-soccer']['46'] = 'Descanso';
	TXT_SPORT['beach-soccer']['3'] = 'Finalizado';
	TXT_SPORT['beach-soccer']['10'] = 'Tras la<br />prórroga';
	TXT_SPORT['beach-soccer']['11'] = 'Tras los<br />penaltis';
	TXT_SPORT['beach-soccer']['9'] = 'Walkover';
	TXT_SPORT['beach-soccer']['43'] = 'Retrasado';
	TXT_SPORT['beach-soccer']['36'] = 'Parado';
	TXT_SPORT['beach-soccer']['4'] = 'Aplazado';
	TXT_SPORT['beach-soccer']['5'] = 'Anulado';
	TXT_SPORT['beach-soccer']['37'] = 'Suspendido';
	TXT_SPORT['beach-soccer']['54'] = 'Por perdido';
	TXT_SPORT['mma']                = new Array();
	TXT_SPORT['mma']['name'] = 'MMA';
	TXT_SPORT['mma']['1'] = '&nbsp;';
	TXT_SPORT['mma']['45'] = 'Por terminar';
	TXT_SPORT['mma']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['mma']['2'] = 'En directo';
	TXT_SPORT['mma']['46'] = 'Descanso';
	TXT_SPORT['mma']['3'] = 'Finalizado';
	TXT_SPORT['mma']['9'] = 'Walkover';
	TXT_SPORT['mma']['43'] = 'Retrasado';
	TXT_SPORT['mma']['36'] = 'Parado';
	TXT_SPORT['mma']['4'] = 'Aplazado';
	TXT_SPORT['mma']['5'] = 'Anulado';
	TXT_SPORT['mma']['37'] = 'Suspendido';
	TXT_SPORT['mma']['54'] = 'Por perdido';
	TXT_SPORT['netball']                = new Array();
	TXT_SPORT['netball']['name'] = 'Netball';
	TXT_SPORT['netball']['1'] = '&nbsp;';
	TXT_SPORT['netball']['45'] = 'Por terminar';
	TXT_SPORT['netball']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['netball']['2'] = 'En directo';
	TXT_SPORT['netball']['22'] = '1er Cuarto';
	TXT_SPORT['netball']['23'] = '2º Cuarto';
	TXT_SPORT['netball']['24'] = '3er Cuarto';
	TXT_SPORT['netball']['25'] = '4º Cuarto';
	TXT_SPORT['netball']['6'] = 'Prórroga';
	TXT_SPORT['netball']['38'] = 'Descanso';
	TXT_SPORT['netball']['46'] = 'Descanso';
	TXT_SPORT['netball']['3'] = 'Finalizado';
	TXT_SPORT['netball']['10'] = 'Tras la prórroga';
	TXT_SPORT['netball']['9'] = 'Walkover';
	TXT_SPORT['netball']['43'] = 'Retrasado';
	TXT_SPORT['netball']['36'] = 'Parado';
	TXT_SPORT['netball']['4'] = 'Aplazado';
	TXT_SPORT['netball']['5'] = 'Anulado';
	TXT_SPORT['netball']['37'] = 'Suspendido';
	TXT_SPORT['netball']['54'] = 'Por perdido';
	TXT_SPORT['pesapallo']                = new Array();
	TXT_SPORT['pesapallo']['name'] = 'Pesäpallo';
	TXT_SPORT['pesapallo']['1'] = '&nbsp;';
	TXT_SPORT['pesapallo']['45'] = 'Por terminar';
	TXT_SPORT['pesapallo']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['pesapallo']['2'] = 'En directo';
	TXT_SPORT['pesapallo']['26'] = '1a Entrada';
	TXT_SPORT['pesapallo']['27'] = '2a Entrada';
	TXT_SPORT['pesapallo']['28'] = '3a Entrada';
	TXT_SPORT['pesapallo']['29'] = '4a Entrada';
	TXT_SPORT['pesapallo']['30'] = '5a Entrada';
	TXT_SPORT['pesapallo']['31'] = '6a Entrada';
	TXT_SPORT['pesapallo']['32'] = '7a Entrada';
	TXT_SPORT['pesapallo']['33'] = '8a Entrada';
	TXT_SPORT['pesapallo']['35'] = 'Entrada Extra';
	TXT_SPORT['pesapallo']['7'] = 'Penaltis';
	TXT_SPORT['pesapallo']['46'] = 'Descanso';
	TXT_SPORT['pesapallo']['3'] = 'Finalizado';
	TXT_SPORT['pesapallo']['69'] = 'Tras EE';
	TXT_SPORT['pesapallo']['11'] = 'Tras penaltis';
	TXT_SPORT['pesapallo']['9'] = 'Walkover';
	TXT_SPORT['pesapallo']['43'] = 'Retrasado';
	TXT_SPORT['pesapallo']['36'] = 'Parado';
	TXT_SPORT['pesapallo']['4'] = 'Aplazado';
	TXT_SPORT['pesapallo']['5'] = 'Anulado';
	TXT_SPORT['pesapallo']['37'] = 'Suspendido';
	TXT_SPORT['pesapallo']['54'] = 'Por perdido';
	TXT_SPORT['motorsport']                = new Array();
	TXT_SPORT['motorsport']['name'] = 'Motor';
	TXT_SPORT['motorsport-auto-racing']                = new Array();
	TXT_SPORT['motorsport-auto-racing']['name'] = 'Automovilismo';
	TXT_SPORT['motorsport-auto-racing']['1'] = '&nbsp;';
	TXT_SPORT['motorsport-auto-racing']['2'] = 'En directo';
	TXT_SPORT['motorsport-auto-racing']['3'] = 'Finalizado';
	TXT_SPORT['motorsport-auto-racing']['4'] = 'Aplazado';
	TXT_SPORT['motorsport-auto-racing']['5'] = 'Anulado';
	TXT_SPORT['motorsport-auto-racing']['36'] = 'Parado';
	TXT_SPORT['motorsport-auto-racing']['37'] = 'Suspendido';
	TXT_SPORT['motorsport-auto-racing']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['motorsport-auto-racing']['43'] = 'Retrasado';
	TXT_SPORT['motorsport-moto-racing']                = new Array();
	TXT_SPORT['motorsport-moto-racing']['name'] = 'Motociclismo';
	TXT_SPORT['motorsport-moto-racing']['1'] = '&nbsp;';
	TXT_SPORT['motorsport-moto-racing']['2'] = 'En directo';
	TXT_SPORT['motorsport-moto-racing']['3'] = 'Finalizado';
	TXT_SPORT['motorsport-moto-racing']['4'] = 'Aplazado';
	TXT_SPORT['motorsport-moto-racing']['5'] = 'Anulado';
	TXT_SPORT['motorsport-moto-racing']['36'] = 'Parado';
	TXT_SPORT['motorsport-moto-racing']['37'] = 'Suspendido';
	TXT_SPORT['motorsport-moto-racing']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['motorsport-moto-racing']['43'] = 'Retrasado';
	TXT_SPORT['motorsport-moto-racing']['54'] = 'Por perdido';
	TXT_SPORT['cycling']                = new Array();
	TXT_SPORT['cycling']['name'] = 'Ciclismo';
	TXT_SPORT['cycling']['1'] = '&nbsp;';
	TXT_SPORT['cycling']['2'] = 'En directo';
	TXT_SPORT['cycling']['3'] = 'Finalizado';
	TXT_SPORT['cycling']['4'] = 'Aplazado';
	TXT_SPORT['cycling']['5'] = 'Anulado';
	TXT_SPORT['cycling']['36'] = 'Parado';
	TXT_SPORT['cycling']['37'] = 'Suspendido';
	TXT_SPORT['cycling']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['cycling']['43'] = 'Retrasado';
	TXT_SPORT['horse-racing']                = new Array();
	TXT_SPORT['horse-racing']['name'] = 'Carreras de caballos';
	TXT_SPORT['horse-racing']['1'] = '&nbsp;';
	TXT_SPORT['horse-racing']['2'] = 'En directo';
	TXT_SPORT['horse-racing']['3'] = 'Finalizado';
	TXT_SPORT['horse-racing']['4'] = 'Aplazado';
	TXT_SPORT['horse-racing']['5'] = 'Anulado';
	TXT_SPORT['horse-racing']['36'] = 'Parado';
	TXT_SPORT['horse-racing']['37'] = 'Suspendido';
	TXT_SPORT['horse-racing']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['horse-racing']['43'] = 'Retrasado';
	TXT_SPORT['esports']                = new Array();
	TXT_SPORT['esports']['name'] = 'eSports';
	TXT_SPORT['esports']['1'] = '&nbsp;';
	TXT_SPORT['esports']['2'] = 'En directo';
	TXT_SPORT['esports']['3'] = 'Finalizado';
	TXT_SPORT['esports']['4'] = 'Aplazado';
	TXT_SPORT['esports']['5'] = 'Anulado';
	TXT_SPORT['esports']['36'] = 'Parado';
	TXT_SPORT['esports']['37'] = 'Suspendido';
	TXT_SPORT['esports']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['esports']['43'] = 'Retrasado';
	TXT_SPORT['esports']['54'] = 'Por perdido';
	TXT_SPORT['esports']['9'] = 'Walkover';
	TXT_SPORT['esports']['45'] = 'Por terminar';
	TXT_SPORT['winter-sports']                = new Array();
	TXT_SPORT['winter-sports']['name'] = 'Deportes de invierno';
	TXT_SPORT['winter-sports-ski-jumping']                = new Array();
	TXT_SPORT['winter-sports-ski-jumping']['name'] = 'Salto de esquí';
	TXT_SPORT['winter-sports-ski-jumping']['1'] = '&nbsp;';
	TXT_SPORT['winter-sports-ski-jumping']['2'] = 'En directo';
	TXT_SPORT['winter-sports-ski-jumping']['3'] = 'Finalizado';
	TXT_SPORT['winter-sports-ski-jumping']['4'] = 'Aplazado';
	TXT_SPORT['winter-sports-ski-jumping']['5'] = 'Anulado';
	TXT_SPORT['winter-sports-ski-jumping']['36'] = 'Parado';
	TXT_SPORT['winter-sports-ski-jumping']['37'] = 'Suspendido';
	TXT_SPORT['winter-sports-ski-jumping']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['winter-sports-ski-jumping']['43'] = 'Retrasado';
	TXT_SPORT['winter-sports-alpine-skiing']                = new Array();
	TXT_SPORT['winter-sports-alpine-skiing']['name'] = 'Esquí alpino';
	TXT_SPORT['winter-sports-alpine-skiing']['1'] = '&nbsp;';
	TXT_SPORT['winter-sports-alpine-skiing']['2'] = 'En directo';
	TXT_SPORT['winter-sports-alpine-skiing']['3'] = 'Finalizado';
	TXT_SPORT['winter-sports-alpine-skiing']['4'] = 'Aplazado';
	TXT_SPORT['winter-sports-alpine-skiing']['5'] = 'Anulado';
	TXT_SPORT['winter-sports-alpine-skiing']['36'] = 'Parado';
	TXT_SPORT['winter-sports-alpine-skiing']['37'] = 'Suspendido';
	TXT_SPORT['winter-sports-alpine-skiing']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['winter-sports-alpine-skiing']['43'] = 'Retrasado';
	TXT_SPORT['winter-sports-cross-country']                = new Array();
	TXT_SPORT['winter-sports-cross-country']['name'] = 'Esquí de fondo';
	TXT_SPORT['winter-sports-cross-country']['1'] = '&nbsp;';
	TXT_SPORT['winter-sports-cross-country']['2'] = 'En directo';
	TXT_SPORT['winter-sports-cross-country']['3'] = 'Finalizado';
	TXT_SPORT['winter-sports-cross-country']['4'] = 'Aplazado';
	TXT_SPORT['winter-sports-cross-country']['5'] = 'Anulado';
	TXT_SPORT['winter-sports-cross-country']['36'] = 'Parado';
	TXT_SPORT['winter-sports-cross-country']['37'] = 'Suspendido';
	TXT_SPORT['winter-sports-cross-country']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['winter-sports-cross-country']['43'] = 'Retrasado';
	TXT_SPORT['winter-sports-biathlon']                = new Array();
	TXT_SPORT['winter-sports-biathlon']['name'] = 'Biatlón';
	TXT_SPORT['winter-sports-biathlon']['1'] = '&nbsp;';
	TXT_SPORT['winter-sports-biathlon']['2'] = 'En directo';
	TXT_SPORT['winter-sports-biathlon']['3'] = 'Finalizado';
	TXT_SPORT['winter-sports-biathlon']['4'] = 'Aplazado';
	TXT_SPORT['winter-sports-biathlon']['5'] = 'Anulado';
	TXT_SPORT['winter-sports-biathlon']['36'] = 'Parado';
	TXT_SPORT['winter-sports-biathlon']['37'] = 'Suspendido';
	TXT_SPORT['winter-sports-biathlon']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['winter-sports-biathlon']['43'] = 'Retrasado';
	TXT_SPORT['kabaddi']                = new Array();
	TXT_SPORT['kabaddi']['name'] = 'Kabaddi';
	TXT_SPORT['kabaddi']['1'] = '&nbsp;';
	TXT_SPORT['kabaddi']['45'] = 'Por terminar';
	TXT_SPORT['kabaddi']['42'] = 'En espera de<br />actualizaciones';
	TXT_SPORT['kabaddi']['2'] = 'En directo';
	TXT_SPORT['kabaddi']['12'] = '1er Tiempo';
	TXT_SPORT['kabaddi']['38'] = 'Descanso';
	TXT_SPORT['kabaddi']['13'] = '2º Tiempo';
	TXT_SPORT['kabaddi']['6'] = 'Extra Time';
	TXT_SPORT['kabaddi']['46'] = 'Descanso';
	TXT_SPORT['kabaddi']['3'] = 'Finalizado';
	TXT_SPORT['kabaddi']['10'] = 'After ET';
	TXT_SPORT['kabaddi']['9'] = 'Walkover';
	TXT_SPORT['kabaddi']['43'] = 'Retrasado';
	TXT_SPORT['kabaddi']['36'] = 'Parado';
	TXT_SPORT['kabaddi']['4'] = 'Aplazado';
	TXT_SPORT['kabaddi']['5'] = 'Anulado';
	TXT_SPORT['kabaddi']['37'] = 'Suspendido';
	TXT_SPORT['kabaddi']['54'] = 'Por perdido';
    // text strings
    var TXT_SPORT_MOBILE            = new Array();
	TXT_SPORT_MOBILE['soccer']                = new Array();
	TXT_SPORT_MOBILE['soccer']['name'] = 'Fútbol';
	TXT_SPORT_MOBILE['soccer']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['soccer']['45'] = 'Por terminar';
	TXT_SPORT_MOBILE['soccer']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['soccer']['2'] = 'En directo';
	TXT_SPORT_MOBILE['soccer']['12'] = 'T1';
	TXT_SPORT_MOBILE['soccer']['13'] = 'T2';
	TXT_SPORT_MOBILE['soccer']['6'] = 'Prórr.';
	TXT_SPORT_MOBILE['soccer']['7'] = 'Pen.';
	TXT_SPORT_MOBILE['soccer']['38'] = 'Descanso';
	TXT_SPORT_MOBILE['soccer']['46'] = 'Descanso';
	TXT_SPORT_MOBILE['soccer']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['soccer']['10'] = 'Tras prórr.';
	TXT_SPORT_MOBILE['soccer']['11'] = 'Tras pen.';
	TXT_SPORT_MOBILE['soccer']['9'] = 'WO';
	TXT_SPORT_MOBILE['soccer']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['soccer']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['soccer']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['soccer']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['soccer']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['soccer']['54'] = 'Por perdido';
	TXT_SPORT_MOBILE['tennis']                = new Array();
	TXT_SPORT_MOBILE['tennis']['name'] = 'Tenis';
	TXT_SPORT_MOBILE['tennis']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['tennis']['45'] = 'Por terminar';
	TXT_SPORT_MOBILE['tennis']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['tennis']['2'] = 'En directo';
	TXT_SPORT_MOBILE['tennis']['17'] = 'S1';
	TXT_SPORT_MOBILE['tennis']['18'] = 'S2';
	TXT_SPORT_MOBILE['tennis']['19'] = 'S3';
	TXT_SPORT_MOBILE['tennis']['20'] = 'S4';
	TXT_SPORT_MOBILE['tennis']['21'] = 'S5';
	TXT_SPORT_MOBILE['tennis']['47'] = 'S1/TB';
	TXT_SPORT_MOBILE['tennis']['48'] = 'S2/TB';
	TXT_SPORT_MOBILE['tennis']['49'] = 'S3/TB';
	TXT_SPORT_MOBILE['tennis']['50'] = 'S4/TB';
	TXT_SPORT_MOBILE['tennis']['51'] = 'S5/TB';
	TXT_SPORT_MOBILE['tennis']['46'] = 'Descanso';
	TXT_SPORT_MOBILE['tennis']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['tennis']['8'] = 'Retirada';
	TXT_SPORT_MOBILE['tennis']['9'] = 'WO';
	TXT_SPORT_MOBILE['tennis']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['tennis']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['tennis']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['tennis']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['tennis']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['tennis']['54'] = 'Por perdido';
	TXT_SPORT_MOBILE['tennis']['57'] = 'Tras<br />D1';
	TXT_SPORT_MOBILE['tennis']['58'] = 'Tras<br />D2';
	TXT_SPORT_MOBILE['tennis']['335'] = 'Médico';
	TXT_SPORT_MOBILE['basketball']                = new Array();
	TXT_SPORT_MOBILE['basketball']['name'] = 'Baloncesto';
	TXT_SPORT_MOBILE['basketball']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['basketball']['45'] = 'Por terminar';
	TXT_SPORT_MOBILE['basketball']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['basketball']['2'] = 'En directo';
	TXT_SPORT_MOBILE['basketball']['22'] = 'C1';
	TXT_SPORT_MOBILE['basketball']['23'] = 'C2';
	TXT_SPORT_MOBILE['basketball']['24'] = 'C3';
	TXT_SPORT_MOBILE['basketball']['25'] = 'C4';
	TXT_SPORT_MOBILE['basketball']['6'] = 'Prórr.';
	TXT_SPORT_MOBILE['basketball']['38'] = 'Descanso';
	TXT_SPORT_MOBILE['basketball']['46'] = 'Descanso';
	TXT_SPORT_MOBILE['basketball']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['basketball']['10'] = 'Tras prórr.';
	TXT_SPORT_MOBILE['basketball']['9'] = 'WO';
	TXT_SPORT_MOBILE['basketball']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['basketball']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['basketball']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['basketball']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['basketball']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['basketball']['54'] = 'Por perdido';
	TXT_SPORT_MOBILE['hockey']                = new Array();
	TXT_SPORT_MOBILE['hockey']['name'] = 'Hockey';
	TXT_SPORT_MOBILE['hockey']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['hockey']['45'] = 'Por terminar';
	TXT_SPORT_MOBILE['hockey']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['hockey']['2'] = 'En directo';
	TXT_SPORT_MOBILE['hockey']['14'] = 'P1';
	TXT_SPORT_MOBILE['hockey']['15'] = 'P2';
	TXT_SPORT_MOBILE['hockey']['16'] = 'P3';
	TXT_SPORT_MOBILE['hockey']['6'] = 'Prórr.';
	TXT_SPORT_MOBILE['hockey']['7'] = 'Pen.';
	TXT_SPORT_MOBILE['hockey']['46'] = 'Descanso';
	TXT_SPORT_MOBILE['hockey']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['hockey']['10'] = 'Tras<br />prórr.';
	TXT_SPORT_MOBILE['hockey']['11'] = 'Tras<br />pen.';
	TXT_SPORT_MOBILE['hockey']['9'] = 'WO';
	TXT_SPORT_MOBILE['hockey']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['hockey']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['hockey']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['hockey']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['hockey']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['hockey']['54'] = 'Por perdido';
	TXT_SPORT_MOBILE['american-football']                = new Array();
	TXT_SPORT_MOBILE['american-football']['name'] = 'Fútbol Americano';
	TXT_SPORT_MOBILE['american-football']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['american-football']['45'] = 'Por terminar';
	TXT_SPORT_MOBILE['american-football']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['american-football']['2'] = 'En directo';
	TXT_SPORT_MOBILE['american-football']['22'] = 'C1';
	TXT_SPORT_MOBILE['american-football']['23'] = 'C2';
	TXT_SPORT_MOBILE['american-football']['24'] = 'C3';
	TXT_SPORT_MOBILE['american-football']['25'] = 'C4';
	TXT_SPORT_MOBILE['american-football']['6'] = 'Prórr.';
	TXT_SPORT_MOBILE['american-football']['38'] = 'Descanso';
	TXT_SPORT_MOBILE['american-football']['46'] = 'Descanso';
	TXT_SPORT_MOBILE['american-football']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['american-football']['10'] = 'Tras prórr.';
	TXT_SPORT_MOBILE['american-football']['9'] = 'WO';
	TXT_SPORT_MOBILE['american-football']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['american-football']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['american-football']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['american-football']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['american-football']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['american-football']['54'] = 'Por perdido';
	TXT_SPORT_MOBILE['baseball']                = new Array();
	TXT_SPORT_MOBILE['baseball']['name'] = 'Béisbol';
	TXT_SPORT_MOBILE['baseball']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['baseball']['45'] = 'Por terminar';
	TXT_SPORT_MOBILE['baseball']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['baseball']['2'] = 'En directo';
	TXT_SPORT_MOBILE['baseball']['26'] = 'E1';
	TXT_SPORT_MOBILE['baseball']['27'] = 'E2';
	TXT_SPORT_MOBILE['baseball']['28'] = 'E3';
	TXT_SPORT_MOBILE['baseball']['29'] = 'E4';
	TXT_SPORT_MOBILE['baseball']['30'] = 'E5';
	TXT_SPORT_MOBILE['baseball']['31'] = 'E6';
	TXT_SPORT_MOBILE['baseball']['32'] = 'E7';
	TXT_SPORT_MOBILE['baseball']['33'] = 'E8';
	TXT_SPORT_MOBILE['baseball']['34'] = 'E9';
	TXT_SPORT_MOBILE['baseball']['35'] = 'EE';
	TXT_SPORT_MOBILE['baseball']['46'] = 'Descanso';
	TXT_SPORT_MOBILE['baseball']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['baseball']['9'] = 'WO';
	TXT_SPORT_MOBILE['baseball']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['baseball']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['baseball']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['baseball']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['baseball']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['baseball']['54'] = 'Por perdido';
	TXT_SPORT_MOBILE['handball']                = new Array();
	TXT_SPORT_MOBILE['handball']['name'] = 'Balonmano';
	TXT_SPORT_MOBILE['handball']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['handball']['45'] = 'Por terminar';
	TXT_SPORT_MOBILE['handball']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['handball']['2'] = 'En directo';
	TXT_SPORT_MOBILE['handball']['12'] = 'T1';
	TXT_SPORT_MOBILE['handball']['38'] = 'Descanso';
	TXT_SPORT_MOBILE['handball']['13'] = 'T2';
	TXT_SPORT_MOBILE['handball']['6'] = 'Prórr.';
	TXT_SPORT_MOBILE['handball']['7'] = 'Pen.';
	TXT_SPORT_MOBILE['handball']['46'] = 'Descanso';
	TXT_SPORT_MOBILE['handball']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['handball']['10'] = 'Tras<br />prórr.';
	TXT_SPORT_MOBILE['handball']['11'] = 'Tras<br />pen.';
	TXT_SPORT_MOBILE['handball']['9'] = 'WO';
	TXT_SPORT_MOBILE['handball']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['handball']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['handball']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['handball']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['handball']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['handball']['54'] = 'Por perdido';
	TXT_SPORT_MOBILE['rugby-union']                = new Array();
	TXT_SPORT_MOBILE['rugby-union']['name'] = 'Rugby';
	TXT_SPORT_MOBILE['rugby-union']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['rugby-union']['45'] = 'Por terminar';
	TXT_SPORT_MOBILE['rugby-union']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['rugby-union']['2'] = 'En directo';
	TXT_SPORT_MOBILE['rugby-union']['12'] = 'T1';
	TXT_SPORT_MOBILE['rugby-union']['38'] = 'Descanso';
	TXT_SPORT_MOBILE['rugby-union']['13'] = 'T2';
	TXT_SPORT_MOBILE['rugby-union']['6'] = 'Prórr.';
	TXT_SPORT_MOBILE['rugby-union']['7'] = 'Pen.';
	TXT_SPORT_MOBILE['rugby-union']['46'] = 'Descanso';
	TXT_SPORT_MOBILE['rugby-union']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['rugby-union']['10'] = 'Tras prórr.';
	TXT_SPORT_MOBILE['rugby-union']['11'] = 'Tras pen.';
	TXT_SPORT_MOBILE['rugby-union']['9'] = 'WO';
	TXT_SPORT_MOBILE['rugby-union']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['rugby-union']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['rugby-union']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['rugby-union']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['rugby-union']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['rugby-union']['54'] = 'Por perdido';
	TXT_SPORT_MOBILE['floorball']                = new Array();
	TXT_SPORT_MOBILE['floorball']['name'] = 'Unihockey';
	TXT_SPORT_MOBILE['floorball']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['floorball']['45'] = 'Por terminar';
	TXT_SPORT_MOBILE['floorball']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['floorball']['2'] = 'En directo';
	TXT_SPORT_MOBILE['floorball']['14'] = 'P1';
	TXT_SPORT_MOBILE['floorball']['15'] = 'P2';
	TXT_SPORT_MOBILE['floorball']['16'] = 'P3';
	TXT_SPORT_MOBILE['floorball']['6'] = 'Prórr.';
	TXT_SPORT_MOBILE['floorball']['7'] = 'Pen.';
	TXT_SPORT_MOBILE['floorball']['46'] = 'Descanso';
	TXT_SPORT_MOBILE['floorball']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['floorball']['10'] = 'Tras<br />prórr.';
	TXT_SPORT_MOBILE['floorball']['11'] = 'Tras<br />pen.';
	TXT_SPORT_MOBILE['floorball']['9'] = 'WO';
	TXT_SPORT_MOBILE['floorball']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['floorball']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['floorball']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['floorball']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['floorball']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['floorball']['54'] = 'Por perdido';
	TXT_SPORT_MOBILE['bandy']                = new Array();
	TXT_SPORT_MOBILE['bandy']['name'] = 'Bandy';
	TXT_SPORT_MOBILE['bandy']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['bandy']['45'] = 'Por terminar';
	TXT_SPORT_MOBILE['bandy']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['bandy']['2'] = 'En directo';
	TXT_SPORT_MOBILE['bandy']['12'] = 'T1';
	TXT_SPORT_MOBILE['bandy']['38'] = 'Descanso';
	TXT_SPORT_MOBILE['bandy']['13'] = 'T2';
	TXT_SPORT_MOBILE['bandy']['6'] = 'Prórr.';
	TXT_SPORT_MOBILE['bandy']['7'] = 'Pen.';
	TXT_SPORT_MOBILE['bandy']['46'] = 'Descanso';
	TXT_SPORT_MOBILE['bandy']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['bandy']['10'] = 'Tras prórr.';
	TXT_SPORT_MOBILE['bandy']['11'] = 'Tras pen.';
	TXT_SPORT_MOBILE['bandy']['9'] = 'WO';
	TXT_SPORT_MOBILE['bandy']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['bandy']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['bandy']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['bandy']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['bandy']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['bandy']['54'] = 'Por perdido';
	TXT_SPORT_MOBILE['futsal']                = new Array();
	TXT_SPORT_MOBILE['futsal']['name'] = 'Fútbol Sala';
	TXT_SPORT_MOBILE['futsal']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['futsal']['45'] = 'Por terminar';
	TXT_SPORT_MOBILE['futsal']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['futsal']['2'] = 'En directo';
	TXT_SPORT_MOBILE['futsal']['12'] = 'T1';
	TXT_SPORT_MOBILE['futsal']['38'] = 'Descanso';
	TXT_SPORT_MOBILE['futsal']['13'] = 'T2';
	TXT_SPORT_MOBILE['futsal']['6'] = 'Prórr.';
	TXT_SPORT_MOBILE['futsal']['7'] = 'Pen.';
	TXT_SPORT_MOBILE['futsal']['46'] = 'Descanso';
	TXT_SPORT_MOBILE['futsal']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['futsal']['10'] = 'Tras prórr.';
	TXT_SPORT_MOBILE['futsal']['11'] = 'Tras pen.';
	TXT_SPORT_MOBILE['futsal']['9'] = 'WO';
	TXT_SPORT_MOBILE['futsal']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['futsal']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['futsal']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['futsal']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['futsal']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['futsal']['54'] = 'Por perdido';
	TXT_SPORT_MOBILE['volleyball']                = new Array();
	TXT_SPORT_MOBILE['volleyball']['name'] = 'Voleibol';
	TXT_SPORT_MOBILE['volleyball']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['volleyball']['45'] = 'Por terminar';
	TXT_SPORT_MOBILE['volleyball']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['volleyball']['2'] = 'En directo';
	TXT_SPORT_MOBILE['volleyball']['17'] = 'S1';
	TXT_SPORT_MOBILE['volleyball']['18'] = 'S2';
	TXT_SPORT_MOBILE['volleyball']['19'] = 'S3';
	TXT_SPORT_MOBILE['volleyball']['20'] = 'S4';
	TXT_SPORT_MOBILE['volleyball']['21'] = 'S5';
	TXT_SPORT_MOBILE['volleyball']['55'] = 'S6';
	TXT_SPORT_MOBILE['volleyball']['56'] = 'S7';
	TXT_SPORT_MOBILE['volleyball']['46'] = 'Descanso';
	TXT_SPORT_MOBILE['volleyball']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['volleyball']['9'] = 'WO';
	TXT_SPORT_MOBILE['volleyball']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['volleyball']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['volleyball']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['volleyball']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['volleyball']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['volleyball']['54'] = 'Por perdido';
	TXT_SPORT_MOBILE['cricket']                = new Array();
	TXT_SPORT_MOBILE['cricket']['name'] = 'Cricket';
	TXT_SPORT_MOBILE['cricket']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['cricket']['45'] = 'Por terminar';
	TXT_SPORT_MOBILE['cricket']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['cricket']['2'] = 'En directo';
	TXT_SPORT_MOBILE['cricket']['26'] = 'E1';
	TXT_SPORT_MOBILE['cricket']['27'] = 'E2';
	TXT_SPORT_MOBILE['cricket']['57'] = 'Tras<br />D1';
	TXT_SPORT_MOBILE['cricket']['58'] = 'Tras<br />D2';
	TXT_SPORT_MOBILE['cricket']['59'] = 'Tras<br />D3';
	TXT_SPORT_MOBILE['cricket']['60'] = 'Tras<br />D4';
	TXT_SPORT_MOBILE['cricket']['61'] = 'Tras<br />D5';
	TXT_SPORT_MOBILE['cricket']['46'] = 'Descanso';
	TXT_SPORT_MOBILE['cricket']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['cricket']['9'] = 'WO';
	TXT_SPORT_MOBILE['cricket']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['cricket']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['cricket']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['cricket']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['cricket']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['cricket']['54'] = 'Por perdido';
	TXT_SPORT_MOBILE['cricket']['333'] = 'Lunch';
	TXT_SPORT_MOBILE['cricket']['334'] = 'Tea';
	TXT_SPORT_MOBILE['darts']                = new Array();
	TXT_SPORT_MOBILE['darts']['name'] = 'Dardos';
	TXT_SPORT_MOBILE['darts']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['darts']['45'] = 'Por terminar';
	TXT_SPORT_MOBILE['darts']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['darts']['2'] = 'En directo';
	TXT_SPORT_MOBILE['darts']['17'] = 'S1';
	TXT_SPORT_MOBILE['darts']['18'] = 'S2';
	TXT_SPORT_MOBILE['darts']['19'] = 'S3';
	TXT_SPORT_MOBILE['darts']['20'] = 'S4';
	TXT_SPORT_MOBILE['darts']['21'] = 'S5';
	TXT_SPORT_MOBILE['darts']['55'] = 'S6';
	TXT_SPORT_MOBILE['darts']['56'] = 'S7';
	TXT_SPORT_MOBILE['darts']['324'] = 'S8';
	TXT_SPORT_MOBILE['darts']['325'] = 'S9';
	TXT_SPORT_MOBILE['darts']['326'] = 'S10';
	TXT_SPORT_MOBILE['darts']['327'] = 'S11';
	TXT_SPORT_MOBILE['darts']['328'] = 'S12';
	TXT_SPORT_MOBILE['darts']['329'] = 'S13';
	TXT_SPORT_MOBILE['darts']['46'] = 'Descanso';
	TXT_SPORT_MOBILE['darts']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['darts']['9'] = 'WO';
	TXT_SPORT_MOBILE['darts']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['darts']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['darts']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['darts']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['darts']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['darts']['54'] = 'Por perdido';
	TXT_SPORT_MOBILE['snooker']                = new Array();
	TXT_SPORT_MOBILE['snooker']['name'] = 'Snooker';
	TXT_SPORT_MOBILE['snooker']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['snooker']['45'] = 'Por terminar';
	TXT_SPORT_MOBILE['snooker']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['snooker']['2'] = 'En directo';
	TXT_SPORT_MOBILE['snooker']['46'] = 'Descanso';
	TXT_SPORT_MOBILE['snooker']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['snooker']['9'] = 'WO';
	TXT_SPORT_MOBILE['snooker']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['snooker']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['snooker']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['snooker']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['snooker']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['snooker']['54'] = 'Por perdido';
	TXT_SPORT_MOBILE['boxing']                = new Array();
	TXT_SPORT_MOBILE['boxing']['name'] = 'Boxeo';
	TXT_SPORT_MOBILE['boxing']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['boxing']['45'] = 'Por terminar';
	TXT_SPORT_MOBILE['boxing']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['boxing']['2'] = 'En directo';
	TXT_SPORT_MOBILE['boxing']['46'] = 'Descanso';
	TXT_SPORT_MOBILE['boxing']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['boxing']['9'] = 'WO';
	TXT_SPORT_MOBILE['boxing']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['boxing']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['boxing']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['boxing']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['boxing']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['boxing']['54'] = 'Por perdido';
	TXT_SPORT_MOBILE['beach-volleyball']                = new Array();
	TXT_SPORT_MOBILE['beach-volleyball']['name'] = 'Voley Playa';
	TXT_SPORT_MOBILE['beach-volleyball']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['beach-volleyball']['45'] = 'Por terminar';
	TXT_SPORT_MOBILE['beach-volleyball']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['beach-volleyball']['2'] = 'En directo';
	TXT_SPORT_MOBILE['beach-volleyball']['17'] = 'S1';
	TXT_SPORT_MOBILE['beach-volleyball']['18'] = 'S2';
	TXT_SPORT_MOBILE['beach-volleyball']['19'] = 'S3';
	TXT_SPORT_MOBILE['beach-volleyball']['20'] = 'S4';
	TXT_SPORT_MOBILE['beach-volleyball']['21'] = 'S5';
	TXT_SPORT_MOBILE['beach-volleyball']['46'] = 'Descanso';
	TXT_SPORT_MOBILE['beach-volleyball']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['beach-volleyball']['8'] = 'Retirada';
	TXT_SPORT_MOBILE['beach-volleyball']['9'] = 'WO';
	TXT_SPORT_MOBILE['beach-volleyball']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['beach-volleyball']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['beach-volleyball']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['beach-volleyball']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['beach-volleyball']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['beach-volleyball']['54'] = 'Por perdido';
	TXT_SPORT_MOBILE['aussie-rules']                = new Array();
	TXT_SPORT_MOBILE['aussie-rules']['name'] = 'Fútbol Australiano';
	TXT_SPORT_MOBILE['aussie-rules']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['aussie-rules']['45'] = 'Por terminar';
	TXT_SPORT_MOBILE['aussie-rules']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['aussie-rules']['2'] = 'En directo';
	TXT_SPORT_MOBILE['aussie-rules']['22'] = 'C1';
	TXT_SPORT_MOBILE['aussie-rules']['23'] = 'C2';
	TXT_SPORT_MOBILE['aussie-rules']['24'] = 'C3';
	TXT_SPORT_MOBILE['aussie-rules']['25'] = 'C4';
	TXT_SPORT_MOBILE['aussie-rules']['6'] = 'Prórr.';
	TXT_SPORT_MOBILE['aussie-rules']['38'] = 'Descanso';
	TXT_SPORT_MOBILE['aussie-rules']['46'] = 'Descanso';
	TXT_SPORT_MOBILE['aussie-rules']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['aussie-rules']['10'] = 'Tras prórr.';
	TXT_SPORT_MOBILE['aussie-rules']['9'] = 'WO';
	TXT_SPORT_MOBILE['aussie-rules']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['aussie-rules']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['aussie-rules']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['aussie-rules']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['aussie-rules']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['aussie-rules']['54'] = 'Por perdido';
	TXT_SPORT_MOBILE['rugby-league']                = new Array();
	TXT_SPORT_MOBILE['rugby-league']['name'] = 'Rugby League';
	TXT_SPORT_MOBILE['rugby-league']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['rugby-league']['45'] = 'Por terminar';
	TXT_SPORT_MOBILE['rugby-league']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['rugby-league']['2'] = 'En directo';
	TXT_SPORT_MOBILE['rugby-league']['12'] = 'T1';
	TXT_SPORT_MOBILE['rugby-league']['38'] = 'Descanso';
	TXT_SPORT_MOBILE['rugby-league']['13'] = 'T2';
	TXT_SPORT_MOBILE['rugby-league']['6'] = 'Prórr.';
	TXT_SPORT_MOBILE['rugby-league']['7'] = 'Pen.';
	TXT_SPORT_MOBILE['rugby-league']['46'] = 'Descanso';
	TXT_SPORT_MOBILE['rugby-league']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['rugby-league']['10'] = 'Tras<br />prórr.';
	TXT_SPORT_MOBILE['rugby-league']['11'] = 'Tras<br />pen.';
	TXT_SPORT_MOBILE['rugby-league']['9'] = 'WO';
	TXT_SPORT_MOBILE['rugby-league']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['rugby-league']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['rugby-league']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['rugby-league']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['rugby-league']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['rugby-league']['54'] = 'Por perdido';
	TXT_SPORT_MOBILE['badminton']                = new Array();
	TXT_SPORT_MOBILE['badminton']['name'] = 'Bádminton';
	TXT_SPORT_MOBILE['badminton']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['badminton']['45'] = 'Por terminar';
	TXT_SPORT_MOBILE['badminton']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['badminton']['2'] = 'En directo';
	TXT_SPORT_MOBILE['badminton']['17'] = 'S1';
	TXT_SPORT_MOBILE['badminton']['18'] = 'S2';
	TXT_SPORT_MOBILE['badminton']['19'] = 'S3';
	TXT_SPORT_MOBILE['badminton']['46'] = 'Descanso';
	TXT_SPORT_MOBILE['badminton']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['badminton']['8'] = 'Retirada';
	TXT_SPORT_MOBILE['badminton']['9'] = 'WO';
	TXT_SPORT_MOBILE['badminton']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['badminton']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['badminton']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['badminton']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['badminton']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['badminton']['54'] = 'Por perdido';
	TXT_SPORT_MOBILE['water-polo']                = new Array();
	TXT_SPORT_MOBILE['water-polo']['name'] = 'Waterpolo';
	TXT_SPORT_MOBILE['water-polo']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['water-polo']['45'] = 'Por terminar';
	TXT_SPORT_MOBILE['water-polo']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['water-polo']['2'] = 'En directo';
	TXT_SPORT_MOBILE['water-polo']['22'] = 'C1';
	TXT_SPORT_MOBILE['water-polo']['23'] = 'C2';
	TXT_SPORT_MOBILE['water-polo']['24'] = 'C3';
	TXT_SPORT_MOBILE['water-polo']['25'] = 'C4';
	TXT_SPORT_MOBILE['water-polo']['6'] = 'Prórr.';
	TXT_SPORT_MOBILE['water-polo']['7'] = 'Pen.';
	TXT_SPORT_MOBILE['water-polo']['38'] = 'Descanso';
	TXT_SPORT_MOBILE['water-polo']['46'] = 'Descanso';
	TXT_SPORT_MOBILE['water-polo']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['water-polo']['10'] = 'Tras<br />prórr.';
	TXT_SPORT_MOBILE['water-polo']['11'] = 'Tras<br />pen.';
	TXT_SPORT_MOBILE['water-polo']['9'] = 'WO';
	TXT_SPORT_MOBILE['water-polo']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['water-polo']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['water-polo']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['water-polo']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['water-polo']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['water-polo']['54'] = 'Por perdido';
	TXT_SPORT_MOBILE['golf']                = new Array();
	TXT_SPORT_MOBILE['golf']['name'] = 'Golf';
	TXT_SPORT_MOBILE['golf']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['golf']['45'] = 'Por terminar';
	TXT_SPORT_MOBILE['golf']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['golf']['2'] = 'En directo';
	TXT_SPORT_MOBILE['golf']['65'] = 'V1';
	TXT_SPORT_MOBILE['golf']['66'] = 'V2';
	TXT_SPORT_MOBILE['golf']['67'] = 'V3';
	TXT_SPORT_MOBILE['golf']['68'] = 'V4';
	TXT_SPORT_MOBILE['golf']['62'] = 'Tras<br />V1';
	TXT_SPORT_MOBILE['golf']['63'] = 'Tras<br />V2';
	TXT_SPORT_MOBILE['golf']['64'] = 'Tras<br />V3';
	TXT_SPORT_MOBILE['golf']['46'] = 'Descanso';
	TXT_SPORT_MOBILE['golf']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['golf']['8'] = 'Retirada';
	TXT_SPORT_MOBILE['golf']['9'] = 'WO';
	TXT_SPORT_MOBILE['golf']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['golf']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['golf']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['golf']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['golf']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['golf']['54'] = 'Por perdido';
	TXT_SPORT_MOBILE['field-hockey']                = new Array();
	TXT_SPORT_MOBILE['field-hockey']['name'] = 'Hockey hierba';
	TXT_SPORT_MOBILE['field-hockey']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['field-hockey']['45'] = 'Por terminar';
	TXT_SPORT_MOBILE['field-hockey']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['field-hockey']['2'] = 'En directo';
	TXT_SPORT_MOBILE['field-hockey']['12'] = 'T1';
	TXT_SPORT_MOBILE['field-hockey']['38'] = 'Descanso';
	TXT_SPORT_MOBILE['field-hockey']['13'] = 'T2';
	TXT_SPORT_MOBILE['field-hockey']['6'] = 'Prórr.';
	TXT_SPORT_MOBILE['field-hockey']['7'] = 'Pen.';
	TXT_SPORT_MOBILE['field-hockey']['46'] = 'Descanso';
	TXT_SPORT_MOBILE['field-hockey']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['field-hockey']['10'] = 'Tras prórr.';
	TXT_SPORT_MOBILE['field-hockey']['11'] = 'Tras pen.';
	TXT_SPORT_MOBILE['field-hockey']['9'] = 'WO';
	TXT_SPORT_MOBILE['field-hockey']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['field-hockey']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['field-hockey']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['field-hockey']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['field-hockey']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['field-hockey']['54'] = 'Por perdido';
	TXT_SPORT_MOBILE['table-tennis']                = new Array();
	TXT_SPORT_MOBILE['table-tennis']['name'] = 'Tenis de mesa';
	TXT_SPORT_MOBILE['table-tennis']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['table-tennis']['45'] = 'Por terminar';
	TXT_SPORT_MOBILE['table-tennis']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['table-tennis']['2'] = 'En directo';
	TXT_SPORT_MOBILE['table-tennis']['17'] = 'S1';
	TXT_SPORT_MOBILE['table-tennis']['18'] = 'S2';
	TXT_SPORT_MOBILE['table-tennis']['19'] = 'S3';
	TXT_SPORT_MOBILE['table-tennis']['20'] = 'S4';
	TXT_SPORT_MOBILE['table-tennis']['21'] = 'S5';
	TXT_SPORT_MOBILE['table-tennis']['55'] = 'S6';
	TXT_SPORT_MOBILE['table-tennis']['56'] = 'S7';
	TXT_SPORT_MOBILE['table-tennis']['46'] = 'Descanso';
	TXT_SPORT_MOBILE['table-tennis']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['table-tennis']['8'] = 'Retirada';
	TXT_SPORT_MOBILE['table-tennis']['9'] = 'WO';
	TXT_SPORT_MOBILE['table-tennis']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['table-tennis']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['table-tennis']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['table-tennis']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['table-tennis']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['table-tennis']['54'] = 'Por perdido';
	TXT_SPORT_MOBILE['beach-soccer']                = new Array();
	TXT_SPORT_MOBILE['beach-soccer']['name'] = 'Fútbol playa';
	TXT_SPORT_MOBILE['beach-soccer']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['beach-soccer']['45'] = 'Por terminar';
	TXT_SPORT_MOBILE['beach-soccer']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['beach-soccer']['2'] = 'En directo';
	TXT_SPORT_MOBILE['beach-soccer']['14'] = 'P1';
	TXT_SPORT_MOBILE['beach-soccer']['15'] = 'P2';
	TXT_SPORT_MOBILE['beach-soccer']['16'] = 'P3';
	TXT_SPORT_MOBILE['beach-soccer']['6'] = 'Prórr.';
	TXT_SPORT_MOBILE['beach-soccer']['7'] = 'Pen.';
	TXT_SPORT_MOBILE['beach-soccer']['46'] = 'Descanso';
	TXT_SPORT_MOBILE['beach-soccer']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['beach-soccer']['10'] = 'Tras<br />prórr.';
	TXT_SPORT_MOBILE['beach-soccer']['11'] = 'Tras<br />pen.';
	TXT_SPORT_MOBILE['beach-soccer']['9'] = 'WO';
	TXT_SPORT_MOBILE['beach-soccer']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['beach-soccer']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['beach-soccer']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['beach-soccer']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['beach-soccer']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['beach-soccer']['54'] = 'Por perdido';
	TXT_SPORT_MOBILE['mma']                = new Array();
	TXT_SPORT_MOBILE['mma']['name'] = 'MMA';
	TXT_SPORT_MOBILE['mma']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['mma']['45'] = 'Por terminar';
	TXT_SPORT_MOBILE['mma']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['mma']['2'] = 'En directo';
	TXT_SPORT_MOBILE['mma']['46'] = 'Descanso';
	TXT_SPORT_MOBILE['mma']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['mma']['9'] = 'WO';
	TXT_SPORT_MOBILE['mma']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['mma']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['mma']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['mma']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['mma']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['mma']['54'] = 'Por perdido';
	TXT_SPORT_MOBILE['netball']                = new Array();
	TXT_SPORT_MOBILE['netball']['name'] = 'Netball';
	TXT_SPORT_MOBILE['netball']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['netball']['45'] = 'Por terminar';
	TXT_SPORT_MOBILE['netball']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['netball']['2'] = 'En directo';
	TXT_SPORT_MOBILE['netball']['22'] = 'C1';
	TXT_SPORT_MOBILE['netball']['23'] = 'C2';
	TXT_SPORT_MOBILE['netball']['24'] = 'C3';
	TXT_SPORT_MOBILE['netball']['25'] = 'C4';
	TXT_SPORT_MOBILE['netball']['6'] = 'Prórr.';
	TXT_SPORT_MOBILE['netball']['38'] = 'Descanso';
	TXT_SPORT_MOBILE['netball']['46'] = 'Descanso';
	TXT_SPORT_MOBILE['netball']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['netball']['10'] = 'Tras prórr.';
	TXT_SPORT_MOBILE['netball']['9'] = 'WO';
	TXT_SPORT_MOBILE['netball']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['netball']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['netball']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['netball']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['netball']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['netball']['54'] = 'Por perdido';
	TXT_SPORT_MOBILE['pesapallo']                = new Array();
	TXT_SPORT_MOBILE['pesapallo']['name'] = 'Pesäpallo';
	TXT_SPORT_MOBILE['pesapallo']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['pesapallo']['45'] = 'Por terminar';
	TXT_SPORT_MOBILE['pesapallo']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['pesapallo']['2'] = 'En directo';
	TXT_SPORT_MOBILE['pesapallo']['26'] = 'E1';
	TXT_SPORT_MOBILE['pesapallo']['27'] = 'E2';
	TXT_SPORT_MOBILE['pesapallo']['28'] = 'E3';
	TXT_SPORT_MOBILE['pesapallo']['29'] = 'E4';
	TXT_SPORT_MOBILE['pesapallo']['30'] = 'E5';
	TXT_SPORT_MOBILE['pesapallo']['31'] = 'E6';
	TXT_SPORT_MOBILE['pesapallo']['32'] = 'E7';
	TXT_SPORT_MOBILE['pesapallo']['33'] = 'E8';
	TXT_SPORT_MOBILE['pesapallo']['35'] = 'EE';
	TXT_SPORT_MOBILE['pesapallo']['7'] = 'Pen.';
	TXT_SPORT_MOBILE['pesapallo']['46'] = 'Descanso';
	TXT_SPORT_MOBILE['pesapallo']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['pesapallo']['69'] = 'Tras EE';
	TXT_SPORT_MOBILE['pesapallo']['11'] = 'Tras pen.';
	TXT_SPORT_MOBILE['pesapallo']['9'] = 'WO';
	TXT_SPORT_MOBILE['pesapallo']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['pesapallo']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['pesapallo']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['pesapallo']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['pesapallo']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['pesapallo']['54'] = 'Por perdido';
	TXT_SPORT_MOBILE['motorsport']                = new Array();
	TXT_SPORT_MOBILE['motorsport']['name'] = 'Motor';
	TXT_SPORT_MOBILE['motorsport-auto-racing']                = new Array();
	TXT_SPORT_MOBILE['motorsport-auto-racing']['name'] = 'Automovilismo';
	TXT_SPORT_MOBILE['motorsport-auto-racing']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['motorsport-auto-racing']['2'] = 'En directo';
	TXT_SPORT_MOBILE['motorsport-auto-racing']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['motorsport-auto-racing']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['motorsport-auto-racing']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['motorsport-auto-racing']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['motorsport-auto-racing']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['motorsport-auto-racing']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['motorsport-auto-racing']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['motorsport-moto-racing']                = new Array();
	TXT_SPORT_MOBILE['motorsport-moto-racing']['name'] = 'Motociclismo';
	TXT_SPORT_MOBILE['motorsport-moto-racing']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['motorsport-moto-racing']['2'] = 'En directo';
	TXT_SPORT_MOBILE['motorsport-moto-racing']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['motorsport-moto-racing']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['motorsport-moto-racing']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['motorsport-moto-racing']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['motorsport-moto-racing']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['motorsport-moto-racing']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['motorsport-moto-racing']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['motorsport-moto-racing']['54'] = 'Por perdido';
	TXT_SPORT_MOBILE['cycling']                = new Array();
	TXT_SPORT_MOBILE['cycling']['name'] = 'Ciclismo';
	TXT_SPORT_MOBILE['cycling']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['cycling']['2'] = 'En directo';
	TXT_SPORT_MOBILE['cycling']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['cycling']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['cycling']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['cycling']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['cycling']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['cycling']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['cycling']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['horse-racing']                = new Array();
	TXT_SPORT_MOBILE['horse-racing']['name'] = 'Carreras de caballos';
	TXT_SPORT_MOBILE['horse-racing']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['horse-racing']['2'] = 'En directo';
	TXT_SPORT_MOBILE['horse-racing']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['horse-racing']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['horse-racing']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['horse-racing']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['horse-racing']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['horse-racing']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['horse-racing']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['esports']                = new Array();
	TXT_SPORT_MOBILE['esports']['name'] = 'eSports';
	TXT_SPORT_MOBILE['esports']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['esports']['2'] = 'En directo';
	TXT_SPORT_MOBILE['esports']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['esports']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['esports']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['esports']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['esports']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['esports']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['esports']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['esports']['54'] = 'Por perdido';
	TXT_SPORT_MOBILE['esports']['9'] = 'WO';
	TXT_SPORT_MOBILE['esports']['45'] = 'Por terminar';
	TXT_SPORT_MOBILE['winter-sports']                = new Array();
	TXT_SPORT_MOBILE['winter-sports']['name'] = 'Deportes de invierno';
	TXT_SPORT_MOBILE['winter-sports-ski-jumping']                = new Array();
	TXT_SPORT_MOBILE['winter-sports-ski-jumping']['name'] = 'Salto de esquí';
	TXT_SPORT_MOBILE['winter-sports-ski-jumping']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['winter-sports-ski-jumping']['2'] = 'En directo';
	TXT_SPORT_MOBILE['winter-sports-ski-jumping']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['winter-sports-ski-jumping']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['winter-sports-ski-jumping']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['winter-sports-ski-jumping']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['winter-sports-ski-jumping']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['winter-sports-ski-jumping']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['winter-sports-ski-jumping']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['winter-sports-alpine-skiing']                = new Array();
	TXT_SPORT_MOBILE['winter-sports-alpine-skiing']['name'] = 'Esquí alpino';
	TXT_SPORT_MOBILE['winter-sports-alpine-skiing']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['winter-sports-alpine-skiing']['2'] = 'En directo';
	TXT_SPORT_MOBILE['winter-sports-alpine-skiing']['3'] = 'Finalizado';
	TXT_SPORT_MOBILE['winter-sports-alpine-skiing']['4'] = 'Aplazado';
	TXT_SPORT_MOBILE['winter-sports-alpine-skiing']['5'] = 'Anulado';
	TXT_SPORT_MOBILE['winter-sports-alpine-skiing']['36'] = 'Interrumpido';
	TXT_SPORT_MOBILE['winter-sports-alpine-skiing']['37'] = 'Suspendido';
	TXT_SPORT_MOBILE['winter-sports-alpine-skiing']['42'] = 'Esper.';
	TXT_SPORT_MOBILE['winter-sports-alpine-skiing']['43'] = 'Retrasado';
	TXT_SPORT_MOBILE['winter-sports-cross-country']                = new Array();
	TXT_SPORT_MOBILE['winter-sports-cross-country']['name'] = 'Esquí de fondo';
	TXT_SPORT_MOBILE['winter-sports-cross-country']['1'] = '&nbsp;';
	TXT_SPORT_MOBILE['winter-spORT_MOBILE['winter-sports-cross-country']['4'] = 'Aplazado';
	TXT_SPORT_MOFinalizado';
	TXT_SPORT_MOBILE['kabaddi']['10'] = 'AET';
	TXT_SPO]+)_.* /, '$1'));
                    }

                    if (sportId == participantKeySportId)
                    {
                        cisVali                changesHistoryContainer.removgory);
                });
            }
            else
            {
                cjs.Api.loader.get('reactCalls').call(function(reactCalls) {
                    for (var reloadEventId in reloadEvents)
                    {
                        reactCalls.reloadEvent(reloadEvents[reloadEventId]);
                    }
                    for (var reloadLeagueId in reloadLeagues)
                     seriesId,
                      pushEp', 'lang', 'web'))) {
            default_odds_format = if (typeof country_tournament_order_fin == 'undefinedate);

        initFeedRequest();
        initLsLoginClient();
        initMyGames();

        // synchrs.Api.    {
      {
            try
            {
                docu      mt) {
                    if (_mt.getCount()) {
                    cjs.em) =>se {
       eEvent{
     5)
  solveloader.get('boxContentManager').call(fun.Api.cFunctie = null;
            }
        }
    }

    functionload:(       }
            parent.location.href = url;
          fs_counter[id] = periodUpdateUTime;
                reloadEvents[id] = 1;
            }
 setVal').calad && value == sudate) return;
        sudate = cjs.dic.get('util_number').toNumber(value);

        if (hasRepairFeed(value))
        {
            delete cjs.gamesNotificationOnly;
        }
        else
        {
            cjs.gamesNotificationOnly = true;
        }stage_id, sport_id, stats_type_ident)
    {
        cjs.Api.loader.get('util/stats/opener').call({tournamentId: tournament_id, tournamentStageId: tournament_stage_id, sportId: sport_id, statsTypeIdent: parsenction set_service_status(value)
    {
        iftes
     * @param string func    Function to call
     * @return 
     se_only = false;
        this.ajax_time_update = false;

        this.countrinclud-results_m':
                cjs.participantPageNumber = cjs.participantPageNumber || 0;
                cjs.feedLoader.executeCompletstamp))
            {
                if me(currentTimestamp);

        cjs.Api.loader.get}
        var parse_status = parse(r_content,  time from the last sync is not too old. If so, repair odds with the update feed
        if(updater.lastSyncUtimeIsTooOld(currentTimestamp, true))
        {
            // time from the last change can be handled by repair feed
            if(updater.lastSyncUtimeCanBeHandledByRepairFeed(currentTimestamp))
            {
                if(r_trigger != 'repair' && r_trigger != 'frepair')
                {
                    updater.set_interval('repair',       // time from the last change i.setLastSyncUtime(currentTimestamp);

setUpdateInProgress = function(key,value'X-Geoip2-Subdivision-Name-0'] != 'undefined' && r_custom_headers['X-Geoip2['X-Geoip2-Subdivision-Code-0'])
       m_headers['Date'] != 'undefined' && r_custtialized)
            {
                page_u};

    // CommCore service functions {{{n, useTimeout)
    {
        if (typeof useTimeout === 'undefined')
        {
            useTimeout = false;
        }

        var timerFunction = useTimeout ? setTimeout : setInterval;

        // clear previous interval
        updater.clear_interval('set_interval: ' + action);

        if(action == 'odds')
        {
            updater.interval_sync = timerFunction('updater.doc_update(\'odds\')', 100);
  EDINDEXES_HOME_SCORE_PART_PESAPALLO_SECOND_HALF,
            feedIndexes.FULLFEEDINDEXES_HOME_SCORE_PART_PESAPALLO_PENALTIES,
            feedIndexes.SHAREDINDEXES_HOME_MARTI_PERIODEXES_AWAY_MARTIAL_ARTS_FINISHED_SUB
        ];

        va      isConntNameComposer");

            if (typeof cjs.gamesNotificationOnly === 'undefined')
 subsc  {
     sportId  );
                    subscription.push(subjectComposer.getUpdateLoca  oa  vadRequest.getFeedData('full', neededFeeds[i].s   sF, true);
        });
        cjs.feedLoader.downloadAndExecuteFeeds();
    }
    else
    {
        generateMygames();
    }
};

function generateMygames()
{
    cjs.Api.loader.get('realse);
    });
};

function show_more_templates()
{
 eftMenu__item--hidden").forEach((elem) => elem.classList.remove("leftMenu__item--hidden"))
    const showMore = node.querySelector(".show-more");
    if (showMore) {
        showMore.classList.add("leftMenu__item--hidden");
    }
};

function hasRepairFeed(sd)
{
    return sd == 0 || sd == -1;
};

/**
 * NEMAZAT!!! VOLA SE V ADMINU GTM
 */
function runAfterGtmLoaded()
{
    if (typeof ga !== 'undefined')
    {
        var tracker = ga.getAll()[0];
        var linkerParamValue = tracker.get('linkerParam').replace('_ga=', '');
        var twoYears = 3600 * 24 * 365 * 2;
        cjs.Api.clientStorage.storeCookie('_lsga', linkerParamValue, twoYears);
    }
};

function setupInitialLoading(action)
{
    cjs.Api.loader.get('reactCalls').call(function(reactCalls) {
        reactCalls.loadingStateReset();
        if (action == 'country')
        {
            reactCalls.loadingState("country", true);
        }
        else
        {
            reactCalls.loadingState("fullFeed", true);
        }
    });
}

function resetAndExecuteFeedRequests(sportId, feedName, afterCallback)
{
    cjs.feedLoader.reset();
    setupInitialLoading(feedName);
    if (feedName !== 'full' || hasRepairFeed(sudate))
    {
        cjs.feedLoader.addIntoQueue(cjs.feedRequest.getFeedData('frepair', sportId));
    }

    cjs.feedLoader.addIntoQueue(cjs.feedRequest.getFeedData(feedName, sportId));
    cjs.feedLoader.executeFilterCallback(function(contextName){
        var pattern = "^" + feedName;
        var re = new RegExp(pattern);
        return re.test(contextName);
    });
    cjs.feedLoader.setAfterCallback(afterCallback);
    cjs.feedLoader.downloadAndExecuteFeeds();
};

function clog() {
    try
    {
        if (window.console)
        {
            for (var i in arguments)
            {
                // @debug
                console.log(arguments[i]);
            }
        }
    }
    catch (err) {}
};

function cerr() {
    try
    {
        for (var i in arguments)
        {
            // @debug
            console.error(arguments[i]);
        }
    }
    catch (err) {

    }
};

function cdir() {
    try
    {
        for (var i in arguments)
        {
            // @debug
            console.dir(arguments[i]);
        }
    } catch (err) {}
};

cjs.Api.loader.get('localizationRedirector').call(function(localizationRedirector) {
    localizationRedirector.redirect();
});

cjs.Api.loader.get('tv/channelsStorage').call();

cjs.Api.loader.get('modules/eventTracking/search').call();

cjs.Api.loader.get('cjs').fulfill(function (cjsCallback) {
    cjsCallback(cjs);
});

