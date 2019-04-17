import React, { Component } from 'react';

//redux
import {connect} from 'react-redux';
import {borrarCita} from '../actions/citasActions'

class Cita extends Component {

  eliminarCita = () => {
    this.props.borrarCita(this.props.info.id);
  }
  render() {
    const {fecha, hora, mascota, dueno, sintomas, id} = this.props.info
    return (
      <div className="media mt-3">
        <div className="media-body">
          <h3 className="mt-0">{mascota}</h3>
          <p className="card-text"><span>Ticket: </span>{id}</p>
          <p className="card-text"><span>DUEÑO: </span>{dueno}</p>
          <p className="card-text"><span>FECHA: </span>{fecha}</p>
          <p className="card-text"><span>HORA: </span>{hora}</p>
          <p className="card-text"><span>SINTOMAS: </span>{sintomas}</p>

          <button className="btn btn-danger" onClick={this.eliminarCita}>Borrar &times;</button>
        </div>
      </div>
    );
  }
}

export default connect(null, {borrarCita}) (Cita);
