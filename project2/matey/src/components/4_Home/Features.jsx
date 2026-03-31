import React from 'react';
import './Features.css';

const features = [
  {
    icon: '🤖',
    color: '#6C9EFF',
    bg: 'linear-gradient(135deg, #EEF4FF, #E0ECFF)',
    title: '능동형 상담 방식',
    subtitle: 'Proactive AI',
    desc: '기다리지 않아요. 당신이 힘들어 보일 때 AI가 먼저 말을 걸어요. 상담 의지 없이도 무의식적 패턴을 잡아내 케어합니다.',
    points: ['먼저 말 걸기', '패턴 감지', '24/7 대기 중']
  },
  {
    icon: '🖥️',
    color: '#FF8FAB',
    bg: 'linear-gradient(135deg, #FFF0F5, #FFE4ED)',
    title: '화면 인식 공감',
    subtitle: 'Screen Context AI',
    desc: '지금 보고 있는 화면까지 이해해요. 에러 화면을 띄워두면 "같이 볼까요?", 채용 사이트를 보면 "취업 스트레스 많지?" 라고 물어봐요.',
    points: ['화면 맥락 파악', 'GPT-4o Vision', '상황 맞춤 위로'],
    badge: '특허 출원 중'
  },
  {
    icon: '📊',
    color: '#9B7FFF',
    bg: 'linear-gradient(135deg, #F3EEFF, #EAE0FF)',
    title: '감정 패턴 분석',
    subtitle: 'Emotion Analytics',
    desc: '대화 기록을 통해 나의 감정 흐름과 스트레스 패턴을 분석하고, 개인화된 심리 리포트를 제공합니다.',
    points: ['주간 감정 리포트', 'AI 분석', '맞춤 솔루션']
  },
  {
    icon: '🎨',
    color: '#FFB347',
    bg: 'linear-gradient(135deg, #FFF8EC, #FFEFD6)',
    title: '캐릭터 커스터마이징',
    subtitle: 'Your AI Friend',
    desc: '토끼 하루와 고양이 루미 중 선택하고, 색상·성격·말투까지 나만의 AI 친구로 꾸밀 수 있어요.',
    points: ['2종 캐릭터', '성격 설정', '색상·액세서리']
  },
  {
    icon: '🔗',
    color: '#4BC8A0',
    bg: 'linear-gradient(135deg, #EEFBF6, #D8F5EB)',
    title: '웹-앱 실시간 연동',
    subtitle: 'Web + Desktop Sync',
    desc: '웹과 데스크톱 앱이 WebSocket으로 실시간 동기화돼요. 어디서든 이어서 대화하고, 상담 기록을 확인할 수 있습니다.',
    points: ['실시간 동기화', 'WebSocket', '멀티 디바이스']
  },
  {
    icon: '🔒',
    color: '#7EC8FF',
    bg: 'linear-gradient(135deg, #EBF6FF, #DAEEFF)',
    title: '완벽한 프라이버시',
    subtitle: 'Privacy First',
    desc: '모니터링 ON/OFF 토글로 언제든 제어 가능. 모든 대화는 암호화되며, 제3자에게 절대 공유되지 않습니다.',
    points: ['모니터링 제어', 'E2E 암호화', '데이터 삭제 권한']
  }
];

function Features() {
  return (
    <section className="features" id="features">
      {/* 섹션 헤더 */}
      <div className="section-header container">
        <div className="section-badge">✨ 마음친구만의 특별함</div>
        <h2 className="section-title">
          왜 마음친구가 <span className="gradient-text">특별한가요?</span>
        </h2>
        <p className="section-subtitle">
          기존 AI 챗봇과 다르게, 마음친구는 당신의 일상에 자연스럽게 녹아들어 먼저 다가갑니다
        </p>
      </div>

      {/* 피처 그리드 */}
      <div className="features-grid container">
        {features.map((f, i) => (
          <div
            key={i}
            className={`feature-card ${i === 1 ? 'featured' : ''}`}
            style={{ '--card-color': f.color, '--card-delay': `${i * 0.1}s` }}
          >
            {f.badge && <span className="card-badge">{f.badge}</span>}
            <div className="feature-icon-wrap" style={{ background: f.bg }}>
              <span className="feature-icon">{f.icon}</span>
            </div>
            <div className="feature-tag" style={{ color: f.color }}>
              {f.subtitle}
            </div>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
            <div className="feature-points">
              {f.points.map((p, j) => (
                <span key={j} className="point-tag" style={{ borderColor: `${f.color}30`, color: f.color, background: `${f.color}10` }}>
                  ✓ {p}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
