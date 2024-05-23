export class StringHelper {
  static genExplorerLink(chainId: number, address: string): string {
    let explorerBaseUrl: string

    switch (chainId) {
      case 43113:
        explorerBaseUrl = 'https://testnet.snowscan.xyz/address/'

        break
      case 43114:
        explorerBaseUrl = 'https://snowscan.xyz/address/'

        break
      default:
        return '#'
    }

    return `${explorerBaseUrl}${address}`
  }

  static copy(text: string): void {
    navigator.clipboard.writeText(text)
  }
}
