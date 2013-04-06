define(function () {

    /**
     * Graph
     * @constructor
     */
    var Graph = function () {

    };

    Graph.prototype._data = [
        /*[1, 1, 1, 0, 0, 0],
        [1, 1, 0, 1, 0, 0],
        [1, 0, 1, 0, 0, 0],
        [0, 1, 0, 1, 1, 1],
        [0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 0, 1]*/

        [1, 0, 1, 1, 0, 0], // good for test connected components
        [0, 1, 0, 0, 1, 0],
        [1, 0, 1, 1, 0, 0],
        [1, 0, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 1]
    ];

    /**
     * Breadth first search
     * @param {Array.<Array.<Number>>} graph
     * @param {Number} startVertex
     * @return {Object}
     */
    Graph.prototype.breadthFirstSearch = function (graph, startVertex) {
        graph = graph || this._data;
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

        while (queue.length > 0) {
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
    };

    /**
     * Find shortest path
     * @param {Array.<Array.<Number>>} graph
     * @param {Number} fromVertex
     * @param {Number} toVertex
     * @return {String}
     */
    Graph.prototype.findShortestPath = function (graph, fromVertex, toVertex) {
        var bfs = this.breadthFirstSearch(graph, fromVertex);
        return this._printPath(bfs, toVertex);
    };

    Graph.prototype._printPath = function (searchResultObject, toVertex) {
        if (typeof toVertex === 'undefined') {
            toVertex = searchResultObject.usedVertexes.length - 1;
        }

        if (!searchResultObject.usedVertexes[toVertex]) {
            return 'No path!';
        }
        var path = [], pathString = 'Path: ', i;
        for (i = toVertex; i != -1; i = searchResultObject.parents[i]) {
            path.push(i);
        }
        for (i = path.length - 1; i >= 0; i--) {
            pathString += path[i] + ' ';
        }

        return pathString;
    };

    /**
     * Depth first search
     * @param {Array.<Array.<Number>>} graph
     * @param {Number} startVertex
     * @return {Object}
     */
    Graph.prototype.depthFirstSearch = function (graph, startVertex) {
        graph = graph || this._data;
        startVertex = startVertex || 0;

        var colors = [],
            timeIn = [], timeOut = [],
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
    };

    /**
     * Topology sort
     * @param {Array.<Array.<Number>>} graph
     * @return {String}
     */
    Graph.prototype.topologySort = function (graph) {
        graph = graph || this._data;
        var n = graph.length;
        if (!n) {
            return '';
        }

        var usedVertexes = [],
            sortedVertexes = [], i;

        var dfs = function (vertex) {
            usedVertexes[vertex] = true;
            for (var i = 0; i < n; i++) {
                if (vertex === i || !graph[vertex]) {
                    continue;
                }

                if (!usedVertexes[i]) {
                    dfs(i);
                }
            }
            sortedVertexes.push(vertex);
        };

        for (i = 0; i < n; i++) {
            usedVertexes[i] = false;
        }

        for (i = 0; i < n; i++) {
            if (usedVertexes[i]) {
                continue;
            }
            dfs(i);
        }

        var sortedVertexString = 'Sorted: ';

        for (var i = sortedVertexes.length - 1; i >= 0; i--) {
            sortedVertexString += sortedVertexes[i] + ' ';
        }

        return sortedVertexString;
    };

    /**
     * Dijkstra search
     * @param {Array.<Array.<Number>>} graph
     * @param {Number} startVertex
     * @return {Object}
     */
    Graph.prototype.dijkstra = function (graph, startVertex) {
        graph = graph || this._data;
        startVertex = startVertex || 0;

        var distances = [],
            INF = 1000000000,
            parents = [],
            usedVertexes = [], i, j,
            vertex = -1;

        for (i = 0; i < graph.length; i++) {
            distances[i] = INF;
            usedVertexes[i] = false;
        }

        distances[startVertex] = 0;
        parents[startVertex] = -1;

        for (i = 0; i < graph.length; i++) {
            vertex = -1;
            for (j = 0; j < graph.length; j++) {
                if (vertex === j || (vertex != -1) && !graph[vertex][j]) {
                    continue;
                }

                if (!usedVertexes[j] && (vertex === -1 || distances[j] < distances[vertex])) {
                    vertex = j;
                }
            }
            if (distances[vertex] === INF) {
                break;
            }

            usedVertexes[vertex] = true;

            for (j = 0; j < graph.length; j++) {
                if (vertex === j || !graph[vertex][j]) {
                    continue;
                }

                if (distances[vertex] + graph[vertex][j] < distances[j]) {
                    distances[j] = distances[vertex] + graph[vertex][j];
                    parents[j] = vertex;
                }
            }
        }

        return {
            usedVertexes: usedVertexes,
            distances: distances,
            parents: parents
        };
    };

    /**
     * Find shortest path by Dijkstra
     * @param {Array.<Array.<Number>>} graph
     * @param {Number} fromVertex
     * @param {Number} toVertex
     * @return {String}
     */
    Graph.prototype.findShortestPathByDijkstra = function (graph, fromVertex, toVertex) {
        var ds = this.dijkstra(graph, fromVertex);
        return this._printPath(ds, toVertex);
    };

    /**
     * Find connected components
     * @param {Array.<Array.<Number>>} graph
     * @return {String}
     */
    Graph.prototype.findConnectedComponent = function (graph) {
        graph = graph || this._data;

        var usedVertexes = [],
            component = [], i,
            componentsString = [];

        var dfs = function (vertex) {
            usedVertexes[vertex] = true;
            component.push(vertex);

            for (var i = 0; i < graph.length; i++) {
                if (vertex === i || !graph[vertex][i]) {
                    continue;
                }
                if (!usedVertexes[i]) {
                    dfs(i);
                }
            }
        };

        for (i = 0; i < graph.length; i++) {
            usedVertexes[i] = false;
        }

        for (i = 0; i < graph.length; i++) {
            if (usedVertexes[i]) {
                continue;
            }

            component = [];
            dfs(i);

            componentsString.push(component.join(' '));
        }

        return componentsString.length + ' connected components: [' + componentsString.join('], [') + ']';
    };

    /**
     * Find cycle in oriented graph
     * @param {Array.<Array.<Number>>} graph
     * @return {String}
     */
    Graph.prototype.findCycleInOrientedGraph = function (graph) {
        graph = graph || [
            [0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0]
        ];

        var cycle = [],
            parents = [], i,
            startCycleVertex, endCycleVertex;

        var dfs = function (vertex) {
            cycle[vertex] = 1;
            for (var i = 0; i < graph.length; i++) {
                if (vertex === i || !graph[vertex][i]) {
                    continue;
                }

                if (cycle[i] === 0) {
                    parents[i] = vertex;
                    if (dfs(i)) {
                        return true;
                    }
                }
                else if (cycle[i] === 1) {
                    startCycleVertex = i;
                    endCycleVertex = vertex;
                    return true;
                }
            }
            cycle[vertex] = 2;
            return false;
        };

        for (i = 0; i < graph.length; i++) {
            parents[i] = -1;
            cycle[i] = 0;
        }

        startCycleVertex = -1;

        for (i = 0; i < graph.length; i++) {
            if (dfs(i)) {
                break;
            }
        }

        if (startCycleVertex === -1) {
            return 'Acyclic';
        }

        var resultCycle = [startCycleVertex];

        for (i = endCycleVertex; i != startCycleVertex; i = parents[i]) {
            resultCycle.unshift(i);
        }

        resultCycle.unshift(startCycleVertex);

        return 'Cyclic: [' + resultCycle.join(' ') + ']';
    };

    return Graph;
});