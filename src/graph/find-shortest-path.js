'use strict';

var breadthFirstSearch = require('./breadth-first-search').breadthFirstSearch;

module.exports = {

	/**
	 * Shortest path in graph.
	 * @param {Array[Array[number]]} graph
	 * @param {number} fromVertex
	 * @param {number} toVertex
	 * @return {Array}
	 */
	findShortestPath: function (graph, fromVertex, toVertex) {
		var bfs = breadthFirstSearch(graph, fromVertex);

		if (!bfs.usedVertexes[toVertex]) {
			return null;
		}

		var path = [],
			i;

		for (i = toVertex; i != -1; i = bfs.parents[i]) {
			path.push(i);
		}

		return path.reverse();
	}
};