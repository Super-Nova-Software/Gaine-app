import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { UserAvatar } from '@/components/user-avatar';
import { useSheet } from '@/hooks/use-sheet-store';

const MemberListSheet = () => {
  const { data, isSheetOpen, onSheetClose } = useSheet();
  
  const { members } = data;

  const onlineMembers = members?.filter(member => member?.user?.userstatus?.status === "ONLINE");

  return (
    <Sheet open={isSheetOpen} onOpenChange={onSheetClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Online Members</SheetTitle>
          <SheetDescription>Members currently online</SheetDescription>
        </SheetHeader>
        <div className="p-4">
          {onlineMembers?.map((member) => (
            <div key={member.id} className="flex items-center space-x-2 mb-2">
              <UserAvatar 
                src={member?.user?.avatar ? `http://127.0.0.1:8000/media/${member?.user?.avatar}` : "/next.svg"} 
                className="h-8 w-8" 
              />
              <div>
                <span className="block font-semibold">{member?.user?.username}</span>
                <span className="block text-sm text-gray-500">{member.user?.userstatus?.status}</span>
              </div>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MemberListSheet;
