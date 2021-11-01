import { useState } from "react"
import ContadorDisplay from "../../components/ContadorDisplay"

export default function contador() {

  const [valor, setValor] = useState(0);

  // function incrementar() {
  //   setValor(valor + 1)
  // }

  const incrementar = () => setValor(valor + 1);

  // function decrementar() {
  //   setValor(valor - 1)
  // }
  const decrementar = () => setValor(valor - 1);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <h1>Contador</h1>
      <ContadorDisplay numero={valor} />
      {/* <div>Valor: ???{valor}</div> */}
      <div>
        <button onClick={decrementar}>-</button>
        <button onClick={incrementar}>+</button>
        {/* <button onClick={() => setValor(valor + 1)}>+</button> */}

      </div>

    </div>
  );
}
