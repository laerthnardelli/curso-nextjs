export default function SomentePar(props) {
  const numeroPar = props.numero % 2 === 0;
  return (
    <div>
      {numeroPar 
        ? <span>{props.numero}</span> 
        : null
      }
    </div>
  );
}


// export default function SomentePar(props) {
//   if (props.numero % 2 === 0) {
//     return <span>{props.numero} </span>
//   } else {
//     return null
//   }
// }