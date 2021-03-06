import classnames from 'classnames';
import React from 'react';

import Label from '../label';

import './style.scss';

export default ({
  options = [],
  name: fieldName,
  label: fieldLabel,
  width,
  error = false,
  ...rest
}) => (
  <div
    className={classnames('select', {
      [`select--width-${width}`]: width,
      'select--has-error': error
    })}
  >
    <Label htmlfor={fieldName} label={fieldLabel}>
      <select
        name={fieldName}
        id={fieldName}
        className="select__field"
        {...rest}
      >
        {options.map(([name, label, props]) => (
          <option name={name} {...props}>
            {label}
          </option>
        ))}
      </select>
    </Label>
  </div>
);
