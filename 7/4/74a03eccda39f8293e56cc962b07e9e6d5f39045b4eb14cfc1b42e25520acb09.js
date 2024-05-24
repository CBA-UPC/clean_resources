/**
 * @license
 * Adobe Visitor API for JavaScript version: 4.4.0
 * Copyright 2019 Adobe, Inc. All Rights Reserved
 * More info available at https://marketing.adobe.com/resources/help/en_US/mcvid/
 */
var e=();

// using 4:1 to confirm US user since geoLocaiton isn't avail in time
var visitor = Visitor.getInstance("B3ABA272551949410A4C98A2@AdobeOrg", {
    doesOptInApply: false,
    trackingServer: "wa.eonline.com", // same as s.trackingServer
    trackingServerSecure: "swa.eonline.com", // same as s.trackingServerSecure

    // To enable CNAME support, add the following configuration variables
    // If you are not using CNAME, DO NOT include these variables
    marketingCloudServer: "wa.eonline.com",
    marketingCloudServerSecure: "swa.eonline.com" // same as s.trackingServerSecure
});