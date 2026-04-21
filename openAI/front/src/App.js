import React, { useState } from 'react';
import ImageText from './ImageText';
function App() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    setLoading(true);
    try {
        const response = await fetch(
            `http://localhost:8080/api/ask?prompt=${encodeURIComponent(prompt)}`
        );
        const data = await response.json();
        
        console.log('data:', data);
        
        setQuestion(prompt);
        
        if (typeof data.answer === 'string') {
            setResult(data.answer);
        } else {
            setResult(JSON.stringify(data.answer));
        }
    } catch (error) {
        console.error('Error:', error);
        setResult('에러 발생');
    }
    setLoading(false);
  };

  const handleTranslate = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:8080/api/translate?text=${encodeURIComponent(prompt)}&style=formal`
      );
      const data = await response.json();
      setQuestion(prompt);
      setResult(data.translated);
    } catch (error) {
      console.error('Error:', error);
      setResult('에러 발생');
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial' }}>
      
      {/* --- 기존 기능 (텍스트 질문 및 번역) --- */}
      <h1>AI Service</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="질문을 입력하세요..."
        rows="5"
        cols="50"
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      />
      <br /><br />
      <button 
        onClick={handleAsk} 
        disabled={loading}
        style={{ padding: '10px 20px', marginRight: '10px', cursor: 'pointer' }}
      >
        {loading ? '처리중...' : 'AI 질문'}
      </button>
      <button 
        onClick={handleTranslate} 
        disabled={loading}
        style={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        {loading ? '처리중...' : '번역'}
      </button>
      
      {/* 결과 표시 부분 */}
      {result && (
        <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
          <p><strong>질문:</strong> {question}</p>
          <p><strong>답변:</strong> {result}</p>
        </div>
      )}

      {/* 구분선 추가 */}
      <hr style={{ margin: '40px 0', border: '1px solid #ddd' }} />

      {/* --- 새로 추가한 기능 (이미지 + 텍스트) --- */}
      <ImageText />

    </div>
  );
}

export default App;