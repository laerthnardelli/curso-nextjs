import { useRouter } from 'next/router';

//dynamic routes
export default function buscar() {
  const router = useRouter();
  console.log(router);
  const codigo = router.query.codigo;
  console.log(codigo);

  return (
    <div>
      <h1>Rotas / {codigo} / buscar!!!</h1>
    </div>
  )
}