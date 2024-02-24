import { memo } from "react"

interface ButtonProps extends  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

}

export const Button = memo(({ onClick } : ButtonProps) => {
    return (
        <button type="button" onClick={onClick}>
            Me aperte
        </button>
    )
})
