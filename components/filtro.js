export default function Filtro(props){
    return(
        <div className = "filtros">
              
            <select value = {props.disciplina} onChange={(e) => props.setDisciplina(e.target.value)}> 
                <option value = ""> Escolha uma disciplina: </option>
                <option value = "Matemática"> Matemática </option>
                <option value = "História"> História </option>
                <option value = "Ciências"> Ciências </option>
                <option value = "Português"> Português </option>
            </select>
                {/*Filtro do ano*/}
            <select value = {props.ano} onChange = {(a) => props.setAno(a.target.value)}>
                <option value = ""> Escolha o ano: </option>
                <option value = "6"> 6º ano </option>
                <option value = "7"> 7º ano </option>
                <option value = "8"> 8º ano </option>
                <option value = "9"> 9º ano </option>
            </select>
        </div>
    );
}