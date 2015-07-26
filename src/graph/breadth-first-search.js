'use strict';

module.exports = {

	/**
	 * Breadth first search
	 * @param {Array[Array[number]]} graph
	 * @param {number} startVertex
	 * @return {{usedVertexes: Array, distances: Array, parents: Array}}
	 */
	breadthFirstSearch: function (graph, startVertex) {
		startVertex = startVertex || 0;
		var queue = [],
			usedVertexes = [],
			distances = [],
			parents = [],
			fromVertex, i, toVertex;

		queue.push(startVertex);

		for (i = 0; i < graph.length; i++) {
			usedVertexes[i] = false;
			distances[i] = 0;
		}

		usedVertexes[startVertex] = true;
		parents[startVertex] = -1;

		while (queue.length) {
			fromVertex = queue.shift();

			for (i = 0; i < graph[fromVertex].length; i++) {
				if (fromVertex === i || !graph[fromVertex][i]) {
					continue;
				}

				toVertex = i;
				if (usedVertexes[toVertex]) {
					continue;
				}

				usedVertexes[toVertex] = true;
				queue.push(toVertex);

				distances[toVertex] = distances[fromVertex] + 1;
				parents[toVertex] = fromVertex;
			}
		}

		return {
			usedVertexes: usedVertexes,
			distances: distances,
			parents: parents
		};
	}
};