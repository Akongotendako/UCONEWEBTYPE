export interface IProfilePic {
  url?: string;
  publicId?: string;
}


export interface IProfile {
    id?: string,
    userId: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    profilePic: IProfilePic
}

export interface IProfileState {
    profile: IProfile;
    setField: <T extends keyof IProfileState, K extends keyof IProfileState[T]> (
        obj: T,
        field: K,
        value: IProfileState[T][K]
    ) => void;
    fetchProfile: (userId: string) => Promise<unknown>;
    addImage: (image: IProfilePic) => void;
    updateProfile: (userId: string) => Promise<unknown>;
}