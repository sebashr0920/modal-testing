import {Fragment} from "react";
import {Modal} from "./Modal";
import {useState} from "react";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Fragment>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <p>This is a page</p>
                <button onClick={() => setIsOpen(true)}>open modal</button>
            </div>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
        </Fragment>
    );
}

export default App;
