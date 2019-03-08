const React = require('react')
const generateId = require('sketch-file/generateId')
const { renderToJSON } = require('react-sketchapp')

const displayName = require('./display-name')

module.exports = function createSymbol(
  Component,
  props,
  name,
  symbolStyle = {}
) {
  const componentName = displayName(Component)
  const masterName = name ? `${componentName}/${name}` : componentName
  const symbolID = generateId(masterName)

  return (
    <symbolmaster symbolID={symbolID} name={masterName} style={symbolStyle}>
      <Component {...props} />
    </symbolmaster>
  )
}