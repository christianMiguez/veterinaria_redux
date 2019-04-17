import React, { Component } from 'react';
import Cita from './Cita';

//REDUX

import {connect} from 'react-redux';
import {obtenerCitas} from '../actions/citasActions';

import store from '../store'
store.subscribe(() => {
  localStorage.setItem('citas', JSON.stringify(store.getState()))
})

class ListaCitas extends Component {

  componentDidMount() {
    this.props.obtenerCitas()
  }

  render() {
    const citas = this.props.citas;

    // Nos va a decir cuanto mide este arreglo
    //console.log(Object.keys(citas).length);

    const mensaje = Object.keys(citas).length === 0 ? 'No hay consultas' : 'Administra consultas'

    return (
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title text-center">{mensaje}</h2>
           <div className="lista-citas">
           {Object.keys(this.props.citas).map(cita => (
             <Cita key={cita} info={this.props.citas[cita]} />

           ))}
           </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  citas: state.citas.citas
})

export default connect(mapStateToProps, {obtenerCitas}) (ListaCitas);
