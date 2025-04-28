import {REMOVE_PERSON, RESET_PEOPLE, CLEAR_PEOPLE} from './actions'
import data from './data'

const reducer = (state, action) => {
    if(action.type===REMOVE_PERSON){
        const newPeople = state.people.filter((person) => person.id !== action.payload.id)
        return({...state, people: newPeople})
    }
    if(action.type===RESET_PEOPLE){
        return({...state, people: data})
    }
    if(action.type===CLEAR_PEOPLE){
        return({...state, people: []})
    }
    throw new Error(`No matching ${action.type} action.`)
}

export default reducer