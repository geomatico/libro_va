import React, { Component } from 'react';
import Notification from '../Notification/Notification';
import './Notifications.css';

class Notifications extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  render() {
    return (
      <div className="bg-white mb-3">
        <a data-toggle="collapse" data-target="#notifications">
          <p className="child blue title pt-2 pl-2 mb-0">
            <span className="childIcon blue">f </span>Libros pendientes de préstamo
          </p>
        </a>
      <div id="notifications" class="collapse grey pl-2 pb-2">
        <p>Te han pedido prestados los siguientes libros: (Confirma su prestamo):</p>
        <Notification src="./media/dedo.jpg" title="El dedo en la nariz" author="Paula Merlán Gómez"/>
        <Notification src="./media/candido.jpg" title="El dedo en la nariz" author="Paula Merlán Gómez"/>
        <Notification src="./media/arbol.jpg" title="El dedo en la nariz" author="Paula Merlán Gómez"/>
        <Notification src="./media/volcan.jpg" title="El dedo en la nariz" author="Paula Merlán Gómez"/>
        <Notification src="./media/lechuga.jpg" title="El dedo en la nariz" author="Paula Merlán Gómez"/>
        <Notification src="./media/doctor.jpg" title="El dedo en la nariz" author="Paula Merlán Gómez"/>
      </div>
    </div>  
    );
  }
}

export default Notifications;