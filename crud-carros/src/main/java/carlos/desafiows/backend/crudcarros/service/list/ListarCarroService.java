package carlos.desafiows.backend.crudcarros.service.list;

import carlos.desafiows.backend.crudcarros.contoller.response.CarroResponse;
import carlos.desafiows.backend.crudcarros.mapper.CarroMapper;
import carlos.desafiows.backend.crudcarros.model.Carro;
import carlos.desafiows.backend.crudcarros.repository.CarroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ListarCarroService {
    @Autowired
    private CarroRepository repository;

    public List<CarroResponse> listarTodos() {
        List<Carro> carros = repository.findAll();

        return carros.stream()
                .map(carro -> {
                   CarroResponse response = CarroMapper.toResponse(carro);
                   return response;
                }).collect(Collectors.toList());
    }
}
