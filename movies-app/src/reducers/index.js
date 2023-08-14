export default function movies(state = [], action)      {       //actions like change state/modify state by giving an Intent
    if(action.type === 'ADD_MOVIES'){
        return action.movies ;
    }
    return state;       //if the type doesnt matches just return the state
}