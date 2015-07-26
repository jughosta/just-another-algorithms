'use strict';

module.exports = {
	depthFirstSearch: function (graph, startVertex) {
		startVertex = startVertex || 0;

		var colors = [],
			timeIn = [],
			timeOut = [],
			dfsTimer = 0;

		for (var i = 0; i < graph[startVertex].length; i++) {
			colors[i] = 0;
		}

		var dfs = function (vertex) {
			timeIn[vertex] = dfsTimer++;
			colors[vertex] = 1;

			for (var i = 0; i < graph[vertex].length; i++) {
				if (vertex === i || !graph[vertex][i]) {
					continue;
				}

				if (colors[i] === 0) {
					dfs(i);
				}
			}

			colors[vertex] = 2;
			timeOut[vertex] = dfsTimer++;
		};

		dfs(startVertex);

		return {
			timeIn: timeIn,
			timeOut: timeOut,
			colors: colors,
			dfsTimer: dfsTimer
		};
	}
};