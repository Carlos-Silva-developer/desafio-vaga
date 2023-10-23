package carlos.desafiows.backend.crudcarros.service;

import carlos.desafiows.backend.crudcarros.model.Marca;
import carlos.desafiows.backend.crudcarros.repository.MarcaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DeletarMarcaService {

    @Autowired
    private MarcaRepository marcaRepository;

    public void remover(Long id) {
        Optional<Marca> marcaExistente = marcaRepository.findById(id);
        if (marcaExistente.isEmpty()) return;
        marcaRepository.deleteById(marcaExistente.get().getId());
    }
}
