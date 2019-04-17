import {MOSTRAR_CITAS, BORRAR_CITA, AGREGAR_CITA} from './types'

export const obtenerCitas = () => {
  return {
    type: MOSTRAR_CITAS
  }
}

export const agregarCita = (cita) => {
  return {
    type: AGREGAR_CITA,
    //el payload son los datos que le vamos a pasar al nuevo state
    payload: cita
  }
}


export const borrarCita = (id) => {
  return {
    type: BORRAR_CITA,
    //el payload son los datos que le vamos a pasar al nuevo state
    payload: id
  }
}
