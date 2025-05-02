'use client';

import { deleteGuestbook, getGuestbooks } from '@/lib/api/api';
import React, { useEffect, useState } from 'react';
import '../../../style/guestbook.css';
import { SectionFourCardWrap } from '@/components/ui/sectionFour/components/SectionFourCardWrap';
import Link from 'next/link';
import { useDeleteStore } from '@/store/useSomethingStore';

const GuestbookPage = () => {
  const deleteMode = useDeleteStore((state) => state.deleteMode);
  const selectedIds = useDeleteStore((state) => state.selectedIds);
  const releadkey = useDeleteStore((state) => state.releadkey);
  const toggleDelete = useDeleteStore((state) => state.toggleDelete);
  const setReloadKey = useDeleteStore((state) => state.setReloadKey);
  console.log(selectedIds);

  const CardDelete = async () => {
    const ok = confirm('삭제하시겠습니까?');
    if (!ok) return;
    await deleteGuestbook(selectedIds);
    toggleDelete();
    alert('삭제되었습니다.');
    setReloadKey(releadkey + 1);
  };

  return (
    <div className="guestbook-page">
      {deleteMode && (
        <button className="delete-mode-overlay" onClick={CardDelete}>
          삭제하기
        </button>
      )}

      <nav className="guestbook-nav">
        <div className="nav-left">
          <Link href="/" className="home-button  ">
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
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </Link>
          <div className="nav-title">방명록</div>
        </div>

        <div className="nav-actions">
          <Link
            href="/dashboard/register
          "
          >
            <button className="nav-button">새 글 작성</button>
          </Link>
          <button onClick={toggleDelete} className="nav-button">
            {deleteMode ? '취소' : '삭제하기'}
          </button>
        </div>
      </nav>
      <div className="guestbook-content">
        <SectionFourCardWrap />
      </div>
    </div>
  );
};

export default GuestbookPage;
