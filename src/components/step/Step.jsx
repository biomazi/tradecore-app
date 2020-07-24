import React from 'react';
import { genres } from 'data/books.json';
import GenreList from 'components/forms/GenreList';
import SubgenreList from 'components/forms/SubgenreList';
import NewSubgenre from 'components/forms/NewSubgenre';
import NewBook from 'components/forms/NewBook';
import { useFormContext } from 'hooks/useFormContext';

const Step = ({ formikProps }) => {
  const { steps } = useFormContext();
  const { step } = steps;
  switch (step) {
    case 1: {
      return <GenreList genres={genres} formikProps={formikProps} />
    }
    case 2: {
      const genre = genres.find(genre => genre.name === formikProps.values.genre);
      return <SubgenreList subgenres={genre.subgenres} formikProps={formikProps} />
    }
    case 3: {
      return <NewSubgenre formikProps={formikProps} />
    }
    case 4: {
      return <NewBook formikProps={formikProps} />
    }
    default:
      return null;
  }
};

export default Step;