import { BiMessageDetail } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import styled from 'styled-components'
import { Avatar } from './Avatar'

interface Props {}

const Sidebar: React.FC<Props> = () => {
  return (
    <Container>
      <Header>
        <Avatar name='Zeeshan' />
        <MessageIcon size={35} />
        <MoreIcon size={35} />
      </Header>
    </Container>
  )
}

const Container = styled.div``
const Header = styled.div``
const MessageIcon = styled(BiMessageDetail)`
  cursor: pointer;
`
const MoreIcon = styled(BsThreeDotsVertical)`
  cursor: pointer;
`

export { Sidebar }
