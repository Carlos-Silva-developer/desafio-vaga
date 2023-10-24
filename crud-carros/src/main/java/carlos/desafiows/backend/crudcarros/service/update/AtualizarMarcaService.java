package carlos.desafiows.backend.crudcarros.service.update;

import carlos.desafiows.backend.crudcarros.contoller.request.MarcaRequest;
import carlos.desafiows.backend.crudcarros.contoller.response.MarcaResponse;
import carlos.desafiows.backend.crudcarros.mapper.MarcaMapper;
import carlos.desafiows.backend.crudcarros.model.Marca;
import carlos.desafiows.backend.crudcarros.repository.MarcaRepository;
import carlos.desafiows.backend.crudcarros.service.search.BuscarMarcaService;
import carlos.desafiows.backend.crudcarros.service.validation.ValidarMarcaService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AtualizarMarcaService {

    @Autowired
    private MarcaRepository marcaRepository;

    @Autowired
    private ValidarMarcaService validarMarcaService;
    @Autowired
    private BuscarMarcaService buscarMarcaService;

    @Transactional
    public MarcaResponse atualizar(Long id, MarcaRequest novosDados) {
        validarMarcaService.validarNome(novosDados.getNomeMarca());
        Marca marca = buscarMarcaService.buscarPorId(id);
        marca.setNomeMarca(novosDados.getNomeMarca());
        marcaRepository.save(marca);
        return MarcaMapper.toResponse(marca);
    }
}
