import { useEffect, useState } from "react";

function useGetCategories() {
  const url = `${
    import.meta.env.VITE_PUBLIC_BACKEND_URL
  }/api/categories?filters[active][$eq]=true`;
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setCategories(json.data);
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

  return { categories, loading, error };
}

export default useGetCategories;
