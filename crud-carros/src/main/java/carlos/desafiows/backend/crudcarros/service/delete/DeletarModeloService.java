package carlos.desafiows.backend.crudcarros.service.delete;

import carlos.desafiows.backend.crudcarros.model.Carro;
import carlos.desafiows.backend.crudcarros.model.Modelo;
import carlos.desafiows.backend.crudcarros.repository.CarroRepository;
import carlos.desafiows.backend.crudcarros.repository.ModeloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;


import java.util.List;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@Service
public class DeletarModeloService {
    @Autowired
    private ModeloRepository modeloRepository;

    @Autowired
    private CarroRepository carroRepository;

    public void remover(Long id) {
        Modelo modeloExistente = modeloRepository.findById(id)
                .orElseThrow(() ->
                    new ResponseStatusException(NOT_FOUND, "Marca não encontrada!")
                );
        List<Carro> carros = carroRepository.findByModeloId(modeloExistente);
        carroRepository.deleteAll(carros);
        modeloRepository.deleteById(id);
    }
}
