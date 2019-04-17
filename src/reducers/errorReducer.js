import {VALIDAR_FORMULARIO, MOSTRAR_ERROR} from '../actions/types';

// cada reducer tiene su propio state

const initialState = {
  error: false
}

export default function (state = initialState, action) {
  switch(action.type) {
    case VALIDAR_FORMULARIO:
      return {
        error: action.payload
      }
      case MOSTRAR_ERROR:
      return {
        error: action.payload
      }
      default: return state
  }
}
