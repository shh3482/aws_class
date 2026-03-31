import React, { useState } from 'react';

function ChatHistory() {
  const [chatHistory] = useState([
    { id: 1, character: '🐰 하루', date: '오늘 3:45 PM', preview: '지금 많이 힘들어 보여요' },
    { id: 2, character: '🐱 루미', date: '어제 2:30 PM', preview: '에러가 계속 나네, 같이 볼까요?' },
    { id: 3, character: '🐰 하루', date: '3일 전', preview: '취업 준비 많이 힘들지?' },
    { id: 4, character: '🐱 루미', date: '1주일 전', preview: '벌써 새벽 2시네요...' },
    { id: 5, character: '🐰 하루', date: '2주일 전', preview: '아늑하고 편한 마음이 보여요' },
  ]);

  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="dashboard-section">
      <h1>대화 내역</h1>
      <p className="section-subtitle">메이티와 나눈 모든 대화를 확인하세요</p>

      <div className="chat-history-grid">
        <div className="chat-list">
          {chatHistory.map(chat => (
            <div
              key={chat.id}
              className={`chat-item ${selectedChat?.id === chat.id ? 'selected' : ''}`}
              onClick={() => setSelectedChat(chat)}
            >
              <div className="chat-character">{chat.character}</div>
              <div className="chat-details">
                <div className="chat-date">{chat.date}</div>
                <div className="chat-preview">{chat.preview}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="chat-viewer">
          {selectedChat ? (
            <div className="chat-detail">
              <div className="chat-header">
                <span>{selectedChat.character}</span>
                <span className="chat-time">{selectedChat.date}</span>
              </div>
              <div className="chat-messages">
                <div className="message ai">지금 많이 힘들어 보여요 🥺</div>
                <div className="message user">네, 요즘 좀 힘들어요</div>
                <div className="message ai">어떤 부분이 제일 힘들었어요?</div>
                <div className="message user">취업 준비하면서 스트레스를 많이 받고 있어요</div>
                <div className="message ai">그렇구나, 많이 쌓인 게 있겠다 😔</div>
              </div>
            </div>
          ) : (
            <div className="chat-empty">
              <p>대화를 선택하면 내용을 확인할 수 있습니다</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatHistory;
