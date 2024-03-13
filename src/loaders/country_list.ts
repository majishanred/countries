import { QueryClient, queryOptions } from "@tanstack/react-query";
import { LoaderFunctionArgs } from "react-router-dom";

type Region = 'africa' | 'asia' | 'americas' | 'oceania' | 'europe' | null;

const queryDetail = (region: Region) => queryOptions({
  queryKey: ['countries', region],
  queryFn: async () => {
    const response = region == null ? await fetch(`https://restcountries.com/v3.1/all`) : await fetch(`https://restcountries.com/v3.1/region/${region}`);
    return response.json();
  }
});

export const loader = (queryClient: QueryClient) => async ({request}: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const region = url.searchParams.get('region');
  return queryClient.ensureQueryData(queryDetail(region as Region));
};