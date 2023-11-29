/**
 * Given a list and two nodes, swap the position of the two nodes
 * @param {LinkedList} list
 * @param {Node} x
 * @param {Node} y
 */
function swap(list, x, y) {
  if (!list || !x || !y) {
    return list;
  }

  function findPreviousNode(node) {
    let current = list.head;
    let prev = null;

    while (current && current !== node) {
      prev = current;
      current = current.next;
    }

    return prev;
  }

  if (x === y) {
    return list;
  }

  let x_next = x.next;
  let y_next = y.next;
  let x_prev = findPreviousNode(x);
  let y_prev = findPreviousNode(y);

  x.next = y_next;
  y.next = x_next;

  if (x_prev !== null) {
    x_prev.next = y;
  } else {
    list.head = y;
  }

  if (y_prev !== null) {
    y_prev.next = x;
  } else {
    list.head = x;
  }

  return list;
}


module.exports = swap;
