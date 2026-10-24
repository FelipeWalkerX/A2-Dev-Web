export default function InfoAutor(props){
    return (
        <p>
            Conteudo gerado por IA e revisado por {props.professor.nome}, professor(a) de {props.professor.disciplina} na escola {props.professor.escola} 
        </p>
    );
}