package carlos.desafiows.backend.crudcarros.service;

import carlos.desafiows.backend.crudcarros.repository.ModeloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AtualizarModeloService {

    @Autowired
    private ModeloRepository modeloRepository;
}
