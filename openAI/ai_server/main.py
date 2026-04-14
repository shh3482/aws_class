from fastapi import FastAPI, Query, HTTPException
from pydantic import BaseModel
from google import genai
from google.genai import types
import uvicorn
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
if not GOOGLE_API_KEY:
    raise ValueError("GOOGLE_API_KEY가 설정되지 않았습니다")

GOOGLE_MODEL_NAME = "gemini-2.5-flash"
client = genai.Client(api_key=GOOGLE_API_KEY)

class Summary(BaseModel):
    text: str
    target_lan: str = "Korean"
    max_sentence: int = 3

@app.get("/ask")
async def ask_gemini(prompt: str):
    try:
        refined_prompt = f"""
        사용자 질문: {prompt}
        
        지시사항:
        - 답변만 제공하세요
        - 설명이나 번역은 하지 마세요
        - 간결하게 답변하세요
        """
        
        response = client.models.generate_content(
            model=GOOGLE_MODEL_NAME,
            contents=types.Part.from_text(text=refined_prompt)
        )
        
        return {
            "question": prompt,
            "answer": response.text
        }
    except Exception as e:
        print(f"에러: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/translate")
async def translate(
    text: str = Query(..., description='번역할 문장'),
    style: str = Query("formal", description='말투: formal(격식),casual(반말),business(비즈니스)')
):
    try:
        prompt = f"""
        너는 세계 최고의 다국어 번역가야. 아래의 규칙을 지켜서 번역해줘.
        1. 대상 문장 : {text}
        2. 요청 말투 : {style} 말투로 번역해줘.
        3. 도착어 : 한국어면 영어로, 영어이면 한국어로 자동 감지해서 번역해줘.
        4. 결과물 : 번역된 문장 외에 다른 설명은 생략해
        """
        
        response = client.models.generate_content(
            model=GOOGLE_MODEL_NAME,
            contents=types.Part.from_text(text=prompt)
        )
        
        return {
            "original": text,
            "translated": response.text
        }
    except Exception as e:
        print(f"에러: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/ad-copy")
def ad_copy(
    product: str = Query(..., description='상품명'),
    feature: str = Query(..., description='제품 특징'),
    target: str = Query('전연령', description='타겟'),
    temp: float = Query(0.8, ge=0.0, le=1.0, description='창의성 온도(0~1)')
):
    try:
        prompt = f"""
        당신은 창의적인 마케팅 전문가입니다. 아래의 규칙을 지켜서 작업해주세요.
        
        1. 상품명 : {product}
        2. 제품 특징 : {feature}
        3. 타겟 : {target}
        
        위 정보를 바탕으로 광고 카피를 작성해주세요.
        """
        
        response = client.models.generate_content(
            model=GOOGLE_MODEL_NAME,
            contents=types.Part.from_text(text=prompt),
            config=types.GenerateContentConfig(
                temperature=temp,
                top_p=0.95,
                top_k=20,
            ),
        )
        return {'answer': response.text}
    except Exception as e:
        print(f"에러: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/summarize")  # GET을 POST로 변경
async def summarize(summary: Summary):
    try:
        prompt = f"""
        당신은 요약 전문가입니다. {summary.text} 을 요약해서 {summary.target_lan}에 해당하는 언어로 {summary.max_sentence} 문장으로 요약해주세요.
        """
        
        response = client.models.generate_content(
            model=GOOGLE_MODEL_NAME,
            contents=types.Part.from_text(text=prompt),
            config=types.GenerateContentConfig(temperature=0.2)
        )
        return {'answer': response.text}
    except Exception as e:
        print(f"에러: {e}")
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == '__main__':
    uvicorn.run('main:app', port=8000, reload=True)
