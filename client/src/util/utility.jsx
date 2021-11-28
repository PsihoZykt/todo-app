import React from 'react';
import getDisplayName from 'react-display-name';
// experimental function, which map array of data to react components
// Assumed, function receive  array to iterate, returned  react Property
// And array of properties with length = 1 as children
// Each property is  a object with only one key
// So, if you want pass propsKeys , you should get them as
// const propName = props.children[0].propName
// or const [{propName}] = props  (destructuring)
const mapArrayToElements = (arr, Property, ...propsKeys) => arr.map(element => {
  const componentName = getDisplayName(Property).toLowerCase();
  const elementObject = { [componentName]: { ...element } };
  return (
    <Property key={element.id} {...elementObject}>
      {propsKeys}
    </Property>
  );
});

export default mapArrayToElements;
