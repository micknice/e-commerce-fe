export interface UserType {
    jwt: string;
    success: boolean;
    user: {
      id: number;
      username: string;
      email: string;
      firstName: string;
      lastName: string;
      emailVerified: boolean;
    };
    failureReason: null | string;
  }