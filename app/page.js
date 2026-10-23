"use client";
import { useState } from "react"

// Importando os roteiros
import roteiros from "@/data/roteiros.json"
import Cabecalho from "@/components/cabecalho"
import ListaRoteiros from "@/components/listaRoteiros";


export default function Home() {
  const [disciplina, setDisciplina] = useState("");
  const [ano, setAno] = useState("");    //É o filtro

  //filter funciona como um for e um if junto
  const roteirosFiltrados = roteiros.filter((roteiro) => 
    (disciplina === "" || roteiro.disciplina === disciplina) && 
    (ano === "" || roteiro.ano === ano));  //Ele funciona como um for e um if junto
  return (
    <main>  
      {/* <h1> é o titulo */}
      <Cabecalho titulo = "Plataforma de roteiros"/>
      {/* <p> é o texto normal */}
      <p> 
        Temos {roteiros.length} roteiros disponíveis  
      </p>  
      {/*Filtro da disciplina*/}
      <select value = {disciplina} onChange={(e) => setDisciplina(e.target.value)}> 
        <option value = ""> Escolha uma disciplina: </option>
        <option value = "Matemática"> Matemática </option>
        <option value = "História"> História </option>
        <option value = "Ciências"> Ciências </option>
        <option value = "Português"> Português </option>
      </select>
      {/*Filtro do ano*/}
      <select value = {ano} onChange = {(a) => setAno(a.target.value)}>
        <option value = ""> Escolha o ano: </option>
        <option value = "6"> 6º ano </option>
        <option value = "7"> 7º ano </option>
        <option value = "8"> 8º ano </option>
        <option value = "9"> 9º ano </option>
      </select>
      <p>Voce escolheu a matéria: {disciplina} do {ano}º ano</p>
      {/* .map e ul some e vira so essa linha agora, pois ta tudo dentro do arquivo listaRoteiros agora */}
          <ListaRoteiros roteiros = {roteirosFiltrados} />

    </main>
    ); 
  
}

// // serve para fora do return
// {/* */} serve para dentro do return