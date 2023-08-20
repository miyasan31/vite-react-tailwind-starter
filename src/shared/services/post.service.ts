import type { UseQueryOptions, UseQueryResult } from "react-query";
import { useQuery } from "react-query";

import type { IGetPostDetail, IGetPostList } from "~/shared/interfaces/useCase/post";
import { postRepository } from "~/shared/repositories/post.repository";

const { getPostList, getPostDetail } = postRepository;

interface IPostService {
  useGetPostList: (
    options?: Omit<UseQueryOptions<IGetPostList, unknown, IGetPostList, string>, "queryKey" | "queryFn">,
  ) => UseQueryResult<IGetPostList, unknown>;
  useGetPostDetail: (
    postId: string,
    options?: Omit<UseQueryOptions<IGetPostDetail, unknown, IGetPostDetail, string[]>, "queryKey" | "queryFn">,
  ) => UseQueryResult<IGetPostDetail, unknown>;
}

export const postService: IPostService = {
  useGetPostList: (options) => {
    return useQuery("getPostList", getPostList, options);
  },
  useGetPostDetail: (postId, options) => {
    return useQuery(["getPostDetail", postId], () => getPostDetail(postId), options);
  },
};
