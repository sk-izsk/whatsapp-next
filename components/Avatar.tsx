import styled from 'styled-components'
import { auth } from '../firebase'
interface Props {
  source?: string
  name: string
}

const Avatar: React.FC<Props> = ({ source, name }) => {
  const signOut = () => auth.signOut().catch(alert)
  return (
    <Container onClick={signOut}>
      {source ? <Image src={source} alt={source} /> : name[0]}
    </Container>
  )
}

const Container = styled.div<Props>`
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: purple;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  color: white;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

export { Avatar }
