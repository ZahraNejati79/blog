import { createPostApi } from "@/services/postServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  const { isPending, mutate: createPost } = useMutation({
    mutationFn: createPostApi,
    onSuccess: (data) => {
      toast.success(data?.message);
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { isPending, createPost };
};
