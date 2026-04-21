import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function ImageText() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(""); 
  const [loading, setLoading] = useState(false);
  
  // 이미지 미리보기 주소를 저장할 공간
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      // 파일을 선택하면 브라우저가 읽을 수 있는 임시 주소를 만들어 저장
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("이미지 파일을 선택해주세요!");
      return;
    }

    setLoading(true);
    setAnswer("");

    const formData = new FormData();
    formData.append("file", selectedFile);       
    formData.append("question", question);       

    try {
      const response = await fetch("http://localhost:8080/api/upload", {
        method: "POST",
        body: formData, 
      });

      if (response.ok) {
        const data = await response.json();
        setAnswer(data.answer); 
      } else {
        alert("서버 전송 실패...");
      }
    } catch (error) {
      console.error("전송 중 에러 발생:", error);
      alert("서버와 연결할 수 없습니다.");
    }
    
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px', borderRadius: '8px' }}>
      <h2>이미지와 질문 분석하기 (Gemini Vision)</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="imageFile" style={{ display: 'block', marginBottom: '5px' }}>이미지 선택: </label>
          <input type="file" id="imageFile" accept="image/*" onChange={handleFileChange} />
        </div>

        {/* 미리보기 이미지를 정해진 규격으로 띄워주는 부분 */}
        {previewUrl && (
          <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '8px', display: 'inline-block' }}>
            <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>첨부된 이미지 미리보기</p>
            <img 
              src={previewUrl} 
              alt="미리보기" 
              style={{ 
                maxWidth: '100%',     // 부모 요소 너비를 넘지 않도록
                maxHeight: '300px',   // 최대 높이를 300px로 고정 (원하는 규격으로 수정 가능)
                objectFit: 'contain', // 비율을 유지하면서 박스 안에 들어가게 함
                borderRadius: '4px',
                border: '1px solid #ddd'
              }} 
            />
          </div>
        )}

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="questionText" style={{ display: 'block', marginBottom: '5px' }}>질문 입력: </label>
          <input 
            type="text" 
            id="questionText" 
            value={question} 
            onChange={handleQuestionChange} 
            placeholder="이 이미지는 어떤 내용인가요?"
            style={{ width: '100%', maxWidth: '400px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <button type="submit" disabled={loading} style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: loading ? '#ccc' : '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}>
          {loading ? 'AI가 분석 중...' : 'AI에게 물어보기'}
        </button>
      </form>

      {answer && (
        <div style={{ marginTop: '25px', padding: '20px', backgroundColor: '#e3f2fd', borderRadius: '8px', border: '1px solid #90caf9' }}>
          <h3 style={{ marginTop: '0', color: '#1565c0' }}>AI의 답변:</h3>
          
          {/* 별표(**)를 굵은 글씨로 바꿔서 예쁘게 렌더링 해주는 부분 */}
          <div style={{ fontSize: '16px', lineHeight: '1.6', color: '#333' }}>
            <ReactMarkdown>{answer}</ReactMarkdown>
          </div>
          
        </div>
      )}
    </div>
  );
}

export default ImageText;