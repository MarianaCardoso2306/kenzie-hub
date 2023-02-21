import styled from "styled-components";

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;

  position: fixed;
  max-width: 25rem;
  height: 17rem;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 150px auto;
  z-index: 2;

  background-color: var(--grey-3);
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--grey-2);

    padding: 9px 16px;
    h3 {
      color: var(--grey-0);
      font-size: 0.75rem;
      font-weight: 700;
    }
    span {
      color: var(--grey-1);
      font-weight: 600;

      cursor: pointer;
    }
  }
  form {
    padding: 1.25rem 1rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    label {
      color: var(--grey-0);
      font-size: 0.75rem;
    }
    button {
      padding: 0.625rem;

      color: #fff;
      background-color: var(--color-primary);

      border: 1px solid var(--color-primary);

      font-size: 12px;
      line-height: 20px;
      font-weight: 500;
    }
  }
`;
