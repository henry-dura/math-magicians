import { useState, useEffect } from 'react';

function FetchData() {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);
  const [Loading, setLoading] = useState(true);
  const category = 'computers';
  const URL = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
  const API_KEY = 'tS3FqQpYl4HPGR1oWdQyBw==63N5k4ADiPcGxWeq';

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      const response = await fetch(URL, {
        signal: abortController.signal,
        headers: {
          'X-Api-Key': API_KEY,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('No Data for such endpoint');
      }
      const data = await response.json();

      setQuote(data);
      setLoading(false);
      setError(null);
    };
    fetchData()
      .catch((err) => {
        // setError(err.message);
        // setLoading(false);

        if (!(err.name === 'AbortError')) {
          setError(err.message);
          setLoading(false);
        }
      });
    return () => abortController.abort();
  }, []);

  return (
    <div className="quote">
      {error && <div>{error}</div>}
      {Loading && <div>LOADING......</div>}
      {quote && quote.map((item) => (
        <div className="quote-items" key={item.id}>
          <p>{item.quote}</p>
          <p>
            By
            <strong>{` ${item.author}`}</strong>
          </p>
        </div>
      ))}

    </div>
  );
}

export default FetchData;
