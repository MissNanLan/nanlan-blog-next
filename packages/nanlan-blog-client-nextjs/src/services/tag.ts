import { request } from "@/lib/request";
import { TagResponse } from "@/types/tag";
import { ApiResponse } from "@/types/request";

export const TagService = {
  getTags: () => request.get<ApiResponse<TagResponse[]>>("/tag"),
  getTag: (id: string) => request.get<ApiResponse<TagResponse>>(`/tag/${id}`),
};
