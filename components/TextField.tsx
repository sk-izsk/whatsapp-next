import styled from 'styled-components'
interface Props {
  value?: string
  onChange?: () => void
  placeholder?: string
  id?: string
}

const TextField: React.FC<Props> = ({ value, onChange, placeholder, id }) => {
  return <Input id={id} value={value} onChange={onChange} placeholder={placeholder} />
}

const Input = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
  font-size: 1em;
`

export { TextField }
