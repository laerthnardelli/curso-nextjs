import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Params() {
  const router = useRouter();
  console.log(router);

  const id = router.query.id;
  const nome = router.query.nome;
  //http://localhost:3000/rotas/params?nome=Laerth&id=123

  return (
    <div>
      <h1>Rotas Params {id} e {nome}</h1>
      <Link href={"/rotas"}>
        <button>Voltar</button>
      </Link>
    </div>
  )
}