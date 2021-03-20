import { round } from "mathjs"
import { ADD_ELEM } from "../actions/actionsType"
import { CLEAR } from "../actions/actionsType"
import { EQUAL } from "../actions/actionsType"
import { BACK } from "../actions/actionsType"
import { CALC } from "../actions/actionsType"

const calcState = {
  input: 0,
  history: "",
  btns: [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "00",
    "0",
    ".",
    "+",
    "C",
    "b",
    "=",
  ],
}

export default function(state = calcState, action) {
  const maths = eval(action.input)
  switch (action.type) {
    case ADD_ELEM:
      if (state.input.length === 13) {
        return {
          ...state,
          input: 0,
          history: 0,
        }
      } else if (state.input === 0) {
        return {
          ...state,
          input:
            state.input === 0 ? action.text - state.input : round(maths, 4),
          history: state.input === 0 ? action.text - state.input : action.text,
        }
      } else {
        return {
          ...state,
          input: state.input === 0 ? action.text : state.input + action.text,
          history: state.input === 0 ? action.text : state.input + action.text,
        }
      }
    case CLEAR:
      return {
        ...state,
        input: 0,
        history: "",
      }
    case EQUAL:
      if (state.input.length < 1) {
        return {
          ...state,
          history: state.input + "=",
        }
      } else {
        return {
          ...state,
          input: round(maths, 4),
        }
      }
    case BACK:
      if (state.input.length > 1) {
        return {
          ...state,
          input: state.input.substring(0, state.input.length - 1),
          history: state.input.substring(0, state.input.length - 1),
        }
      } else {
        return {
          ...state,
          input: 0,
          history: "",
        }
      }
    // case CALC:
    //   if (state.input.length > 0) {
    //     return {
    //       ...state,
    //       input: action.text,
    //       history: action.text,
    //     }
    //   }
    //  else if(action.text === ""){
    //   return {
    //     ...state,
    //     input: state.input+"1",
    //   }
    // }
    // else {
    //   return {
    //     ...state,
    //     input: state.input + ".",
    //     history: state.input + ".",
    //   }
    // }
    default:
      return state
  }
}
