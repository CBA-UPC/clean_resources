<?xml version="1.0" encoding="UTF-8"?>
<AkamaiPlayerAnalyticsConfig debug="0" exception="0" logWindow="0">
<beaconId>1fa77e976260710061</beaconId>
<beaconVersion>1.0</beaconVersion>
<isActive>1</isActive>
<logTo logInterval="300" logType="relative" maxLogLineLength="2048" secondaryLogTime="5">
<host>https://betaservices.mediamelontech.com/StreamProducer</host>
<path>/akamaiAnalytics</path>
<logVersion>1.2</logVersion>
<formatVersion>1.1</formatVersion>
</logTo>
<security/>
<bucketInfo>
<bucketCount>20</bucketCount>
<bucketLength>900</bucketLength>
</bucketInfo>
<statistics useKey="1">
<split>
<dataMetrics>
<data key="za" name="partNumber"/>
<data key="zb" name="totalParts"/>
</dataMetrics>
</split>
<error eventCode="E">
<dataMetrics>
<data key="m" name="playerState"/>
<data key="v" name="currentStreamTime"/>
<data key="aa" name="hostName"/>
<data key="ac" name="streamName"/>
<data key="ap" name="startupTime"/>
<data key="aq" name="streamLength"/>
<data key="ar" name="bytesTotal"/>
<data key="av" name="videoSize"/>
<data key="ba" name="bucketLength"/>
<data key="bb" name="serverIp"/>
<data key="ca" name="errorCode"/>
<data key="cl" name="contentLength"/>
<data key="ea" name="bucketCount"/>
<data key="en" name="eventName"/>
<data key="gb" name="adSession"/>
<data key="sc" name="subCategory"/>
<data key="ta" name="totalRebufferTime"/>
<data key="tb" name="maxPersistentBitRate"/>
<data key="td" name="totalAdPlayClockTime"/>
<data key="te" name="totalAdStartCount"/>
<data key="tf" name="totalAdAbandonCount"/>
<data key="tx" name="totalPlayClockTime"/>
<data key="ty" name="totalPlayStreamTime"/>
<data key="tz" name="totalRebufferCount"/>
<data key="va" name="isVisitStart" sendOnce="1"/>
<data key="_cd_4504" name="videoId"/>
<data key="_cd_4542" name="siteId"/>
<data key="_cd_4684" name="consumerId"/>
</dataMetrics>
</error>
<feedback eventCode="F">
<dataMetrics>
<data key="sc" name="subCategory"/>
<data key="so" name="socialSharing"/>
</dataMetrics>
</feedback>
<visit eventCode="V">
<dataMetrics>
<data key="vb" name="isVisitEnd"/>
<data key="vd" name="visitPlays"/>
<data key="ve" name="visitViews"/>
<data key="vh" name="visitPlayClockTime"/>
<data key="vj" name="visitRebufferCount"/>
<data key="vk" name="visitRebufferTime"/>
<data key="vl" name="visitMaxPersistentBitRateBucket"/>
<data key="vm" name="visitStartupErrors"/>
<data key="vo" name="visitAdPlayClockTime"/>
<data key="vp" name="visitAdStartCount"/>
<data key="vq" name="visitAdAbandonCount"/>
<data key="_cd_4504" name="videoId"/>
<data key="_cd_4542" name="siteId"/>
<data key="_cd_4684" name="consumerId"/>
</dataMetrics>
</visit>
<playing eventCode="P">
<dataMetrics>
<data key="m" name="playerState"/>
<data key="n" name="playBackBitRate"/>
<data key="u" name="droppedFrames"/>
<data key="v" name="currentStreamTime"/>
<data key="x" name="playClockTime"/>
<data key="y" name="playStreamTime"/>
<data key="z" name="rebufferCount"/>
<data key="aa" name="hostName"/>
<data key="ac" name="streamName"/><data key="ap" name="startupTime"/>
<data key="aq" name="streamLength"/>
<data key="ba" name="bucketLength"/>
<data key="bb" name="serverIp"/>
<data key="cl" name="contentLength"/>
<data key="da" name="rebufferTime"/>
<data key="db" name="averageFPS"/>
<data key="dc" name="bytesLoaded"/>
<data key="dd" name="pauseCount"/>
<data key="de" name="pauseDuration"/>
<data key="dg" name="seekCount"/>
<data key="dh" name="seekTime"/>
<data key="dj" name="pauseSeekSession"/>
<data key="dn" name="totalBandwidth"/>
<data key="du" name="bufferTime"/>
<data key="dv" name="isView" sendOnce="1"/>
<data key="dw" name="isSessionWithRebuffer" sendOnce="1"/>
<data key="dy" name="liveDelay"/>
<data key="dz" name="rtt"/>
<data key="ea" name="bucketCount"/>
<data key="en" name="eventName"/>
<data key="fb" name="transitionCount"/>
<data key="fd" name="transitionUpSwitchCount"/>
<data key="fe" name="transitionDownSwitchCount"/>
<data key="ff" name="transitionTime"/>
<data key="fi" name="transitionStreamTimeSession"/>
<data key="fk" name="bitRateBucketTimes">
<matchRules>
<match key="S" type="range" value="max:1500"/>
<match key="Q" type="range" value="min:1500;max:2500"/>
<match key="D" type="range" value="min:2500"/>
</matchRules>
</data>
<data key="fl" name="averagedBitRate"/>
<data key="gb" name="adSession"/>
<data key="rs" name="rebufferSession"/>
<data key="sc" name="subCategory"/>
<data key="so" name="socialSharing"/>
<data key="_cd_4504" name="videoId"/>
<data key="_cd_4542" name="siteId"/>
<data key="_cd_4684" name="consumerId"/>
</dataMetrics>
</playing>
<common>
<dataMetrics>
<data key="a" name="eventCode"/>
<data key="b" name="beaconId"/>
<data key="c" name="attemptId"/>
<data key="d" name="viewerId"/>
<data key="e" name="sequenceId"/>
<data key="g" name="endOfStream"/>
<data key="w" name="currentClockTime"/>
<data key="ag" name="pageHost"/>
<data key="ah" name="pageReferrerHost"/>
<data key="ak" name="playerType"/>
<data key="al" name="os"/>
<data key="am" name="format"/>
<data key="at" name="browser"/>
<data key="aw" name="streamUrl"/>
<data key="ax" name="deliveryType"/>
<data key="ay" name="pluginVersion"/>
<data key="cg" name="category"/>
<data key="cm" name="cdn">
<matchRules>
<match key="" name="hostName" type="pattern" value=""/>
</matchRules>
</data>
<data key="cn" name="connectivity"/>
<data key="dx" name="logInterval"/>
<data key="es" name="eventStartTime"/>
<data key="et" name="eventEndTime"/>
<data key="os" name="fullOs"/>
<data key="pd" name="playerId"/>
<data key="sa" name="device"/>
<data key="sd" name="scriptDisabled"/>
<data key="sg" name="sessionGUID"/>
<data key="sh" name="show"/>
<data key="sp" name="mobileOperator"/>
<data key="tt" name="title"/>
<data key="cid" name="cellID"/>
<data key="ltd" name="latitude"/>
<data key="ltg" name="longitude"/>
<data key="sgs" name="signalStrength"/>
</dataMetrics>
</common>
<playStart eventCode="S">
<dataMetrics>
<data key="m" name="playerState"/>
<data key="v" name="currentStreamTime"/>
<data key="aa" name="hostName"/>
<data key="ac" name="streamName"/>
<data key="an" name="connectTime"/>
<data key="ao" name="bufferingTime"/>
<data key="ap" name="startupTime"/>
<data key="aq" name="streamLength"/>
<data key="ar" name="bytesTotal"/>
<data key="as" name="encodedFPS"/>
<data key="av" name="videoSize"/>
<data key="ba" name="bucketLength"/>
<data key="bb" name="serverIp"/>
<data key="cl" name="contentLength"/>
<data key="ea" name="bucketCount"/>
<data key="en" name="eventName"/>
<data key="ft" name="isFirstTitle"/>
<data key="gb" name="adSession"/>
<data key="sc" name="subCategory"/>
<data key="va" name="isVisitStart" sendOnce="1"/>
<data key="_cd_4504" name="videoId"/>
<data key="_cd_4542" name="siteId"/>
<data key="_cd_4684" name="consumerId"/>
</dataMetrics>
</playStart>
<complete eventCode="C">
<dataMetrics>
<data key="m" name="playerState"/>
<data key="v" name="currentStreamTime"/>
<data key="aa" name="hostName"/>
<data key="ac" name="streamName"/>
<data key="ap" name="startupTime"/>
<data key="aq" name="streamLength"/>
<data key="ar" name="bytesTotal"/>
<data key="as" name="encodedFPS"/>
<data key="av" name="videoSize"/>
<data key="ba" name="bucketLength"/>
<data key="bb" name="serverIp"/>
<data key="cl" name="contentLength"/>
<data key="ea" name="bucketCount"/>
<data key="en" name="eventName"/>
<data key="gb" name="adSession"/>
<data key="rh" name="rebufferSessionH"/>
<data key="sc" name="subCategory"/>
<data key="ta" name="totalRebufferTime"/>
<data key="tb" name="maxPersistentBitRate"/>
<data key="td" name="totalAdPlayClockTime"/>
<data key="te" name="totalAdStartCount"/>
<data key="tf" name="totalAdAbandonCount"/>
<data key="tx" name="totalPlayClockTime"/>
<data key="ty" name="totalPlayStreamTime"/>
<data key="tz" name="totalRebufferCount"/>
<data key="va" name="isVisitStart" sendOnce="1"/>
<data key="xa" name="endReasonCode"/>
<data key="hdw" name="isSessionWithRebufferH"/>
<data key="hdx" name="lastHTime"/>
<data key="_cd_4504" name="videoId"/>
<data key="_cd_4542" name="siteId"/>
<data key="_cd_4684" name="consumerId"/>
</dataMetrics>
</complete>
<init eventCode="I">
<dataMetrics>
<data key="af" name="playerReferrer"/>
<data key="ai" name="userAgent"/>
<data key="aj" name="playerVersion"/>
<data key="au" name="browserSize"/>
<data key="az" name="beaconVersion"/>
<data key="pr" name="pageReferrer"/>
<data key="pu" name="pageUrl"/>
<data key="_cd_4504" name="videoId"/>
<data key="_cd_4542" name="siteId"/>
<data key="_cd_4684" name="consumerId"/>
</dataMetrics>
</init>
</statistics>
</AkamaiPlayerAnalyticsConfig>
