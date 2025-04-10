import { create } from "zustand";
import { IProfilePic, IUserStore } from "../types/user.type";
import {
  fetchProfile,
  signIn,
  signUp,
  updateProfile,
} from "../services/user.service";

export const userStore = create<IUserStore>((set, get) => ({
  signup: {
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  },
  signin: {
    email: "",
    password: "",
    role: "",
  },
  profile: {
    firstName: "John",
    lastName: "Doe",
    age: "32",
    profilePic: {
      url: "",
      publicId: "",
    },
    phoneNumber: "",
  },

  setImage: (newImage: IProfilePic) =>
    set((state) => ({
      ...state,
      profile: {
        ...state.profile,
        profilePic: newImage,
      },
    })),

  setField: ({
    formType,
    field,
    value,
  }: {
    formType: keyof IUserStore;
    field: string;
    value: string;
  }) =>
    set((state) => ({
      ...state,
      [formType]: {
        ...state[formType],
        [field]: value,
      },
    })),

  signUp: async () => {
    try {
      const response = await signUp({
        email: get().signup.email,
        password: get().signup.password,
        confirmPassword: get().signup.confirmPassword,
        role: get().signup.role,
        profile: get().profile,
      });
      return response;
    } catch (error) {
      return error;
    }
  },

  signIn: async () => {
    try {
      const response = await signIn({
        email: get().signin.email,
        password: get().signin.password,
      });
      return response;
    } catch (error) {
      return error;
    }
  },

  fetchProfile: async (id: string) => {
    try {
      const response = await fetchProfile(id);
      console.log(response.data.response);
      set({
        signin: {
          email: response.data.response.email,
          password: response.data.response.password,
          role: response.data.response.role,
        },
        profile: {
          firstName: response.data.response.profile.firstName,
          lastName: response.data.response.profile.lastName,
          age: response.data.response.profile.age,
          profilePic: response.data.response.profile.profilePic,
          phoneNumber: response.data.response.profile.phoneNumber,
        },
      });
    } catch (error) {
      return error;
    }
  },

  updateProfile: async (id: string) => {
    try {
      console.log(get().profile.profilePic);
      const formData = new FormData();
      formData.append("email", get().signin.email);
      formData.append("password", get().signin.password);
      formData.append("firstName", get().profile.firstName);
      formData.append("lastName", get().profile.lastName);
      formData.append("age", get().profile.age);
      const file = get().profile.profilePic?.file;
      if (file) {
        formData.append("profilePic", file);
      }
      formData.append("phoneNumber", get().profile.phoneNumber);

      const response = await updateProfile(id, formData);
      return response;
    } catch (error) {
      return error;
    }
  },

  clearAllProperties: (formType: keyof IUserStore) =>
    set((state) => ({
      ...state,
      [formType]: {
        email: "",
        password: "",
        confirmPassword: "",
        role: "user",
      },
    })),
}));
