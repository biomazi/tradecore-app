import React from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';
import { schema } from 'data/schema';
import FormContainer from 'containers/form-container/FormContainer';
import ButtonContainer from 'containers/button/ButtonContainer';
import Breadcrumb from 'components/breadcrumb/Breadcrumb';
import BookAdded from 'components/book-added/BookAdded';
import { useFormContext } from 'hooks/useFormContext';

const StyledTitle = styled.h4`
  padding: 0px 12% 20px 12%;
`;

const AddBookContainer = () => {
  const { state, dispatch, steps } = useFormContext();
  const handleSubmit = formData => {
    console.log(formData);
    steps.setStep(1);
    dispatch({ type: 'setShowBookAdded', payload: true })
  };

  return (
    <Formik
      initialValues={{
        genre: '',
        subgenre: '',
        newSubgenreName: '',
        isNewSubgenreDescriptionRequired: false,
        title: '',
        author: '',
        isbn: '',
        publisher: '',
        datePublished: '',
        numberOfPages: '',
        format: '',
        edition: '',
        editionLanguage: '',
        description: '',
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}>
      {props => (
        <>
          {!state.showBookAdded ? (
            <>
              <StyledTitle>Add book - New book</StyledTitle>
              <Breadcrumb step={steps.step} />
              <FormContainer formikProps={props} />
              <ButtonContainer submit={props.submitForm} values={props.values} formikProps={props} />
            </>
          )
            : < BookAdded resetForm={props.resetForm} />
          }
        </>
      )}
    </Formik>
  )
}

export default AddBookContainer;
