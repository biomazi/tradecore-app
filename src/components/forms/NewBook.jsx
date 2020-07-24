import React from 'react'
import { TextInputField, SelectField, TextareaField } from 'evergreen-ui';
import { Field } from 'formik';
import { genres } from 'data/books.json';
import { authors, editions, formats, publishers } from 'data/mockFormOptions';
import styled from 'styled-components';

const StyledEditionWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  div {
    flex-basis: 30%;
    margin-right: 3%;
  }
`;

const findIsDescriptionRequired = values => {
  const { genre, subgenre, isNewSubgenreDescriptionRequired } = values;
  const foundGenre = genres.find(el => el.name === genre);
  const foundSubgenre = foundGenre.subgenres.find(el => el.name === subgenre);
  return foundSubgenre?.isDescriptionRequired || isNewSubgenreDescriptionRequired;
}

const NewBook = ({ formikProps }) => {
  const { errors, touched, values } = formikProps;
  delete errors.newSubgenreName

  const isDescReq = findIsDescriptionRequired(formikProps.values);
  if (isDescReq && !values.description) {
    errors.description = "Required"
  }
  return (
    <div>
      <Field
        as={TextInputField}
        label="Book title"
        required
        placeholder="Book title"
        isInvalid={!!(touched.title && errors.title)}
        validationMessage={touched.title && errors.title}
        name="title" />
      <Field
        as={SelectField}
        label="Author"
        required
        value={values.author}
        isInvalid={!!(touched.author && errors.author)}
        validationMessage={touched.author && errors.author}
        name="author">
        <option key="0" value="" disabled>Author</option>
        {authors.map(author => <option key={author} value={author}>{author}</option>)}
      </Field>
      <Field
        as={TextInputField}
        label="ISBN"
        placeholder="ISBN"
        required
        isInvalid={!!(touched.isbn && errors.isbn)}
        validationMessage={touched.isbn && errors.isbn}
        name="isbn" />
      <Field
        as={SelectField}
        label="Publisher"
        required
        value={values.publisher}
        isInvalid={!!(touched.publisher && errors.publisher)}
        validationMessage={touched.publisher && errors.publisher}
        name="publisher">
        <option key="0" value="" disabled>Publisher</option>
        {publishers.map(publisher => <option key={publisher} value={publisher}>{publisher}</option>)}
      </Field>
      <Field
        as={TextInputField}
        label="Date published"
        inputWidth="30%"
        required
        placeholder="DD/MM/YYYY"
        isInvalid={!!(touched.datePublished && errors.datePublished)}
        validationMessage={touched.datePublished && errors.datePublished}
        name="datePublished" />
      <Field
        as={TextInputField}
        label="Number of pages"
        inputWidth="20%"
        required
        placeholder="Number of pages"
        isInvalid={!!(touched.numberOfPages && errors.numberOfPages)}
        validationMessage={touched.numberOfPages && errors.numberOfPages}
        name="numberOfPages" />
      <Field
        as={SelectField}
        label="Format"
        inputWidth="30%"
        required
        value={values.format}
        isInvalid={!!(touched.format && errors.format)}
        validationMessage={touched.format && errors.format}
        name="format">
        <option key="0" value="" disabled>Format</option>
        {formats.map(format => <option key={format} value={format}>{format}</option>)}
      </Field>
      <StyledEditionWrapper>
        <Field
          as={TextInputField}
          label="Edition"
          required
          placeholder="Edition"
          isInvalid={!!(touched.edition && errors.edition)}
          validationMessage={touched.edition && errors.edition}
          name="edition" />
        <Field
          as={SelectField}
          label="Edition Language"
          required
          value={values.editionLanguage}
          isInvalid={!!(touched.editionLanguage && errors.editionLanguage)}
          validationMessage={touched.editionLanguage && errors.editionLanguage}
          name="editionLanguage">
          <option key="0" value="" disabled>Edition Language</option>
          {editions.map(edition => <option key={edition} value={edition}>{edition}</option>)}
        </Field>
      </StyledEditionWrapper>
      <Field
        as={TextareaField}
        label="Description"
        required={isDescReq}
        isInvalid={!!(touched.description && errors.description)}
        validationMessage={touched.description && errors.description}
        placeholder="Type the description"
        name="description" />
    </div>
  )
}

export default NewBook;
