import Web3 from 'web3';
import { toast } from 'react-toastify'


export function hasEthereumInWindow() {
  if (!window.ethereum) {
    toast.error('MetaMask não encontrado!');
    return false
  }
  return true
}

export async function getMetaMaskAccounts() {
  const web3 = new Web3(window.ethereum);
  const accounts = await web3.eth.requestAccounts();
  if (!accounts || !accounts.length) {
    toast.error('Carteira não encontrada!');
  }
  return web3;
}