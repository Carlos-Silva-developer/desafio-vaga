package carlos.desafiows.backend.crudcarros.service.search;

import carlos.desafiows.backend.crudcarros.model.Marca;
import carlos.desafiows.backend.crudcarros.repository.MarcaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@Service
public class BuscarMarcaService {

    @Autowired
    private MarcaRepository marcaRepository;

    public Marca buscarPorId(Long id) {
        return marcaRepository.findById(id)
                .orElseThrow(() ->
                        new ResponseStatusException(NOT_FOUND, "Marca não encontrada")
                );
    }
}
