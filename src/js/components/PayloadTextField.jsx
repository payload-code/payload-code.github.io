import { FormHelperText, InputLabel } from '@material-ui/core'
import { PayloadInput } from 'payload-react'
import React, { useState } from 'react'

export default function PayloadTextField({
  attr,
  style,
  label,
  labelClassName,
  error,
  helperText,
  ...props
}) {
  const [focused, setFocused] = useState(false)

  return (
    <>
      <InputLabel
        className={
          (focused ? 'Mui-focused MuiInputLabel-shrink ' : '') +
          (error ? 'Mui-error ' : '') +
          labelClassName
        }>
        {label}
      </InputLabel>
      <div
        className={
          (error ? 'Mui-error ' : '') +
          'MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl'
        }
        style={style}>
        <PayloadInput
          attr={attr}
          className="MuiInputBase-input MuiInput-input"
          placeholder=""
          onFocus={() => setFocused(true)}
          onBlur={(e) => setFocused(!!(e.target.value?.length ?? 1))}
          {...props}
        />
      </div>
      {helperText && (
        <FormHelperText error={error}>{helperText}</FormHelperText>
      )}
    </>
  )
}
