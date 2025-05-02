'use client';

import { createReply, getComments, getGuestbook } from '@/lib/api/api';
import { Guestbook, Reply } from '@/types/guestbook';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import '../../../style/guestbookID.css';
import { useParams } from 'next/navigation';

export default function Page() {
  const params = useParams();

  const guestbookId = params.id as string;
  const [data, setData] = useState<Guestbook | null>(null);
  const [replies, setReplies] = useState<Reply[]>([]);
  const [newReply, setNewReply] = useState('');
  const [author, setAuthor] = useState('');

  // 방명록 데이터
  useEffect(() => {
    const fetchGuestbook = async () => {
      const res = await getGuestbook(guestbookId);
      setData(res.data);
    };
    fetchGuestbook();
  }, [guestbookId]);

  // 댓글 데이터
  const fetchComments = async () => {
    const res = await getComments(guestbookId);
    setReplies(res);
  };

  useEffect(() => {
    fetchComments();
  }, [guestbookId]);

  // 댓글 작성
  const handleAddReply = async () => {
    if (!newReply.trim() || !author.trim() || !data) return;

    try {
      await createReply({
        content: newReply,
        author: author,
        guestbookId: Number(guestbookId),
      });
      alert('방명록이 성공적으로 작성되었습니다.');
      setNewReply('');
      setAuthor('');
      fetchComments(); // 댓글 새로고침
    } catch (error) {
      console.error(error);
      alert('댓글 작성 실패했습니다.');
    }
  };

  return (
    <>
      <nav className="guestbook-nav">
        <div className="nav-left">
          <Link href="/" className="home-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </Link>
          <div className="nav-title">방명록</div>
        </div>
        <div className="nav-actions">
          <Link href="/dashboard/guestbook">
            <button className="nav-button">목록페이지</button>
          </Link>
        </div>
      </nav>

      <div className="id-guestbook-container">
        {data ? (
          <div className="id-guestbook-content">
            <div className="id-guestbook-header">
              <h1 className="id-guestbook-title">{data.author}님의 글</h1>
              <p className="id-guestbook-date">
                {new Date(data.createdAT).toLocaleDateString()}
              </p>
            </div>
            <div className="id-guestbook-body">
              <p className="id-guestbook-text">{data.content}</p>
            </div>

            <h2 className="id-replies-title">이름 입력</h2>
            <textarea
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="이름을 입력하세요"
              className="id-reply-textarea"
            />

            <div className="id-replies-section">
              <h2 className="id-replies-title">댓글</h2>
              <div className="id-reply-input">
                <textarea
                  value={newReply}
                  onChange={(e) => setNewReply(e.target.value)}
                  placeholder="댓글을 입력하세요..."
                  className="id-reply-textarea"
                />
                <button onClick={handleAddReply} className="id-reply-button">
                  댓글 작성
                </button>
              </div>

              <div className="id-replies-list">
                {replies
                  .slice()
                  .sort(
                    (a, b) =>
                      new Date(b.createdAt).getTime() -
                      new Date(a.createdAt).getTime()
                  )
                  .map((reply) => (
                    <div key={reply.id} className="id-reply-item">
                      <div className="id-reply-header">
                        <span className="id-reply-author">{reply.author}</span>
                        <span className="id-reply-date">
                          {new Date(reply.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="id-reply-content">{reply.content}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ) : (
          <p className="id-loading">로딩 중...</p>
        )}
      </div>
    </>
  );
}
