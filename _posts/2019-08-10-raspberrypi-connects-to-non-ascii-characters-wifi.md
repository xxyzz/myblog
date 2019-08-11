---
layout: post
title: "Raspberry Pi connects to non-ASCII characters Wi-Fi"
date: 2019-08-11
description: "Raspberry Pi connects to non-ASCII characters Wi-Fi"
---

You can't connect to a Wi-Fi directly if it's SSID has any non-ASCII characters on Raspbian in GUI mode. For example, if your Wi-Fi's SSID is `开源大法好1234`, run the following command you will see this:

```
$ sudo iw wlan0 scan | grep 1234
     SSID: \xe5\xbc\x80\xe6\xba\x90\xe5\xa4\xa7\xe6\xb3\x95\xe5\xa5\xbd1234
```

Next, we can write this string to a file with Python3:

```python
ssid = b'\xe5\xbc\x80\xe6\xba\x90\xe5\xa4\xa7\xe6\xb3\x95\xe5\xa5\xbd1234'
with open('ssid', 'wb') as file:
    file.write(ssid)
```

Then using `xxd` to convert it to hex dump:

```
$ xxd -p ssid
e5bc80e6ba90e5a4a7e6b395e5a5bd31323334 
```

Finally, copy this hex string to `/etc/wpa_supplicant/wpa_supplicant.conf` without the quotation mark.

## Or

You can simply type the SSID to `/boot/wpa_supplicant.conf` inside the quotation marks, it works.

## Read more

- [wifi - How do I configure wpa_supplicant with default iPhone SSID? - Raspberry Pi Stack Exchange](https://raspberrypi.stackexchange.com/questions/41069/how-do-i-configure-wpa-supplicant-with-default-iphone-ssid)

- [Setting WiFi up via the command line - Raspberry Pi Documentation](https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md)

- man xxd

- man hexdump

- [Nigel Smith's Blog: hexdump and xxd output compared](http://nwsmith.blogspot.com/2012/07/hexdump-and-xxd-output-compared.html)

- [Setting up a Raspberry Pi headless - Raspberry Pi Documentation](https://www.raspberrypi.org/documentation/configuration/wireless/headless.md)
