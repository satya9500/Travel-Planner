const createGraph = (V, E) => {

    adjacency_list = [];
    for(let i=0;i<V;i++) {
        adjacency_list.push([]);
    }

    E.forEach(edge => {
        adjacency_list[edge[0]].push([edge[1],edge[2]]);
        adjacency_list[edge[1]].push([edge[0],edge[2]]);
    });
    return adjacency_list;
}

const findMin = (V, dist, vis) => {
    let min=Number.MAX_VALUE;
    let min_index=-1;
    for(let i=0;i<V;i++) {
        if(vis[i]===false && dist[i][0] < min) {
            min_index = i;
            min = dist[i][0];
        }
    }
    return min_index;
}

const djikstra = (graph, V, src) => {
    const vis = [];
    const dist = [];
    for(let i=0;i<V;i++) {
        vis.push(false);
        dist.push([Number.MAX_VALUE,-1])
    };
    dist[src][0]=0;
    for(let i=0;i<V-1;i++) {
        let u=findMin(V, dist, vis);
        vis[u] = true;
        for(let j=0;j<graph[u].length;j++) {
            let edge = graph[u][j];
            if(vis[edge[0]]===false && dist[u][0]+edge[1]<dist[edge[0]][0]) {
                dist[edge[0]][0] = dist[u][0]+edge[1];
                dist[edge[0]][1] = u;
            }
        }
    }
    console.log(dist);
    return dist;
}

const V = 9;
const E = [[0,1,4], [0,7,8], [1,7,11], [1,2,8], [7,8,7], [6,7,1], [2,8,2],
[6,8,6], [5,6,2], [2,5,4], [2,3,7], [3,5,14], [3,4,9], [4,5,10]];

const graph = createGraph(V, E);

djikstra(graph, V, 0);
