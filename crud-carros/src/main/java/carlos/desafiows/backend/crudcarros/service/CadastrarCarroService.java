package carlos.desafiows.backend.crudcarros.service;

import carlos.desafiows.backend.crudcarros.contoller.request.CadastrarCarroRequest;
import carlos.desafiows.backend.crudcarros.contoller.response.CarroResponse;
import carlos.desafiows.backend.crudcarros.mapper.CarroMapper;
import carlos.desafiows.backend.crudcarros.model.Carro;
import carlos.desafiows.backend.crudcarros.repository.CarroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CadastrarCarroService {

    @Autowired
    private CarroRepository carroRepository;

    @Transactional
    public CarroResponse cadastrar(CadastrarCarroRequest request) {

        Carro carro = CarroMapper.toEntity(request);
        carroRepository.save(carro);
        return CarroMapper.toResponse(carro);

    }
}
