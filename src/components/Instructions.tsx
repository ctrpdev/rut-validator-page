export default function Instructions() {
  return (
    <div>
      <h2 className="text-lg font-bold my-2">Instrucciones</h2>
      <ol className="list-decimal list-inside">
        <li>Ingresa un R.U.T. válido en el campo de entrada.</li>
        <li>Presiona "Enter" o haz clic en "Validar" para comprobar el R.U.T.</li>
        <li>Observa el mensaje de validación que aparece debajo del campo.</li>
      </ol>
    </div>
  );
}
