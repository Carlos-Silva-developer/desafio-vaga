package carlos.desafiows.backend.crudcarros.repository;

import carlos.desafiows.backend.crudcarros.model.Marca;
import carlos.desafiows.backend.crudcarros.model.Modelo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ModeloRepository extends JpaRepository<Modelo, Long> {

    boolean existsByNome(String nome);

    List<Modelo> findByMarca(Marca marcaExistente);
}
