export function getStaticPaths() {
  return {
    fallback: false, //erro 404 quando não encontrar o id específico
    paths: [
      { params: { id: '107' } },
      { params: { id: '203' } },
      { params: { id: '1345' } },
    ]
  }
}


export function getStaticProps() {
  return {
    props: {}
  }
}

export default function AlunoPorId() {
  return (
    <div>
      <h1>Detalhes do Aluno</h1>
    </div>
  );
}