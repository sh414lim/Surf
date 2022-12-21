import axios, { AxiosResponse } from 'axios';

interface GetListResponse {
  Countries: any[];
  // {Country: "Afghanistan", CountryCode: "AF", Slug: "afghanistan", NewConfirmed: 241}
  Date: string;
  Global: any;
  Message: string;
}

export function fetchList(): Promise<AxiosResponse<GetListResponse>> {
  const url = 'https://api.themoviedb.org/3/movie/550?api_key=13dce73d621a57563589d58029a15906';
  return axios.get(url);
}

fetchList().then(res => res.data.Message);
