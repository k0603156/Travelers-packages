import styled from "styled-components";
import { InputProps } from "antd/es/input";
import { Input } from "antd";

interface inputProps extends InputProps {}
const input = styled(Input)<inputProps>``;

export default input;
