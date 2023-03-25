import { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const category = 'computers';
  const URL = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
  const API_KEY = 'tS3FqQpYl4HPGR1oWdQyBw==63N5k4ADiPcGxWeq';

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(URL, {
          headers: {
            'X-Api-Key': API_KEY,
            'Content-Type': 'application/json',
          },
        });
        const json = await res.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setData, setIsLoading]);

  if (hasError) return <div className="quote">Something went wrong!</div>;

  if (isLoading) return <div className="quote">Loading...</div>;

  return (
    <div className="quote">
      {data.map((item) => (
        <>
          <p key={item.id}>{item.quote}</p>
          <p>
            By
            <strong>
              {' '}
              {item.author}
            </strong>
          </p>
        </>

      ))}
    </div>
  );
}

export default FetchData;
