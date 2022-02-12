import React from 'react';

export const Modal = ({setIsOpen}) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{backgroundColor: 'green', padding: '10px'}}>
                <h2>This is a modal</h2>
                <p>Lorem ipsum dolor sit amet.</p>
                <button onClick={() => setIsOpen(isOpen => !isOpen)}>close</button>
            </div>
        </div>
    );
}
