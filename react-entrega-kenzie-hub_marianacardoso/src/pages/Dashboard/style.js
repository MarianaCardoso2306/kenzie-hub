import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--grey-4);

  max-width: 100vw;
  min-height: 100vh;

  header {
    margin: 1.875rem 0.75rem;
  }
  .infos {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;

    padding: 2.1875rem 0.75rem;

    line-height: 1.25rem;

    border-top: 2px solid var(--grey-3);
    border-bottom: 3px solid var(--grey-3);
    p {
      font-size: 1.125rem;
      font-weight: 700;
      color: var(--grey-0);
    }
    span {
      font-size: 0.75rem;
      color: var(--grey-1);
    }
  }
  .notification {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    padding: 2.1875rem 0.75rem;

    line-height: 1.25rem;
    p {
      font-size: 1.125rem;
      font-weight: 700;
      color: var(--grey-0);
    }
    span {
      color: #fff;
      font-size: 1rem;
    }
  }

  @media (min-width: 769px) {
    header {
      width: 45rem;

      margin: 1.875rem auto;
    }
    .infos,
    .notification {
      width: 43.75rem;
      margin: 0 auto;
    }
  }
`;
