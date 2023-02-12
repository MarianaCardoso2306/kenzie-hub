import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  gap: 1.25rem;

  label {
    font-size: 0.5625rem;
    color: var(--grey-0);
  }

  button {
    font-family: "Inter", sans-serif;
    padding: 0.625rem 1rem;

    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
    border-radius: 4px;

    color: #fff;
    font-weight: 500;
    line-height: 1.3125rem;
    font-size: 1rem;
  }

  .input-group {
    position: relative;
  }
  .icon {
    color: var(--grey-1);
    position: absolute;
    top: 2.3125rem;
    right: 0.625rem;
  }
  .icon:hover {
    color: #fff;
  }
`;
