"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { startTransition, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/use-modal-store";
import { CreateChannelSchema } from "@/schemas";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { ServerchannelsChannelChannelTypeChoices } from "@/graphql/gql/graphql";
import { createChannel } from "@/app/actions/channel";
import { EmojiPicker } from "../emoji-picker";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { useParams } from "next/navigation";

export const CreateChannelModal = () => {
  const { isOpen, onClose, type, data } = useModal();
  const params = useParams();
  const isModalOpen = isOpen && type === "createChannel";
  const { channelType } = data;

  const form = useForm({
    resolver: zodResolver(CreateChannelSchema),
    defaultValues: {
      name: "",
      channelType: channelType || ServerchannelsChannelChannelTypeChoices.Text,
      emoji: "",
      topic: "",
      isprivate: false,
      serverId: params?.serverId || "",
    },
  });

  useEffect(() => {
    if (channelType) {
      form.setValue("channelType", channelType);
    } else {
      form.setValue("channelType", ServerchannelsChannelChannelTypeChoices.Text);
    }
  }, [channelType, form]);

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof CreateChannelSchema>) => {
    startTransition(async () => {
      try {
        toast.promise(
          createChannel(values),
          {
            loading: "Creating a new channel...",
            success: `Channel ${values.name} created successfully!`,
            error: "Failed to create a channel.",
          }
        );
        form.reset();
        onClose();
      } catch (error) {
        console.error("Unexpected error:", error);
        toast.error("Failed to create a channel. Please try again.");
      }
    });
  };

  const handleClose = () => {
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="dark:bg-[#1E1F22] bg-white p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Create Channel
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-8 px-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <Input
                    disabled={isLoading}
                    className="bg-zinc-300/50 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    placeholder="Enter channel name"
                    {...field}
                  />
                )}
              />
              <FormField
                control={form.control}
                name="emoji"
                render={({ field }) => (
                  <div className="relative">
                    <Input
                      disabled={isLoading}
                      className="bg-zinc-300/50 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder="Enter emoji"
                      {...field}
                    />
                    <div className="absolute top-7 right-8">
                      <EmojiPicker
                        onChange={(emoji) => {
                          field.onChange(emoji);
                        }}
                      />
                    </div>
                  </div>
                )}
              />
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <Input
                    disabled={isLoading}
                    className="bg-zinc-300/50 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    placeholder="Enter channel topic"
                    {...field}
                  />
                )}
              />
              <FormField
                control={form.control}
                name="channelType"
                render={({ field }) => (
                  <Select disabled={isLoading} onValueChange={field.onChange}>
                    <SelectTrigger className="bg-zinc-300/50 border-0 focus:ring-0 ring-offset-0 focus:ring-offset-0 capitalize outline-none">
                      <SelectValue placeholder="Select a channel type" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.values(ServerchannelsChannelChannelTypeChoices).map((type) => (
                        <SelectItem key={type} value={type} className="capitalize">
                          {type.toLowerCase()}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              <FormField
                control={form.control}
                name="isprivate"
                render={({ field }) => (
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      disabled={isLoading}
                      checked={field.value}
                      onCheckedChange={(e) => field.onChange(e.target.checked)}
                    />
                    <Label htmlFor="isprivate" className="text-sm">Private Channel</Label>
                  </div>
                )}
              />
            </div>
            <DialogFooter className="px-6 py-4">
              <Button type="submit" variant="primary" disabled={isLoading}>
                {isLoading ? "Creating..." : "Create"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
