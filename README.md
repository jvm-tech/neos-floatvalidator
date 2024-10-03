# Neos UI float-property validator

This package adds a validator for float-type properties to the Neos react-ui

## Install

`composer require jvmtech/neos-floatvalidator`

## Usage

Add the validator to a property to ensure it is a valid float-point number.

```
Acme.MyNodeType:
  properties:
    floatValue:
      type: float
      validation:
        'JvMTECH.Neos.FloatValidator/Validation/FloatValidator': [ ]
```
