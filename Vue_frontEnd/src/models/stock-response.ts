export interface StockResponse {
    quote: Quote
    pairs: Pair[]
    maxGain: number
    maxLoss: number
}

export interface Quote {
    language: string
    region: string
    quoteType: string
    typeDisp: string
    quoteSourceName: string
    triggerable: boolean
    customPriceAlertConfidence: string
    currency: string
    exchange: string
    shortName: string
    longName: string
    messageBoardId: string
    exchangeTimezoneName: string
    exchangeTimezoneShortName: string
    gmtOffSetMilliseconds: number
    market: string
    esgPopulated: boolean
    marketState: string
    regularMarketChangePercent: number
    regularMarketPrice: number
    postMarketChangePercent: number
    postMarketTime: number
    postMarketPrice: number
    postMarketChange: number
    regularMarketChange: number
    regularMarketTime: number
    regularMarketDayHigh: number
    regularMarketDayRange: string
    regularMarketDayLow: number
    regularMarketVolume: number
    regularMarketPreviousClose: number
    bid: number
    ask: number
    bidSize: number
    askSize: number
    fullExchangeName: string
    financialCurrency: string
    regularMarketOpen: number
    averageDailyVolume3Month: number
    averageDailyVolume10Day: number
    fiftyTwoWeekLowChange: number
    fiftyTwoWeekLowChangePercent: number
    fiftyTwoWeekRange: string
    fiftyTwoWeekHighChange: number
    fiftyTwoWeekHighChangePercent: number
    fiftyTwoWeekLow: number
    fiftyTwoWeekHigh: number
    dividendDate: number
    earningsTimestamp: number
    earningsTimestampStart: number
    earningsTimestampEnd: number
    trailingAnnualDividendRate: number
    trailingPE: number
    trailingAnnualDividendYield: number
    epsTrailingTwelveMonths: number
    epsForward: number
    epsCurrentYear: number
    priceEpsCurrentYear: number
    sharesOutstanding: number
    bookValue: number
    fiftyDayAverage: number
    fiftyDayAverageChange: number
    fiftyDayAverageChangePercent: number
    twoHundredDayAverage: number
    twoHundredDayAverageChange: number
    twoHundredDayAverageChangePercent: number
    firstTradeDateMilliseconds: number
    priceHint: number
    marketCap: number
    forwardPE: number
    priceToBook: number
    sourceInterval: number
    exchangeDataDelayedBy: number
    averageAnalystRating: string
    tradeable: boolean
    cryptoTradeable: boolean
    displayName: string
    symbol: string
}

export interface Pair {
    call: Call
    put: Put
    callGain: number
    putGain: number
    totalGain: number
}

export interface Call {
    contractSymbol: string
    strike: number
    currency: string
    lastPrice: number
    change: number
    percentChange: number
    volume: number
    openInterest: number
    bid: number
    ask: number
    contractSize: string
    expiration: number
    lastTradeDate: number
    impliedVolatility: number
    inTheMoney: boolean
}

export interface Put {
    contractSymbol: string
    strike: number
    currency: string
    lastPrice: number
    change: number
    percentChange: number
    volume: number
    openInterest: number
    bid: number
    ask: number
    contractSize: string
    expiration: number
    lastTradeDate: number
    impliedVolatility: number
    inTheMoney: boolean
}
