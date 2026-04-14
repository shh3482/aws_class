import google.generativeai as genai
from fastapi import FastAPI, Query
import uvicorn
import os

app = FastAPI()

GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
if not GOOGLE_API_KEY:
    raise ValueError("GOOGLE_API_KEY가 설정되지 않았습니다")
genai.configure(api_key=GOOGLE_API_KEY)
# 1분당 최대 15회, 일 500회
model = genai.GenerativeModel('gemini-2.5-flash-lite')

@app.get("/ask")
async def ask_gemini(prompt: str):
  
  response = model.generate_content(prompt)
    
  return {
    "question": prompt,
    "answer": response.text
    }

@app.get("/translate")
async def translate(
  text:str = Query(..., description='번역할 문장'),
  style:str = Query("formal", description='말투: formal(격식),casual(반말),business(비즈니스)')
  ):
  
  # 좋은 번역을 위하여 번역 문장을 좋은 프롬프트로 변환
  # """ : 문자열이 여러줄이 가능하게 해줌
  # " [im a boy] 를 한글로 번역해줘, [] 안에 기입한 문장의 앞이나 뒤에 문장 추가하지 말고,
  # [] 안에 있는거 그대로 한글로 번역해주면 돼"
  prompt = f"""
  너는 세계 최고의 다국어 번역가야. 아래의 규칙을 지켜서 번역해줘.
  1. 대상 문장 : {text}
  2. 요청 말투 : {style} 말투로 번역해줘.
  3. 도착어 : 한국어면 영어로, 영어이면 한국어로 자동 감지해서 번역해줘.
  4. 결과물 : 번역된 문장 외에 다른 설명은 생략해
  """
  
  response = await model.generate_content_async(prompt)
  
  return {
    "answer": response.text
    }

if __name__ == '__main__':
	uvicorn.run('main:app', port=8000, reload=True)
 
 