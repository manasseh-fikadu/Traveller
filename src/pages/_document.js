import { Html, Head, Main, NextScript } from 'next/document'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import { useMemo } from 'react'

export default function Document() {
  const endpoint = 'https://patient-divine-pool.solana-devnet.discover.quiknode.pro/8ae6e055b9eb4e7235fd525b711149647ee93951/'
  const wallets = useMemo(() => [new PhantomWalletAdapter()], [])
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <Html lang="en">
          <Head />
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      </WalletProvider>
    </ConnectionProvider>
  )
}
