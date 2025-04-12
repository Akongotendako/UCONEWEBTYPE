import { create } from "zustand";
import { IProfilePic, IUserState } from "../types/user.type";
import {
  fetchProfile,
  signIn,
  signUp,
  updateProfile,
} from "../services/user.service";

const userStore = create<IUserState>((set, get) => ({
  user: {
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
  },

  setImage: (newImage: IProfilePic) =>
    set((state) => ({
      ...state,
      user: {
        ...state.user,
        profile: {
          ...state.user.profile,
          profilePic: newImage,
        },
      },
    })),

  setField: <
    T extends keyof IUserState["user"],
    K extends keyof IUserState["user"][T]
  >(
    obj: T,
    field: K,
    value: IUserState["user"][T][K]
  ) =>
    set((state) => ({
      ...state,
      [obj]: {
        ...state.user[obj],
        [field]: value,
      },
    })),

  signUp: async () => {
    try {
      const response = await signUp({
        email: get().user.signup.email,
        password: get().user.signup.password,
        confirmPassword: get().user.signup.confirmPassword,
        role: get().user.signup.role,
        profile: get().user.profile,
      });
      return response;
    } catch (error) {
      return error;
    }
  },

  signIn: async () => {
    try {
      const response = await signIn({
        email: get().user.signin.email,
        password: get().user.signin.password,
      });
      return response;
    } catch (error) {
      return error;
    }
  },

  fetchProfile: async (id) => {
    try {
      const response = await fetchProfile(id);
      console.log(response.data.response);
      set((state) => ({
        ...state,
        user: {
          ...state.user,
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
        },
      }));
    } catch (error) {
      return error;
    }
  },

  updateProfile: async (id) => {
    try {
      console.log(get().user.profile.profilePic);
      const formData = new FormData();
      formData.append("email", get().user.signin.email);
      formData.append("password", get().user.signin.password);
      formData.append("firstName", get().user.profile.firstName);
      formData.append("lastName", get().user.profile.lastName);
      formData.append("age", get().user.profile.age);
      const file = get().user.profile.profilePic?.file;
      if (file) {
        formData.append("profilePic", file);
      }
      formData.append("phoneNumber", get().user.profile.phoneNumber);

      const response = await updateProfile(id, formData);
      return response;
    } catch (error) {
      return error;
    }
  },

  clearAllProperties: <T extends keyof IUserState["user"]>(obj: T) =>
    set((state) => ({
      ...state,
      user: {
        ...state.user,
        [obj]:
          obj === "signin"
            ? { email: "", password: "", confirmPassword: "", role: "" }
            : obj === "signup"
            ? { email: "", password: "", confirmPassword: "", role: "user" }
            : obj === "profile"
            ? {
                firstName: "John",
                lastName: "Doe",
                age: "32",
                profilePic: {
                  url: "",
                  publicId: "",
                },
                phoneNumber: "",
              }
            : state.user[obj],
      },
    })),
}));

export default userStore;
