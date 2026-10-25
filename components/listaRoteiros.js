import RoteiroCard from "./RoteiroCard";

export default function ListaRoteiros(props){
    if (props.roteiros.length === 0){
        return(
            <p> Nenhuma materia encontrada. </p>
        )
    }
    return(
        <ul className="grade">    {/*Aqui dentro ja é JSX*/}
        {/* <ul> sao marcadores, neste caso, ele mostra cada um dos roteiros, como se fosse um vetor de roteiros */}
            {props.roteiros.map((roteiro)=>(
                <RoteiroCard key = {roteiro.id} roteiro = {roteiro} />
            ))}
        </ul>
    );
}