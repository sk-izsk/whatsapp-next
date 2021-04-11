import * as EmailValidator from 'email-validator'
import { BiMessageDetail } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import styled from 'styled-components'
import { avatarConfig } from '../utils'
import { Avatar } from './Avatar'
import { Button } from './Button'
import { Search } from './Search'

interface Props {}

const Sidebar: React.FC<Props> = () => {
  const createChat = () => {
    const input = prompt('Please enter email of a person to whom you wish to chat.')
    if (!input) return null
    if (EmailValidator.validate(input)) {
      // will do
    }
  }
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
      <Button onClick={createChat}>START A NEW CHAT</Button>
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

const MoreIcon = styled(BsThreeDotsVertical)`
  cursor: pointer;
`

export { Sidebar }
