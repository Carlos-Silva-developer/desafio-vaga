package carlos.desafiows.backend.crudcarros.service;

import carlos.desafiows.backend.crudcarros.contoller.request.MarcaRequest;
import carlos.desafiows.backend.crudcarros.contoller.response.MarcaResponse;
import carlos.desafiows.backend.crudcarros.mapper.MarcaMapper;
import carlos.desafiows.backend.crudcarros.model.Marca;
import carlos.desafiows.backend.crudcarros.repository.MarcaRepository;
import carlos.desafiows.backend.crudcarros.service.validation.ValidarMarcaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CadastrarMarcaService {

    @Autowired
    private MarcaRepository marcaRepository;

    @Autowired
    private ValidarMarcaService validarMarcaService;

    @Transactional
    public MarcaResponse incluir(MarcaRequest marcaRequest) {
        Marca marca = MarcaMapper.toEntiity(marcaRequest);
        validarMarcaService.validarNome(marca.getNomeMarca());
        marcaRepository.save(marca);
        return MarcaMapper.toResponse(marca);
    }
}
