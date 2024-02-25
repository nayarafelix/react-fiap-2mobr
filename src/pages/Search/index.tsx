import { useSearch } from "./hooks/useSearch"
import { Button } from '../../components'
import { Container, SearchArea } from "./styles"

function Search () {
    const { username, handleUsername, throwUser } = useSearch()

    return (
        <Container>
            <SearchArea>
                <h1>FIAP</h1>
                <h2>Educação que transforma!</h2>
                <input type="text" value={username} onChange={handleUsername} name="username" id="username" placeholder="Digite o nome do usuário" />
                <Button text="Buscar" onClick={throwUser} />
            </SearchArea>
        </Container>
    )
}

export { Search }
