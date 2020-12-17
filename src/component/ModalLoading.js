import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/esm/ModalHeader'
export default class ModalLoading extends Component {
    render() {
        return (
           <Modal show={this.props.showModal}>
               <Modal.Body>
                <div className="loader"></div>
               </Modal.Body>
           </Modal>
        )
    }
}
