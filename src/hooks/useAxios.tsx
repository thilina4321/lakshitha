/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import axios, { AxiosRequestHeaders, Method } from "axios";

interface AxiosParams {
  url: string;
  method: Method;
  body?: any;
  headers?: AxiosRequestHeaders;
}

interface AxiosResponse<T = any> {
  response: T | null;
  error: string | null;
  loading: boolean;
}

const useAxios = <T = any,>({
  url,
  method,
  body = null,
  headers = undefined,
}: AxiosParams): AxiosResponse<T> => {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = async () => {
    try {
      const res = await axios({
        url,
        method,
        data: body,
        headers,
      });
      setResponse(res.data);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, method, body, headers, fetchData]);

  return { response, error, loading };
};

export default useAxios;

// const PostDataComponent = () => {
//     const { response, error, loading } = useAxios({
//       url: '/api/data',
//       method: 'POST',
//       body: {
//         key1: 'value1',
//         key2: 'value2',
//       },
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error occurred: {error}</p>;

//     return (
//       <div>
//         <h1>Response from POST request:</h1>
//         <pre>{JSON.stringify(response, null, 2)}</pre>
//       </div>
//     );
//   };

//     const GetDataComponent = () => {
//     const { response, error, loading } = useAxios<string[]>({
//       url: '/api/data',
//       method: 'GET',
//     });

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error occurred: {error}</p>;

//     return (
//       <div>
//         <h1>Data:</h1>
//         <pre>{JSON.stringify(response, null, 2)}</pre>
//       </div>
//     );
//   };
