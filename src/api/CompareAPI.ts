import HttpClient from "../services/HttpClient";

const CompareAPI = {
  getCompareInfo: async (s_code: string, start_date: string, end_date: string) => {
    const path = `/api/cf-period?s_code=${s_code}&start_date=${start_date}&end_date=${end_date}`;
    try {
      const response = await HttpClient.get(path);
      return response;
    } catch (err) {
      console.error({err});
      return null;
    }
  }
} // 비교 기간 내 정보

export default CompareAPI;