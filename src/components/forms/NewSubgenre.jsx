import React from 'react';
import { TextInput, Checkbox } from 'evergreen-ui';
import { Field } from 'formik';

const NewSubgenre = ({ formikProps }) => {
  const { errors, values } = formikProps;

  return (
    <div>
      <Field
        as={TextInput}
        name="newSubgenreName"
        placeholder="Subgenre name"
        isInvalid={!!errors.newSubgenreName}
      />
      <Field
        as={Checkbox}
        marginBottom={24}
        label="Description is required for this subgenre"
        checked={values.isNewSubgenreDescriptionRequired}
        value="descriptionRequired"
        name="isNewSubgenreDescriptionRequired"
      />
    </div>
  )
}

export default NewSubgenre;
