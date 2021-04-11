import { BsSearch } from 'react-icons/bs'
import styled from 'styled-components'
import { avatarConfig } from '../utils'
import { TextField } from './TextField'
interface Props {}

const Search: React.FC<Props> = () => {
  return (
    <SearchContainer>
      <BsSearch {...avatarConfig} size={25} />
      <TextField placeholder='Search in chats' />
    </SearchContainer>
  )
}

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
`

export { Search }
