import { useState } from 'react'
import ImageMetaMask from '../../assets/MetaMask_Fox.png'
import { hasEthereumInWindow, getMetaMaskAccounts } from '../../utils/functions'
import { toast } from 'react-toastify'
import './styles.css'

const Home = () => {

  const [showDownloadMetaMask, setShowDownloadMetaMask] = useState(false);
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState(0);

  async function getBalance(address) {
    const hasMetaMask = hasEthereumInWindow();
    if (!hasMetaMask) {
      setShowDownloadMetaMask(true);
      return
    }
    const web3 = await getMetaMaskAccounts();
    const balance = await web3.eth.getBalance(address);
    return web3.utils.fromWei(balance);
  }

  async function conectMetaMask(event) {
    event.preventDefault()
    if (address) {
      try {
        await getBalance(address).then((response) => {
          toast.success('Conexão realizada com sucesso!')
          setBalance(response)
        })
      }
      catch (error) {
        throw new Error(error.message)
      }
    }
  }


  return (
    <div className="background">
      <div className="wrapper">
        <div className="wrapper-title">
          <h1 className="title">BBChain Wallet</h1>
          <img className='image-metamask' src={ImageMetaMask} alt="Logo MetaMask" />
        </div>
        <form className='content' name='form' onSubmit={(event) => conectMetaMask(event)}>
          <div className='address'>
            <label>Endereço da Conta: </label>
            <input type="text" id="account" placeholder='Insira o Endereço da Conta' required onChange={(event) => setAddress(event.target.value)} />
          </div>
          <div className='balance'>
            <p>Saldo Disponível:</p>
            <p>{balance}</p>
          </div>
          <input className='conect-button' type='submit' value="Conectar" />
        </form>
      </div>
      {showDownloadMetaMask && (
        <div className='wrapper-help'>
          <p>Você não possui o MetaMask instalado no seu navegador, clique <a href="https://metamask.io/" target="_blank" rel="noreferrer">aqui</a> para ser redirecionando para a instalação!</p>
        </div>
      )}
    </div>
  )
}

export default Home;