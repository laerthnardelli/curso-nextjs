
import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function Notificacoes() {

  //const ctx = useAppData();
  const { tema, alternarTema } = useAppData();

  return (
    <Layout
      titulo={"Notificações"}
      subtitulo={"Aqui você irá gerenciar as suas notificações"}>
      {/* <h3>{ctx.tema}</h3>
      <button onClick={ctx.alternarTema} >Click</button> */}
      {/* <h3>{tema}</h3> */}
      <button onClick={alternarTema}>Alternar Tema</button>
    </Layout>
  );
}