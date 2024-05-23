import { formatUnits } from 'viem'

export class NumberUtil {
  static display(value: bigint, decimals: number): string {
    const formattedValue: string = formatUnits(value, decimals)

    return NumberUtil.addCommasToNumber(formattedValue)
  }

  private static addCommasToNumber(value: string): string {
    const parts = value.split('.')

    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    return parts.join('.')
  }
}
