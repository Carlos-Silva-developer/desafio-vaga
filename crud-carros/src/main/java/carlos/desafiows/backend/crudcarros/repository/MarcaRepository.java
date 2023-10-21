package carlos.desafiows.backend.crudcarros.repository;

import carlos.desafiows.backend.crudcarros.model.Marca;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MarcaRepository extends JpaRepository<Marca, Long> {
}
