import GoogleAuthuserLogin from "./services/GoogleAuthuserLogin";

export const resolvers={
  verifyAuthToken:async(parent:any,{token}:{token:string})=>{
    const res=await GoogleAuthuserLogin(token);
    console.log('from resolver ',res);
    return "ok";
  }
}