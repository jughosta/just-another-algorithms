requirejs.onError = function (err) {
    console.log(err.requireType);
    if (err.requireType === 'timeout') {
        console.log('modules: ' + err.requireModules);
    }

    throw err;
};

require(
    ["BinaryTree", "Graph", "NumberAnalyzer", "Sorter", "SqrtSolver", "StringAnalyser", "TreeSegments"],
    function (BinaryTree, Graph, NumberAnalyser, Sorter, SqrtSolver, StringAnalyser, TreeSegments) {
    window.algorithms = {
        binaryTree: new BinaryTree(),
        graph: new Graph(),
        numberAnalyser: new NumberAnalyser(),
        sorter: new Sorter(),
        sqrtSolver: new SqrtSolver(),
        stringAnalyser: new StringAnalyser(),
        treeSegments: new TreeSegments()
    };

    alert('To test you can use "window.algorithms" object');
});