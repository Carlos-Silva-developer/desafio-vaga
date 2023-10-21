package carlos.desafiows.backend.crudcarros.service;

import carlos.desafiows.backend.crudcarros.model.Carro;
import carlos.desafiows.backend.crudcarros.repository.CarroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ListarCarroService {
    @Autowired
    private CarroRepository repository;

    public List<Carro> listarTodos() {
        return repository.findAll();
    }
}
