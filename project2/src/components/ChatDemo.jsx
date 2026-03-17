import React, { useState, useRef, useEffect } from 'react';
import './ChatDemo.css';

const SAMPLE_QUESTIONS = [
  '요즘 너무 지쳐있어요 😔',
  '취업 준비가 막막해요',
  '친구와 사이가 멀어진 것 같아요',
  '자신감이 없어서 힘들어요',
];

const BOT_RESPONSES = {
  default: '말씀해주셔서 감사해요. 그 마음이 얼마나 힘드실지 충분히 이해해요. 조금 더 자세히 이야기해주실 수 있을까요? 함께 해결책을 찾아볼게요 💜',
};

const ChatDemo = ({ onOpen }) => {
  const [messages, setMessages] = useState([
    { from: 'ai', text: '안녕하세요! 저는 마음AI예요 🤖\n어떤 고민이 있으신지 편하게 말씀해 주세요 😊' },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = (text) => {
    const msg = text || input.trim();
    if (!msg) return;
    setInput('');
    setMessages(prev => [...prev, { from: 'user', text: msg }]);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        { from: 'ai', text: BOT_RESPONSES.default },
      ]);
    }, 1800);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <section className="chat-demo" id="chat-demo">
      <div className="container">
        <div className="chat-demo__header">
          <span className="section-tag">💬 직접 체험</span>
          <h2 className="section-title">
            지금 <span className="gradient-text">체험</span>해보세요
          </h2>
          <p className="section-desc">
            실제 AI와 대화하며 서비스를 미리 경험해보세요.
          </p>
        </div>

        <div className="chat-window">
          {/* 헤더 */}
          <div className="chat-window__header">
            <div className="cwh-dot red"/><div className="cwh-dot yellow"/><div className="cwh-dot green"/>
            <div className="cwh-title">
              <span>🤖</span> 마음AI 상담
            </div>
            <div className="cwh-status">
              <span className="online-dot"/>온라인
            </div>
          </div>

          {/* 빠른 선택 */}
          <div className="chat-window__quick">
            {SAMPLE_QUESTIONS.map((q, i) => (
              <button key={i} className="quick-btn" onClick={() => sendMessage(q)}>
                {q}
              </button>
            ))}
          </div>

          {/* 메시지 영역 */}
          <div className="chat-window__messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg chat-msg--${msg.from}`}>
                {msg.from === 'ai' && (
                  <div className="chat-msg__avatar">🤖</div>
                )}
                <div className="chat-msg__bubble">
                  {msg.text.split('\n').map((line, j) => (
                    <React.Fragment key={j}>
                      {line}
                      {j < msg.text.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="chat-msg chat-msg--ai">
                <div className="chat-msg__avatar">🤖</div>
                <div className="chat-msg__bubble typing-indicator">
                  <span/><span/><span/>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* 입력창 */}
          <div className="chat-window__input">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="고민을 입력하세요... (Enter로 전송)"
              rows={1}
            />
            <button
              className="send-btn"
              onClick={() => sendMessage()}
              disabled={!input.trim() || isTyping}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"
                  stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatDemo;
