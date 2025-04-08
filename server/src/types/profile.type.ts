export interface IProfilePic {
    url: string;
    publicId: string;
}

export interface IProfile {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  profilePic: IProfilePic[];
}
