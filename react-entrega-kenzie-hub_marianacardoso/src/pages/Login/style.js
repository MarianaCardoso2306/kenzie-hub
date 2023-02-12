import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--grey-4);

  max-width: 100vw;
  min-height: 100vh;

  img {
    width: 6.0994rem;
    height: 1.0562rem;
    margin: 3.125rem 0.75rem 0 0.75rem;
    align-self: center;
  }

  .form {
    box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
    border-radius: 3.19812px;
    background-color: var(--grey-3);
    margin: 2.375rem 0.75rem;
    padding: 2.0625rem 0.875rem 1.1875rem 0.875rem;

    display: flex;
    flex-direction: column;
    .title {
      margin-bottom: 1.0625rem;

      font-weight: 700;
      font-size: 0.875rem;
      color: var(--grey-0);

      text-align: center;
    }
    span {
      font-size: 0.5625rem;
      color: var(--grey-1);

      text-align: center;
      margin: 1.6875rem;
    }
  }
  @media (min-width: 769px) {
    header {
      width: 25rem;

      margin: 3.125rem auto;
    }
    .form {
      width: 23.125rem;
      margin: 2.375rem auto 90px auto;
    }
  }
`;
