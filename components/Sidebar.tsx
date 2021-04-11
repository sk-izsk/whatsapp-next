import styled from 'styled-components'
import { Avatar } from './Avatar'

interface Props {}

const Sidebar: React.FC<Props> = () => {
  return (
    <Container>
      <Header>
        <Avatar name='Zeeshan' />
      </Header>
    </Container>
  )
}

const Container = styled.div``
const Header = styled.div``

export { Sidebar }
