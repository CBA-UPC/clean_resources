(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"4JlD":"7tsp":function(e,t,r){var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.useTouchDeviceDetection=function(){var e=(0,u.useDeviceType)().isTouchDevice,t=(0,o.useState)(e||d),r=t[0],n=t[1];return(0,o.useEffect)((function(){if("web"===a.default.OS&&!r){var e=function e(){n(!0),d=!0,l("detected touch device!"),window.removeEventListener("touchstart",e)};return window.addEventListener("touchstart",e),}),[r]),r};var i=n(r("NOtv")),o=r("q1tI"),a=n(r("XwJz")),u=r("GpEc"),l=(0,i.default)("app:hooks:useTouchDeviceDetection"),d="web"!==a.default.OS;if("web"===a.default.OS){window.addEventListener("touchstart",(function e(){d=!0,l("detected touch device!"),window.removeEventListener("touchstart",e)}))}},BVmz:function(e,t,r){var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.triggerWatchlistDataRefresh=function(e,t){e.query({query:q,fetchPolicy:"network-only"}),e.query({query:m.ContinueWatchingQuery,variables:{contentId:t},errorPolicy:"all",fetchPolicy:"network-only"})},t.updateWatchlistMutation=void 0,t.upsertWatchlistItem=U,t.useRemoveWatchlistItem=function(){var e,t=(0,f.useApolloClient)(),r=(0,s.useMutation)(M,{onMutate:function(r){return(e=e||(0,u.default)((function*(e){var r=t.readQuery({query:q,queryKey:q.getKey()});try{var n=e.id;r&&n&&t.writeQuery({query:q,data:(0,l.default)(r,(function(e){var t=((null===e||void 0===e?void 0:e.data)||{}).currentUser;t&&(t.watchlist.nodes=t.watchlist.nodes.filter(())}))})}catch(i){console.error("could not update watchlist")}try{console.warn("removing continue watching",e.contentId,e.watchlistEntryId),t.writeQuery({query:m.ContinueWatchingQuery,queryKey:m.ContinueWatchingQuery.getKey({contentId:e.contentId}),variables:{contentId:e.contentId},data:{data:{movieOnList:null,nextEpisode:null}}})}catch(i){console.warn("could not remove continue watching query",i)}return{previous:r,previousCw:t.readQuery({query:m.ContinueWatchingQuery,queryKey:m.ContinueWatchingQuery.getKey()})}}))).apply(this,arguments)},onError:function(e,r,n){t.queryClient.invalidateQueries({queryKey:D.getKey(),exact:!0}),t.queryClient.invalidateQueries({queryKey:m.ContinueWatchingQuery.getKey(),exact:!0})}}),n=(0,o.default)(r,2),i=n[0];n[1];return[(0,d.useCallback)((,[i])]},t.useUpsertWatchlistItemForMovie=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=(0,f.useApolloClient)(),n=(null===e||void 0===e?void 0:e.id)||void 0,i=(0,c.useAsyncCallback)(U,{ignoreOldPreviousResponses:!0,key:n,initialState:{data:void 0,error:void 0,loading:!0,key:n}}),a=(0,o.default)(i,2),u=a[0],l=a[1];return(0,d.useEffect)((,[e&&e.id,r,u,t]),l},t.useWatchlist=function(){var e=(0,I.useIsLoggedIn)(),t=(0,v.useQuery)(q,{enabled:!!e}),r=t.data,n=t.isLoading,i=t.error,o=t.refetch;return{data:(0,d.useMemo)((function(){var e,t=null===r||void 0===r||null===(e=r.currentUser)||void 0===e?void 0:e.watchlist.nodes.filter(h.filterEmpty);return null===t||void 0===t?void 0:t.map((function(e){var t=(0,l.default)(e.episode,(function(t){t&&((0,b.mergeMetadataMUTATING)(t,t.season),e.series&&(0,b.mergeMetadataMUTATING)(t,e.series))}))||e.series||e.movie;return t?{id:e.id,currentTime:e.currentTime,content:t,episode:e.episode}:null})).filter(h.filterEmpty)}),[r]),loading:n,error:i,refetch:e?o:null}},t.useWatchlistForSeason=function(e){var t=e.seasonId,r=(e.noCache,(0,I.useIsLoggedIn)());return(0,v.useQuery)(D,{enabled:!!r,variables:{seasonId:t}})},t.useWatchlistUpdateWithoutReRender=function(e){var t,r=(0,f.useApolloClient)(),n=(0,s.useMutation)(S,{onMutate:function(n){return(t=t||(0,u.default)((function*(t){var n,i;yield r.queryClient.cancelQueries({queryKey:D.getKey({seasonId:null===e||void 0===e||null===(n=e.season)||void 0===n?void 0:n.id})}),yield r.queryClient.cancelQueries({queryKey:q.getKey()}),yield r.queryClient.cancelQueries({queryKey:j.getKey({contentId:null===e||void 0===e?void 0:e.id})});var o=r.queryClient.getQueryData(D.getKey({seasonId:null===e||void 0===e||null===(i=e.season)||void 0===i?void 0:i.id})),a=!1;if(o){var u,d,c=(0,l.default)(o,(function(r){if(r.data.currentUser){if(r.data.currentUser.watchlistItemsByOwnerId=r.data.currentUser.watchlistItemsByOwnerId||{},r.data.currentUser.watchlistItemsByOwnerId.nodes=Array.isArray(r.data.currentUser.watchlistItemsByOwnerId.nodes)?r.data.currentUser.watchlistItemsByOwnerId.nodes:[],t.time){var n=r.data.currentUser.watchlistItemsByOwnerId.nodes.find((function(e){return(null===e||void 0===e?void 0:e.id)===t.id}));n?n.currentTime=t.time:null!==e&&void 0!==e&&e.id&&r.data.currentUser.watchlistItemsByOwnerId.nodes.push({__typename:"WatchlistItem",currentTime:t.time,id:t.id,episodeId:e.id})}}else a=!0}));if(a)r.queryClient.invalidateQueries({queryKey:D.getKey({seasonId:null===e||void 0===e||null===(u=e.season)||void 0===u?void 0:u.id})});else r.writeQuery({data:c,query:D,queryKey:D.getKey({seasonId:null===e||void 0===e||null===(d=e.season)||void 0===d?void 0:d.id})})}var s=r.queryClient.getQueryData(q.getKey());if(s){var v=(0,l.default)(s,(function(e){var r,n=null===e||void 0===e||null===(r=e.data.currentUser)||void 0===r?void 0:r.watchlist.nodes;if(n&&Array.isArray(n)&&t.time){var i=n.find(();i&&(i.currentTime=t.time)}}));r.writeQuery({data:v,query:q,queryKey:q.getKey()})}var f=r.queryClient.getQueryData(j.getKey({contentId:null===e||void 0===e?void 0:e.id}));if(f){var y=(0,l.default)(f,(function(e){var r,n,i,o=null===e||void 0===e||null===(r=e.data.currentUser)||void 0===r||null===(n=r.watchlistForMovie)||void 0===n||null===(i=n.nodes)||void 0===i?void 0:i[0];o&&t.time&&(o.currentTime=t.time)}));r.writeQuery({data:y,query:j,queryKey:j.getKey({contentId:null===e||void 0===e?void 0:e.id})})}return{previous:o}}))).apply(this,arguments)},onError:function(){r.queryClient.invalidateQueries({queryKey:D.getKey(),exact:!0}),r.queryClient.invalidateQueries({queryKey:j.getKey({contentId:null===e||void 0===e?void 0:e.id})}),r.queryClient.invalidateQueries({queryKey:q.getKey()})}}),i=(0,o.default)(n,1)[0],a=(0,I.useCurrentUser)().data;return(0,d.useCallback)((function(t,r){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=null===e||void 0===e?void 0:e.id;if(o){var a={id:t,time:Math.floor(r)};if(n)i(a);else try{fetch(y.EXTERNAL_SMPL_DATA_API_URL,{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:S.query,variables:a})}).catch(()}catch(u){console.error("could not track watchlist due to internal error",u)}}}),[r,e,a])};var i,o=n(r("J4zp")),a=n(r("lSNA")),u=n(r("yXPU")),l=n(r("V/h/")),d=r("q1tI"),c=r("0lma"),s=r("NpZ8"),v=r("HIWS"),f=r("tlk2"),y=r("RMik"),p=r("uIDn"),h=r("NhWt"),m=r("RQ5Y"),I=r("h9MH"),g=r("qIkG"),b=r("rOUr");function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=p.gql`
  ${g.ImageDataFragment}
  ${b.MovieSliderDataFragment}
  ${b.SeriesSliderDataFragment}
  fragment WatchlistRelations on WatchlistItem {
    id
    series {
      ...SeriesSliderData
    }
    episode {
      id
      externalIdentifier
      slug
      runtimeInSeconds
      episodeInSeason
      title
      supershortSynopsis
      shortSynopsis
      mediumSynopsis
      longSynopsis
      rating
      fskRating
      flags
      productionYear

      widescreenImage {
        ...ImageData
      }
      widescreenImageTextless {
        ...ImageData
      }
      coverImage {
        ...ImageData
      }
      squareImage {
        ...ImageData
      }
      headerImage24By9 {
        ...ImageData
      }
      season {
        id
        seasonInSeries

        title
        supershortSynopsis
        shortSynopsis
        mediumSynopsis
        longSynopsis

        widescreenImage {
          ...ImageData
        }
        coverImage {
          ...ImageData
        }
        squareImage {
          ...ImageData
        }
        headerImage {
          ...ImageData
        }
        headerImage24By9 {
          ...ImageData
        }
        series {
          id
          title
        }
      }
    }
    movie {
      ...MovieSliderData
    }
  }
`,q=p.gql`
  ${P}
  query WatchlistData {
    currentUser {
      id # used by apollo for merging with the cache
      watchlist: watchlistItemsByOwnerId(
        filter: { finishedWatching: { notEqualTo: true } }
        orderBy: [LAST_MODIFIED_DATE_DESC, CREATED_DATE_DESC]
      ) {
        nodes {
          id
          currentTime
          # episode {
          #   ...EpisodeSliderData
          # }
          ...WatchlistRelations
        }
      }
    }
  }
`;var C=p.gql`
  fragment InWatchlistData on WatchlistItem {
    id
    currentTime
  }
`,j=p.gql`
  ${C}
  query IsInWatchlist($contentId: Guid!) {
    currentUser {
      id
      watchlistForMovie: watchlistItemsByOwnerId(
        first: 1
        filter: {
          or: [
            { movieId: { equalTo: $contentId } }
            { episodeId: { equalTo: $contentId } }
          ]
        }
      ) {
        nodes {
          ...InWatchlistData
        }
      }
    }
  }
`,R=p.gql`
  ${C}
  ${P}
  mutation CreateWatchlistItem($item: WatchlistItemInput!) {
    createWatchlistItem(input: { watchlistItem: $item }) {
      watchlistItem {
        ...InWatchlistData
        ...WatchlistRelations
      }
    }
  }
`;function U(e,t){return(i=i||(0,u.default)((function*(e,t){var r,n,i=((yield e.query({query:j,variables:{contentId:t.id}}))||{}).data,o=null===i||void 0===i||null===(r=i.currentUser)||void 0===r?void 0:r.watchlistForMovie.nodes[0],a=null===i||void 0===i||null===(n=i.currentUser)||void 0===n?void 0:n.id;if(!o&&a)try{var u,d,c=((yield e._unsafeFetchMutateWithoutErrorHandling({mutation:R,variables:{item:O({id:"000000000000000",ownerId:a,currentTime:0},"CmsEpisode"===t.__typename?{episodeId:t.id}:{movieId:t.id})}}))||{}).data,s=(null!==(u=null===c||void 0===c?void 0:c.createWatchlistItem)&&void 0!==u?u:{}).watchlistItem;if(s){var v,f;yield e.queryClient.invalidateQueries({queryKey:m.ContinueWatchingQuery.getKey({contentId:(null===(v=s.movie)||void 0===v?void 0:v.id)||(null===(f=s.series)||void 0===f?void 0:f.id)})});var y=e.readQuery({query:q});if(null!==y&&void 0!==y&&y.data.currentUser){var p=(0,l.default)(y,(function(e){(e.data.currentUser||{watchlist:{nodes:[]}}).watchlist.nodes.unshift(s)}));e.writeQuery({query:q,data:p})}var h=e.queryClient.getQueryData(D.getKey());if(h){var I,g=(0,l.default)(h,(function(e){var t,r,n,i,o,a,u,l,d;(e=e||{}).data=(null===(t=e)||void 0===t?void 0:t.data)||{},e.data.currentUser=e.data.currentUser||{},e.data.currentUser.watchlistItemsByOwnerId=(null===(r=e)||void 0===r||null===(n=r.data.currentUser)||void 0===n?void 0:n.watchlistItemsByOwnerId)||{},e.data.currentUser.watchlistItemsByOwnerId.nodes=Array.isArray(null===(i=e)||void 0===i||null===(o=i.data.currentUser)||void 0===o?void 0:o.watchlistItemsByOwnerId.nodes)?e.data.currentUser.watchlistItemsByOwnerId.nodes:[],e.data.currentUser.watchlistItemsByOwnerId.nodes[0]=e.data.currentUser.watchlistItemsByOwnerId.nodes[0]||{},e.data.currentUser.watchlistItemsByOwnerId.nodes[0].id=s.id,e.data.currentUser.watchlistItemsByOwnerId.nodes[0].currentTime=s.currentTime;var c=null===(a=e)||void 0===a||null===(u=a.data.currentUser)||void 0===u?void 0:u.watchlistItemsByOwnerId.nodes;(Array.isArray(c)?c:[]).push({__typename:"WatchlistItem",currentTime:s.currentTime,episodeId:null!==(l=null===(d=s.episode)||void 0===d?void 0:d.id)&&void 0!==l?l:null,id:s.id})}));e.writeQuery({data:g,query:D,queryKey:D.getKey({seasonId:null===(I=s.series)||void 0===I?void 0:I.id})})}var b=e.queryClient.getQueryData(j.getKey({contentId:t.id})),w=(0,l.default)(b,(function(e){var t,r,n,i,o;(e=e||{}).data=(null===(t=e)||void 0===t?void 0:t.data)||{},e.data.currentUser=e.data.currentUser||{},e.data.currentUser.watchlistForMovie=(null===(r=e)||void 0===r||null===(n=r.data.currentUser)||void 0===n?void 0:n.watchlistForMovie)||{},e.data.currentUser.watchlistForMovie.nodes=Array.isArray(null===(i=e)||void 0===i||null===(o=i.data.currentUser)||void 0===o?void 0:o.watchlistForMovie.nodes)?e.data.currentUser.watchlistForMovie.nodes:[],e.data.currentUser.watchlistForMovie.nodes[0]=e.data.currentUser.watchlistForMovie.nodes[0]||{},e.data.currentUser.watchlistForMovie.nodes[0].id=s.id,e.data.currentUser.watchlistForMovie.nodes[0].currentTime=s.currentTime}));e.writeQuery({data:w,query:j,queryKey:j.getKey({contentId:t.id})})}o=null===c||void 0===c||null===(d=c.createWatchlistItem)||void 0===d?void 0:d.watchlistItem}catch(P){console.error("upsertWatchlistItem.apolloClient._unsafeFetchMutateWithoutErrorHandling.catch",P)}return console.warn("useWatchlistTracker.entryf",o),o||null}))).apply(this,arguments)}var S=p.gql`
  ${C}
  mutation UpdateWatchlistTime($id: Guid!, $time: Int) {
    updateWatchlistItemById: updateWatchlistItemTime(
      input: { itemId: $id, newCurrentTime: $time }
    ) {
      watchlistItem {
        ...InWatchlistData
      }
    }
  }
`;t.updateWatchlistMutation=S;var M=p.gql`
  mutation DeleteWatchlistItem($id: Guid!) {
    deleteWatchlistItemById(input: { id: $id }) {
      watchlistItem {
        id
      }
    }
  }
`;var D=p.gql`
  ${C}
  query WatchlistForSeaon($seasonId: Guid!) {
    currentUser {
      id
      watchlistItemsByOwnerId(filter: { seasonId: { equalTo: $seasonId } }) {
        nodes {
          ...InWatchlistData
          episodeId
        }
      }
    }
  }
`},CabM:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.useErrorLog=function(e,t){(0,n.useEffect)((,[e,t])};var n=r("q1tI")},"Cp+m":function(e,t,r){var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.CheckmarkIcon=void 0;var i=n(r("gcR/")),o=(n(r("q1tI")),r("ypRV")),a=r("I6S4"),u=r("nKUr"),l=(0,i.default)(o.Path,{d:"M1 148h18v18H1z"});var d=(0,a.makeIconComponent)((function(e){var t=e.color,r=void 0===t?"white":t,n=e.boxColor,a=void 0===n?r:n,d=e.checked,c=void 0===d||d,s=e.avoidBox,v=void 0!==s&&s,f=e.fill,y=void 0===f?"#000":f,p=e.radius,h=void 0===p?2:p;return(0,u.jsx)(u.Fragment,{children:(0,i.default)(o.G,{transform:"translate(0 -147)",fill:"none",fillRule:"evenodd"},void 0,v?null:(0,i.default)(o.Rect,{stroke:a,fill:y,x:.5,y:147.5,width:19,height:19,rx:h}),l,c?(0,i.default)(o.Path,{fill:r,fillRule:"nonzero",d:"M7.75 160.127L4.623 157l-1.065 1.057 4.192 4.193 9-9-1.057-1.058z"}):null)})}),{baseWidth:20,baseHeight:20});t.CheckmarkIcon=d},FRQB:function(e,t,r){var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.SelectableTouchableWithoutFeedback=void 0;var i=n(r("Wi0u")),o=(0,r("KejV").withSpatialNavigation)(i.default,{forceOnPressForWeb:!0,measureChild:!0,debugName:"TouchableWithoutFeedback"});t.SelectableTouchableWithoutFeedback=o},HuzH:function(e,t,r){var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.InteractionManager=void 0;var i=n(r("lSNA")),o=n(r("Qfxl"));function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,i.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=u(u({},o.default),{},{runAfterInteractions:function(e){var t=!1,r=setTimeout((,1e3);return o.default.runAfterInteractions(()}});t.InteractionManager=l},IuBG:function(e,t,r){var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.ArdVolumeUpIcon=void 0;var i=n(r("gcR/")),o=(n(r("q1tI")),r("ypRV")),a=r("I6S4"),u=r("nKUr");var l=(0,a.makeIconComponent)((function(e){var t=e.color,r=void 0===t?"white":t;return(0,u.jsxs)(u.Fragment,{children:[(0,i.default)(o.Path,{fill:r,d:"M25.5,25.29c0,3.75,0,7.4,0,11.05,0,.09,0,.18-.01,.27-.07,.75-.59,1.02-1.22,.6-.41-.27-.77-.61-1.15-.92-2.57-2.14-5.13-4.28-7.7-6.4-.18-.15-.45-.25-.69-.25-1.24-.02-2.48,0-3.73-.01-.97,0-1.55-.57-1.56-1.54,0-1.81,0-3.62,0-5.44,0-.97,.59-1.53,1.57-1.53,1.22,0,2.43-.01,3.65,0,.32,0,.56-.08,.8-.29,2.8-2.34,5.6-4.68,8.41-7.01,.16-.13,.32-.26,.5-.36,.54-.29,.97-.08,1.09,.52,.03,.15,.03,.31,.03,.46,0,3.53,0,7.07-.01,10.6,0,.12,.01,.23,.02,.25Z"}),(0,i.default)(o.Path,{fill:r,d:"M39.66,26.53c-.01,2.58-.83,5.65-2.83,8.36-.87,1.18-1.89,2.2-3.13,2.98-.24,.15-.55,.25-.83,.26-.51,.02-.95-.37-1.08-.85-.13-.5,.04-1.01,.48-1.3,3.11-2.07,4.58-5.09,4.94-8.7,.35-3.44-.34-6.67-2.25-9.59-.74-1.13-1.63-2.14-2.71-2.97-.56-.43-.66-1.15-.26-1.68,.4-.53,1.12-.62,1.69-.19,1.63,1.24,2.89,2.81,3.88,4.59,1.44,2.59,2.1,5.38,2.09,9.09Z"}),(0,i.default)(o.Path,{fill:r,d:"M34.12,25.52c-.02,2.95-1.01,5.46-3.36,7.34-.23,.19-.48,.36-.74,.5-.58,.32-1.26,.12-1.59-.43-.33-.55-.17-1.24,.39-1.6,1.75-1.12,2.66-2.76,2.88-4.78,.31-2.93-.64-5.36-2.97-7.22-.52-.41-.6-1.12-.22-1.63,.4-.53,1.1-.65,1.66-.24,1.34,.98,2.33,2.26,3.03,3.77,.63,1.36,.93,2.79,.94,4.29Z"})]})}),{baseWidth:50,baseHeight:50});t.ArdVolumeUpIcon=l},"Q/9z":function(e,t,r){var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.ArdVolumeMuteIcon=void 0;var i=n(r("gcR/")),o=(n(r("q1tI")),r("ypRV")),a=r("I6S4"),u=r("nKUr");var l=(0,a.makeIconComponent)((function(e){var t=e.color,r=void 0===t?"white":t;return(0,u.jsxs)(u.Fragment,{children:[(0,i.default)(o.G,{},void 0,(0,i.default)(o.Path,{fill:r,d:"M25,25.29c0,3.75,0,7.4,0,11.05,0,.09,0,.18-.01,.27-.07,.75-.59,1.02-1.22,.6-.41-.27-.77-.61-1.15-.92-2.57-2.14-5.13-4.28-7.7-6.4-.18-.15-.45-.25-.69-.25-1.24-.02-2.48,0-3.73-.01-.97,0-1.55-.57-1.56-1.54,0-1.81,0-3.62,0-5.44,0-.97,.59-1.53,1.57-1.53,1.22,0,2.43-.01,3.65,0,.32,0,.56-.08,.8-.29,2.8-2.34,5.6-4.68,8.41-7.01,.16-.13,.32-.26,.5-.36,.54-.29,.97-.08,1.09,.52,.03,.15,.03,.31,.03,.46,0,3.53,0,7.07-.01,10.6,0,.12,.01,.23,.02,.25Z"})),(0,i.default)(o.Path,{fill:r,d:"M36.79,26l5.45-5.45c.35-.35,.35-.93,0-1.28-.35-.35-.93-.35-1.28,0l-5.45,5.45-5.45-5.45c-.35-.35-.93-.35-1.28,0-.35,.35-.35,.93,0,1.28l5.45,5.45-5.45,5.45c-.35,.35-.35,.93,0,1.28,.18,.18,.41,.27,.64,.27s.46-.09,.64-.27l5.45-5.45,5.45,5.45c.18,.18,.41,.27,.64,.27s.46-.09,.64-.27c.35-.35,.35-.93,0-1.28l-5.45-5.45Z"})]})}),{baseWidth:50,baseHeight:50});t.ArdVolumeMuteIcon=l},RQ5Y:function(e,t,r){var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.ContinueWatchingQuery=void 0,t.preloadContinueWatching=function(e,t){return(i=i||(0,o.default)((function*(e,t){var r=((yield e.query({query:d,variables:{contentId:t}}))||{}).data,n=r&&null;r&&(r.nextEpisode&&r.nextEpisode?n=r.nextEpisode.id:r.movieOnList&&r.movieOnList.nodes[0]&&(n=t));return{idToWatch:n}}))).apply(this,arguments)},t.useContinueWatching=function(e){var t=(0,l.useIsLoggedIn)(),r=(0,a.useQuery)(d,{enabled:!!t,variables:{contentId:e},errorPolicy:"ignore",refetchOnMount:!0,refetchOnReconnect:!0,refetchOnWindowFocus:!0}),n=r.data,i=r.loading,o=(r.error,r.refetch),u=n&&null;if(n){if(n.nextEpisode&&n.nextEpisode)u=n.nextEpisode.id;else n.movieOnList&&n.movieOnList.nodes[0]&&(u=e)}return{idToWatch:u,loading:i,refetch:o}};var i,o=n(r("yXPU")),a=r("HIWS"),u=n(r("uIDn")),l=r("h9MH"),d=u.default`
  query ContinueWatching($contentId: Guid!) {
    movieOnList: allWatchlistItems(
      first: 1
      filter: {
        movieId: { equalTo: $contentId }
        finishedWatching: { equalTo: false }
      }
    ) {
      nodes {
        id
      }
    }
    nextEpisode: continueWatching(seriesId: $contentId) {
      id
    }
  }
`;t.ContinueWatchingQuery=d},RRuq:function(e,t,r){var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.CancelIcon=void 0;var i=n(r("gcR/")),o=(n(r("q1tI")),r("ypRV")),a=r("I6S4"),u=r("nKUr"),l=(0,i.default)(o.Path,{opacity:.87,fill:"none",d:"M0 0h24v24H0V0z"});var d=(0,a.makeIconComponent)((function(e){var t=e.color,r=void 0===t?"white":t;return(0,u.jsxs)(u.Fragment,{children:[l,(0,i.default)(o.Path,{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm4.3 14.3a.996.996 0 0 1-1.41 0L12 13.41 9.11 16.3a.996.996 0 1 1-1.41-1.41L10.59 12 7.7 9.11A.996.996 0 1 1 9.11 7.7L12 10.59l2.89-2.89a.996.996 0 1 1 1.41 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41z",fill:r})]})}),{baseWidth:24,baseHeight:24});t.CancelIcon=d},VGXd:function(e,t,r){var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.getSubscriptionData=h,t.useMembershipCancelation=function(){var e,t=(0,s.useApolloClient)(),r=(0,l.useCallback)((function(r){return(e=e||(0,u.default)((function*(e){var r=yield(0,c.cancelSubscription)(e);return yield(0,f.reloadCurrentUser)(t),r}))).apply(this,arguments)}),[]);return(0,d.useAsyncCallback)(r)},t.useMembershipData=function(){var e=(0,f.useCurrentUser)(),t=e.data,r=e.error,n=e.isLoading,i=e.refetch,o=e.networkStatus;return{data:h((null===t||void 0===t?void 0:t.currentUser)||null),error:r,loading:n,refetch:i,networkStatus:o}},t.useScheduledCancellationData=function(){var e=(0,f.useCurrentUser)(),t=e.data,r=e.error,n=e.loading,i=e.refetch,o=e.networkStatus;return{data:m((null===t||void 0===t?void 0:t.currentUser)||null),error:r,loading:n,refetch:i,networkStatus:o}},t.userHasActiveSubscription=function(e){return(i=i||(0,u.default)((function*(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(yield e.query(p({query:f.CurrentUserQuery,errorPolicy:"all"},t)))||{},n=r.data;if(n&&n.currentUser){var i=n&&n.currentUser&&n.currentUser.subscriptions.nodes[0];return!!i}return!1}))).apply(this,arguments)},t.userHasSubscriptionWithFutureTerms=function(e){return(o=o||(0,u.default)((function*(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(yield e.query(p({query:f.CurrentUserQuery,errorPolicy:"all"},t)))||{},n=r.data;if(n&&n.currentUser){var i,o,a=new Date,u=null===n||void 0===n||null===(i=n.currentUser)||void 0===i||null===(o=i.subscriptions)||void 0===o?void 0:o.nodes.some((function(e){return!(!e||!e.isRecurringActive)&&(null===e||void 0===e?void 0:e.terms.nodes.some((function(e){return e&&new Date(e.validUntil)>a})))}));return u}return!1}))).apply(this,arguments)};var i,o,a=n(r("lSNA")),u=n(r("yXPU")),l=r("q1tI"),d=r("0lma"),c=r("mJVR"),s=r("tlk2"),v=r("NhWt"),f=r("h9MH");function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e){var t,r,n=null===e||void 0===e?void 0:e.subscriptions.nodes,i=null===n||void 0===n?void 0:n.map(().flat(),o=null===n||void 0===n?void 0:n.filter(v.filterEmpty).filter(()[0],a=null;o&&(a=(null===i||void 0===i||null===(r=i.sort((function(e,t){return new Date(null===t||void 0===t?void 0:t.validUntil).getTime()-new Date(null===e||void 0===e?void 0:e.validUntil).getTime()})))||void 0===r?void 0:r[0])||null);var u=null===n||void 0===n||null===(t=n.filter((function(e){return"support"!==(null===e||void 0===e?void 0:e.paymentProvider)})))||void 0===t?void 0:t[0],l=null===n||void 0===n?void 0:n.find(();return{subscription:o,futureSubscription:u,latestTerm:a,allSubscriptions:n,shouldWarnAboutWirecard:"wirecard"===(null===l||void 0===l?void 0:l.paymentProvider)}}function m(e){var t=null===e||void 0===e?void 0:e.paymentScheduledCancellationsByUserId.nodes,r=(null===t||void 0===t?void 0:t.find(())||null;return{allScheduledCancelations:t,openCancellation:r}}},"Y+p1":YJpg:function(e,t,r){var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.ArdPauseIcon=void 0;var i=n(r("gcR/")),o=(n(r("q1tI")),r("ypRV")),a=r("I6S4"),u=r("nKUr");var l=(0,a.makeIconComponent)((function(e){var t=e.color,r=void 0===t?"white":t;return(0,u.jsxs)(u.Fragment,{children:[(0,i.default)(o.Path,{fill:r,d:"M14.17,12.95l.25,26.19c0,1.03,1.4,1.86,3.12,1.84s3.09-.87,3.08-1.9l-.25-26.19c0-1.03-1.4-1.86-3.12-1.84s-3.09,.87-3.08,1.9Z"}),(0,i.default)(o.Path,{fill:r,d:"M27.18,12.92l.25,26.19c0,1.03,1.46,1.86,3.23,1.84s3.21-.87,3.2-1.9l-.25-26.19c0-1.03-1.46-1.86-3.23-1.84s-3.21,.87-3.2,1.9Z"})]})}),{baseWidth:50,baseHeight:50});t.ArdPauseIcon=l},ZRDU:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.setPinAlreadyAsked=void 0,t.useParentalAgeCheck=function(e){var t,r,d,c,s,v,f,y=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},p=y.onPinAlreadyAskedForcedRerenderHACK,h=(0,i.useCurrentUser)(),m=h.data,I="ard"===o.CLONE_GROUP,g=null===m||void 0===m||null===(t=m.currentUser)||void 0===t?void 0:t.agePinHash,b=I&&(null===m||void 0===m||null===(r=m.currentUser)||void 0===r?void 0:r.parentalControlAgeLimit)||16,w=null===e||void 0===e?void 0:e.fskRating;if(e&&"CmsEpisode"===e.__typename){var O,P,q,C=null===(O=e.season)||void 0===O?void 0:O.fskRating,j=null===(P=e.season)||void 0===P||null===(q=P.series)||void 0===q?void 0:q.fskRating;null!==(w=w||j||C||null)&&(w=Math.max(w||0,j||0,C||0))}var R=w&&w>=b&&g&&!u&&"homeofhorror"!==o.CLONE,U=(0,a.selectForClone)({spotfilm:!!(w&&w>=18&&null!==m&&void 0!==m&&null!==(d=m.currentUser)&&void 0!==d&&null!==(c=d.marketingSource)&&void 0!==c&&c.toLowerCase().includes("cobi")&&null!==m&&void 0!==m&&null!==(s=m.currentUser)&&void 0!==s&&null!==(v=s.subscriptions.nodes[0])&&void 0!==v&&null!==(f=v.terms.nodes[0])&&void 0!==f&&f.usedVoucherId),ard:w&&w>=16&&"CmsClip"===(null===e||void 0===e?void 0:e.__typename)&&!(null!==m&&void 0!==m&&m.currentUser),default:!1}),S=(0,n.useState)(!1),M=S[0],D=S[1];return(0,n.useEffect)((function(){g&&g===u||(l(null),null===p||void 0===p||p()),D(!M)}),[p]),{agePinHash:g,isAgeRestricted:U,parentalControlAgeLimit:b,isPinInputActive:R,fskRating:w}};var n=r("q1tI"),i=r("h9MH"),o=r("RMik"),a=r("jAaV"),u=null,l=t.setPinAlreadyAsked=l},bEEP:function(e,t,r){var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.getVideoSourceURLByType=d,t.selectMovieSource=void 0;var i=n(r("lSNA")),o=r("RMik"),a=r("PceR");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,i.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){var r=e||{},n=r.hlsUrl,i=r.dashUrl,a=r.pmdUrl;return"dash"===t&&i?(o.CDN_PREFIX_DASH||"")+i:"hls"===t&&n?(o.CDN_PREFIX_HLS||"")+n:"pmd"===t&&a?(o.CDN_PREFIX_PMD||"")+a:null}var c=function(e,t,r,n){if(null!==r&&void 0!==r&&r.localURL)return{src:r.localURL,type:r.type};var i=e.videoSource||{},u={src:d(i,"hls"),type:"application/x-mpegURL"},c={src:d(i,"dash"),type:"application/dash+xml"},s={type:"video/mp4",src:d(i,"pmd")},v=t?u:c,f="number"===typeof v?v:v.src;return t&&"spotfilm"===o.CLONE_GROUP&&(f="number"===typeof(v=s)?v:v.src),f||(v=s),null!==n&&void 0!==n&&n.authorizationParameters?l(l({},v),{},{src:(0,a.addParams)(v.src,n.authorizationParameters)}):v};t.selectMovieSource=c;var s=c;t.default=s},dp2m:function(e,t,r){var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.ArdPlayIcon=void 0;var i=n(r("gcR/")),o=(n(r("q1tI")),r("ypRV")),a=r("I6S4"),u=r("nKUr");var l=(0,a.makeIconComponent)((function(e){var t=e.color,r=void 0===t?"white":t;return(0,u.jsxs)(u.Fragment,{children:[(0,i.default)(o.Path,{fill:r,d:"M24.89,1C16.75,1,9.46,5.07,5.12,11.27l3.49,2.44c3.57-5.08,9.49-8.48,16.17-8.48,10.85,0,19.47,8.89,19.47,19.77s-8.62,19.77-19.47,19.77c-6.69,0-12.57-3.43-16.14-8.51l-3.55,2.48c4.34,6.2,11.41,10.26,19.55,10.26,13.32,0,24.06-10.78,24.06-24.03S38.14,1,24.89,1"}),(0,i.default)(o.Path,{fill:r,d:"M21.99,16.84c-1.54-.88-2.79-.16-2.79,1.62v13.1c0,1.78,1.25,2.5,2.79,1.62l11.45-6.57c1.54-.88,1.54-2.32,0-3.2l-11.45-6.57Z"})]})}),{baseWidth:50,baseHeight:50});t.ArdPlayIcon=l},glzh:function(e,t,r){var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.RedirectType=void 0,t.handleRedirectCookieIfExists=function(e){var t=(0,u.getNextCookies)(e).redirectRoute;if(t)return(0,u.deleteCookie)("redirectRoute",void 0,e),l(t,e),!0;return!1},t.redirect=l,t.redirectToLoginAndComeBack=function(e,t){var r;if(e){r=(e.asPath||e.pathname).split("?")[0];var n=a.default.stringify(e.query);n&&(r+="?"+n)}else r=location.pathname,location.search&&(r+=location.search);l(t?`${t}?redirect=${encodeURIComponent(r)}`:"/login?redirect="+encodeURIComponent(r),e)};var i,o=n(r("nOHt")),a=n(r("s4NR")),u=r("qJJ4");function l(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.TEMPORARY;t&&t.res?(t.res.writeHead(r,{Location:e}),t.res.end()):o.default.replace(e)}t.RedirectType=i,i||(t.RedirectType=i={}))},hqHo:function(e,t,r){var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.DragHandleIcon=void 0;var i=n(r("lSNA")),o=(n(r("q1tI")),n(r("XwJz"))),a=r("ypRV"),u=r("36Hs"),l=r("I6S4"),d=r("nKUr");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,i.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=(0,l.makeIconComponent)((function(e){var t=e.color,r=(0,u.useTheme)();return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(a.Circle,s(s({},o.default.select({web:{translate:"10,10"},default:{translateX:10,translateY:10}})),{},{r:8,fill:t||r.primaryColor}))})}),{baseWidth:20,baseHeight:20});t.DragHandleIcon=v},kd2E:"r/hA":function(e,t,r){var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.useWatchSessionAuthorization=function(e,t){var r=t.isDownload,n=e||{},i=n.id,d=n.__typename,s=u.PLAYBACK_AUTHORIZATION_ENABLED&&!r,v=(0,a.useState)({readyState:s?"loading":"ready"}),f=v[0],y=v[1],p=(0,a.useRef)(i);p.current=i;var h=(0,l.useDeviceType)(),m=(0,a.useCallback)((0,o.default)((function*(){if(s&&i&&d)try{var e=yield(0,u.getPlaybackAuthorization)({contentId:i,contentType:d,deviceInfo:h});return p.current===i&&(!0===(null===e||void 0===e?void 0:e.success)?y({readyState:"ready",authorizationResponse:e}):y({readyState:"error",authorizationResponse:e})),c(c({},e),{},{authorizedId:i})}catch(t){console.error("error while getting token authorization",t),y({readyState:"error",error:null===t||void 0===t?void 0:t.message})}})),[i,s]);return(0,a.useEffect)((function(){s&&!r&&(y({readyState:"loading"}),m())}),[i,r]),c(c({},f),{},{reload:m,isRequired:s})};var i=n(r("lSNA")),o=n(r("yXPU")),a=r("q1tI"),u=r("31l2"),l=r("GpEc");s4NR:st4S:function(e,t,r){var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.PlayIcon=void 0;var i=n(r("gcR/")),o=(n(r("q1tI")),r("ypRV")),a=r("I6S4"),u=r("nKUr"),l=(0,i.default)(o.Path,{d:"M0 0h24v24H0z",fill:"none"});var d=(0,a.makeIconComponent)((function(e){var t=e.color,r=void 0===t?"white":t;return(0,u.jsxs)(u.Fragment,{children:[(0,i.default)(o.Path,{d:"M8 5v14l11-7z",fill:r}),l]})}),{baseWidth:24,baseHeight:24});t.PlayIcon=d}}]);