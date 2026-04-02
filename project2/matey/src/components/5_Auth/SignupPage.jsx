import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './AuthPage.css';

function SignupPage() {
  const navigate = useNavigate();
  const { signup, isLoading } = useAuth();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    character: '하루',
    termsAgreed: false,
    privacyAgreed: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateStep1 = () => {
    const newErrors = {};
    
    if (!formData.name || formData.name.length < 2) {
      newErrors.name = '이름은 2글자 이상이어야 합니다.';
    }
    
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '올바른 이메일을 입력하세요.';
    }
    
    if (!formData.password || formData.password.length < 8) {
      newErrors.password = '비밀번호는 8글자 이상이어야 합니다.';
    }
    
    if (formData.password !== formData.passwordConfirm) {
      newErrors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    
    if (!formData.termsAgreed) {
      newErrors.termsAgreed = '이용약관에 동의해야 합니다.';
    }
    
    if (!formData.privacyAgreed) {
      newErrors.privacyAgreed = '개인정보처리방침에 동의해야 합니다.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const result = await signup(formData);
    
    if (result.success) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="auth-page signup-page">
      <div className="auth-container">
        <div className="auth-card">
          <h1 className="auth-title">메이티 가입하기</h1>
          
          {/* 진행도 표시 */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '32px',
          }}>
            {[1, 2, 3].map((s) => (
              <React.Fragment key={s}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: step >= s ? 'linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-light) 100%)' : 'var(--bg-lighter)',
                  color: step >= s ? 'white' : 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                }}>
                  {s}
                </div>
                {s < 3 && (
                  <div style={{
                    width: '30px',
                    height: '3px',
                    background: step > s ? 'linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-light) 100%)' : 'var(--bg-lighter)',
                    transition: 'all 0.3s ease',
                  }} />
                )}
              </React.Fragment>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {/* Step 1: 기본 정보 */}
            {step === 1 && (
              <>
                <p style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '24px',
                }}>
                  기본 정보를 입력해주세요
                </p>
                
                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    color: 'var(--text-primary)',
                    fontWeight: '500',
                  }}>
                    이름
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="홍길동"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      border: errors.name ? '1.5px solid #FF8FAB' : '1.5px solid var(--border-color)',
                      borderRadius: '10px',
                      fontSize: '1rem',
                    }}
                  />
                  {errors.name && <span style={{ color: '#FF8FAB', fontSize: '0.85rem', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    color: 'var(--text-primary)',
                    fontWeight: '500',
                  }}>
                    이메일
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      border: errors.email ? '1.5px solid #FF8FAB' : '1.5px solid var(--border-color)',
                      borderRadius: '10px',
                      fontSize: '1rem',
                    }}
                  />
                  {errors.email && <span style={{ color: '#FF8FAB', fontSize: '0.85rem', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    color: 'var(--text-primary)',
                    fontWeight: '500',
                  }}>
                    비밀번호
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      border: errors.password ? '1.5px solid #FF8FAB' : '1.5px solid var(--border-color)',
                      borderRadius: '10px',
                      fontSize: '1rem',
                    }}
                  />
                  {errors.password && <span style={{ color: '#FF8FAB', fontSize: '0.85rem', marginTop: '4px', display: 'block' }}>{errors.password}</span>}
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    color: 'var(--text-primary)',
                    fontWeight: '500',
                  }}>
                    비밀번호 확인
                  </label>
                  <input
                    type="password"
                    name="passwordConfirm"
                    value={formData.passwordConfirm}
                    onChange={handleChange}
                    placeholder="••••••••"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      border: errors.passwordConfirm ? '1.5px solid #FF8FAB' : '1.5px solid var(--border-color)',
                      borderRadius: '10px',
                      fontSize: '1rem',
                    }}
                  />
                  {errors.passwordConfirm && <span style={{ color: '#FF8FAB', fontSize: '0.85rem', marginTop: '4px', display: 'block' }}>{errors.passwordConfirm}</span>}
                </div>
              </>
            )}

            {/* Step 2: 약관 동의 */}
            {step === 2 && (
              <>
                <p style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '24px',
                }}>
                  약관에 동의해주세요
                </p>
                
                <div style={{
                  background: 'var(--bg-lighter)',
                  padding: '16px',
                  borderRadius: '10px',
                  marginBottom: '20px',
                  maxHeight: '200px',
                  overflowY: 'auto',
                }}>
                  <h4 style={{ marginBottom: '12px', color: 'var(--text-primary)' }}>이용약관</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    메이티 AI 상담 서비스 이용약관입니다. 개인정보 보호 및 서비스 이용 규칙을 준수해주세요. 본 약관을 위반한 경우 서비스 이용이 제한될 수 있습니다.
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '20px',
                }}>
                  <input
                    type="checkbox"
                    id="termsAgreed"
                    name="termsAgreed"
                    checked={formData.termsAgreed}
                    onChange={handleChange}
                  />
                  <label htmlFor="termsAgreed" style={{
                    cursor: 'pointer',
                    color: 'var(--text-primary)',
                    fontWeight: '500',
                  }}>
                    이용약관에 동의합니다 (필수)
                  </label>
                </div>
                {errors.termsAgreed && <span style={{ color: '#FF8FAB', fontSize: '0.85rem', display: 'block', marginBottom: '12px' }}>{errors.termsAgreed}</span>}

                <div style={{
                  background: 'var(--bg-lighter)',
                  padding: '16px',
                  borderRadius: '10px',
                  marginBottom: '20px',
                  maxHeight: '200px',
                  overflowY: 'auto',
                }}>
                  <h4 style={{ marginBottom: '12px', color: 'var(--text-primary)' }}>개인정보처리방침</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    메이티는 사용자의 개인정보를 안전하게 보호합니다. 모든 데이터는 암호화되어 관리되며, 사용자 동의 없이 제3자에게 공유되지 않습니다.
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '20px',
                }}>
                  <input
                    type="checkbox"
                    id="privacyAgreed"
                    name="privacyAgreed"
                    checked={formData.privacyAgreed}
                    onChange={handleChange}
                  />
                  <label htmlFor="privacyAgreed" style={{
                    cursor: 'pointer',
                    color: 'var(--text-primary)',
                    fontWeight: '500',
                  }}>
                    개인정보처리방침에 동의합니다 (필수)
                  </label>
                </div>
                {errors.privacyAgreed && <span style={{ color: '#FF8FAB', fontSize: '0.85rem', display: 'block' }}>{errors.privacyAgreed}</span>}
              </>
            )}

            {/* Step 3: 캐릭터 선택 */}
            {step === 3 && (
              <>
                <p style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '24px',
                }}>
                  AI 친구를 선택해주세요
                </p>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '20px',
                }}>
                  <div
                    onClick={() => setFormData(prev => ({ ...prev, character: '하루' }))}
                    style={{
                      padding: '20px',
                      background: formData.character === '하루' 
                        ? 'linear-gradient(135deg, var(--primary-blue-lighter) 0%, var(--primary-blue-lighter) 100%)'
                        : 'var(--bg-light)',
                      border: formData.character === '하루'
                        ? '2px solid var(--primary-blue)'
                        : '2px solid var(--border-color)',
                      borderRadius: '16px',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{ fontSize: '3rem', marginBottom: '12px' }}>🐰</div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>하루</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>활발하고 긍정적인 토끼 친구</p>
                  </div>

                  <div
                    onClick={() => setFormData(prev => ({ ...prev, character: '루미' }))}
                    style={{
                      padding: '20px',
                      background: formData.character === '루미' 
                        ? 'linear-gradient(135deg, var(--primary-pink-lighter) 0%, var(--primary-pink-lighter) 100%)'
                        : 'var(--bg-light)',
                      border: formData.character === '루미'
                        ? '2px solid var(--primary-pink)'
                        : '2px solid var(--border-color)',
                      borderRadius: '16px',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{ fontSize: '3rem', marginBottom: '12px' }}>🐱</div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>루미</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>침착하고 현명한 고양이 친구</p>
                  </div>
                </div>
              </>
            )}

            {/* 버튼 */}
            <div style={{
              display: 'flex',
              gap: '12px',
              marginTop: '32px',
            }}>
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  disabled={isLoading}
                  style={{
                    flex: 1,
                    padding: '14px 20px',
                    background: 'var(--bg-lighter)',
                    color: 'var(--text-primary)',
                    border: '1.5px solid var(--border-color)',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => !isLoading && (e.target.style.background = 'var(--border-light)')}
                  onMouseLeave={(e) => e.target.style.background = 'var(--bg-lighter)'}
                >
                  이전
                </button>
              )}

              {step < 3 && (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={isLoading}
                  style={{
                    flex: 1,
                    padding: '14px 20px',
                    background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-light) 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => !isLoading && (e.target.style.transform = 'translateY(-2px)')}
                  onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  다음
                </button>
              )}

              {step === 3 && (
                <button
                  type="submit"
                  disabled={isLoading}
                  style={{
                    flex: 1,
                    padding: '14px 20px',
                    background: isLoading 
                      ? 'var(--border-color)' 
                      : 'linear-gradient(135deg, var(--primary-pink) 0%, var(--primary-pink-light) 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => !isLoading && (e.target.style.transform = 'translateY(-2px)')}
                  onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  {isLoading ? '가입 중...' : '가입 완료'}
                </button>
              )}
            </div>
          </form>

          <p style={{
            marginTop: '24px',
            textAlign: 'center',
            color: 'var(--text-secondary)',
            fontSize: '0.95rem',
          }}>
            이미 계정이 있으신가요?{' '}
            <a 
              onClick={() => navigate('/login')}
              style={{
                color: 'var(--primary-blue)',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              로그인
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
