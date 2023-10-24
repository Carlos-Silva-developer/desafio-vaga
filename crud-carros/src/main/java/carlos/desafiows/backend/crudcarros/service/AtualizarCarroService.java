package carlos.desafiows.backend.crudcarros.service;

import carlos.desafiows.backend.crudcarros.contoller.request.AtualizarCarroRequest;
import carlos.desafiows.backend.crudcarros.contoller.request.CarroRequest;
import carlos.desafiows.backend.crudcarros.contoller.response.CarroResponse;
import carlos.desafiows.backend.crudcarros.mapper.CarroMapper;
import carlos.desafiows.backend.crudcarros.model.Carro;
import carlos.desafiows.backend.crudcarros.model.Modelo;
import carlos.desafiows.backend.crudcarros.repository.CarroRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AtualizarCarroService {

    @Autowired
    private CarroRepository carroRepository;

    @Autowired
    private BuscarCarroService buscarCarroService;

    @Transactional
    public CarroResponse atualizar(Long id, AtualizarCarroRequest novosDados) {
        Carro carro = buscarCarroService.buscarPorId(id);
        String combustivel = (novosDados.getCombustivel().isEmpty()) ? carro.getCombustivel() : novosDados.getCombustivel();
        String cor = (novosDados.getCor().isEmpty()) ? carro.getCor() : novosDados.getCor();

        carro.setCombustivel(combustivel);
        carro.setCor(cor);

        return CarroMapper.toResponse(carro);
    }

}
