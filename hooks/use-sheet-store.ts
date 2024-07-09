import { MemberType } from "@/graphql/gql/graphql";
import { create } from "zustand";

type SheetType = "MemberList" | "anotherSheetType";

interface SheetData {
  members?: MemberType;

}

interface SheetStore {
  type: SheetType | null;
  data: SheetData;
  isSheetOpen: boolean;
  onSheetOpen: (type: SheetType, data?: SheetData) => void;
  onSheetClose: () => void;
}

export const useSheet = create<SheetStore>((set) => ({
  type: null,
  data: {},
  isSheetOpen: false,
  onSheetOpen: (type, data = {}) => set({ isSheetOpen: true, type, data }),
  onSheetClose: () => set({ type: null, isSheetOpen: false, data: {} })
}));
