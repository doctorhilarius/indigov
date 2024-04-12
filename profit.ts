export function getMaxProfit(prices: number[]): number {
    let maxProfit: number = -1

    if (prices.length < 2) {
        return maxProfit
    }

    let minPrice: number = prices[0]

    // skip the first price bc it's our min
    prices.slice(1).forEach((price) => {
        // if the current profit is greater than the max, reset the max profit
        maxProfit = Math.max(maxProfit, price - minPrice)

        // if the current price is less than the min, reset the min price
        minPrice = Math.min(minPrice, price)
    })

    return maxProfit
}

console.log(getMaxProfit([7, 1, 5, 3, 6, 4]))
console.log(getMaxProfit([7, 6, 4, 3, 1]))

// time complexity = n
// space complexity = 1
