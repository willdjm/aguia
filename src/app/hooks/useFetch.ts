import axios from "axios";
import { useEffect, useState } from "react";


const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REACT_APP_API_LOCATION,
})

export function useFetch<T = unknown>(url: string){

    const [data, setData] = useState<T | null>(null)
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState<Error | null>(null);


    useEffect(() => {
        api.get(url)
        .then(response => {
            setData(response.data);
          })
          .catch(err => {
            setError(err);
          })
          .finally(() => {
            setIsFetching(false);
          })
      }, [])

      return{ data, error, isFetching }
}