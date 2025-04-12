export interface ISignUp {
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
}

interface ISignIn {
  email: string;
  password: string;
  role: string;
}

export interface IProfilePic {
  file?: File;
  url: string;
  publicId?: string;
}

export interface IProfile {
  firstName: string;
  lastName: string;
  age: string;
  profilePic: IProfilePic;
  phoneNumber: string;
}

export interface IUserState {
  user: {
    signin: ISignIn;
    signup: ISignUp;
    profile: IProfile;
  };
  setField: <
    T extends keyof IUserState["user"],
    K extends keyof IUserState["user"][T]
  >(
    obj: T,
    field: K,
    value: IUserState["user"][T][K]
  ) => void;
  setImage: (newImage: IProfilePic) => void;
  signUp: () => Promise<unknown>;
  signIn: () => Promise<unknown>;
  fetchProfile: (id: string) => Promise<unknown>;
  updateProfile: (id: string) => Promise<unknown>;
  clearAllProperties: <T extends keyof IUserState["user"]>(obj: T) => void;
}
