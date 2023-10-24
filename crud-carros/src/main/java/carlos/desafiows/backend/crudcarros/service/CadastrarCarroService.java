package carlos.desafiows.backend.crudcarros.service;

import carlos.desafiows.backend.crudcarros.contoller.request.CadastrarCarroRequest;
import carlos.desafiows.backend.crudcarros.contoller.response.CarroResponse;
import carlos.desafiows.backend.crudcarros.mapper.CarroMapper;
import carlos.desafiows.backend.crudcarros.model.Carro;
import carlos.desafiows.backend.crudcarros.repository.CarroRepository;
import carlos.desafiows.backend.crudcarros.service.validation.ValidarCarroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Service
public class CadastrarCarroService {

    @Autowired
    private CarroRepository carroRepository;

    @Autowired
    private ValidarCarroService validarCarroService;

    @Transactional
    public CarroResponse cadastrar(CadastrarCarroRequest request) {
        validarCarroService.validarDados(request);
        Carro carro = CarroMapper.toEntity(request);
        carro.setTimestampCadastro(Timestamp.valueOf(LocalDateTime.now()));
        carroRepository.save(carro);
        return CarroMapper.toResponse(carro);

    }
}
