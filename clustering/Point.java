package DBSCAN_JAVA_IA.clustering;

// import java.util.ArrayList;
// import java.util.List;

// public class Point {
//     private double x;
//     private double y;
//     private boolean visited;
//     private int clusterID;

//     public Point(double x, double y) {
//         this.x = x;
//         this.y = y;
//         this.visited = false;
//         this.clusterID = -1; // Inicialmente não pertence a nenhum cluster.
//     }

//     // Getters e setters para x, y, visited e clusterID.
//     public double getX() {
//         return x;
//     }
//     public double getY() {
//         return y;
//     }
//     public int getClusterID() {
//         return clusterID;
//     }
   
//     public boolean isVisited() {
//         return visited;
//     }


//     public void setX(double x) {
//         this.x = x;
//     }
//     public void setY(double y) {
//         this.y = y;
//     }
//     public void setClusterID(int clusterID) {
//         this.clusterID = clusterID;
//     }
//     public void setVisited(boolean visited) {
//         this.visited = visited;
//     }

//      public List<Point> getNeighbors(List<Point> allPoints, double eps) {
//         List<Point> neighbors = new ArrayList<>();

//         for (Point other : allPoints) {
//             if (this != other) { // Evitar comparar o ponto consigo mesmo.
//                 double distance = calculateDistance(this, other);
//                 if (distance <= eps) {
//                     neighbors.add(other);
//                 }
//             }
//         }

//         return neighbors;
//     }

//     private double calculateDistance(Point point1, Point point2) {
//         double x1 = point1.getX();
//         double y1 = point1.getY();
//         double x2 = point2.getX();
//         double y2 = point2.getY();

//         return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
//     }

// }

import java.util.ArrayList;
import java.util.List;

public class Point {
    private double x;
    private double y;
    private boolean visited;
    private boolean noise;
    private int clusterID;

    public Point(double x, double y) {
        this.x = x;
        this.y = y;
        this.visited = false;
        this.noise = false;
        this.clusterID = -1; // Inicialmente não pertence a nenhum cluster.
    }

    // Getters e setters para x, y, visited, noise e clusterID.
    public double getX() {
        return x;
    }
    public double getY() {
        return y;
    }
    public int getClusterID() {
        return clusterID;
    }

    public boolean isVisited() {
        return visited;
    }
    public boolean isNoise() {
        return noise;
    }

    public void setX(double x) {
        this.x = x;
    }
    public void setY(double y) {
        this.y = y;
    }
    public void setClusterID(int clusterID) {
        this.clusterID = clusterID;
    }
    
    public void setVisited(boolean visited) {
        this.visited = visited;
    }
    public void setNoise(boolean noise) {
        this.noise = noise;
    }

    public List<Point> getNeighbors(List<Point> allPoints, double eps) {
        List<Point> neighbors = new ArrayList<>();

        for (Point other : allPoints) {
            if (this != other) { // Evitar comparar o ponto consigo mesmo.
                double distance = calculateDistance(this, other);
                if (distance <= eps) {
                    neighbors.add(other);
                }
            }
        }

        return neighbors;
    }

    private double calculateDistance(Point point1, Point point2) {
        double x1 = point1.getX();
        double y1 = point1.getY();
        double x2 = point2.getX();
        double y2 = point2.getY();

        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }
}
