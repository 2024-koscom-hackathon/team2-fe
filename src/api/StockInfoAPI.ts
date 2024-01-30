import HttpClient from "../services/HttpClient";

const StockInfoAPI = {
  getStockInfo: async (scode: string) => {
    const path = `/api/stock-market?s_code=${scode}`;
    try {
      const response = await HttpClient.get(path);
      return response;
    } catch (err) {
      console.error({err});
      return null;
    }
  }
} // 종목 별 시세 정보 5년치

export default StockInfoAPI;