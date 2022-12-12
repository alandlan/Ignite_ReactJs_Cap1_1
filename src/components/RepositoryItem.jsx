export function RepositoryItem(props){

    return(
        <li>
            <strong>{props.repository?.name ?? "default"}</strong>
            <p>Forms in react</p>

            <a href="">Acessar repositorio</a>
        </li>
    )
}