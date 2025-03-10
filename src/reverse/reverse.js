const LinkedList = require('../lib/linkedList');

/**
 * Iteratively reverse a linked list
 *
 * @param list
 * A (potentially empty) linked list
 *
 * @returns {LinkedList}
 * A linked list in reverse order
 */
function reverseIterative(list) {
	const reversedList = new LinkedList();
	let node = list.head;
	while (node) {
		reversedList.insertAtHead(node.value);
		node = node.next;
	}
	return reversedList;
}

/**
 * Recursively reverse a linked list
 *
 * @param list
 * A (potentially empty) linked list
 *
 * @returns {LinkedList}
 * A linked list in reverse order
 */
function reverseRecursive(list) {
	function reverse(currentNode, previousNode) {
		if (!currentNode) {
			return previousNode;
		}

		const nextNode = currentNode.next;
		currentNode.next = previousNode;
		return reverse(nextNode, currentNode);
	}

	if (list.head) {
		list.head = reverse(list.head, null);
	}

	return list;
}

module.exports = { reverseIterative, reverseRecursive };
