import React, { useState } from "react";

function Notas() {

    const [nome, setNome] = useState("");
    const [disciplina, setDisciplina] = useState("");

    const [notaTeste, setNotaTeste] = useState("");
    const [notaTrabalhos, setNotaTrabalhos] = useState("");
    const [notaAtitudes, setNotaAtitudes] = useState("");

    const [pTestes, setPTestes] = useState("");
    const [pTrabalhos, setPTrabalhos] = useState("");
    const [pAtitudes, setPAtitudes] = useState("");

    const [resultado, setResultado] = useState("");
    const [erro, setErro] = useState("");

    const calcularNota = () => {

        setErro("");
        setResultado("");

        const n1 = parseFloat(notaTeste);
        const n2 = parseFloat(notaTrabalhos);
        const n3 = parseFloat(notaAtitudes);

        const p1 = parseFloat(pTestes);
        const p2 = parseFloat(pTrabalhos);
        const p3 = parseFloat(pAtitudes);

        // Validação das notas
        if (
            n1 < 0 || n1 > 20 ||
            n2 < 0 || n2 > 20 ||
            n3 < 0 || n3 > 20
        ) {
            setErro("As notas devem estar entre 0 e 20.");
            return;
        }

        // Validação das percentagens
        if ((p1 + p2 + p3) !== 100) {
            setErro("A soma das percentagens deve ser 100.");
            return;
        }

        // Média ponderada
        const media =
            (n1 * (p1 / 100)) +
            (n2 * (p2 / 100)) +
            (n3 * (p3 / 100));

        const mencao =
            media >= 9.5 ? "Aprovado" : "Reprovado";

        setResultado(
            `Média Final: ${media.toFixed(2)} - ${mencao}`
        );
    };

    const limparFormulario = () => {

        setNome("");
        setDisciplina("");

        setNotaTeste("");
        setNotaTrabalhos("");
        setNotaAtitudes("");

        setPTestes("");
        setPTrabalhos("");
        setPAtitudes("");

        setResultado("");
        setErro("");
    };

    return (

        <div className="container mt-4">

            <h1>Cálculo da nota final</h1>

            <h2>Dados do Aluno</h2>

            <form>

                {/* Linha 8 + 4 */}
                <div className="row mb-3">

                    <div className="col-sm-8">

                        <label className="form-label">
                            Nome do aluno:
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Carlos Santos"
                        />

                    </div>

                    <div className="col-sm-4">

                        <label className="form-label">
                            Disciplina:
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            value={disciplina}
                            onChange={(e) => setDisciplina(e.target.value)}
                            placeholder="RC"
                        />

                    </div>

                </div>

                {/* Linha 3 + 3 */}
                <div className="row mb-3">

                    <div className="col-sm-3">

                        <label className="form-label">
                            Nota dos Testes:
                        </label>

                        <input
                            type="number"
                            className="form-control"
                            value={notaTeste}
                            onChange={(e) => setNotaTeste(e.target.value)}
                            placeholder="14"
                        />

                    </div>

                    <div className="col-sm-3">

                        <label className="form-label">
                            (%) Testes:
                        </label>

                        <input
                            type="number"
                            className="form-control"
                            value={pTestes}
                            onChange={(e) => setPTestes(e.target.value)}
                            placeholder="40"
                        />

                    </div>

                </div>

                {/* Linha 3 + 3 */}
                <div className="row mb-3">

                    <div className="col-sm-3">

                        <label className="form-label">
                            Nota dos Trabalhos:
                        </label>

                        <input
                            type="number"
                            className="form-control"
                            value={notaTrabalhos}
                            onChange={(e) => setNotaTrabalhos(e.target.value)}
                            placeholder="18"
                        />

                    </div>

                    <div className="col-sm-3">

                        <label className="form-label">
                            (%) Trabalhos:
                        </label>

                        <input
                            type="number"
                            className="form-control"
                            value={pTrabalhos}
                            onChange={(e) => setPTrabalhos(e.target.value)}
                            placeholder="40"
                        />

                    </div>

                </div>

                {/* Linha 3 + 3 */}
                <div className="row mb-3">

                    <div className="col-sm-3">

                        <label className="form-label">
                            Nota das Atitudes:
                        </label>

                        <input
                            type="number"
                            className="form-control"
                            value={notaAtitudes}
                            onChange={(e) => setNotaAtitudes(e.target.value)}
                            placeholder="16"
                        />

                    </div>

                    <div className="col-sm-3">

                        <label className="form-label">
                            (%) Atitudes:
                        </label>

                        <input
                            type="number"
                            className="form-control"
                            value={pAtitudes}
                            onChange={(e) => setPAtitudes(e.target.value)}
                            placeholder="20"
                        />

                    </div>

                </div>

                {/* Botões */}
                <div class="mt-3">

                    <button
                        class="col-sm-3"                    
                        type="button"
                        className="btn btn-primary"
                        onClick={calcularNota}
                    >
                        Calcular
                    </button>

                    <button
                        class="col-sm-3"
                        type="button"
                        className="btn btn-secondary"
                        onClick={limparFormulario}
                    >
                        Limpar
                    </button>

                </div>

                {/* Erros */}
                {erro && (
                    <div className="alert alert-danger">
                        {erro}
                    </div>
                )}

                {/* Resultado */}
                {resultado && (
                    <div className="alert alert-success">
                        {resultado}
                    </div>
                )}

            </form>

        </div>
    );
}

export default Notas;