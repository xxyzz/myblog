---
layout: post
title: "Annoying TWA Assert Links"
date: 2019-07-11
description: "How to set the correct Trusted Web Activities Digital Asset Links fingerprint."
---

## What's TWA?

Trusted Web Activity (TWA) lets you publish your Progressive Web App (PWA) to Google Play Store as an app and runs in full screen. It's new (introduced on February 5, 2019) and has all Chrome features. Its predecessors are Chrome Custom Tab (CCT) and WebView. CCT has browser UI and WebView lacks some features such as web push notifications, therefor TWA is better than both of them. Be aware that it will use CCT if the user's browser is older than version 72. Sounds great until I found the URL bar still exists.

## HTTP Status Code

Both documents([here](https://developers.google.com/digital-asset-links/v1/create-statement) and [here](https://github.com/google/digitalassetlinks/blob/master/well-known/details.md)) said that the response HTTP status code of the `assertlinks.json` file must be 200. And I get a 304. It first occured to me that this must be the real reason, turned out it's not. 304 is fine.

## Asset Links Fingerprint

TWA uses Digital Asset Links to verify the app and the site belongs to the same developer. The Chrome bar will disappear if the verification successes. I followed [this document](https://developers.google.com/web/updates/2019/02/using-twa#remove-url-bar), it works only when I insall the app on my phone directly but failed when I downloaded it from the play store. So I guess the problem is app signing. I formerly used the upload key's fingerprint in `assertlinks.json` and enabled the App Signing by Google Play at the same time. In the end, the App is signed with Google's key and my key got striped, the verification would fail certainly. The app signing process is annoyingly confusing.

The solution is to find Google's signing certificate fingerprint in the Google Play Console (Release management -> App signing), then copy the SHA-256 fingerprint to the `assertlinks.json` file.

Now we can upload Kahla TWA app to the play store! You can view the TWA project code on [Github](https://github.com/AiursoftWeb/Kahla-TWA).

[![Get Kahla TWA app on Google Play](https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png)](https://play.google.com/store/apps/details?id=com.aiursoft.kahla)

## .well-known Folder

The `assertlinks.json` file is placed in the `/.well-known/` folder, this location is defined by [RFC 8615](https://tools.ietf.org/html/rfc8615). You can see all the other well-known URLs on [INNA's website](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml), like EFF's [`dnt-policy.txt`](https://www.eff.org/dnt-policy).

## Read More

- [Using Trusted Web Activities](https://developers.google.com/web/updates/2019/02/using-twa#remove-url-bar)

- [Use app signing by Google Play](https://support.google.com/googleplay/android-developer/answer/7384423)

- [Creating a Statement List](https://developers.google.com/digital-asset-links/v1/create-statement)

- [Asset Links Specification](https://github.com/google/digitalassetlinks/blob/master/well-known/details.md)

- [Chrome Custom Tabs - Examples and Documentation](https://github.com/GoogleChrome/custom-tabs-client)

- [Introducing a Trusted Web Activity for Android](https://blog.chromium.org/2019/02/introducing-trusted-web-activity-for.html)

- [JitPack.io](https://jitpack.io/docs/)

- [Well-Known Uniform Resource Identifiers (URIs)](https://tools.ietf.org/html/rfc8615)

- [Well-Known URIs](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml)

<a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a>
