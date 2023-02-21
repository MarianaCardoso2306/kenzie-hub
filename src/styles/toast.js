import { ToastContainer } from "react-toastify";
import styled from "styled-components";

export const CustomToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    background-color: var(--grey-2);
    color: var(--grey-0);
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.5rem;
    padding: 1.25rem;
    border-radius: 4px;
    font-family: "Inter", sans-serif;
  }

  .Toastify__progress-bar--sucesso {
    background-color: var(--success);
  }
  .Toastify__progress-bar--error {
    background-color: var(--negative);
  }
  .Toastify__close-button {
    color: var(--grey-1);
  }
`;
