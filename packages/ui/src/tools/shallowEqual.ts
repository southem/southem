const is = (x, y) => {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  }

  return x !== x && y !== y; // eslint-disable-line no-self-compare
};

export function shallowEqual(objA, objB) {
  if (is(objA, objB)) { return true; }

  if (typeof objA !== 'object' || objA === null ||
    typeof objB !== 'object' || objB === null) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) { return false; }

  // Test for A's keys different from B.
  // const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  const hasOwn = Object.prototype.hasOwnProperty;

  /**
   for (let i = 0; i < keysA.length; i++) {
    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }
   * */
  for (let i = 0; i < keysA.length; i += 1) {
    if (!hasOwn.call(objB, keysA[i]) ||
      !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}
