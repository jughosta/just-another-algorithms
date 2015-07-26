'use strict';

var BFS = require('breadth-first-search');

module.exports = {
	findShortestPath: function (graph, fromVertex, toVertex) {
		var bfs = BFS.breadthFirstSearch(graph, fromVertex);

	},

	_pathPath: function (resultOfSearching, toVertex) {
		if (!resultOfSearching.usedVertexes[toVertex]) {
			return 'No path!';
		}

		var path = [],
			i;

		for (i = toVertex; i != -1; i = resultOfSearching.parents[i]) {
			path.push(i);
		}

		path = path.reverse();

		return path.join(' ');
	}
};