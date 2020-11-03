# coding: UTF-8
#pip3 install PyMySQL
#pip3 install requests
import datetime

today = datetime.datetime.today().date()
formatToday = datetime.datetime.now().strftime('%m/%d')

text = '---\rtemplateKey: blog-post\rtitle: {formatToday} 相場分析\rdate: {today}T08:00:00.154Z\rdescription: |-\r  当サイトへのアクセスありがとうございます。\r  この記事では{formatToday}日の相場分析をご紹介いたします。\rfeaturedpost: true\rfeaturedimage: /img/{today}-eurusd-d1-tradexfin-limited.png\rtags:\r  - 相場分析\r---\r## EUR/USD\r\r### 日足\r\r![EUR/USD_D1](/img/{today}-eurusd-d1-tradexfin-limited.png)\r\r\r<br/>\r<br/>\r\r### 4時間足\r\r![EUR/USD_H4](/img/{today}-eurusd-h4-tradexfin-limited.png)\r\r\r<br/>\r<br/>\r\r### 1時間足\r\r![EUR/USD_H1](/img/{today}-eurusd-h1-tradexfin-limited.png)\r\r\r<br/>\r<br/>\r\r### 考察＆戦略\r\r\r<br/>\r<br/>\r\r## EUR/JPY\r\r### 日足\r\r![EUR/JPY_D1](/img/{today}-eurjpy-d1-tradexfin-limited.png)\r\r\r<br/>\r<br/>\r\r### 4時間足\r\r![EUR/JPY_H４](/img/{today}-eurjpy-h4-tradexfin-limited.png)\r\r\r<br/>\r<br/>\r\r### 1時間足\r\r![EUR/JPY_H1](/img/{today}-eurjpy-h1-tradexfin-limited.png)\r\r\r<br/>\r<br/>\r\r### 考察＆戦略\r\r\r<br/>\r<br/>\r\r## AUD/USD\r\r### 日足\r\r![AUD/USD_D1](/img/{today}-audusd-d1-tradexfin-limited.png)\r\r\r<br/>\r<br/>\r\r### 4時間足\r\r![AUD/USD_H4](/img/{today}-audusd-h4-tradexfin-limited.png)\r\r\r<br/>\r<br/>\r\r### 1時間足\r\r![AUD/USD_H1](/img/{today}-audusd-h1-tradexfin-limited.png)\r\r\r<br/>\r<br/>\r\r### 考察＆戦略\r\r\r<br/>\r<br/>\r\r## USD/CAD\r\r### 日足\r\r![USD/CAD_D1](/img/{today}-usdcad-d1-tradexfin-limited.png)\r\r\r<br/>\r<br/>\r\r### 4時間足\r\r![USD/CAD_H４](/img/{today}-usdcad-h4-tradexfin-limited.png)\r\r\r<br/>\r<br/>\r\r### 1時間足\r\r![USD/CAD_H1](/img/{today}-usdcad-h1-tradexfin-limited.png)\r\r\r<br/>\r<br/>\r\r### 考察＆戦略\r\r\r'.format(formatToday=formatToday, today=today)
with open("./src/pages/blog/{today}-相場分析.md".format(today=today), mode="w") as f:
         f.write(text)
