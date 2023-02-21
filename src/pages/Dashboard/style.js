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
  .techs {
    display: flex;
    flex-direction: column;
    margin: 1.75rem 0.75rem;

    .techs-title {
      display: flex;
      justify-content: space-between;
      color: var(--grey-0);
      font-size: 1rem;
      align-items: center;

      margin-bottom: 1.75rem;
      button {
        padding: 0.625rem;
        background-color: var(--grey-3);
        border: none;
        border-radius: 4px;
        color: #fff;
        line-height: 0.8rem;
        font-weight: 700;
      }
    }
    ul {
      color: #fff;
      background-color: var(--grey-3);
      display: flex;
      flex-direction: column;
      gap: 1rem;
      border-radius: 4px;

      padding: 1.375rem;
      li {
        display: flex;
        justify-content: space-between;

        background-color: var(--grey-4);

        padding: 0.75rem;
        cursor: pointer;
        border-radius: 4px;
        p {
          font-size: 0.875rem;
          font-weight: 700;
        }
        span {
          font-size: 0.75rem;
          color: var(--grey-1);
        }
      }
      li:hover {
        background-color: var(--grey-2);
      }
    }
  }

  @media (min-width: 769px) {
    header {
      width: 45rem;

      margin: 1.875rem auto;
    }
    .infos {
      width: 43.75rem;
      margin: 0 auto;
    }
    .techs {
      width: 43.75rem;
      margin: 1.75rem auto;
    }
  }
`;
