// Um componente pode receber "props" (dados enviados pelo componente pai)
function Alerta(props) {
    // Aqui usamos props.sucess, enviada pelo componente App
    return (
        <div class="alert alert-success" role="alert">
            This is a success alert—check it out!
        </div>
    );
}
export default Alerta;