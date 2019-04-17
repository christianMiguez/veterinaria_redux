import {VALIDAR_FORMULARIO, MOSTRAR_ERROR} from './types';

export const validarFormulario = (estado) => {
  return {
    type: VALIDAR_FORMULARIO,
    payload: estado
  }
}

export const mostrarError = (estado) => {
  return {
    type: MOSTRAR_ERROR,
    payload: estado
  }
}
