
package DBSCAN_JAVA_IA.clustering;

// import java.util.ArrayList;
// import java.util.List;
// // import java.util.Scanner;

// public class Main {
//     public static void main(String[] args) {
//         Point point1 = new Point(1.0, 1.0);
//         Point point2 = new Point(2.0, 2.0);
//         Point point3 = new Point(2.5, 3.0);
//         Point point4 = new Point(5.0, 5.0);
//         Point point5 = new Point(6.0, 6.0);
//         Point point6 = new Point(6.5, 7.0);

//         List<Point> points = new ArrayList<>();
//         points.add(point1);
//         points.add(point2);
//         points.add(point3);
//         points.add(point4);
//         points.add(point5);
//         points.add(point6);

//         // Scanner scanner = new Scanner(System.in);

//         // // Solicite ao usuário para inserir o valor de eps (raio da vizinhança).
//         // System.out.print("Digite o valor de eps (raio da vizinhança): ");
//         // double eps = scanner.nextDouble();

//         // // Solicite ao usuário para inserir o valor de minPts (número mínimo de pontos em uma vizinhança).
//         // System.out.print("Digite o valor de minPts (número mínimo de pontos): ");
//         // int minPts = scanner.nextInt();

//         // // Crie uma lista para armazenar os pontos de dados.
//         // List<Point> points = new ArrayList<>();

//         // // Solicite ao usuário para inserir os pontos de dados (x, y).
//         // System.out.println("Insira os pontos de dados (x, y) um por vez. Digite -1 para encerrar a entrada.");
//         // while (true) {
//         //     System.out.print("Digite o valor de x (-1 para encerrar): ");
//         //     double x = scanner.nextDouble();
            
//         //     if (x == -1) {
//         //         break;
//         //     }

//         //     System.out.print("Digite o valor de y: ");
//         //     double y = scanner.nextDouble();

//         //     Point point = new Point(x, y);
//         //     points.add(point);
//         // }

//         DBSCAN dbscan = new DBSCAN(points, 2.0, 3);
//         dbscan.run();


//         // // Crie um objeto DBSCAN com os parâmetros fornecidos.
//         // DBSCAN dbscan = new DBSCAN(points, eps, minPts);

//         // // Execute o algoritmo DBSCAN.
//         // dbscan.run();

//         // Exiba os resultados, por exemplo, agrupando os pontos em clusters.
//         for (Cluster cluster : dbscan.getClusters()) {
//             // System.out.println("Cluster ID: " + cluster.getClusterID());
//             System.out.println("Pontos no cluster: " + cluster.getPoints().size());
//             System.out.println("Coordenadas dos pontos:");
//             for (Point point : cluster.getPoints()) {
//                 System.out.println("(" + point.getX() + ", " + point.getY() + ")");
//             }
//         }

//         // Feche o scanner.
//         // scanner.close();
//     }
// }

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        // Crie uma lista de pontos de dados
        List<Point> points = new ArrayList<>();

        // Adicione seus próprios pontos de dados aqui
        points.add(new Point(1.0, 2.0));
        points.add(new Point(2.0, 3.0));
        points.add(new Point(3.0, 4.0));
        points.add(new Point(8.0, 8.0));
        points.add(new Point(9.0, 9.0));
        points.add(new Point(10.0, 10.0));

        // Defina os parâmetros do DBSCAN
        double eps = 2.0;  // Raio de busca
        int minPts = 3;    // Número mínimo de pontos em um cluster

        // Crie uma instância do DBSCAN
        DBSCAN dbscan = new DBSCAN(points, eps, minPts);

        // Execute o algoritmo DBSCAN
        dbscan.run();

        // Obtenha os clusters resultantes
        List<Cluster> clusters = dbscan.getClusters();

        // Exiba ou processe os clusters conforme necessário
        for (int i = 0; i < clusters.size(); i++) {
            Cluster cluster = clusters.get(i);
            List<Point> clusterPoints = cluster.getPoints();
            
            System.out.println("Cluster " + i + ":");
            for (Point point : clusterPoints) {
                System.out.println("(" + point.getX() + ", " + point.getY() + ")");
            }
        }
    }
}
