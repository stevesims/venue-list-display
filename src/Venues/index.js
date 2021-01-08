import { useState } from 'react';

import VenueForm from './VenueForm';
import Search from './Search';

function Venues() {
  const [searchFor, setSearchFor] = useState('');

  const formSubmit = ({ search }) => setSearchFor(search);

  return (
    <div>
      <h1>Search for a venue</h1>

      <VenueForm onSubmit={formSubmit} />

      <br/>

      {searchFor ? <Search forLocation={searchFor} /> : null}
    </div>
  );
}

export default Venues;