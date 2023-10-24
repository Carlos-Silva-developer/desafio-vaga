package carlos.desafiows.backend.crudcarros.service.delete;

import carlos.desafiows.backend.crudcarros.model.Marca;
import carlos.desafiows.backend.crudcarros.model.Modelo;
import carlos.desafiows.backend.crudcarros.repository.MarcaRepository;
import carlos.desafiows.backend.crudcarros.repository.ModeloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@Service
public class DeletarMarcaService {

    @Autowired
    private MarcaRepository marcaRepository;

    @Autowired
    private ModeloRepository modeloRepository;

    public void remover(Long id) {
        Marca marcaExistente = marcaRepository.findById(id)
                .orElseThrow(() ->
                    new ResponseStatusException(NOT_FOUND, "Marca não encontrada!")
                );
        List<Modelo> modelos = modeloRepository.findByMarca(marcaExistente);
        modeloRepository.deleteAll(modelos);
        marcaRepository.deleteById(marcaExistente.getId());
    }
}
