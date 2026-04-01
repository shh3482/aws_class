import React, { useState } from 'react';
import './Dashboard.css';

const personas = [
  {
    id: 'gentle',
    name: '하루',
    desc: '차분하고 다정한 공감형',
    image: '/images/rabbit.png',
  },
  {
    id: 'bright',
    name: '루미',
    desc: '밝고 귀여운 에너지형',
    image: '/images/cat.png',
  },
];

const themes = ['Soft Purple', 'Ocean Blue', 'Cherry Pink', 'Mint Glow'];

function PersonalSettings() {
  const [selectedPet, setSelectedPet] = useState('gentle');
  const [theme, setTheme] = useState('Soft Purple');
  const [sliders, setSliders] = useState({
    friendliness: 78,
    humor: 54,
    formality: 30,
    empathy: 88,
  });

  const selected = personas.find((item) => item.id === selectedPet) || personas[0];

  const updateSlider = (key, value) => {
    setSliders((prev) => ({
      ...prev,
      [key]: Number(value),
    }));
  };

  return (
    <div className="petdash-page">
      <section className="petdash-settings-grid">
        <article className="petdash-card glass-card">
          <div className="petdash-card__head">
            <div>
              <span className="petdash-mini-badge">Pet Persona</span>
              <h3>메이티 외형 / 성격 설정</h3>
            </div>
          </div>

          <div className="petdash-persona-preview">
            <div className="petdash-persona-preview__stage">
              <img src={selected.image} alt={selected.name} />
            </div>

            <div className="petdash-persona-preview__copy">
              <strong>{selected.name}</strong>
              <p>{selected.desc}</p>
            </div>
          </div>

          <div className="petdash-persona-grid">
            {personas.map((persona) => (
              <button
                key={persona.id}
                type="button"
                className={`petdash-persona-card ${
                  selectedPet === persona.id ? 'is-active' : ''
                }`}
                onClick={() => setSelectedPet(persona.id)}
              >
                <div className="thumb">
                  <img src={persona.image} alt={persona.name} />
                </div>
                <div className="copy">
                  <strong>{persona.name}</strong>
                  <span>{persona.desc}</span>
                </div>
              </button>
            ))}
          </div>
        </article>

        <article className="petdash-card glass-card">
          <div className="petdash-card__head">
            <div>
              <span className="petdash-mini-badge">Personality Sliders</span>
              <h3>반응 스타일 조절</h3>
            </div>
          </div>

          <div className="petdash-slider-list">
            <div className="petdash-slider-item">
              <div className="top">
                <strong>친절함</strong>
                <span>{sliders.friendliness}</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={sliders.friendliness}
                onChange={(e) => updateSlider('friendliness', e.target.value)}
              />
            </div>

            <div className="petdash-slider-item">
              <div className="top">
                <strong>유머감</strong>
                <span>{sliders.humor}</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={sliders.humor}
                onChange={(e) => updateSlider('humor', e.target.value)}
              />
            </div>

            <div className="petdash-slider-item">
              <div className="top">
                <strong>격식도</strong>
                <span>{sliders.formality}</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={sliders.formality}
                onChange={(e) => updateSlider('formality', e.target.value)}
              />
            </div>

            <div className="petdash-slider-item">
              <div className="top">
                <strong>공감 강도</strong>
                <span>{sliders.empathy}</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={sliders.empathy}
                onChange={(e) => updateSlider('empathy', e.target.value)}
              />
            </div>
          </div>
        </article>

        <article className="petdash-card glass-card petdash-card--full">
          <div className="petdash-card__head">
            <div>
              <span className="petdash-mini-badge">Theme</span>
              <h3>대시보드 무드 테마</h3>
            </div>
          </div>

          <div className="petdash-theme-row">
            {themes.map((item) => (
              <button
                key={item}
                type="button"
                className={`petdash-theme-card ${theme === item ? 'is-active' : ''}`}
                onClick={() => setTheme(item)}
              >
                <div className={`swatch swatch-${item.toLowerCase().replace(/\s+/g, '-')}`} />
                <strong>{item}</strong>
              </button>
            ))}
          </div>

          <div className="petdash-form-actions">
            <button type="button" className="btn btn-primary">
              설정 저장하기
            </button>
            <button type="button" className="btn btn-secondary">
              기본 설정으로 되돌리기
            </button>
          </div>
        </article>
      </section>
    </div>
  );
}

export default PersonalSettings;
