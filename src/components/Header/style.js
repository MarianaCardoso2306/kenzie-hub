import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    padding: 0.3125rem 1.5625rem;
    line-height: 1.4375rem;

    font-family: "Inter", sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--grey-0);

    background-color: var(--grey-3);
    border: 1px solif var(--grey-3);
  }
  img {
    width: 6.0994rem;
    height: 1.0562rem;
  }
`;
