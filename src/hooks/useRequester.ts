import { useEffect, useState } from 'react';

interface IUseRequester<T> {
  requestCallback(): Promise<T>;
  // will trigger the callback when is true
  enabled?: boolean;
}

const UseRequester = <T = any>({
  requestCallback,
  enabled = true
}: IUseRequester<T>) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(false);
  const [result, setResult] = useState<T>();

  useEffect(() => {
    if (enabled) {
      (async () => {
        try {
          setLoading(true);
          setResult(await requestCallback());
          setLoading(false);
        } catch (e) {
          setLoading(false);
          setError(true);
          console.error('there was an error fetching', e);
        }
      })();
    }
    /**
     * sometimes this lint is a cons due to certain cases we don't
     * need to provide all dependencies due to an infinite effect callback
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled]);

  return { loading, error, result };
};

export default UseRequester;
