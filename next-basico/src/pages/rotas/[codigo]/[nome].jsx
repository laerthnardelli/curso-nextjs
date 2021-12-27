import { useRouter } from 'next/router';

//dynamic routes
export default function codigoEnome() {
  const router = useRouter();
  console.log(router);
  const codigo = router.query.codigo;
  console.log(codigo);
  const nome = router.query.nome;
  console.log(nome);
  
  return (
    <div>
      <h1>Rotas / {codigo} / {nome}</h1>
    </div>
  )
}