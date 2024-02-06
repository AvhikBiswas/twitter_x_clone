interface AuthData {
    iss: string;
    azp: string;
    aud: string;
    sub: string;
    email: string;
    nbf: string;
    email_verified: string;
    name: string;
    picture: string;
    given_name: string;
    family_name: string;
    locale: string;
    iat: string;
    typ: string;
    exp: string;
    jti: string;
    alg: string;
    kid: string;
}

export type UserData={
    userName:string,
    firstName:string,
    lastName?:string,
    email:string,
    profileImg:string,
}

export default AuthData;