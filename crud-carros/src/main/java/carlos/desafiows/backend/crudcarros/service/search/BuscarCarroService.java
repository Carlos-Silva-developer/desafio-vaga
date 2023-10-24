package carlos.desafiows.backend.crudcarros.service.search;

import carlos.desafiows.backend.crudcarros.model.Carro;
import carlos.desafiows.backend.crudcarros.repository.CarroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@Service
public class BuscarCarroService {
    @Autowired
    private CarroRepository carroRepository;

    public Carro buscarPorId(Long id) {
        return carroRepository.findById(id)
                .orElseThrow(() ->
                        new ResponseStatusException(NOT_FOUND, "cARRO NÃO ENCONTRADO")
                );
    }
}


