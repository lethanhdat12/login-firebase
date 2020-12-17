import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import firebase from 'firebase';
import { ValidateEmail } from './ValidateEmail';

export default class ModalResetPass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gmail: null,
            err: null,
            success: null,
            check: null,
        }
    }

    onInputchange = (e) => {
        this.setState({ gmail: e.target.value });
    }
    onResetClick = (e) => {
        e.preventDefault();
        if (!ValidateEmail(this.state.gmail)) {
            this.setState({ err: 'Email không đúng' });
            this.setState({ success: null });
        } else {
            this.sendMail();
            this.setState({ err: null });
            this.setState({ success: 'Đã gửi thông tin đến Gmail của bạn' });
        }
    }
    sendMail = () => {
        const email = this.state.gmail;
        firebase.auth().sendPasswordResetEmail(
            email)
            .then(function () {
                console.log('pass reset thanh cong')
            })
            .catch(function (error) {
                console.log('loi roi nguoi ae oi , ', error);
            });
    }
    onHide = () => {
        this.props.onHide();
        this.setState({ err: null });
        this.setState({ success: null });
    }
    render() {
        const { err, success } = this.state;
        return (
            <Modal show={this.props.showModal} onHide={this.onHide}>
                <Modal.Header style={{ alignItems: 'center', justifyContent: 'center' }}> Reset Password </Modal.Header>
                <p className={err ? 'err' : 'success'} style={{ textAlign: 'center' }}> {err ? err : success} </p>
                <Modal.Body>
                    <form>
                        <div className="form-group form_resetPass">
                            <label htmlFor="configGmail">Nhập vào Gmail</label>
                            <input type="text" className="form-control" id="configGmail" placeholder="Nhập vào gmail" name="gmail" onChange={this.onInputchange} />
                        </div>
                        <div className="form-group text-center">
                            <button class="btn btn-warning" onClick={this.onResetClick}> Gửi gmail</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        )
    }
}
