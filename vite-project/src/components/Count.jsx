import React, {useState} from "react";

function Contador(){
    const [contador, setContador] = useState(0); 

    const incrementar = () =>{
        setContador(contador + 1); 
    }

    const decrementar = () => {
        setContador(contador - 1);
    }

    return(
        <div className="container">
            <h2>Contador</h2>
            <h3>Escolha uma das opções abaixo!</h3>
            <p>Valor: {contador}</p>
            <button className="btn" onClick={incrementar}>Aumentar</button>
            <button className="btn" onClick={decrementar}>Diminuir</button>
        </div>
    );
}

export default Contador;