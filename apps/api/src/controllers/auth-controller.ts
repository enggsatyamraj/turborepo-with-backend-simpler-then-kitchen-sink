export const sendResponse = (req:any,res:any) => {
    res.status(200).json({
        success:true,
        message:"this is the get request from the auth controller."
    })
}