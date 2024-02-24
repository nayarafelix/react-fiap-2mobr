import { HomeProps } from './types'
import { useHome } from "./hooks/useHome"
import { Button } from './components'

function Home ({ lastName, age }: HomeProps) {
    const { name, handleName, email, handleEmail } = useHome()

    return (
        <div>
            <h1>FIAP</h1>
            <span>
                {name} {lastName} {" "}
                {age && `e a idade é ${age}`}
            </span>
            <p/>
            <input type="email" value={email} onChange={handleEmail} name="email" id="email" />
            <Button onClick={handleName} />
        </div>
    )
}

export { Home }
