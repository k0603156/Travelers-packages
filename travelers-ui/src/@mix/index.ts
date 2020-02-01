const base_tyle = `
    outline: none;
    border: none;
    border-radius: 0.25rem;
    box-sizing: border-box;
    &:focus {
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    }
    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus {
      transition: background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s;
    }
`;

const condition = {
  primary: `
  background-color: #20c997;
  color: white;
  &:hover { background: #38d9a9; }
  &:focus { background: #12b886; }
  &:disabled {
    background: #aed9cc;
  }
  `,
  secondary: `
  background-color: #e9ecef;
  color: #343a40;
  &:hover { background: #f1f3f5; }
  &:focus { background: #dee2e6; }
  &:disabled {
    color: #c6d3e1;
  }
  `,
  tertiary: `
  background-color: none;
  color: #20c997;
  &:hover { background: #e6fcf5; }
  &:focus { background: #c3fae8; }
  &:disabled {
    color: #bcd9d0;
  }
  `
};

export { base_tyle, condition };
