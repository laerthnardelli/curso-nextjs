import { useRouter } from 'next/router';
import Link from 'next/link';

//dynamic routes
export default function Buscar() {
  const router = useRouter();
  console.log(router);
  const codigo = router.query.codigo;
  console.log(codigo);

  return (
    <div>
      <h1>Rotas / {codigo} / Buscar!!!</h1>
      <Link href="/rotas" >
        <a>
          <button>Voltar</button>
        </a>
      </Link>
    </div>
  )
}