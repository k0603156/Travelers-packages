import styled from "styled-components";
import { InputProps } from "antd/es/input";
import { Input } from "antd";

interface inputProps extends InputProps {}
const input = styled(Input)<inputProps>`
  :read-only {
    border: none;
    cursor: pointer;
    :focus,
    :active,
    ::selection {
      outline: none;
      border-color: inherit;
      box-shadow: none;
    }
  }
`;

export default input;
