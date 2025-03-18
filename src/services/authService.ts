import { axiosPrivate, axiosPublic } from "./axiosService"

export const refreshTokenAPI = () => {
    return axiosPrivate({
      url: '/auth/refresh',
      method: 'GET'
    })
}
export const getLoginurl= ()=>{
    return axiosPublic({
        url:'/auth/google/login',
        method:'GET'
    })
}
export const getTokenAPI =(code:string)=>{
    return axiosPublic({
        url:`auth/callback?code=${code}`,
        method:'GET'
    })
}
  