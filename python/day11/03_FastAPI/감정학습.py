import pandas as pd
from konlpy.tag import Okt
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
import joblib as jl
import os

def text_preprocessing(text):
    result = okt.pos(str(text), stem=True)
    words = [word for word, pos in result if pos in ['Noun', 'Verb', 'Adjective']]
    return " ".join(words)

def train_and_save_model(dataset_x, dataset_y):
    print("3. 전처리 시작")
    dataset_pp_x = dataset_x.apply(text_preprocessing)
    print("4. 전처리 완료")

    vectorizer = TfidfVectorizer()
    X = vectorizer.fit_transform(dataset_pp_x)
    y = dataset_y
    print("5. 벡터화 완료")

    model = LogisticRegression(max_iter=1000)
    model.fit(X, y)
    print("6. 학습 완료")

    model_data = {
        'vectorizer': vectorizer,
        'model': model
    }
    jl.dump(model_data, 'model.pkl')
    print("7. model.pkl 저장 완료")

def predict(text):
    model_data = jl.load('model.pkl')
    model, vectorizer = model_data['model'], model_data['vectorizer']

    cleaned_text = text_preprocessing(text)
    vector_text = vectorizer.transform([cleaned_text])
    pred = model.predict(vector_text)
    return pred[0]

if __name__ == '__main__':
    print("2. 메인 블록 진입")

    if os.path.exists('sample.csv'):
        print("sample.csv 찾음")
        df = pd.read_csv('sample.csv')
        print(f"행 개수: {len(df)}")

        train_and_save_model(df['sentence'], df['label'])

        print("테스트 결과:", predict('오늘 너무 행복해요'))
    else:
        print("sample.csv 파일이 없습니다.")
