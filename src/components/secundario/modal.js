import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalComponent = ({ 
    show, 
    title, 
    children, 
    onClose, 
    primaryAction, 
    secondaryAction 
}) => {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton style={{ backgroundColor: '#2D4076', color: '#C6F8CF', border: 'none' }}>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: '#2D4076', color: '#C6F8CF' }}>
                {children}
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: '#2D4076', color: '#C6F8CF', border: 'none' }}>
                <Button variant="secondary" onClick={onClose}>
                    Cerrar
                </Button>
                {secondaryAction && (
                    <Button 
                        variant={secondaryAction.variant || 'primary'} 
                        onClick={secondaryAction.onClick}
                        style={{ backgroundColor: secondaryAction.bgColor || '#C6F8CF', color: secondaryAction.color || '#232D47', border: 'none' }}
                    >
                        {secondaryAction.label}
                    </Button>
                )}
                {primaryAction && (
                    <Button 
                        variant={primaryAction.variant || 'success'} 
                        onClick={primaryAction.onClick}
                        style={{ backgroundColor: primaryAction.bgColor || '#C6F8CF', color: primaryAction.color || '#232D47', border: 'none' }}
                    >
                        {primaryAction.label}
                    </Button>
                )}
            </Modal.Footer>
        </Modal>
    );
};

export default ModalComponent;
