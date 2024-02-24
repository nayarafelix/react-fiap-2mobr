import { ChangeEvent, useEffect, useState} from "react";
import { UserName } from '../types'

export function useHome() {
    const [name, setName] = useState<UserName>("Fulano")
    const [email, setEmail] = useState<string>("")

    function handleName() {
        setName("Nayara")
    }

    function handleEmail(event: ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value)
    }

    useEffect(() => {

    }, [name])

    return {
        name,
        handleName,
        email,
        handleEmail
    }
}