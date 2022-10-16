import type { AxiosResponse } from "axios";

import { API_BASE_URL } from "~/constants/env";
import type { IGetPostDetail, IGetPostList } from "~/interfaces/useCase/post";
import { axiosClient } from "~/libs/axios/axiosClient";

interface IPostRepository {
  getPostList: () => Promise<IGetPostList>;
  getPostDetail: (postId: string) => Promise<IGetPostDetail>;
}

export const postRepository: IPostRepository = {
  getPostList: async () => {
    return axiosClient
      .get<IGetPostList, AxiosResponse<IGetPostList, null>, null>(`${API_BASE_URL}/posts`)
      .then((res) => res.data);
  },
  getPostDetail: async (postId: string) => {
    return axiosClient
      .get<IGetPostDetail, AxiosResponse<IGetPostDetail, null>, null>(`${API_BASE_URL}/posts/${postId}`)
      .then((res) => res.data);
  },
};
