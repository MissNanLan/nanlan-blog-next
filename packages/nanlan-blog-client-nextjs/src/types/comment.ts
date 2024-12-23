export interface CommentProps {
  id: string;
  content: string;
  createdAt: string;
  author: {
    name: string;
    avatar: string;
  };
  articleId: string;
  articleTitle: string;
}
