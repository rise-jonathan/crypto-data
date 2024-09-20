import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CoinChart from './CoinPage/CoinChart';
import ChartPeriods from './CoinPage/ChartPeriods';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";


function ModalChart() {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            {/* Main Chart  */}
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <Modal.Dialog>
                    {/* <Modal.Header > */}
                    <Modal.Title>Coin Chart</Modal.Title>
                    {/* </Modal.Header> */}
                    <ChartPeriods />
                    <CoinChart />
                    <Modal.Footer>
                        <p className='me-3'>Modal body text goes here.</p>
                        <Button variant="secondary" onClick={handleShow} style={{ marginTop: '10px' }}>
                            <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} style={{ fontSize: "18px", cursor: "pointer", color: "#000" }} />
                        </Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>


            {/* Modal window */}
            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title >Coin Chart</Modal.Title>
                </Modal.Header>
                <ChartPeriods />
                <CoinChart />
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default ModalChart