import RoteiroCard from "./RoteiroCard";

export default function ListaRoteiros(props){
    return(
        <ul>    {/*Aqui dentro ja é JSX*/}
            props.roteiros.map((roteiro)=>(
                <RoteiroCard key = {roteiro.id} roteiro = {roteiro} />
            ))
        </ul>
    );
}