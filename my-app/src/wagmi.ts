import { http, createConfig } from 'wagmi'
import { mainnet, sepolia,   } from 'wagmi/chains'
import { coinbaseWallet, injected, walletConnect, metaMask } from 'wagmi/connectors'

/**
 * Wagmi用の設定ファイル
 */
export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    // injected(),
    metaMask(),
    // coinbaseWallet({ appName: 'Create Wagmi' }),
    walletConnect({ projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID }),
  ],
  ssr: true,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}