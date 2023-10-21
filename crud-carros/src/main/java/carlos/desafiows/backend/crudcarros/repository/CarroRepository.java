package carlos.desafiows.backend.crudcarros.repository;

import carlos.desafiows.backend.crudcarros.model.Carro;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarroRepository extends JpaRepository<Carro, Long> {
}
