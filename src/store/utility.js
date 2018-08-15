function updateObject(oldObject, updatedValues) {
  return {
    ...oldObject,
    ...updatedValues,
  };
}

export default updateObject;