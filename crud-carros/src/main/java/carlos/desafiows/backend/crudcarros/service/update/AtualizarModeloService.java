package carlos.desafiows.backend.crudcarros.service.update;

import carlos.desafiows.backend.crudcarros.contoller.request.ModeloRequest;
import carlos.desafiows.backend.crudcarros.contoller.response.ModeloResponse;
import carlos.desafiows.backend.crudcarros.mapper.ModeloMapper;
import carlos.desafiows.backend.crudcarros.model.Modelo;
import carlos.desafiows.backend.crudcarros.repository.ModeloRepository;
import carlos.desafiows.backend.crudcarros.service.search.BuscarModeloService;
import carlos.desafiows.backend.crudcarros.service.validation.ValidarModeloService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AtualizarModeloService {

    @Autowired
    private ModeloRepository modeloRepository;

    @Autowired
    private BuscarModeloService buscarModeloService;

    @Autowired
    private ValidarModeloService validarModeloService;

    @Transactional
    public ModeloResponse atualizar(Long id, ModeloRequest novosDados) {
        validarModeloService.validarAtualizacao(novosDados);
        Modelo modelo = buscarModeloService.buscarPorId(id);
        String nome = (novosDados.getNome().isEmpty()) ? modelo.getNome() : novosDados.getNome();
        Double valor = (novosDados.getValorFipe().toString().isEmpty()) ? modelo.getValorFipe() : novosDados.getValorFipe();
        modelo.setNome(nome);
        modelo.setValorFipe(valor);
        return ModeloMapper.toResponse(modelo);
    }


}
