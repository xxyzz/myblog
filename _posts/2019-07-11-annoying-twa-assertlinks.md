---
layout: post
title: "Annoying TWA Assert Links"
date: 2019-07-11
description: "How to set the correct Trusted Web Activities Digital Asset Links fingerprint."
---

Trusted Web Activity (TWA) lets you publish your Progressive Web App (PWA) to Google Play Store as an app and runs in full screen. It supports Chrome for Android 72 and above. Sounds great until I found the URL bar still exists.

## HTTP Status Code

Both documents([here](https://developers.google.com/digital-asset-links/v1/create-statement) and [here](https://github.com/google/digitalassetlinks/blob/master/well-known/details.md)) said that the response HTTP status code of the `assertlinks.json` file must be 200. And I get a 304. It first occured to me that this must be the real reason, turned out it's not. 304 is fine.

## Asset Links Fingerprint

TWA uses Digital Asset Links to verify the app and the site belongs to the same developer. The Chrome bar will disappear if the verification successes. I followed [this document](https://developers.google.com/web/updates/2019/02/using-twa#remove-url-bar), it works only when I insall the app on my phone directly but failed when I downloaded it from the play store. So I guess the problem is app signing. I formerly used the upload key's fingerprint in `assertlinks.json` and enabled the App Signing by Google Play at the same time. In the end, the App is actually signed with Google's key and my key got striped, the verification would fail certainly. The app signing process is annoyingly confusing.

The solution is to find Google's signing certificate fingerprint in the Google Play Console (Release management -> App signing), then copy the SHA-256 fingerprint to the `assertlinks.json` file.

Now we can upload Kahla TWA app to play store!

<a href='https://play.google.com/store/apps/details?id=com.aiursoft.kahla'><img alt='Get it on Google Play' height=80 src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/></a>

### Read More

- [Using Trusted Web Activities](https://developers.google.com/web/updates/2019/02/using-twa#remove-url-bar)

- [Use app signing by Google Play](https://support.google.com/googleplay/android-developer/answer/7384423)

- [Creating a Statement List](https://developers.google.com/digital-asset-links/v1/create-statement)

- [Asset Links Specification](https://github.com/google/digitalassetlinks/blob/master/well-known/details.md)

- [Chrome Custom Tabs - Examples and Documentation](https://github.com/GoogleChrome/custom-tabs-client)

- [Introducing a Trusted Web Activity for Android](https://blog.chromium.org/2019/02/introducing-trusted-web-activity-for.html)

- [JitPack.io](https://jitpack.io/docs/)
