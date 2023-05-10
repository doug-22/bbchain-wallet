import ImageMetaMask from '../../assets/MetaMask_Fox.png'
import './styles.css'

const Home = () => {
  return (
    <div className="background">
      <div className="wrapper">
        <div className="wrapper-title">
          <h1 className="title">BBChain Wallet</h1>
          <img className='image-metamask' src={ImageMetaMask} alt="Logo MetaMask" />
        </div>
        <div className='content'>
          <div className='address'>
            <label>Endereço da Conta: </label>
            <input type="text" id="account" placeholder='Insira o Endereço da Conta' />
          </div>
          <div className='balance'>
            <p>Saldo Disponível:</p>
            <p>10000</p>
          </div>
          <button className='conect-button'>Conectar</button>
        </div>
      </div>
    </div>
  )
}

export default Home;