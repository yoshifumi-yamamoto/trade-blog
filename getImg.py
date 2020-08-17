import time
import json
from bs4 import BeautifulSoup # pip install bs4
import datetime
import tinify
tinify.key = "ZpFdqyBgrBm7Pv1d0TL8v4Q1QZ2qbb91"
d_today = str(datetime.date.today())

with open("data.html") as f:
    html = f.read()
    soup = BeautifulSoup(html, "html.parser") # HTMLを解析する
    images = soup.findAll('img') # 全ての画像を取得する
    counter = 0
    d = {}

    for image in images:
        if counter != 0 and counter <= 12:
            imgFileName = image['src'].replace("-preview","") # replaceで大きい方の画像に変換する
            dst_path = './static/img/' + d_today + '-' + str(imgFileName).split('/')[-1] # 出力先のpathとファイル名を設定する
            source = tinify.from_url(imgFileName) # 画像をtinypngにアップロード
            source.to_file(dst_path) # 圧縮された画像を出力
        counter += 1

