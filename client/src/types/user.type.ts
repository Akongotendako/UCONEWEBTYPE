interface ISignUp {
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


export interface IUserStore {
    signin: ISignIn;
    signup: ISignUp;
    profile: IProfile
}
