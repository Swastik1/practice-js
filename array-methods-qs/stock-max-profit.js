//You are given an array of stock prices for a single day. Write a function to find the maximum profit that can be obtained by buying and selling a stock.

const stockPrices = [7, 1, 5, 3, 6, 4];

// You want to find the lowest price to buy the stock.
//You want to find the highest price to sell the stock.
//Calculate the difference between the selling price and buying price to get the profit.

// Method 1
const Profit = stockPrices.map((element) => {
    let minPrice = stockPrices[1];
    let maxProfits = 0;
    if (element < minPrice) {
        minPrice = element
    } else if(element - minPrice > maxProfits){
        maxProfits = element - minPrice;
    } 
    return maxProfits;
})
const maxProfit = [Math.max(...Profit)];
console.log(maxProfit);


// Method 2

function findMaxProfit(arr){
    let minPrice = stockPrices[1];
    let maxProfit = 0;
    let profit = [];
    for(i=0; i<arr.length; i++){
        let currentPrice = arr[i];
        if(currentPrice < minPrice){
            minPrice = currentPrice;
        } else if ((currentPrice - minPrice) > maxProfit){
            maxProfit = currentPrice - minPrice;
            profit.push(maxProfit);
        } else (
            0
        )
    }
    return profit;
}


console.log(findMaxProfit(stockPrices))