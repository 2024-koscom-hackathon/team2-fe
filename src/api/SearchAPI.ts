import HttpClient from "../services/HttpClient";

const SearchAPI = {
  getStocksList: async () => {
    const path = `/api/stock-info/list`;
    try {
      const response = await HttpClient.get(path);
      return response;
    } catch (err) {
      console.error({err});
      return null;
    }
  }
} // 종목 검색

export default SearchAPI;