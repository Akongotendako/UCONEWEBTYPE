import { create } from "zustand";
import { IOriginalImage, IProfilePic, IUser, IUserState } from "../types/user.type";
import {
  fetchProfile,
  fetchUsers,
  signIn,
  signUp,
  updateProfile,
} from "../services/user.service";
import { interceptorError } from "../types/interceptor.error.type";

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
    originalImage: {
      url: "",
      publicId: "",
    } as IOriginalImage,
  },
  users: [] as IUser[],
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
        message: message,
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
        success: true,
        role: response.data.response.role,
        userId: response.data.response._id,
      };
    } catch (error) {
      const { status, message } = error as interceptorError;
      return {
        success: false,
        message: message,
        status: status,
        userId: "",
      };
    }
  },

  fetchProfile: async (userId) => {
    try {
      const response = await fetchProfile(userId);
      console.log(response.data.response);
      set((state) => ({
        ...state,
        user: {
          ...state.user,
          signin: {
            email: response.data.data.email,
            password: response.data.data.password,
            role: response.data.data.role,
          },
          profile: {
            firstName: response.data.data.profile.firstName,
            lastName: response.data.data.profile.lastName,
            age: response.data.data.profile.age,
            profilePic: response.data.data.profile.profilePic,
            phoneNumber: response.data.data.profile.phoneNumber,
          },
          originalImage: response.data.data.profile.profilePic,
        },
      }));
    } catch (error) {
      return error;
    }
  },

  updateProfile: async (userId) => {
    try {
      const { signin, profile, originalImage } = get().user;
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
      console.log("original image", originalImage);
      formData.append("originalImage", JSON.stringify(originalImage));

      const response = await updateProfile(userId, formData);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      await get().fetchProfile(userId);
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
    fetchUsers: async() =>{
      const response = await fetchUsers();
      set({users: response.data.data})
    },
}));

export default userStore;
