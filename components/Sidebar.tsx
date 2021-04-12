import * as EmailValidator from 'email-validator'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import { BiMessageDetail } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import styled from 'styled-components'
import { auth, db } from '../firebase'
import { avatarConfig } from '../utils'
import { Avatar } from './Avatar'
import { Button } from './Button'
import { Search } from './Search'

interface Props {}

const Sidebar: React.FC<Props> = () => {
  const [user] = useAuthState(auth)
  const userChatRef = db.collection('chats').where('users', 'array-contains', user.email)
  const [chatsSnapshot] = useCollection(userChatRef)

  const createChat = () => {
    const input: string = prompt('Please enter email of a person to whom you wish to chat.')
    if (!input) return null
    if (EmailValidator.validate(input) && !getExitingChat(input) && user.email !== input) {
      db.collection('chats').add({
        users: [user.email, input],
      })
    }
  }

  const getExitingChat = (email: string): boolean =>
    !!chatsSnapshot?.docs.find(
      (chat) => chat.data().users.find((user) => user === email)?.length > 0,
    )

  return (
    <Container>
      <Header>
        <Avatar name={user.displayName || '-'} source={user.photoURL} />
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
