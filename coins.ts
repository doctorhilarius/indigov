export function getMinCoins(
    coins: number[],
    change: number,
    results?: number[],
): number {
    if (!coins?.length || !coins.includes(1)) {
        throw new Error('At least 1 coin of value 1 is required')
    }

    // if we don't have any change, we're done
    if (!change) {
        return 0
    }

    // hydrate the results array if it isn't already
    if (results === undefined) {
        results = new Array(change + 1).fill(-1)
    }

    // if the result for this amount of change has already been calculated, just return it
    if (results[change] !== -1) {
        return results[change]
    }

    // set the max result
    let minCoinCount: number = Number.MAX_VALUE

    // convert the coins to a set to remove duplicates
    new Set(coins).forEach((coin) => {
        // if the coin amount is greater than the change, just exit
        if (coin > change) {
            return
        }

        // add the current coin count (1), then get the count for the remaining change
        const currentCoinCount = 1 + getMinCoins(coins, change - coin, results)

        // if the cuirrent coin count isn't infinite
        // and the current coin count is fewer than the min coin count, we have our new winner
        if (
            currentCoinCount !== Number.MAX_VALUE &&
            currentCoinCount < minCoinCount
        ) {
            minCoinCount = currentCoinCount
        }

        // save the results for this amount of change
        results![change] = minCoinCount
    })

    return minCoinCount
}

console.log(getMinCoins([100, 25, 10, 5, 1], 55))

// time complexity = coins.length * change
// space complexity = change
