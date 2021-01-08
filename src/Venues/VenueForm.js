import { Form, Field } from 'react-final-form';

// This is a very basic search form
// ideally we'd be using a component library for our UI
// and could pass a suitable component to the `Field`
// for example, https://govuk-react.github.io/govuk-react/?path=/story/form-inputfield--component-default

function VenueForm({ onSubmit }) {
  return <Form onSubmit={onSubmit}
    render={({handleSubmit, submitting}) => (
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Search{' '}
            <Field
              name="search"
              component="input"
              type="text"
              placeholder="Place"
            />
          </label>
        </div>
        <button type="submit" disabled={submitting}>Go</button>
      </form>
    )}
  />;
}

export default VenueForm;
