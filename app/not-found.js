import Link from "next/link"

export default function NaoEncontrado(){
    return(
        <main>
            <h1> Página nao encontrada </h1>
            <p> O roteiro que voce procurou nao existe </p>
            <Link href="/"> Voltar para a lista </Link>
        </main>
    )
}