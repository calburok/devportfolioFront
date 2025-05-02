'use client';

import React, { useState } from 'react';
import '../../../style/registerPage.css';
import { useRouter } from 'next/navigation';
import { createGuestbook } from '../../../lib/api/api';

const GuestbookWritePage = () => {
  const router = useRouter();
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!author.trim() || !content.trim()) {
      alert('작성자와 내용을 모두 입력하세요.');
      return;
    }

    try {
      await createGuestbook({ author, content });
      alert('방명록이 성공적으로 작성되었습니다.');
      router.push('/dashboard/guestbook');
    } catch (error) {
      console.error(error);
      alert('방명록 작성 실패했습니다.');
    }
  };

  return (
    <div className="guestbook-container">
      <div className="background-animation">
        <div className="background-circle-1"></div>
        <div className="background-circle-2"></div>
      </div>

      <div className="guestbook-card">
        <div className="guestbook-form-container">
          <div className="guestbook-header">
            <h1 className="guestbook-title">방명록 작성</h1>
            <p className="guestbook-subtitle">
              소중한 방문의 흔적을 남겨주세요
            </p>
          </div>

          <form onSubmit={handleSubmit} className="guestbook-form">
            <div className="form-group">
              <label className="form-label">작성자 이름</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="form-input"
                placeholder="이름을 입력하세요"
              />
            </div>

            <div className="form-group">
              <label className="form-label">내용</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="form-input form-textarea"
                placeholder="방명록 내용을 입력하세요"
              />
            </div>

            <button type="submit" className="submit-button">
              <span>작성하기</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GuestbookWritePage;
