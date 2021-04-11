import styled from 'styled-components'
interface Props {
  onClick?: () => void
}

const Button: React.FC<Props> = ({ onClick, children }) => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>
}

const ButtonContainer = styled.button`
  width: 100%;
  border: 1px solid whitesmoke;
  outline: none;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  color: #635e5d;
`

export { Button }
