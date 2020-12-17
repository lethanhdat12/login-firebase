export const Login = (payload)=>{
        return {
            type : 'login',
            payload : payload,
        }
}

export const Logout = ()=>{
    return {
        type : 'logout',
    }
}