import { useQuery } from 'react-query';

function Search({ forLocation }) {
  const searchURL = new URL('https://uat.ospace.co.uk/api/v1/spaces/search');
  searchURL.searchParams.append('location', forLocation);
  const searchRequest = new Request(searchURL);

  const { isLoading, error, data } = useQuery(`search-${forLocation}`, () =>
    fetch(searchRequest).then(
      res => res.json()
      // instead of returning pure API result, this could re-process the response to be more convenient
      // for example, returning only the `venues` array
    )
  );

  if (error) {
    return <div>An error has occurred {error.message}</div>;
  }

  // This currently shows the raw response
  // a real application would iterate over venues and display them in a nicer way
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