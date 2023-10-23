package carlos.desafiows.backend.crudcarros.service;

import carlos.desafiows.backend.crudcarros.contoller.response.MarcaResponse;
import carlos.desafiows.backend.crudcarros.mapper.MarcaMapper;
import carlos.desafiows.backend.crudcarros.model.Marca;
import carlos.desafiows.backend.crudcarros.repository.MarcaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ListarMarcasService {

    @Autowired
    private MarcaRepository marcaRepository;

    public List<MarcaResponse> listar() {
        List<Marca> marcas = marcaRepository.findAll();

        return marcas.stream()
                .map(marca -> {
                    MarcaResponse response = MarcaMapper.toResponse(marca);
                    return response;
                }).collect(Collectors.toList());
    }
}
