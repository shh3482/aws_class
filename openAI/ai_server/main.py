from fastapi import FastAPI, Query, HTTPException, UploadFile, File, Form
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
        refined_prompt = f"""사용자 질문: {prompt}\n지시사항: 답변만 제공, 설명 생략, 간결하게"""
        response = client.models.generate_content(
            model=GOOGLE_MODEL_NAME,
            contents=types.Part.from_text(text=refined_prompt)
        )
        return {"question": prompt, "answer": response.text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/translate")
async def translate(
    text: str = Query(..., description='번역할 문장'),
    style: str = Query("formal", description='말투: formal, casual, business')
):
    try:
        prompt = f"대상 문장: {text}\n요청 말투: {style}\n도착어: 한영 자동 감지\n결과물: 번역된 문장만"
        response = client.models.generate_content(
            model=GOOGLE_MODEL_NAME,
            contents=types.Part.from_text(text=prompt)
        )
        return {"original": text, "translated": response.text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/ad-copy")
def ad_copy(
    product: str = Query(..., description='상품명'),
    feature: str = Query(..., description='제품 특징'),
    target: str = Query('전연령', description='타겟'),
    temp: float = Query(0.8, ge=0.0, le=1.0)
):
    try:
        prompt = f"상품명: {product}\n특징: {feature}\n타겟: {target}\n위 정보로 창의적인 광고 카피 작성"
        response = client.models.generate_content(
            model=GOOGLE_MODEL_NAME,
            contents=types.Part.from_text(text=prompt),
            config=types.GenerateContentConfig(temperature=temp, top_p=0.95, top_k=20)
        )
        return {'answer': response.text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/summarize")
async def summarize(summary: Summary):
    try:
        prompt = f"요약 전문가로서 {summary.text} 을 {summary.target_lan}로 {summary.max_sentence} 문장 요약."
        response = client.models.generate_content(
            model=GOOGLE_MODEL_NAME,
            contents=types.Part.from_text(text=prompt),
            config=types.GenerateContentConfig(temperature=0.2)
        )
        return {'answer': response.text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# --- 새로 추가된 이미지+텍스트 처리 엔드포인트 ---
@app.post("/vision")
async def vision(
    file: UploadFile = File(...),    
    question: str = Form(...)        
):
    try:
        image_bytes = await file.read()
        mime_type = file.content_type or "image/jpeg"
        
        image_part = types.Part.from_bytes(data=image_bytes, mime_type=mime_type)
        text_part = types.Part.from_text(text=question)
        
        print(f"✓ 받은 질문: {question}")
        print(f"✓ 받은 파일명: {file.filename}")

        response = client.models.generate_content(
            model=GOOGLE_MODEL_NAME,
            contents=[image_part, text_part]
        )
        return {'answer': response.text}
    except Exception as e:
        print(f"에러: {e}")
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == '__main__':
    uvicorn.run('main:app', port=8000, reload=True)