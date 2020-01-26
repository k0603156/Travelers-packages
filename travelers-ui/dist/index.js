import React from 'react';
import styled from 'styled-components';

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  outline: none;\n  border: none;\n  box-sizing: border-box;\n  height: 2rem;\n  font-size: 0.875rem;\n  padding: 0.5rem 1rem;\n  user-select: none;\n  ", "\n  border-radius: 0.25rem;\n  line-height: 1;\n  font-weight: 600;\n  &:focus {\n    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Button = styled.div(_templateObject(), function (props) {
  switch (props.theme) {
    case "primary":
      return "background: #20c997; color: white; &:hover { background: #38d9a9; }&:active { background: #12b886; }";

    case "secondary":
      return "background: #e9ecef; color: #343a40; &:hover { background: #f1f3f5; } &:active { background: #dee2e6; }";

    case "tertiary":
      return "background: none; color: #20c997; &:hover { background: #e6fcf5; }&:active { background: #c3fae8; }";

    default:
      return "background: #20c997; color: white; &:hover { background: #38d9a9; } &:active { background: #12b886; }";
  }
});

var button = function button(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      theme = _ref.theme;
  return React.createElement(Button, {
    onClick: onClick,
    theme: theme
  }, children);
};

export { button as Button };
