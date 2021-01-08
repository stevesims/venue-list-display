import { Form, Field } from 'react-final-form';

function VenueForm({ onSubmit }) {
  return <Form onSubmit={onSubmit}
    render={({handleSubmit, submitting}) => (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Search</label>
          <Field
            name="search"
            component="input"
            type="text"
            placeholder="Place"
          />
        </div>
        <button type="submit" disabled={submitting}>Go</button>
      </form>
    )}
  />;
}

export default VenueForm;
