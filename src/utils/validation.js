export const checkData=(email,password)=>{

    const emailResult = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const passwordResult = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!emailResult)return "Enter a valid email address"
    if(!passwordResult)return "Enter a valid password"

    return null

}