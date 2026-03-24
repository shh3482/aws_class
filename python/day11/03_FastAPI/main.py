
# 설치할 라이브러리
# fastapi, uvicorn, jpyel

from fastapi import FastAPI, Form
import 감정학습 as tm
app = FastAPI()

# url : '/', method : 'get' 으로 요청이 오면 index()함수를 실행
@app.get("/")
async def index():
  return {'message' : 'Hello FastAPI'}

@app.post("/text")
async def text(msg:str = Form(...)):
  res = tm.predict(msg)
  return {'msg' : '긍정' if res else '부정'}

if __name__ == '__main__':
    import uvicorn  # <--- 들여쓰기!
    uvicorn.run('main:app', port=8000, reload=True)  # <--- 들여쓰기!