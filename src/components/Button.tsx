import type { VFC } from 'react'

interface ButtonProps {
  label: string
}

export const Button: VFC<ButtonProps> = ({ label }) => (
  <button
    type="button"
    onClick={() => alert('Please consider using correct types. Look at me! ')}
  >
    {label}
  </button>
)
