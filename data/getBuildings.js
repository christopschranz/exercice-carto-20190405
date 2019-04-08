const R = require('ramda')
const points = require('./points.json')
const write = require('./writeCollection')

const features = R.prop('features', points)

write(
  'buildings',
  features.filter(R.pathEq(['properties', 'natural'], undefined))
)
.catch(console.log)
