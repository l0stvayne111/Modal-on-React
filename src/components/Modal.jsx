import React from 'react';

class Modal extends React.Component {

    constructor(props) {
        super(props);

        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    handleCloseModal(event){
        if((!event.target.closest('.modal__body'))){
            this.props.onCloseModal(this.props.state.id);
        }
    }

    render() {
        return (
            <div className={`modal ${this.props.state.status ? 'modal--open' : 'modal--close'}`} onClick={event => this.handleCloseModal(event)}>
                <div className="modal__body">
                    <button type={`button`} className="modal__close" onClick={() => this.props.onCloseModal(this.props.state.id)}>
                        <svg width="12" height="12" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.8182 1.93934L1.93957 19.818M19.8182 19.818L1.93957 1.93934" stroke="#535c69"
                                  stroke-width="3" stroke-linecap="round"/>
                        </svg>
                    </button>
                    <p>{this.props.children}</p>
                </div>
            </div>
        );
    }
}

export default Modal;