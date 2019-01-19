
const updateUser = (user) => {
     return (dispatch) => {
    
                dispatch({
                    type: "UPDATE_USER",
                    payload: user
                })
        }
    }
   



const removeUser = () =>
{
    return {type : "Remover"}
}
export {
    updateUser,
    removeUser
}