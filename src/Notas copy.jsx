import React, { useState } from 'react';


function Notas() {
    const [notaTeste, setNotaTeste] = useState('');
    const [notaTrabalhos, setNotaTrabalhos] = useState('');
    const [notaAtitudes, setNotaAtitudes] = useState('');
    const [pTestes, setPTestes] = useState('');
    const [pTrabalhos, setPTrabalhos] = useState('');
    const [pAtitudes, setPAtitudes] = useState('');
    const [notaFinal, setNotaFinal] = useState(null);

    const calcularNota = () => {
        const n1 = parseFloat(notaTeste) || 0;
        const n2 = parseFloat(notaTrabalhos) || 0;
        const n3 = parseFloat(notaAtitudes) || 0;
        const p1 = parseFloat(pTestes) || 0;
        const p2 = parseFloat(pTrabalhos) || 0;
        const p3 = parseFloat(pAtitudes) || 0;

        if (n1 <= 20 && n2 <= 20 && n3 <= 20) {
        setNotaFinal((n1 * (p1 / 100)) + (n2 * (p2 / 100)) + (n3 * (p3 / 100)));
        } else {
        setNotaFinal(null);
        }
    };
    return (
        <form>
        <div class="form-row">
            <div class="form-group col-sm-8">
            <label for="inputNome">Nome do aluno:</label>
            <input type="text" class="form-control" id="inputNome" placeholder="Carlos Santos"></input>
            </div>
            <div class="form-group col-sm-4">
            <label for="inputDisciplina">Disciplina:</label>
            <input type="text" class="form-control" id="inputDisciplina" placeholder="RC"></input>
            </div>
        </div>
        <div class="form-group mt-3">
            
            <div class="form-row">
                <div class="form-group col-6 col-sm-3">
                    <label for="inputNotaTeste">Notas do Teste:</label>
                    <input type="text" class="form-control" id="inputNotaTeste" placeholder="14"></input>
                </div>
                <div class="form-group col-6 col-sm-3">
                    <label for="inputPtestes">(%) Testes::</label>
                    <input type="text" class="form-control" id="inputPtestes" placeholder="40"></input>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-6 col-sm-3">
                    <label for="inputNotasTrabalhos">Notas dos Trabalhos:</label>
                    <input type="text" class="form-control" id="inputNotasTrabalhos" placeholder="18"></input>
                </div>
                <div class="form-group col-6 col-sm-3">
                    <label for="inputPtrabalhos">(%) Trabalhos::</label>
                    <input type="text" class="form-control" id="inputPtrabalhos" placeholder="40"></input>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-6 col-sm-3">
                    <label for="inputNotasAtitudes">Notas das Atitudes:</label>
                    <input type="text" class="form-control" id="inputNotasAtitudes" placeholder="16"></input>
                </div>
                <div class="form-group col-6 col-sm-3">
                    <label for="inputPatitudes">(%) Atitudes::</label>
                    <input type="text" class="form-control" id="inputPatitudes" placeholder="20"></input>
                </div>
            </div>
        </div>
        <button type="button" className="btn btn-primary"
            onClick={calcularNota}>Calcular</button>
        </form>
    );
}

export default Notas;