import firebase from 'firebase'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { Loading } from '../components'
import { auth, db } from '../firebase'
import '../styles/globals.css'
import Login from './login'

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: false,
})
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

interface Props {}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [user, loading] = useAuthState(auth)

  useEffect(() => {
    if (user) {
      db.collection('user').doc(user.uid).set(
        {
          email: user.email,
          lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
          photo: user.photoURL,
        },
        {
          merge: true,
        },
      )
    }
  }, [user])

  if (loading) return <Loading />
  if (!user) return <Login />
  return <Component {...pageProps} />
}

export default MyApp
