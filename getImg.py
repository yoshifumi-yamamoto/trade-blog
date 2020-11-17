import time
import json
from bs4 import BeautifulSoup # pip install bs4
import datetime
import tinify
tinify.key = "JJN9ZVJysJm6k6L158d6NSC2pLxq1hPB"
d_today = str(datetime.date.today())

try:
  with open("data.html") as f:
    html = f.read()
    soup = BeautifulSoup(html, "html.parser") # HTMLを解析する
    images = soup.findAll('img') # 全ての画像を取得する
    counter = 0
    d = {}

    for image in images:
      if counter != 0 and counter <= 12:
        imgFileName = image['src'].replace("-preview","") # replaceで大きい方の画像に変換する
        if str(imgFileName) in 'limited-2':
            imgFileName.replace('limited-2','limited')
        dst_path = './static/img/' + d_today + '-' + str(imgFileName).split('/')[-1] # 出力先のpathとファイル名を設定する
        source = tinify.from_url(imgFileName) # 画像をtinypngにアップロード
        source.to_file(dst_path) # 圧縮された画像を出力
      counter += 1

    print("画像の取得が完了しました。")

except:
    print('画像の取得に失敗しました。')