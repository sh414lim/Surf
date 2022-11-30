import React from "react";
import useSWR from "swr";
import { fetcher } from "../../Modules/Fetcher";

export default function Profile({ id }) {
  //   const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";
  //   const { data, error } = useSWR(CONTENT_URL, fetcher);

  const { user, isError, isLoading } = useUser(id);

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return <div>Profile{data.id}</div>;
}

export const useUser = (id) => {
  const { data, error } = useSWR(CONTENT_URL, fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};
