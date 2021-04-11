import Loader from 'react-loader-spinner'
interface Props {}

const Loading: React.FC<Props> = () => {
  return (
    <div style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <Loader type='Puff' color='#25D366' height={200} width={200} />
    </div>
  )
}

export { Loading }
