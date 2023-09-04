package DBSCAN_JAVA_IA.clustering;

// import java.util.ArrayList;
// import java.util.List;

// public class DBSCAN {
//     private List<Point> points;
//     private double eps; // Raio da vizinhança.
//     private int minPts; // Número mínimo de pontos em uma vizinhança.

//     public DBSCAN(List<Point> points, double eps, int minPts) {
//         this.points = points;
//         this.eps = eps;
//         this.minPts = minPts;
//     }

//     public void run() {
//         int clusterID = 0;
//         for (Point point : points) {
//             if (!point.isVisited()) {
//                 point.setVisited(true);
//                 List<Point> neighbors = point.getNeighbors(points, eps);

//                 if (neighbors.size() < minPts) {
//                     point.setClusterID(-1); // Marcar como ruído.
//                 } else {
//                     Cluster cluster = new Cluster();
//                     expandCluster(point, neighbors, cluster, clusterID);
//                     clusterID++;
//                 }
//             }
//         }
//     }

//     private void expandCluster(Point point, List<Point> neighbors, Cluster cluster, int clusterID) {
//         cluster.addPoint(point);
//         point.setClusterID(clusterID);

//         for (int i = 0; i < neighbors.size(); i++) {
//             Point neighbor = neighbors.get(i);

//             if (!neighbor.isVisited()) {
//                 neighbor.setVisited(true);
//                 List<Point> neighborNeighbors = neighbor.getNeighbors(points, eps);

//                 if (neighborNeighbors.size() >= minPts) {
//                     neighbors.addAll(neighborNeighbors);
//                 }
//             }

//             if (neighbor.getClusterID() == -1) {
//                 neighbor.setClusterID(clusterID);
//                 cluster.addPoint(neighbor);
//             }
//         }
//     }

//     public List<Cluster> getClusters() {
//         List<Cluster> clusters = new ArrayList<>();
//         int maxClusterID = -1;

//         for (Point point : points) {
//             int clusterID = point.getClusterID();

//             if (clusterID > maxClusterID) {
//                 maxClusterID = clusterID;
//             }

//             if (clusterID >= clusters.size()) {
//                 clusters.add(new Cluster());
//             }

//             clusters.get(clusterID).addPoint(point);
//         }

//         return clusters;
//     }
// }
import java.util.ArrayList;
import java.util.List;

public class DBSCAN {
    private List<Point> points;
    private double eps;
    private int minPts;

    public DBSCAN(List<Point> points, double eps, int minPts) {
        this.points = points;
        this.eps = eps;
        this.minPts = minPts;
    }

    public void run() {
        int clusterID = 0;

        for (Point point : points) {
            if (!point.isVisited()) {
                point.setVisited(true);

                List<Point> neighbors = point.getNeighbors(points, eps);

                if (neighbors.size() < minPts) {
                    point.setNoise(true);
                } else {
                    Cluster cluster = new Cluster();
                    expandCluster(point, neighbors, cluster, clusterID);
                    clusterID++;
                }
            }
        }
    }

    private void expandCluster(Point point, List<Point> neighbors, Cluster cluster, int clusterID) {
        cluster.addPoint(point);
        point.setClusterID(clusterID);

        for (Point neighbor : neighbors) {
            if (!neighbor.isVisited()) {
                neighbor.setVisited(true);

                List<Point> neighborNeighbors = neighbor.getNeighbors(points, eps);

                if (neighborNeighbors.size() >= minPts) {
                    neighbors.addAll(neighborNeighbors);
                }
            }

            if (neighbor.getClusterID() == -1) {
                neighbor.setClusterID(clusterID);
                cluster.addPoint(neighbor);
            }
        }
    }

    public List<Cluster> getClusters() {
        List<Cluster> clusters = new ArrayList<>();
        
        // Inicializa clusters com o tamanho apropriado
        for (Point point : points) {
            int clusterID = point.getClusterID();
            
            if (clusterID != -1) {
                while (clusterID >= clusters.size()) {
                    clusters.add(new Cluster());
                }

                clusters.get(clusterID).addPoint(point);
            }
        }
        
        return clusters;
    }
}
