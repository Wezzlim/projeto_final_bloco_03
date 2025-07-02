
import FormProduto from "../formproduto/FormProduto";

import 'reactjs-popup/dist/index.css';
import './ModalProduto.css'
import Popup from "reactjs-popup";

function ModalProduto() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='
                        border rounded px-4 py-2 
                        hover:bg-indigo-200 
                        hover:text-indigo-800
                        hover:cursor-pointer'>
                        Cadastrar Produto
                    </button>
                }
                modal
            >
                <FormProduto/>
            </Popup>
        </>
    );
}

export default ModalProduto;