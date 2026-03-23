import jpype
import os
import pandas as pd
import joblib as jl
from konlpy.tag import Okt
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression

# 1. 자바 환경 설정 (경로 확인 필수!)
os.environ['JAVA_HOME'] = r'C:\Program Files\Java\jdk-21.0.10'

# 2. Okt 객체 생성 (이때 자바가 자동으로 시작됩니다)
okt = Okt()

def text_processing(text):
    if not isinstance(text, str): return ""
    # 명사, 동사, 형용사 추출
    result = okt.pos(text, stem=True)
    words = [word for word, pos in result if pos in ['Noun', 'Verb', 'Adjective']]
    return " ".join(words)

def train_and_save_model(dataset_x, dataset_y):
    print("🚀 데이터 전처리 및 학습 시작...")
    dataset_pp_x = dataset_x.apply(text_processing)
    
    vectorizer = TfidfVectorizer()
    X = vectorizer.fit_transform(dataset_pp_x)
    y = dataset_y

    model = LogisticRegression()
    model.fit(X, y)
    
    # 모델 저장
    jl.dump(model, 'sentiment_model.pkl')
    jl.dump(vectorizer, 'vectorizer.pkl')
    print("✅ 학습 완료! 파일이 생성되었습니다.")

if __name__ == '__main__':
    # 테스트 출력
    print(f"테스트 분석: {text_processing('파이썬 공부는 정말 재밌어요!')}")
    
    # 실제 학습을 진행하려면 아래 파일명이 실제와 같은지 확인하세요.
    # df = pd.read_csv('sample.csv')
    # train_and_save_model(df['sentence'], df['label'])