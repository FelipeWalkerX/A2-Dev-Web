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

    return(
        <main>
            <Cabecalho titulo = "Plataforma de Roteiros" />
            <h2> <br /> Deseja sugerir um roteiro novo? </h2>
            <p> Preencha os dados abaixo para sugerir um roteiro de estudo novo.  </p>

            <form>  {/* Agrupa os formularios */}
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
                    <select value = {ano} onChange = {(a) => setAno(a.target.value)}>       {/* Select para puxar os anos */}
                        <option value = ""> Escolha o ano: </option>
                        <option value = "6"> 6º ano </option>
                        <option value = "7"> 7º ano </option>
                        <option value = "8"> 8º ano </option>
                        <option value = "9"> 9º ano </option>
                    </select>
                </label>

                <label>
                    <br />Disciplina: 
                    <select value = {disciplina} onChange={(e) => setDisciplina(e.target.value)}> {/*  e as materias que tem, pra nao dar ruim */}
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

            </form>
        </main>
    );
}
