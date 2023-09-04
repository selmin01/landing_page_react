package DBSCAN_JAVA_IA.clustering;

// import java.util.ArrayList;
// import java.util.List;

// public class Cluster {
//     private List<Point> points;

//     public Cluster() {
//         points = new ArrayList<>();
//     }
    
//     // Getters e setters para points e outros métodos relevantes, como cálculos de estatísticas.
//     public void addPoint(Point point) {
//         points.add(point);
//     }

//     public List<Point> getPoints() {
//         return points;
//     }
    
// }

import java.util.ArrayList;
import java.util.List;

public class Cluster {
    private List<Point> points;

    public Cluster() {
        points = new ArrayList<>();
    }

    // Adicione um ponto ao cluster.
    public void addPoint(Point point) {
        points.add(point);
    }

    // Obtenha a lista de pontos no cluster.
    public List<Point> getPoints() {
        return points;
    }

    // Outros métodos relevantes, como cálculos de estatísticas, podem ser implementados aqui.
}
