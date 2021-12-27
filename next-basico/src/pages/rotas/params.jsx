import { useRouter } from 'next/router';

export default function params() {
  const router = useRouter();
  console.log(router);

  const id = router.query.id;
  const nome = router.query.nome;
  //http://localhost:3000/rotas/params?nome=Laerth&id=123

  return (
    <div>
      <h1>Rotas Params {id} e {nome}</h1>
    </div>
  )
}