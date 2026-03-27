from fastapi import FastAPI, UploadFile, Form
import uvicorn
import numpy as np
import mnist_learning as ml
import cv2
import 감정학습 as tm

app = FastAPI()

@app.get('/')
async def index():
  return {"msg" : "Hello FastAPI"}

@app.post('/image')
async def image(file:UploadFile):
  # file을 바이너리 데이터로 읽어옴
  contents = await file.read()
  # 바이너리를 numpy 배열로 변환
  np_arr = np.frombuffer(contents, np.uint8)
  # 배열을 이미지로 디코딩
  img = cv2.imdecode(np_arr, cv2.IMREAD_GRAYSCALE)
  # 예측
  res = ml.predict_from_upload_file(img,28,28)
  print(f'URL : /image')
  return {"msg" : res}

if __name__ == '__main__':
  # reload=True 사용시 주의 사항
  # 자동으로 변경 사항을 적용하면 시간이 오래 걸리는 경우 안 쓰는 것이 좋음
  uvicorn.run('main:app', port=8000, reload=True)

@app.post('/text')
async def text(msg:str=Form(...)):
  res = tm.predict(msg)
  return {"msg" : '긍정' if res else '부정'}