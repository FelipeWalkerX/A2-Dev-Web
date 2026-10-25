"use client";

import {useState} from "react";
import Cabecalho from "@/components/cabecalho"; 

export default function SugerirRoteiro(){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [tema, setTema] = useState("");
    const [disciplina, setDisciplina] = useState("");
    const [ano, setAno] = useState("");
    const [qtdeQuestoes, setQtdeQuestoes] = useState("");
    const [dataUso, setDataUso] = useState("");
    const [enviado, setEnviado] = useState(false);
    const [erros, setErros] = useState([]); // Os erros comeca como uma lista vazia

    function enviar(e){     // Funcao para enviar o formulario
        e.preventDefault(); //Isso aqui previne de recarregar a pagina quando o formulario for enviado

        //Validacao de erros
        const novosErros = [];      //Uma lista vazia que atualiza toda vez que o botao de enviar e clicado

        if (nome === ""){       //Se o nome tiver vazio
            novosErros.push("Preencha o nome")      //pede para o professor digitar
        }

        if (email === ""){
            novosErros.push("Preencha o email")
        }else if(!email.endsWith("@escola.educa.gov.br")){        //Ve se o email nao termina com @escola.educa.gov.br  \\ termina com -> endsWith
            novosErros.push("O email precisa ser @escola.educa.gov.br");        // Se nao termina, adiciona no fim da lista de erros
        }
        
        if (tema === ""){
            novosErros.push("Preencha o tema")
        }

        if (ano === ""){
            novosErros.push("Preencha o ano")
        }

        if (disciplina === ""){
            novosErros.push("Preencha a disciplina")
        }

        if (qtdeQuestoes === ""){
            novosErros.push("Preencha a quantidade de questões")
        }else if(qtdeQuestoes < 3 || qtdeQuestoes > 10){
            novosErros.push("Somente de 3 a 10 questões");
        }

        //Validando a data de hoje
        const hoje = new Date();       //Cria um objeto com a data e hora de agora e guarda em "hoje"
        hoje.setHours(0, 0, 0, 0);         //Zera as horas, minutos, segundos e milisegundos de "hoje"

        const dataMinima = new Date(hoje);    //Faz uma copia de "hoje" para a dataMinima
        dataMinima.setDate(dataMinima.getDate() + 7);       //Pega a data de hoje e soma 7 (caso termine o mes, ele atualiza o mes tambem)

        const dataEscolhida = new Date(dataUso + "T00:00:00");  //Transforma a data para o fuso do br para nao ter problema

        if (dataUso === ""){
            novosErros.push("Preencha a data de uso")
        }else if(dataEscolhida < dataMinima){       //Compara a data minima que o professor pode pedir roteiro com a data que ele escolheu, se for menos de 7 dias, da ruim 
            novosErros.push("Favor solicitar com pelo menos 7 dias de antecedência");      // E cai na lista de erros
        }



        setErros(novosErros);
        setEnviado(novosErros.length === 0);    // Agora so envia se nao tiver nada na lista de erros

    }

    return(
        <main>
            <Cabecalho titulo = "Plataforma de Roteiros" />
            <h2> <br /> Deseja sugerir um roteiro novo? </h2>
            <p> Preencha os dados abaixo para sugerir um roteiro de estudo novo.  </p>

            <form onSubmit = {enviar}>  {/* Agrupa os formularios e ja se previne com a funcao enviar pra nao recarregar assim que for enviado */}
                {/* Campos para digitar nome */}
                <label> {/* Nome do campo que aparece para o usuario */}
                    Nome:
                    <input type = "text" value = {nome} onChange = {(e) => setNome(e.target.value)} />      {/* Um campo de texto para o usuario digitar */}
                </label>

                {/* email institucional */}
                <label>
                    Email Institucional:
                    <input  type = "email" value = {email} onChange = {(e) => setEmail(e.target.value)} />  {/* Colocado tipo email e nao texto pois assim ele ja valida se tem um @ */}
                </label>

                {/* e tema do roteiro solicitado */}
                <label>
                    Tema: 
                    <input type = "text" value = {tema} onChange = {(e) => setTema(e.target.value)} />
                </label>

                <h3> <br /><br /> Roteiro das questoes <br /><br /> </h3>

                <label>
                    Ano: 
                    <select value = {ano} onChange = {(a) => setAno(a.target.value)}>       {/* Select para puxar os anos... */}
                        <option value = ""> Escolha o ano: </option>
                        <option value = "6"> 6º ano </option>
                        <option value = "7"> 7º ano </option>
                        <option value = "8"> 8º ano </option>
                        <option value = "9"> 9º ano </option>
                    </select>
                </label>

                <label>
                    <br />Disciplina: 
                    <select value = {disciplina} onChange={(e) => setDisciplina(e.target.value)}> {/*  ...e as materias que tem, pra nao dar ruim */}
                        <option value = ""> Escolha uma disciplina: </option>
                        <option value = "Matemática"> Matemática </option>
                        <option value = "História"> História </option>
                        <option value = "Ciências"> Ciências </option>
                        <option value = "Português"> Português </option>
                    </select>
                </label>

                <label>
                    <br />Data de uso: 
                    <input type = "date" value = {dataUso} onChange = {(e) => setDataUso(e.target.value)} />    {/* usado data para digitar so data, certinho */}
                </label>

                <label>
                    <br />Quantidade de questoes: 
                    <input type = "number" value = {qtdeQuestoes} onChange = {(e) => setQtdeQuestoes(e.target.value)} />    {/* E aqui so pra digitar numeros */}
                </label>

                <button type = "submit"> Enviar sugestão </button>
            </form>

            <ul>
                {erros.map((erro, posicao) =>(
                    <li key = {posicao}>{erro}</li>
                ))}
            </ul>

            {enviado && <p>Sugestão enviada com sucesso!</p>}       {/* Se for enviado, ele mostra essa mensagem, é um if dentro do jsx */}

        </main>
    );
}
