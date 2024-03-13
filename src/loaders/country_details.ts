import { QueryClient, queryOptions } from "@tanstack/react-query";
import { LoaderFunctionArgs } from "react-router-dom";

const queryDetail = (name: string | undefined) => 
  queryOptions({
    queryKey: ['country', 'details', name],
    queryFn: async () => {
      const response = await fetch(`https://restcountries.com/v3.1/name/${name?.toLowerCase()}`);
      return response.json();
    }
  });

export const loader = (queryClient: QueryClient) => 
  async ({params}: LoaderFunctionArgs) => {
    return queryClient.ensureQueryData(queryDetail(params.name));
  }