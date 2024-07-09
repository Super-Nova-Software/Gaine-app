"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { startTransition } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/use-modal-store";
import { ChannelCetagorySchema } from "@/schemas";
import { toast } from "sonner";
import { useParams } from "next/navigation";
import { createCategory } from "@/app/actions/category";

export const CreateCategoryModal = () => {
  const { isOpen, onClose, type, data } = useModal();
  const params = useParams();
  const isModalOpen = isOpen && type === "createCategory";
  const form = useForm<{ name: string; serverId: string }>({
    resolver: zodResolver(ChannelCetagorySchema),
    defaultValues: {
      name: "",
      serverId: params.serverId,
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof ChannelCetagorySchema>) => {
    startTransition(async () => {
      try {
        toast.promise(
          createCategory(values),
          {
            loading: "Creating a new category...",
            success: `category ${values.name} created successfully!`,
            error: "Failed to create a category.",
          }
        );
        form.reset();
        onClose();
      } catch (error) {
        console.error("Unexpected error:", error);
      }
    });
  };

  const handleClose = () => {
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="dark:bg-[#1E1F22] bg-white  p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Create Category
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Give your server a personality with a name and an image. You can always change it later.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-8 px-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold">
                     Category name
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className=" border-0 focus-visible:ring-0 ocus-visible:ring-offset-0"
                        placeholder="Enter server name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
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
