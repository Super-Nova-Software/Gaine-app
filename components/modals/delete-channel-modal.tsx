"use client";
import { startTransition, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModal } from "@/hooks/use-modal-store";
import { Button } from "@/components/ui/button";
import { deleteChannel } from "@/app/actions/channel";
import { toast } from "sonner";

export const DeleteChannelModal = () => {
  const { isOpen, onClose, type, data } = useModal();
  const router = useRouter();

  const isModalOpen = isOpen && type === "deleteChannel";
  const { channel } = data;

  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    startTransition(async () => {
      try {
        setIsLoading(true);
        await deleteChannel(channel?.id);
        toast.success(`Channel ${channel?.name} deleted successfully!`);
        onClose();
        router.refresh();
      } catch (error) {
        console.error("Unexpected error:", error);
        toast.error("Failed to delete the channel. Please try again.");
      } finally {
        setIsLoading(false);
      }
    });
  };
  

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Delete Channel
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Are you sure you want to delete <br />
            <span className="text-indigo-500 font-semibold">
              #{channel?.name}
            </span>? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="bg-gray-100 px-6 py-4">
          <div className="flex items-center justify-between w-full">
            <Button
              disabled={isLoading}
              onClick={onClose}
              variant="ghost"
            >
              Cancel
            </Button>
            <Button
              disabled={isLoading}
              variant="primary"
              onClick={onClick}
            >
              {isLoading ? "Deleting..." : "Confirm"}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
