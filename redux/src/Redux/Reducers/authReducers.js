

const reducer = (state={},action) =>
{
    console.log(action);
    switch(action.type)
    {
    case "UPDATE_USER":
    return { state, user : action.payload}
    
    case "Remover":
    return {...state,user:null}
    default: {
        return state;
    }
    }
}
export default reducer;
