'use client';

import { getGuestbooks } from '@/lib/api/api';
import React, { useEffect, useState } from 'react';
import GuestbookCard from '../subcomponents/GuestbookCard';
import { Guestbook } from '@/types/guestbook';
import '../../../../style/guestbook.css';
import { usePathname } from 'next/navigation';
import { useDeleteStore } from '@/store/useSomethingStore';

export const SectionFourCardWrap = () => {
  const [guestbooks, setGuestbooks] = useState<Guestbook[]>([]);
  const pathname = usePathname();

  const releadkey = useDeleteStore((state) => state.releadkey);

  useEffect(() => {
    getGuestbooks().then((v) => {
      if (pathname === '/') {
        const sortedGuestbooks = v.sort((a, b) => {
          // createdAt이 문자열이면 이렇게 정렬
          return b.createdAT.localeCompare(a.createdAT);
        });
        setGuestbooks(sortedGuestbooks.slice(0, 6));
      } else {
        setGuestbooks(v);
      }
      console.log(v);
    });
  }, [releadkey]);
  return (
    <div className="container px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guestbooks.map((guestbook) => (
          <GuestbookCard key={guestbook.id} guestbook={guestbook} />
        ))}
      </div>
    </div>
  );
};
