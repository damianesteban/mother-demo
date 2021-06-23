import React from 'react';
import styled from '@emotion/styled';
import { gql, useQuery } from 'urql';

/**
 * ! NOTE: I dig this convention, having the query / mutation at the top of the file.
 */
const PatientsQuery = gql`
  query AllPatientsQuery {
    allPatients {
      id
      email
    }
  }
`;

const StyledPage = styled.div`
  .page {
  }
`;

export function Patients() {
  /*
   * Replace the elements below with your own.
   *
   */
  const [result, reexecuteQuery] = useQuery({
    query: PatientsQuery,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <StyledPage>
      <h2>Home</h2>
      <p>The thing is here!!!!!!!!!!!!!!!!!!.</p>
      <p>Here are patient emails:</p>
      <ul>
        {data.allPatients.map((patient) => (
          <li key={patient.id}>{patient.email}</li>
        ))}
      </ul>
    </StyledPage>
  );
}

export default Patients
