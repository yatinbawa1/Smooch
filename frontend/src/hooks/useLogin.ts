// hooks/useLogin.ts

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../api/auth";

export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      queryClient.setQueryData(["currentUser"], data.user);
    },
  });
}