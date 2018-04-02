---
layout: post
title: "Python Localize Time"
date: 2018-03-02
description: "Using pytz convert time from string to a different time zone."
comments: true
---
Last month I wrote a telegram bot: Choke([@getAqiBot](https://t.me/getAqiBot){:target="_blank" rel="noopener noreferrer"}). I need to create a `datetime` object from a string of hour and minute, then add time zone information to it and finally convert it to UTC time zone.

`strftime()` function converts `datetime` object to string. On the contrary, `striptime()` converts a string to a `datetime` object[^1]. Note that we need to add today's year, month and day, otherwise Python will use **January 1, 1900**. And that will give us an **inaccurate result** when we convert time zones later.

{% highlight python %}
from datetime import datetime

hour_minute = "12:00"
time_string = datetime.now().strftime('%Y%m%d') + hour_minute
datetime_obj = datetime.strptime(time_string, '%Y%m%d%H:%M')

>>> datetime.strptime("12:00", "%H:%M")
datetime.datetime(1900, 1, 1, 12, 0)
>>> print(time_string)
2018030212:00
>>> print(datetime_obj)
2018-03-02 12:00:00
{% endhighlight %}

We can use [pytz](https://pypi.python.org/pypi/pytz){:target="_blank" rel="noopener noreferrer"}'s `localize()` function to localize `datetime` object.

{% highlight python %}
from pytz import timezone

tzinfo = "Europe/Paris" # UTC+1
localized_datetime = timezone(tzinfo).localize(datetime_obj)

>>> print(localized_datetime)
2018-03-02 12:00:00+01:00
{% endhighlight %}

Using `astimezone()` function to convert Paris time zone to UTC. Because I hosted the bot on Heroku, and Heroku uses UTC.
{% highlight python %}
import pytz
utc_datetime = localized_datetime.astimezone(pytz.utc)

>>> print(utc_datetime)
2018-03-02 11:00:00+00:00
{% endhighlight %}

Finally, using `time()` function to get `time` object.
{% highlight python %}
notification_time = utc_datetime.time()

>>> print(notification_time)
11:00:00
{% endhighlight %}

I didn't notice that free Heroku dynos sleep after thrity minutes of inactivity[^2], so most daily notifications will never send. You can upgrade to Hobby or try [Kaffeine](https://kaffeine.herokuapp.com/){:target="_blank" rel="noopener noreferrer"}.

### References
[^1]: [strftime() and strptime() Behavior](https://docs.python.org/3.6/library/datetime.html#strftime-and-strptime-behavior){:target="_blank" rel="noopener noreferrer"}

[^2]: [Free Dyno Hours](https://devcenter.heroku.com/articles/free-dyno-hours){:target="_blank" rel="noopener noreferrer"}