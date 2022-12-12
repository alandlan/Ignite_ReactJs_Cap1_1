import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: 'unform',
    description: 'teste',
    link: 'www.google.com.br'
}

export function RepositoryList(){
    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem />
            </ul>
        </section>
    )
}