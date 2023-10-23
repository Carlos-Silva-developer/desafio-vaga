package carlos.desafiows.backend.crudcarros.service;

import carlos.desafiows.backend.crudcarros.model.Modelo;
import carlos.desafiows.backend.crudcarros.repository.ModeloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DeletarModeloService {
    @Autowired
    private ModeloRepository modeloRepository;

    public void remover(Long id) {
        Optional<Modelo> modeloExistente = modeloRepository.findById(id);
        if (modeloExistente.isEmpty()) return;
        modeloRepository.deleteById(id);
    }
}
