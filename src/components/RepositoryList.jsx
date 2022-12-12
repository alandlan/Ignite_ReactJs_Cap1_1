import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';
import { useEffect, useState } from "react";

const repository = {
    name: 'unform',
    description: 'teste',
    link: 'www.google.com.br'
}

export function RepositoryList(){

    const [repositories, setRepositories] = useState([]);

    useEffect(() =>{
        fetch('https://api.github.com/users/alandlan/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    },[]);

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