// Sort Filter for Main Display
var mainProp = {
  mx : {
    sortidPC : {
      main : [1],
      jln : [3],
      hpb : [5],
      hpg : [7],
      sum : [27],
      car : [25]
    },
    sortidSP : {
      main : [2],
      jln : [4],
      hpb : [6],
      hpg : [8],
      sum : [28],
      car : [26]
    }
  },
  ma : {
    sortidPC : {
      main : [1],
      jln : [3],
      hpb : [5],
      hpg : [7]
    },
    sortidSP : {
      main : [2],
      jln : [4],
      hpb : [6],
      hpg : [8]
    }
  },
  mb : {
    sortidPC : {
      main : [1],
      jln : [3],
      hpb : [5],
      hpg : [7]
    },
    sortidSP : {
      main : [10],
      jln : [12],
      hpb : [14],
      hpg : [16]
    }
  },
  mc : {
    sortidPC : {
      main : [65],
      jln : [67],
      hpb : [69],
      hpg : [71]
    },
    sortidSP : {
      main : [66],
      jln : [68],
      hpb : [70],
      hpg : [72]
    }
  },
  md : {
    sortidPC : {
      main : [33],
      jln : [35],
      hpb : [37],
      hpg : [39]
    },
    sortidSP : {
      main : [34],
      jln : [36],
      hpb : [38],
      hpg : [40]
    }
  },
  me : {
    sortidPC : {
      main : [17],
      jln : [19],
      hpb : [21],
      hpg : [23]
    },
    sortidSP : {
      main : [18],
      jln : [20],
      hpb : [22],
      hpg : [24]
    }
  }
}

var dmgrProp = {
  mx: {
    sortidPC : {
      ptn1 : [59], // sex:M age:<30
      ptn2 : [61], // sex:M age:30~39
      ptn3 : [63], // sex:M age:40=<
      ptn4 : [53], // sex:F age:<30
      ptn5 : [55], // sex:F age:30~39
      ptn6 : [57]  // sex:F age:40=<
    },
    sortidSP : {
      ptn1 : [60], // sex:M age:<30
      ptn2 : [62], // sex:M age:30~39
      ptn3 : [64], // sex:M age:40=<
      ptn4 : [54], // sex:F age:<30
      ptn5 : [56], // sex:F age:30~39
      ptn6 : [58]  // sex:F age:40=<
    }
  },
  ma: {
    sortidPC : {
      ptn1 : [59], // sex:M age:<30
      ptn2 : [61], // sex:M age:30~39
      ptn3 : [63], // sex:M age:40=<
      ptn4 : [53], // sex:F age:<30
      ptn5 : [55], // sex:F age:30~39
      ptn6 : [57]  // sex:F age:40=<
    },
    sortidSP : {
      ptn1 : [60], // sex:M age:<30
      ptn2 : [62], // sex:M age:30~39
      ptn3 : [64], // sex:M age:40=<
      ptn4 : [54], // sex:F age:<30
      ptn5 : [56], // sex:F age:30~39
      ptn6 : [58]  // sex:F age:40=<
    }
  },
  mb: {
    sortidPC : {
      ptn1 : [59], // sex:M age:<30
      ptn2 : [61], // sex:M age:30~39
      ptn3 : [63], // sex:M age:40=<
      ptn4 : [53], // sex:F age:<30
      ptn5 : [55], // sex:F age:30~39
      ptn6 : [57]  // sex:F age:40=<
    },
    sortidSP : {
      ptn1 : [60], // sex:M age:<30
      ptn2 : [62], // sex:M age:30~39
      ptn3 : [64], // sex:M age:40=<
      ptn4 : [54], // sex:F age:<30
      ptn5 : [56], // sex:F age:30~39
      ptn6 : [58]  // sex:F age:40=<
    }
  },
  mc: {
    sortidPC : {
      ptn1 : [79], // sex:M age:<30
      ptn2 : [81], // sex:M age:30~39
      ptn3 : [83], // sex:M age:40=<
      ptn4 : [73], // sex:F age:<30
      ptn5 : [75], // sex:F age:30~39
      ptn6 : [77]  // sex:F age:40=<
    },
    sortidSP : {
      ptn1 : [80], // sex:M age:<30
      ptn2 : [82], // sex:M age:30~39
      ptn3 : [84], // sex:M age:40=<
      ptn4 : [74], // sex:F age:<30
      ptn5 : [76], // sex:F age:30~39
      ptn6 : [78]  // sex:F age:40=<
    }
  },
  me: {
    sortidPC : {
      ptn1 : [59], // sex:M age:<30
      ptn2 : [61], // sex:M age:30~39
      ptn3 : [63], // sex:M age:40=<
      ptn4 : [53], // sex:F age:<30
      ptn5 : [55], // sex:F age:30~39
      ptn6 : [57]  // sex:F age:40=<
    },
    sortidSP : {
      ptn1 : [60], // sex:M age:<30
      ptn2 : [62], // sex:M age:30~39
      ptn3 : [64], // sex:M age:40=<
      ptn4 : [54], // sex:F age:<30
      ptn5 : [56], // sex:F age:30~39
      ptn6 : [58]  // sex:F age:40=<
    }
  }
}

// MediaVos to divide Product
var switchProp = {
  s1_1 : {
    theme : 'jln',
    bn: true,
    another_links: 'jln2' ,
    mvos : [
      '=pccappotjlnbnrrafpc001(?=\\&|$)',
      '=pccappotjlnbnrrafpc401(?=\\&|$)',
      '=pccapsotjlnbnrrafsp001(?=\\&|$)',
      '=pccapxotjlnbnrrafapa002(?=\\&|$)',
      '=pccapxotjlnbnrrafapi002(?=\\&|$)'
    ]},
  s1 : {
    theme : 'jln',
    bn: true,
    mvos : [
      'pccap[psx]otjlnbnrr\\D{1,8}\\d{1,6}', // JLN
      'fccap[ps]otjlnmailrdmact\\d{4}'       // JLN臨増
    ]},
  s2 : {
    theme : 'hpb',
    bn: true,
    mvos : [
      'pccap[psx]othpbbnrr\\D{1,8}(\\d{1,6})?', // HPB
      'fccap[ps]othpbmailrdmact\\d{4}'       // HPB臨増
    ]},
  s3 : {
    theme : 'hpg',
    bn: true,
    mvos : [
      'pccap[psx]othpgbnrr\\D{1,8}\\d{1,6}', // HPG
      'fccap[ps]othpgmailrdmact\\d{4}',      // HPG臨増
      'pccappothpgbnrrtopside(?![^*])'               // グルメ露出バナー
    ]},
  s4 : {
    theme : 'sum',
    bn: false,
    mvos : [
      'pccap[ps]otsumbnrrsumtop1907' //SUM
    ]},
  s5 : {
    theme : 'car',
    bn: false,
    mvos : [
      'pccap[ps]otcarbnrrcartop1907' // CAR
    ]},
};

/* CategoryTag */
var categoryTag = {
  '29' : 'icon_pr',     //PR
  '30' : 'icon_red',    //無料
  '31' : 'icon_green',  //健康食品
  '32' : 'icon_pink',   //美容
  '33' : 'icon_orange', //生活
  '34' : 'icon_blue',   //保険
  '35' : 'icon_dodger'  //宅配水
};

/* Switch Survey Banner URL */
var switchSurveyBnrURL = {
  jln:{
    pc:'https://' + window.config.cpn_ad_host + '/point_account?t=3&c=9ea21be3cb7557c13856',
    sp:'https://' + window.config.cpn_ad_host + '/point_account?t=3&c=eb6d77517a8a18c33c75'
  },
  jln2:{
    pc:'https://' + window.config.cpn_ad_host + '/point_account?t=3&c=64e0b67aae1610de60ac',
    sp:'https://' + window.config.cpn_ad_host + '/point_account?t=3&c=31ed655ab99f47b76c80'
  },
  hpb:{
    pc:'https://' + window.config.cpn_ad_host + '/point_account?t=3&c=ef4e4d1f59099e2e7e17',
    sp:'https://' + window.config.cpn_ad_host + '/point_account?t=3&c=e33a19b6af103b0cb068'
  },
  hpg:{
    pc:'https://' + window.config.cpn_ad_host + '/point_account?t=3&c=2d46aae857658b26f98a',
    sp:'https://' + window.config.cpn_ad_host + '/point_account?t=3&c=ce538baadbafd8db62af'
  },
};
