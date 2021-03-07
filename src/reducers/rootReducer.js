const initialState = {
    userName:'',
    password:''
}

function rootReducer(state = initialState, action) {

    switch(action.type) {
        case 'SET_USERNAME':
            return { ...state, userName : action.payload}
        case 'SET_PASSWORD':
            return {  ...state, password : action.payload}
        default:
            return state;
    }

}

export default rootReducer;