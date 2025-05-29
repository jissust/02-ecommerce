import { useEffect, useState } from "react";

function useGetProducts() {
  const url = `${
    import.meta.env.VITE_PUBLIC_BACKEND_URL
  }/api/products?filters[active][$eq]=true&populate=*`;
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResult(json.data);
        setLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Error desconocido");
        }
        setLoading(false);
      }
    })();
  }, [url]);

  return { loading, result, error };
}

export default useGetProducts;
