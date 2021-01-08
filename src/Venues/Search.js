import { useQuery } from 'react-query';

function Search({ forLocation }) {
  const searchURL = new URL('https://uat.ospace.co.uk/api/v1/spaces/search');
  searchURL.searchParams.append('location', forLocation);
  const searchRequest = new Request(searchURL);

  const { isLoading, error, data } = useQuery(`search-${forLocation}`, () =>
    fetch(searchRequest).then(res => res.json())
  );

  if (error) {
    return <div>An error has occurred {error.message}</div>;
  }

  return (<div>
    <div>Searching for {forLocation}</div>
    {isLoading ?
      <div>Loading...</div>
      :
      <pre>
        {JSON.stringify(data, undefined, 2)}
      </pre>
    } 
  </div>);
}

export default Search