"use client";

import {useState} from "react";
import Cabecalho from "@/components/cabecalho"; 

export default function SugerirRoteiro(){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [tema, setTema] = useState("");

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
            </form>
        </main>
    );
}