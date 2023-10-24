package carlos.desafiows.backend.crudcarros.service.delete;

import carlos.desafiows.backend.crudcarros.model.Modelo;
import carlos.desafiows.backend.crudcarros.repository.ModeloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;


import static org.springframework.http.HttpStatus.NOT_FOUND;

@Service
public class DeletarModeloService {
    @Autowired
    private ModeloRepository modeloRepository;

    public void remover(Long id) {
        Modelo modeloExistente = modeloRepository.findById(id)
                .orElseThrow(() ->
                    new ResponseStatusException(NOT_FOUND, "Marca não encontrada!")
                );
        modeloRepository.deleteById(id);
    }
}
