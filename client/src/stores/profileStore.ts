import { create } from "zustand";
import { IProfileState } from "../types/profile.type";
import { IProfilePic } from "../types/user.type";

const profileStore = create<IProfileState>((set, get) => ({
  profile: {
    userId: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    profilePic: {
      url: "",
      publicId: "",
    } as IProfilePic,
  },
  setField: <
    T extends keyof IProfileState,
    K extends keyof IProfileState[T]
  >(
    obj: T,
    field: K,
    value: IProfileState[T][K]
  ) =>
    set((state) => ({
      ...state,
      [obj]: {
        ...state[obj],
        [field]: value
      },
    })),
}));

export default profileStore;
