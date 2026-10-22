export default function RoteiroCard(props){
    return (
        <li> {props.roteiro.titulo} - {props.roteiro.disciplina}, {props.roteiro.ano}º ano </li>  
    );
}