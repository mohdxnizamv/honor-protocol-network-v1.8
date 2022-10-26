import { ClientCtrl, ConfigCtrl } from '@web3modal/core';
import { chains, providers } from '@web3modal/ethereum';
import '@web3modal/ui';
import './actions';
import './events';

// Define constants
const PROJECT_ID = '5faca337783ebbdba22ed3212ce88206';

const clientConfig = {
  projectId: PROJECT_ID,
  theme: 'dark',
  accentColor: 'default',
};

const ethereumConfig = {
  appName: 'web3Modal',
  autoConnect: true,
  chains: [chains.mainnet],
  providers: [providers.walletConnectProvider({ projectId: PROJECT_ID })],
};

// Set up core and ethereum clients
ConfigCtrl.setConfig(clientConfig);
ClientCtrl.setEthereumClient(ethereumConfig);
