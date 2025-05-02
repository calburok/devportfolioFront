export interface Guestbook {
  id: number;
  author: string;
  content: string;
  createdAT: string;
  replies?: Reply[];
}

export interface Reply {
  author: string;
  content: string;
  createdAt: string;
  id: number;
  guestbookId: number;
}

export interface CreateReply {
  author: string;
  content: string;
  guestbookId: number;
}
