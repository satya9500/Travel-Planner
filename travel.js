const createGraph = (V, E) => {
    // V - Number of vertices
    // E - The set of edges in graph

    adjacency_list = [];
    for(let i=0;i<V;i++) {
        adjacency_list.push([]);
    }

    E.forEach(edge => {
        adjacency_list[edge.src-1].push({
            src: edge.src,
            dest: edge.dest,
            weight: edge.weight
        });
        adjacency_list[edge.dest-1].push({
            src: edge.dest,
            dest: edge.src,
            weight: edge.weight
        });
    });

    console.log(adjacency_list);
    return adjacency_list;
}

createGraph(5, [
    {
        src: 1,
        dest: 2,
        weight: 3
    },
    {
        src: 1,
        dest: 4,
        weight: 2
    },
    {
        src: 4,
        dest: 3,
        weight: 3
    },
    {
        src: 3,
        dest: 5,
        weight: 1
    },
]);
