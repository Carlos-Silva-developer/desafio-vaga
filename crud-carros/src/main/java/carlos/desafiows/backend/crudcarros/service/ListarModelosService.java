package carlos.desafiows.backend.crudcarros.service;

import carlos.desafiows.backend.crudcarros.contoller.response.ModeloResponse;
import carlos.desafiows.backend.crudcarros.mapper.ModeloMapper;
import carlos.desafiows.backend.crudcarros.model.Modelo;
import carlos.desafiows.backend.crudcarros.repository.ModeloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ListarModelosService {

    @Autowired
    private ModeloRepository modeloRepository;

    public List<ModeloResponse> listar() {
        List<Modelo> modelos = modeloRepository.findAll();

        return modelos.stream()
                .map(modelo -> {
                    ModeloResponse response = ModeloMapper.toResponse(modelo);
                    return response;
            }).collect(Collectors.toList());
    }
}
