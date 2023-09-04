# DBSCAN-JAVA-IA

Este projeto é uma implementação simples do algoritmo DBSCAN (Density-Based Spatial Clustering of Applications with Noise) em Java. O DBSCAN é um algoritmo de clustering que agrupa pontos de dados com base na densidade de pontos próximos.

## Como Usar

1. Clone ou baixe este repositório para a sua máquina local.

2. Abra o projeto na sua IDE Java de escolha.

3. Execute a classe `Main` para testar o algoritmo DBSCAN com seus próprios pontos de dados ou adaptá-lo para suas necessidades.

4. Você pode ajustar os parâmetros do algoritmo, como `eps` (raio de vizinhança) e `minPts` (número mínimo de pontos em uma vizinhança) na classe `Main`.

## Estrutura do Projeto

- `Point.java`: Classe que representa um ponto de dados com coordenadas (x, y).
- `Cluster.java`: Classe que representa um cluster de pontos.
- `DBSCAN.java`: Classe que implementa o algoritmo DBSCAN.

## Exemplo

Dentro da classe `Main`, você pode definir seus próprios pontos de dados e parâmetros `eps` e `minPts`, como no exemplo abaixo:

```java
public static void main(String[] args) {
    List<Point> points = new ArrayList<>();
    // Adicione seus próprios pontos de dados aqui.

    double eps = 2.0;
    int minPts = 3;

    DBSCAN dbscan = new DBSCAN(points, eps, minPts);
    dbscan.run();

    List<Cluster> clusters = dbscan.getClusters();
    // Exiba ou processe os clusters conforme necessário.
}

Cluster ID: 0
Pontos no cluster: 3
Coordenadas dos pontos:
(1.0, 1.0)
(2.0, 2.0)
(2.5, 3.0)

Cluster ID: 1
Pontos no cluster: 3
Coordenadas dos pontos:
(5.0, 5.0)
(6.0, 6.0)
(6.5, 7.0)
