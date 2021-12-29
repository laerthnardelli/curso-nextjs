import { useRouter } from 'next/router';
import Link from 'next/link';

//dynamic routes
export default function CodigoEnome() {
  const router = useRouter();
  console.log(router);
  const codigo = router.query.codigo;
  console.log(codigo);
  const nome = router.query.nome;
  console.log(nome);
  
  return (
    <div>
      <h1>Rotas / {codigo} / {nome}</h1>
      <Link href={"/rotas"}>
        <button>Voltar</button>
      </Link>
    </div>
  )
}