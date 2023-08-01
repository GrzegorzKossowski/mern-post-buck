export type UserLoginType = {
    email: string;
    password: string;
};

export type UserRegisterType =
    | UserLoginType
    | {
          firstName: string;
          lastName: string;
      };

export type UserAuthType =
    | Omit<UserRegisterType, 'password'>
    | {
          isAdmin: boolean;
          expiresIn: number;
          _id: string;
      };

export type UserModelType = {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    picturePath: string;
    friends: string[];
    location: string;
    occupation: string;
    viewedProfile: number;
    impressions: number;
    isAdmin: boolean;
    createdAt: string;
    updatedAt: string;
};

export type PostModelType = {
    _id: string;
    userId: string;
    description: string;
    picturePath: string;
    likes: string[];
    comments: string[];
    createdAt: string;
    updatedAt: string;
};

export type ApiErrorType = {
    data: {
        status: number;
        message: string;
    };
};
