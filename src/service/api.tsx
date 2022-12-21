import axios, { AxiosResponse } from 'axios';

interface GetListResponse {}

function fetchList(): Promise<AxiosResponse<GetListResponse>> {
  const url = 'https://api.themoviedb.org/3/movie/550?api_key=13dce73d621a57563589d58029a15906';
  return axios.get(url);
}
