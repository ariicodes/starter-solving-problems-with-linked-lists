const LinkedList = require('../lib/linkedList');

/**
 * Return the third element from the end of the linked list.
 *
 * @param {LinkedList} list
 *
 * @returns {Node} the third element from the end of the list,
 * null if list length < 3
 *
 */
function thirdFromEnd(list) {
	if (!list || !list.head || !list.head.next || !list.head.next.next) {
		return null;
	}

	let pointer1 = list.head;
	let pointer2 = list.head;
	let pointer3 = list.head;

	pointer1 = pointer1.next.next.next;

	while (pointer1 !== null) {
		pointer3 = pointer2;
		pointer2 = pointer2.next;
		pointer1 = pointer1.next;
	}

	return pointer2;
}

module.exports = thirdFromEnd;
