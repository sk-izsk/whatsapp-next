import { BiMessageDetail } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import styled from 'styled-components'
import { avatarConfig } from '../utils'
import { Avatar } from './Avatar'
import { Search } from './Search'

interface Props {}

const Sidebar: React.FC<Props> = () => {
  return (
    <Container>
      <Header>
        <Avatar name='Zeeshan' />
        <div>
          <MessageIcon {...avatarConfig} />
          <MoreIcon {...avatarConfig} />
        </div>
      </Header>
      <Search />
      <SideBarButton>START A NEW CHAT</SideBarButton>
    </Container>
  )
}

const Container = styled.div``
const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`
const MessageIcon = styled(BiMessageDetail)`
  cursor: pointer;
`

const SideBarButton = styled.button`
  width: 100%;
  border: 1px solid whitesmoke;
  outline: none;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  color: #635e5d;
`
const MoreIcon = styled(BsThreeDotsVertical)`
  cursor: pointer;
`

export { Sidebar }
