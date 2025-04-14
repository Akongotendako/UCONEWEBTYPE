import { create } from "zustand";
import { IProfilePic, IUserState } from "../user.type";
import {
  fetchProfile,
  signIn,
  signUp,
  updateProfile,
} from "../../services/user.service";
import { interceptorError } from "../interceptor.error.type";

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
      user: {
        ...state.user,
        [obj]: {
          ...state.user[obj],
          [field]: value,
        },
      },
    })),

  signUp: async () => {
    try {
      const { signup, profile } = get().user;
      const response = await signUp({
        email: signup.email,
        password: signup.password,
        confirmPassword: signup.confirmPassword,
        role: signup.role,
        profile: profile,
      });
      return {
        success: response.data.success,
        status: response.status,
        message: response.data.message,
      };
    } catch (error: unknown) {
      const { status, message } = error as interceptorError;
      return {
        success: false,
        status: status,
        message: message
      };
    }
  },

  signIn: async () => {
    try {
      const { signin } = get().user;
      const response = await signIn({
        email: signin.email,
        password: signin.password,
      });
      return {
        status: response.status,
        message: response.data.message,
        success: true
      };
    } catch (error) {
      const {status, message} = error as interceptorError
      return {
        success: false,
        message: message,
        status: status
      };
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
      const { signin, profile } = get().user;
      console.log(get().user.profile.profilePic);
      const formData = new FormData();
      formData.append("email", signin.email);
      formData.append("password", signin.password);
      formData.append("firstName", profile.firstName);
      formData.append("lastName", profile.lastName);
      formData.append("age", profile.age);
      const file = profile.profilePic?.file;
      if (file) {
        formData.append("profilePic", file);
      }
      formData.append("phoneNumber", profile.phoneNumber);

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
