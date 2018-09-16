---
layout: post
title: "JS time zone"
date: 2018-09-16
description: "Don't forget to add letter 'Z' to UTC ISO date formats string in JavaScript."
comments: true
---
I have been confused by converting time zones in Angular for several days, it turns out that UTC ISO date formats need to add a letter "Z" at the end which means zero offset[^1]. So what happens if we left it out? ~~(You get f**ked!)~~

### In Firefox

{% highlight javascript %}
new Date("2018-09-16T09:23:38.0698603");
// output: Date 2018-09-16T01:23:38.069Z    ❌

new Date("2018-09-16T09:23:38.0698603").toLocaleString();
// output: "9/16/2018, 9:23:38 AM"    ❌

new Date("2018-09-16T09:23:38.0698603Z");
// output: Date 2018-09-16T09:23:38.069Z    ✔️

new Date("2018-09-16T09:23:38.0698603Z").toLocaleString()
// output: "9/16/2018, 5:23:38 PM"    ✔️

{% endhighlight %}

With "Z", Firefox will create a `Date` object with the same time. Without "Z", you will get a time with offset, it depends on your local time zone.

### In Chrome

{% highlight javascript %}
new Date("2018-09-16T09:23:38.0698603");
// output: Sun Sep 16 2018 09:23:38 GMT+0800 (China Standard Time)    ❌

new Date("2018-09-16T09:23:38.0698603").toLocaleString();
// output: "9/16/2018, 9:23:38 AM"    ❌

new Date("2018-09-16T09:23:38.0698603Z");
// output: Sun Sep 16 2018 17:23:38 GMT+0800 (China Standard Time)    ✔️

new Date("2018-09-16T09:23:38.0698603Z").toLocaleString()
// output: "9/16/2018, 5:23:38 PM"    ✔️

{% endhighlight %}

With "Z", Chrome will convert the UTC time to your local time zone. Without "Z", you get the same time but with your local time zone!

### In Safari

{% highlight javascript %}
new Date("2018-09-16T09:23:38.0698603");
// output: Sun Sep 16 2018 17:48:03 GMT+0800 (CST)    ✔️

new Date("2018-09-16T09:48:03.2361997").toLocaleString();
// output: "9/16/2018, 5:48:03 PM"    ✔️

new Date("2018-09-16T09:48:03.2361997Z");
// output: Sun Sep 16 2018 17:48:03 GMT+0800 (CST)    ✔️

new Date("2018-09-16T09:48:03.2361997Z").toLocaleString();
// output: "9/16/2018, 5:48:03 PM    ✔️
{% endhighlight %}

Safari doesn't care the letter "Z" at all, it will convert to your local time zone anyway.

So you must add the letter "Z". Then use [`toLocaleString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString), we can convert UTC to your local time zone with formate. `toLocaleString()` will use your local time zone by default unless you set the `timezone` option[^2].

If you want to create a UTC `Date` object, you should use [`Date.UTC()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC).

If you want to get the local time zone name, use this:
{% highlight javascript %}
Intl.DateTimeFormat().resolvedOptions().timeZone;
// output: "Asia/Shanghai"
{% endhighlight %}

If you want to get the offset times, use `getTimezoneOffset()`:
{% highlight javascript %}
new Date().getTimezoneOffset();
// output: -480
{% endhighlight %}

Keep in mind that this method:
>returns the time zone difference, in minutes, from current locale (host system settings) to UTC.
>
-- <cite>MDN[^3]</cite>

In this case, it means that UTC time is **after** the local time(UTC+8) **480 minutes**. And sometimes, Firefox will return **0**!

In Angular, if you use Datepipe, it will convert to your local time by default. But you can also set it manually, by passing the `timezone` parameter. For example, `"+0800"` means the local time is 8 hours before UTC time[^4].

You see, I've learned something today, yesterday and the day before yesterday: \*\*\*\*

### References
[^1]: [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)

[^2]: [Date.prototype.toLocaleString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)

[^3]: [Date.prototype.getTimezoneOffset()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset)

[^4]: [DatePipe](https://angular.io/api/common/DatePipe)