import Head from 'next/head'
import React from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'
import styled from 'styled-components'
import { Button } from '../components'
import { auth, provider } from '../firebase'
interface Props {}

const Login: React.FC<Props> = () => {
  const signIn = () => auth.signInWithPopup(provider).catch(alert)
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <IoLogoWhatsapp size={200} color='#25D366' />
        <Button onClick={signIn}>Login</Button>
      </LoginContainer>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
  padding: 16px;
`

export default Login
