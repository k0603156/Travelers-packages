import 'antd/es/button/style/css';
import _Button from 'antd/es/button';
import styled from 'styled-components';
import 'antd/es/input/style/css';
import _Input from 'antd/es/input';
import 'antd/es/date-picker/style/css';
import _DatePicker from 'antd/es/date-picker';

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
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var button = styled(_Button)(_templateObject());

function _templateObject$1() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var input = styled(_Input)(_templateObject$1());

function _templateObject$2() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var datePicker = styled(_DatePicker)(_templateObject$2());

export { button as Button, datePicker as DatePicker, input as Input };
