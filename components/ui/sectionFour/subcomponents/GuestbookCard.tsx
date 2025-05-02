import { Guestbook } from '@/types/guestbook';
import Link from 'next/link';
import '../../../../style/guestbook.css';
import { useDeleteStore } from '@/store/useSomethingStore';

interface GuestbookCardProps {
  guestbook: Guestbook;
}

export default function GuestbookCard({ guestbook }: GuestbookCardProps) {
  const deleteMode = useDeleteStore((state) => state.deleteMode);
  const toggleSelect = useDeleteStore((state) => state.toggleSelect);
  const selectedIds = useDeleteStore((state) => state.selectedIds);

  const time = new Date(guestbook.createdAT).toLocaleString();

  const CardContent = (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-header">
          <div className="card-info">
            <div className="card-meta"></div>
            <h3 className="card-title">{guestbook.author}</h3>
          </div>
          <button className="card-button"></button>
          <div>
            {deleteMode && (
              <input
                type="checkbox"
                checked={selectedIds.includes(guestbook.id)}
                className="delete-checkbox"
                onChange={() => toggleSelect(guestbook.id)}
              />
            )}
          </div>
        </div>
        <p className="card-content">{guestbook.content}</p>
        <div className="card-date">{time}</div>
      </div>
    </div>
  );

  return deleteMode ? (
    CardContent
  ) : (
    <Link href={`/dashboard/${guestbook.id}`}>{CardContent}</Link>
  );
}
