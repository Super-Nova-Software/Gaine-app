"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Send } from "lucide-react";
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useModal } from "@/hooks/use-modal-store";
import { EmojiPicker } from "@/components/emoji-picker";
import { startTransition, useState } from "react";
import { toast } from "sonner";
import { createMessage } from "@/app/actions/messages";
import { CreateMessageSchema } from "@/schemas";
import { Button } from "../ui/button";
import { PermissionType } from "@/graphql/gql/graphql";
import { userId } from "@/data/user";

interface ChatInputProps {
  name: string;
  channelId?: string;
  type: "conversation" | "channel";
  permissions?: PermissionType[];
}

export const ChatInput = ({
  name,
  type,
  channelId,
  permissions
}: ChatInputProps) => {
  const { onOpen } = useModal();
  const router = useRouter();
  const [file, setFile] = useState<File>();
  
  const form = useForm<z.infer<typeof CreateMessageSchema>>({
    resolver: zodResolver(CreateMessageSchema),
    defaultValues: {
      content: "",
      channelId: channelId,
      senderId: userId,
    }
  });

  const isLoading = form.formState.isSubmitting;


  const onSubmit = async (values: z.infer<typeof CreateMessageSchema>) => {
    startTransition(async () => {
      try {
        toast.promise(
          createMessage( values ),
          {
            loading: "sending...",
            success: `Message sende successfully!`,
            error: "Failed to sende a Message.",
          }
        );
        form.reset();
        router.refresh();
      } catch (error) {
        console.error("Unexpected error:", error);
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative p-4 pb-6">
                  <button
                    type="button"
                    onClick={() => onOpen("choosefiles" )}
                    className="absolute top-7 left-8 h-[24px] w-[24px] bg-zinc-500 dark:bg-zinc-400 hover:bg-zinc-600 dark:hover:bg-zinc-300 transition rounded-full p-1 flex items-center justify-center"
                  >
                    <Plus className="text-white dark:text-[#313338]" />
                  </button>
                  <Input
                    disabled={isLoading}
                    className="px-14 py-6 bg-zinc-200/90 dark:bg-zinc-700/75 border-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-zinc-600 dark:text-zinc-200"
                    placeholder={`Message ${type === "conversation" ? name : "#" + name}`}
                    {...field}
                  />
                  <div className="absolute top-5 right-8">
                    <EmojiPicker
                      onChange={(emoji: string) => field.onChange(`${field.value} ${emoji}`)}
                    />
              <Button type="submit" className="border-none bg- hover:bg-" disabled={isLoading}>
                <Send />
              </Button>
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}