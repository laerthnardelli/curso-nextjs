export default function SomaUm(props) {
  // props.numero++ //não posso fazer isso, porque propriedades é somente leitura
  return (
    <div>
      <h1>{props.numero + 1}</h1>
    </div>
  );
}