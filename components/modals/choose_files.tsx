"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { startTransition, useState } from "react";
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
import { CreateServerSchema } from "@/schemas";
import { userId } from "@/data/user";
import { SingleImageDropzone } from "../SingleImageDropzone";
import { createServer } from "@/app/actions/server";
import { toast } from "sonner";

export const ChooseFilesModal = () => {
  const { isOpen, onClose, type } = useModal();
  const isModalOpen = isOpen && type === "choosefiles";
  const [file, setFile] = useState<File>();

  const form = useForm({
    resolver: zodResolver(CreateServerSchema),
    defaultValues: {
      name: "",
      icon: "",
      ownerId: userId,
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof CreateServerSchema>) => {
    startTransition(async () => {
      try {
        toast.promise(
          createServer({ ...values, icon: file ? file.name : "" }),
          {
            loading: "Creating a new server...",
            success: `Server ${values.name} created successfully!`,
            error: "Failed to create a server.",
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
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Send a Image or File
          </DialogTitle>
          {/* <DialogDescription className="text-center text-zinc-500">
            Give your server a personality with a name and an image. You can always change it later.
          </DialogDescription> */}
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-8 px-6">
              <FormField
                control={form.control}
                name="icon"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Iamge
                    </FormLabel>
                    <FormControl>
                      <SingleImageDropzone
                        width={470}
                        height={100}
                        value={file}
                        onChange={(file) => {
                          setFile(file);
                          field.onChange(file ? file.name : "");
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                        placeholder="Enter Following message"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="bg-gray-100 px-6 py-4">
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
