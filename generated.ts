import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PancakeFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const pancakeFactoryAbi = [
  {
    payable: false,
    type: 'constructor',
    inputs: [
      { name: '_feeToSetter', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token0',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'token1',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'pair',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: '', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'PairCreated',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [],
    name: 'INIT_CODE_PAIR_HASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'allPairs',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [],
    name: 'allPairsLength',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    constant: false,
    payable: false,
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
    ],
    name: 'createPair',
    outputs: [{ name: 'pair', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [],
    name: 'feeTo',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [],
    name: 'feeToSetter',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'getPair',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    constant: false,
    payable: false,
    type: 'function',
    inputs: [{ name: '_feeTo', internalType: 'address', type: 'address' }],
    name: 'setFeeTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    constant: false,
    payable: false,
    type: 'function',
    inputs: [
      { name: '_feeToSetter', internalType: 'address', type: 'address' },
    ],
    name: 'setFeeToSetter',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PancakeRouter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const pancakeRouterAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_factory', internalType: 'address', type: 'address' },
      { name: '_WETH', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'WETH',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'amountADesired', internalType: 'uint256', type: 'uint256' },
      { name: 'amountBDesired', internalType: 'uint256', type: 'uint256' },
      { name: 'amountAMin', internalType: 'uint256', type: 'uint256' },
      { name: 'amountBMin', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addLiquidity',
    outputs: [
      { name: 'amountA', internalType: 'uint256', type: 'uint256' },
      { name: 'amountB', internalType: 'uint256', type: 'uint256' },
      { name: 'liquidity', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'amountTokenDesired', internalType: 'uint256', type: 'uint256' },
      { name: 'amountTokenMin', internalType: 'uint256', type: 'uint256' },
      { name: 'amountETHMin', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addLiquidityETH',
    outputs: [
      { name: 'amountToken', internalType: 'uint256', type: 'uint256' },
      { name: 'amountETH', internalType: 'uint256', type: 'uint256' },
      { name: 'liquidity', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'reserveIn', internalType: 'uint256', type: 'uint256' },
      { name: 'reserveOut', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getAmountIn',
    outputs: [{ name: 'amountIn', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'reserveIn', internalType: 'uint256', type: 'uint256' },
      { name: 'reserveOut', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getAmountOut',
    outputs: [{ name: 'amountOut', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'path', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'getAmountsIn',
    outputs: [
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'path', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'getAmountsOut',
    outputs: [
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountA', internalType: 'uint256', type: 'uint256' },
      { name: 'reserveA', internalType: 'uint256', type: 'uint256' },
      { name: 'reserveB', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'quote',
    outputs: [{ name: 'amountB', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'liquidity', internalType: 'uint256', type: 'uint256' },
      { name: 'amountAMin', internalType: 'uint256', type: 'uint256' },
      { name: 'amountBMin', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'removeLiquidity',
    outputs: [
      { name: 'amountA', internalType: 'uint256', type: 'uint256' },
      { name: 'amountB', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'liquidity', internalType: 'uint256', type: 'uint256' },
      { name: 'amountTokenMin', internalType: 'uint256', type: 'uint256' },
      { name: 'amountETHMin', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'removeLiquidityETH',
    outputs: [
      { name: 'amountToken', internalType: 'uint256', type: 'uint256' },
      { name: 'amountETH', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'liquidity', internalType: 'uint256', type: 'uint256' },
      { name: 'amountTokenMin', internalType: 'uint256', type: 'uint256' },
      { name: 'amountETHMin', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'removeLiquidityETHSupportingFeeOnTransferTokens',
    outputs: [{ name: 'amountETH', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'liquidity', internalType: 'uint256', type: 'uint256' },
      { name: 'amountTokenMin', internalType: 'uint256', type: 'uint256' },
      { name: 'amountETHMin', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'approveMax', internalType: 'bool', type: 'bool' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'removeLiquidityETHWithPermit',
    outputs: [
      { name: 'amountToken', internalType: 'uint256', type: 'uint256' },
      { name: 'amountETH', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'liquidity', internalType: 'uint256', type: 'uint256' },
      { name: 'amountTokenMin', internalType: 'uint256', type: 'uint256' },
      { name: 'amountETHMin', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'approveMax', internalType: 'bool', type: 'bool' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'removeLiquidityETHWithPermitSupportingFeeOnTransferTokens',
    outputs: [{ name: 'amountETH', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'liquidity', internalType: 'uint256', type: 'uint256' },
      { name: 'amountAMin', internalType: 'uint256', type: 'uint256' },
      { name: 'amountBMin', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'approveMax', internalType: 'bool', type: 'bool' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'removeLiquidityWithPermit',
    outputs: [
      { name: 'amountA', internalType: 'uint256', type: 'uint256' },
      { name: 'amountB', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'path', internalType: 'address[]', type: 'address[]' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'swapETHForExactTokens',
    outputs: [
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountOutMin', internalType: 'uint256', type: 'uint256' },
      { name: 'path', internalType: 'address[]', type: 'address[]' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'swapExactETHForTokens',
    outputs: [
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountOutMin', internalType: 'uint256', type: 'uint256' },
      { name: 'path', internalType: 'address[]', type: 'address[]' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'swapExactETHForTokensSupportingFeeOnTransferTokens',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOutMin', internalType: 'uint256', type: 'uint256' },
      { name: 'path', internalType: 'address[]', type: 'address[]' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'swapExactTokensForETH',
    outputs: [
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOutMin', internalType: 'uint256', type: 'uint256' },
      { name: 'path', internalType: 'address[]', type: 'address[]' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'swapExactTokensForETHSupportingFeeOnTransferTokens',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOutMin', internalType: 'uint256', type: 'uint256' },
      { name: 'path', internalType: 'address[]', type: 'address[]' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'swapExactTokensForTokens',
    outputs: [
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOutMin', internalType: 'uint256', type: 'uint256' },
      { name: 'path', internalType: 'address[]', type: 'address[]' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'swapExactTokensForTokensSupportingFeeOnTransferTokens',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'amountInMax', internalType: 'uint256', type: 'uint256' },
      { name: 'path', internalType: 'address[]', type: 'address[]' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'swapTokensForExactETH',
    outputs: [
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'amountInMax', internalType: 'uint256', type: 'uint256' },
      { name: 'path', internalType: 'address[]', type: 'address[]' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'swapTokensForExactTokens',
    outputs: [
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pancakeFactoryAbi}__
 */
export const useReadPancakeFactory = /*#__PURE__*/ createUseReadContract({
  abi: pancakeFactoryAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pancakeFactoryAbi}__ and `functionName` set to `"INIT_CODE_PAIR_HASH"`
 */
export const useReadPancakeFactoryInitCodePairHash =
  /*#__PURE__*/ createUseReadContract({
    abi: pancakeFactoryAbi,
    functionName: 'INIT_CODE_PAIR_HASH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pancakeFactoryAbi}__ and `functionName` set to `"allPairs"`
 */
export const useReadPancakeFactoryAllPairs =
  /*#__PURE__*/ createUseReadContract({
    abi: pancakeFactoryAbi,
    functionName: 'allPairs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pancakeFactoryAbi}__ and `functionName` set to `"allPairsLength"`
 */
export const useReadPancakeFactoryAllPairsLength =
  /*#__PURE__*/ createUseReadContract({
    abi: pancakeFactoryAbi,
    functionName: 'allPairsLength',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pancakeFactoryAbi}__ and `functionName` set to `"feeTo"`
 */
export const useReadPancakeFactoryFeeTo = /*#__PURE__*/ createUseReadContract({
  abi: pancakeFactoryAbi,
  functionName: 'feeTo',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pancakeFactoryAbi}__ and `functionName` set to `"feeToSetter"`
 */
export const useReadPancakeFactoryFeeToSetter =
  /*#__PURE__*/ createUseReadContract({
    abi: pancakeFactoryAbi,
    functionName: 'feeToSetter',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pancakeFactoryAbi}__ and `functionName` set to `"getPair"`
 */
export const useReadPancakeFactoryGetPair = /*#__PURE__*/ createUseReadContract(
  { abi: pancakeFactoryAbi, functionName: 'getPair' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pancakeFactoryAbi}__
 */
export const useWritePancakeFactory = /*#__PURE__*/ createUseWriteContract({
  abi: pancakeFactoryAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pancakeFactoryAbi}__ and `functionName` set to `"createPair"`
 */
export const useWritePancakeFactoryCreatePair =
  /*#__PURE__*/ createUseWriteContract({
    abi: pancakeFactoryAbi,
    functionName: 'createPair',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pancakeFactoryAbi}__ and `functionName` set to `"setFeeTo"`
 */
export const useWritePancakeFactorySetFeeTo =
  /*#__PURE__*/ createUseWriteContract({
    abi: pancakeFactoryAbi,
    functionName: 'setFeeTo',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pancakeFactoryAbi}__ and `functionName` set to `"setFeeToSetter"`
 */
export const useWritePancakeFactorySetFeeToSetter =
  /*#__PURE__*/ createUseWriteContract({
    abi: pancakeFactoryAbi,
    functionName: 'setFeeToSetter',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pancakeFactoryAbi}__
 */
export const useSimulatePancakeFactory =
  /*#__PURE__*/ createUseSimulateContract({ abi: pancakeFactoryAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pancakeFactoryAbi}__ and `functionName` set to `"createPair"`
 */
export const useSimulatePancakeFactoryCreatePair =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pancakeFactoryAbi,
    functionName: 'createPair',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pancakeFactoryAbi}__ and `functionName` set to `"setFeeTo"`
 */
export const useSimulatePancakeFactorySetFeeTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pancakeFactoryAbi,
    functionName: 'setFeeTo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pancakeFactoryAbi}__ and `functionName` set to `"setFeeToSetter"`
 */
export const useSimulatePancakeFactorySetFeeToSetter =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pancakeFactoryAbi,
    functionName: 'setFeeToSetter',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pancakeFactoryAbi}__
 */
export const useWatchPancakeFactoryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: pancakeFactoryAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pancakeFactoryAbi}__ and `eventName` set to `"PairCreated"`
 */
export const useWatchPancakeFactoryPairCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pancakeFactoryAbi,
    eventName: 'PairCreated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pancakeRouterAbi}__
 */
export const useReadPancakeRouter = /*#__PURE__*/ createUseReadContract({
  abi: pancakeRouterAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"WETH"`
 */
export const useReadPancakeRouterWeth = /*#__PURE__*/ createUseReadContract({
  abi: pancakeRouterAbi,
  functionName: 'WETH',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"factory"`
 */
export const useReadPancakeRouterFactory = /*#__PURE__*/ createUseReadContract({
  abi: pancakeRouterAbi,
  functionName: 'factory',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"getAmountIn"`
 */
export const useReadPancakeRouterGetAmountIn =
  /*#__PURE__*/ createUseReadContract({
    abi: pancakeRouterAbi,
    functionName: 'getAmountIn',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"getAmountOut"`
 */
export const useReadPancakeRouterGetAmountOut =
  /*#__PURE__*/ createUseReadContract({
    abi: pancakeRouterAbi,
    functionName: 'getAmountOut',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"getAmountsIn"`
 */
export const useReadPancakeRouterGetAmountsIn =
  /*#__PURE__*/ createUseReadContract({
    abi: pancakeRouterAbi,
    functionName: 'getAmountsIn',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"getAmountsOut"`
 */
export const useReadPancakeRouterGetAmountsOut =
  /*#__PURE__*/ createUseReadContract({
    abi: pancakeRouterAbi,
    functionName: 'getAmountsOut',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"quote"`
 */
export const useReadPancakeRouterQuote = /*#__PURE__*/ createUseReadContract({
  abi: pancakeRouterAbi,
  functionName: 'quote',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pancakeRouterAbi}__
 */
export const useWritePancakeRouter = /*#__PURE__*/ createUseWriteContract({
  abi: pancakeRouterAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"addLiquidity"`
 */
export const useWritePancakeRouterAddLiquidity =
  /*#__PURE__*/ createUseWriteContract({
    abi: pancakeRouterAbi,
    functionName: 'addLiquidity',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"addLiquidityETH"`
 */
export const useWritePancakeRouterAddLiquidityEth =
  /*#__PURE__*/ createUseWriteContract({
    abi: pancakeRouterAbi,
    functionName: 'addLiquidityETH',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"removeLiquidity"`
 */
export const useWritePancakeRouterRemoveLiquidity =
  /*#__PURE__*/ createUseWriteContract({
    abi: pancakeRouterAbi,
    functionName: 'removeLiquidity',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"removeLiquidityETH"`
 */
export const useWritePancakeRouterRemoveLiquidityEth =
  /*#__PURE__*/ createUseWriteContract({
    abi: pancakeRouterAbi,
    functionName: 'removeLiquidityETH',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"removeLiquidityETHSupportingFeeOnTransferTokens"`
 */
export const useWritePancakeRouterRemoveLiquidityEthSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: pancakeRouterAbi,
    functionName: 'removeLiquidityETHSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"removeLiquidityETHWithPermit"`
 */
export const useWritePancakeRouterRemoveLiquidityEthWithPermit =
  /*#__PURE__*/ createUseWriteContract({
    abi: pancakeRouterAbi,
    functionName: 'removeLiquidityETHWithPermit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"`
 */
export const useWritePancakeRouterRemoveLiquidityEthWithPermitSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: pancakeRouterAbi,
    functionName: 'removeLiquidityETHWithPermitSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"removeLiquidityWithPermit"`
 */
export const useWritePancakeRouterRemoveLiquidityWithPermit =
  /*#__PURE__*/ createUseWriteContract({
    abi: pancakeRouterAbi,
    functionName: 'removeLiquidityWithPermit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"swapETHForExactTokens"`
 */
export const useWritePancakeRouterSwapEthForExactTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: pancakeRouterAbi,
    functionName: 'swapETHForExactTokens',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"swapExactETHForTokens"`
 */
export const useWritePancakeRouterSwapExactEthForTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: pancakeRouterAbi,
    functionName: 'swapExactETHForTokens',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"swapExactETHForTokensSupportingFeeOnTransferTokens"`
 */
export const useWritePancakeRouterSwapExactEthForTokensSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: pancakeRouterAbi,
    functionName: 'swapExactETHForTokensSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"swapExactTokensForETH"`
 */
export const useWritePancakeRouterSwapExactTokensForEth =
  /*#__PURE__*/ createUseWriteContract({
    abi: pancakeRouterAbi,
    functionName: 'swapExactTokensForETH',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"swapExactTokensForETHSupportingFeeOnTransferTokens"`
 */
export const useWritePancakeRouterSwapExactTokensForEthSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: pancakeRouterAbi,
    functionName: 'swapExactTokensForETHSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"swapExactTokensForTokens"`
 */
export const useWritePancakeRouterSwapExactTokensForTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: pancakeRouterAbi,
    functionName: 'swapExactTokensForTokens',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"swapExactTokensForTokensSupportingFeeOnTransferTokens"`
 */
export const useWritePancakeRouterSwapExactTokensForTokensSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: pancakeRouterAbi,
    functionName: 'swapExactTokensForTokensSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"swapTokensForExactETH"`
 */
export const useWritePancakeRouterSwapTokensForExactEth =
  /*#__PURE__*/ createUseWriteContract({
    abi: pancakeRouterAbi,
    functionName: 'swapTokensForExactETH',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"swapTokensForExactTokens"`
 */
export const useWritePancakeRouterSwapTokensForExactTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: pancakeRouterAbi,
    functionName: 'swapTokensForExactTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pancakeRouterAbi}__
 */
export const useSimulatePancakeRouter = /*#__PURE__*/ createUseSimulateContract(
  { abi: pancakeRouterAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"addLiquidity"`
 */
export const useSimulatePancakeRouterAddLiquidity =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pancakeRouterAbi,
    functionName: 'addLiquidity',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"addLiquidityETH"`
 */
export const useSimulatePancakeRouterAddLiquidityEth =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pancakeRouterAbi,
    functionName: 'addLiquidityETH',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"removeLiquidity"`
 */
export const useSimulatePancakeRouterRemoveLiquidity =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pancakeRouterAbi,
    functionName: 'removeLiquidity',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"removeLiquidityETH"`
 */
export const useSimulatePancakeRouterRemoveLiquidityEth =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pancakeRouterAbi,
    functionName: 'removeLiquidityETH',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"removeLiquidityETHSupportingFeeOnTransferTokens"`
 */
export const useSimulatePancakeRouterRemoveLiquidityEthSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pancakeRouterAbi,
    functionName: 'removeLiquidityETHSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"removeLiquidityETHWithPermit"`
 */
export const useSimulatePancakeRouterRemoveLiquidityEthWithPermit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pancakeRouterAbi,
    functionName: 'removeLiquidityETHWithPermit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"`
 */
export const useSimulatePancakeRouterRemoveLiquidityEthWithPermitSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pancakeRouterAbi,
    functionName: 'removeLiquidityETHWithPermitSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"removeLiquidityWithPermit"`
 */
export const useSimulatePancakeRouterRemoveLiquidityWithPermit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pancakeRouterAbi,
    functionName: 'removeLiquidityWithPermit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"swapETHForExactTokens"`
 */
export const useSimulatePancakeRouterSwapEthForExactTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pancakeRouterAbi,
    functionName: 'swapETHForExactTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"swapExactETHForTokens"`
 */
export const useSimulatePancakeRouterSwapExactEthForTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pancakeRouterAbi,
    functionName: 'swapExactETHForTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"swapExactETHForTokensSupportingFeeOnTransferTokens"`
 */
export const useSimulatePancakeRouterSwapExactEthForTokensSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pancakeRouterAbi,
    functionName: 'swapExactETHForTokensSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"swapExactTokensForETH"`
 */
export const useSimulatePancakeRouterSwapExactTokensForEth =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pancakeRouterAbi,
    functionName: 'swapExactTokensForETH',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"swapExactTokensForETHSupportingFeeOnTransferTokens"`
 */
export const useSimulatePancakeRouterSwapExactTokensForEthSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pancakeRouterAbi,
    functionName: 'swapExactTokensForETHSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"swapExactTokensForTokens"`
 */
export const useSimulatePancakeRouterSwapExactTokensForTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pancakeRouterAbi,
    functionName: 'swapExactTokensForTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"swapExactTokensForTokensSupportingFeeOnTransferTokens"`
 */
export const useSimulatePancakeRouterSwapExactTokensForTokensSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pancakeRouterAbi,
    functionName: 'swapExactTokensForTokensSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"swapTokensForExactETH"`
 */
export const useSimulatePancakeRouterSwapTokensForExactEth =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pancakeRouterAbi,
    functionName: 'swapTokensForExactETH',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pancakeRouterAbi}__ and `functionName` set to `"swapTokensForExactTokens"`
 */
export const useSimulatePancakeRouterSwapTokensForExactTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pancakeRouterAbi,
    functionName: 'swapTokensForExactTokens',
  })
