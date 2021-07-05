import React from 'react';
import './css/modal.css';
import './css/index.css';
import Modal from "./components/Modal";


class App extends React.Component{

    constructor(props) {
        super(props);

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);

        this.state = {
            modals: [
                {id: '#one', status: false},
                {id: '#two', status: false},
            ],
        }
    }

    handleOpenModal(event){
        let id = event.target.getAttribute('data-modal-id') || event.target.href.split('/').pop();
        const clone = this.state.modals.concat();
        const elem = clone.find(e => e.id === id);
        elem.status = true;
        this.setState({
            modals: clone,
        })
    }

    handleCloseModal(id){
        const clone = this.state.modals.concat();
        const elem = clone.find(e => e.id === id);
        elem.status = false;
        this.setState({
            modals: clone,
        })
    }

    render() {
        return (
            <div className="App">

                <button
                    data-modal-id={`#one`}
                    type={`button`}
                    className={`open-modal-btn`}
                    onClick={(event) => this.handleOpenModal(event)}>
                    Open modal #1
                </button>

                <a
                    href={`#two`}
                    className={`open-modal-btn`}
                    onClick={(event) => this.handleOpenModal(event)}>
                    Open modal #2
                </a>

                <Modal
                    state={this.state.modals.find(e => e.id === '#one')}
                    onCloseModal={this.handleCloseModal}>
                    Modal #1
                </Modal>

                <Modal
                    state={this.state.modals.find(e => e.id === '#two')}
                    onCloseModal={this.handleCloseModal}>
                    Modal #2
                </Modal>

            </div>
        );
    }
}



export default App;
