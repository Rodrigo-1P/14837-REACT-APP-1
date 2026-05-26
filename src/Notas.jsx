import React, { useState } from 'react';


function calcularNota(){
    e.preventDefault();

    notafinal = 0;

    n1 = parseFloat(FormData.inputNotaTeste) || 0;
    n1 = parseFloat(FormData.inputNotaTrabalhos) || 0;
    n1 = parseFloat(FormData.inputNotaAtitudes) || 0;

    p1 = parseFloat(FormData.inputPtestes) || 0;
    p2 = parseFloat(FormData.inputPtrabalhos) || 0;
    p3 = parseFloat(FormData.inputPatitudes) || 0;

    notafinal = (n1 * (p1 / 100)) + (n2 * (p2 / 100)) + (n3 * (p3 / 100));
}


function Notas() {
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