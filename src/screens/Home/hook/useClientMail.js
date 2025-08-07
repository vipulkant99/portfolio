import { useMutation, useQueryClient } from "@tanstack/react-query";
import { clientMail } from "../../../Services/supabase";
import toast from "react-hot-toast";

export function useClientMail() {
  const queryClient = useQueryClient();

  const { mutate: sendMail, isPending } = useMutation({
    mutationFn: clientMail,
    onSuccess: () => {
      toast.success("Message Sent Successfully");
      queryClient.invalidateQueries({ queryKey: ["client"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { sendMail, isPending };
}
