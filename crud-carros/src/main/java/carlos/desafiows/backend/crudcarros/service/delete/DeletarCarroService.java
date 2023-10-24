package carlos.desafiows.backend.crudcarros.service.delete;

import carlos.desafiows.backend.crudcarros.model.Carro;
import carlos.desafiows.backend.crudcarros.repository.CarroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@Service
public class DeletarCarroService {

    @Autowired
    private CarroRepository carroRepository;

    public void remover(Long id) {
        Carro carro = carroRepository.findById(id)
                .orElseThrow(() ->
                        new ResponseStatusException(NOT_FOUND, "Marca não encontrada!")
                );
        carroRepository.deleteById(id);
    }

}