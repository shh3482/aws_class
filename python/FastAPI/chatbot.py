import numpy as np
import pandas as pd
import os

def load_emb_data(model, file_path, csv_file_path='csv/ChatbotData.csv'):
  if os.path.exists(file_path):
    emb_data = np.load(file_path)
  else:
    print(f'{file_path} 파일이 없습니다.')
    print('새로 임베딩을 시작합니다.')
    print('질문 데이터 변환 중...')
    df = pd.read_csv(csv_file_path)
    emb_data = model.encode(df['Q'])
    print('변환 완료!')
  return emb_data