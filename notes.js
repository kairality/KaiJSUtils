function collectFruits(fruit) {
    let count = 0;
	function pickFruit() {
        msg = `${count} ${fruit}${count === 1 ? '' : "s"}`;
		console.log(msg)
        count++;
	}

	return pickFruit;
}

let arr = ["tangerine","banana"];
let nami = collectFruits("tangerine");
nami();
nami();
nami();
nami();
nami();


if (!rootNode) {
    return minVal;
  }
  if (!rootNode.left && !rootNode.right) {
    return minVal;
  }
  let left = rootNode.left;
  let right = rootNode.right;

  if (left) {
    minVal = Math.min(left.val, minVal);
    let leftMin = findMinBT(left, minVal);
    minVal = Math.min(leftMin, minVal);
  }

  if (right) {
    minVal = Math.min(right.val, minVal);
    let rightMin = findMinBT(right, minVal);
    minVal = Math.min(rightMin, minVal);
  }
