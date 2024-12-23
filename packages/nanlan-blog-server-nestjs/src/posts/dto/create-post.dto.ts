export class CreatePostDto {
  title: string;
  description: string;
  content: string;
  categoryId: string[];
  tagIds: string[];
  authorId: string;
}
