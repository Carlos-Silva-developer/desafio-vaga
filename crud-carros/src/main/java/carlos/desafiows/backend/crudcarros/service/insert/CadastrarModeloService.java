package carlos.desafiows.backend.crudcarros.service.insert;

import carlos.desafiows.backend.crudcarros.contoller.request.ModeloRequest;
import carlos.desafiows.backend.crudcarros.contoller.response.ModeloResponse;
import carlos.desafiows.backend.crudcarros.mapper.ModeloMapper;
import carlos.desafiows.backend.crudcarros.model.Modelo;
import carlos.desafiows.backend.crudcarros.repository.ModeloRepository;
import carlos.desafiows.backend.crudcarros.service.validation.ValidarModeloService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CadastrarModeloService {

    @Autowired
    private ValidarModeloService validarModeloService;

    @Autowired
    private ModeloRepository modeloRepository;

    @Transactional
    public ModeloResponse cadastrar(ModeloRequest modeloRequest) {
        validarModeloService.validarDados(modeloRequest);

        Modelo modelo = ModeloMapper.toEntiity(modeloRequest);
        modeloRepository.save(modelo);

        return ModeloMapper.toResponse(modelo);
    }
}
