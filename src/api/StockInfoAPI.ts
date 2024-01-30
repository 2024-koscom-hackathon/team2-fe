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
  }, // 종목 별 시세 정보 5년치

  getStockDurationInfo: async (scode: string, start_date: string, end_date: string) => {
    const path = `/api/stock-market/period?s_code=${scode}&start_date=${start_date}&end_date=${end_date}`;
    console.log({path});
    try {
      const response = await HttpClient.get(path);
      console.log({response});
      return response;
    } catch (err) {
      console.error({err});
      return null;
    }
  } // 종목 별 기간에 따른 시세 정보
}

export default StockInfoAPI;