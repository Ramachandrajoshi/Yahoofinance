import type { Pair, StockResponse } from '../models/stock-response';

export function mapOptionTradeDataToTable(data: StockResponse) {
    const columns = ["Call Trade Time", "Call Volume", "Call Amount", "Strike", "Put Trade Time", "Put Volume", "Put Amount", "Expiration", "Total Gain"];
    const tableData: any[][] = [columns];
    if (!data.pairs) {
        return []
    }
    data.pairs.forEach(p => {
        const strike = p.call.strike;

        const callTradeTime = new Date(p.call.lastTradeDate * 1000);
        const formatedCallTime = `${callTradeTime.toLocaleDateString()} ${callTradeTime.toLocaleTimeString()}`;

        const callVolume = p.call.volume;
        const putVolume = p.put.volume;
        const callAmount = p.callGain;
        const putAmount = p.putGain;

        const putTradeTime = new Date(p.put.lastTradeDate * 1000);
        const formatedPutTime = `${putTradeTime.toLocaleDateString()} ${putTradeTime.toLocaleTimeString()}`;

        const tradeExpiryTime = new Date(p.put.expiration * 1000);
        const formatedExpiryTime = `${tradeExpiryTime.toLocaleDateString()} ${tradeExpiryTime.toLocaleTimeString()}`;

        const totalGain = p.totalGain

        const callCell = { v: callAmount, f: `$ ${callAmount.toFixed(2)}`, p: { style: `background-color: ${callAmount < 0 ? '#ff3a3a' : 'green'};` } };
        const putCell = { v: putAmount, f: `$ ${putAmount.toFixed(2)}`, p: { style: `background-color: ${putAmount < 0 ? '#ff3a3a' : 'green'};` } };
        const totalCell = { v: totalGain, f: `$ ${totalGain.toFixed(2)}`, p: { style: `background-color: ${totalGain < 0 ? '#ff3a3a' : 'green'};` } };

        tableData.push([formatedCallTime, callVolume, callCell, strike, formatedPutTime, putVolume, putCell, formatedExpiryTime, totalCell,])
    });
    return tableData;
}

export function mapOptionTradeDataToChart(data: StockResponse) {
    const columns = ["Traded Time", "Call Amount", "Put Amount"];
    const chartData: any[][] = [columns];
    if (!data.pairs) {
        return []
    }
    getSortedPairs(data.pairs).forEach(p => {
        const expireTime = new Date(p.call.lastTradeDate * 1000);
        const callAmount = p.callGain;
        const putAmount = p.putGain;
        const callCell = { v: callAmount, f: `$ ${callAmount.toFixed(2)}`, style: { color: callAmount < 0 ? 'red' : 'green' } };
        const putCell = { v: putAmount, f: `$ ${putAmount.toFixed(2)}`, style: { color: putAmount < 0 ? 'red' : 'green' } };
        chartData.push([`${expireTime.toLocaleTimeString()}`, callCell, putCell])
    });
    return chartData;
}

export function getVolumesPieChartData(data: StockResponse) {
    const columns = ["Trade Option", "Volume"];
    const pieChartData: any[][] = [columns];
    if (!data.pairs) {
        return []
    }
    let callVolumes = 0;
    let putVolumes = 0;
    data.pairs.forEach(p => {
        callVolumes += p.call.volume;
        putVolumes += p.put.volume;
    });
    pieChartData.push(["Calls", callVolumes])
    pieChartData.push(["Puts", putVolumes])
    return pieChartData;
}

export function getAmountPieChartData(data: StockResponse) {
    const columns = ["Trade Option", "Amount"];
    const pieChartData: any[][] = [columns];
    if (!data.pairs) {
        return []
    }
    let callAmount = 0;
    let putAmount = 0;
    data.pairs.forEach(p => {
        callAmount += p.callGain;
        putAmount += p.putGain;
    });
    pieChartData.push(["Calls", callAmount])
    pieChartData.push(["Puts", putAmount])
    return pieChartData;
}

function getSortedPairs(pairs: Pair[]) {
    return pairs.sort((a, b) => a.call.lastTradeDate - b.call.lastTradeDate);
}