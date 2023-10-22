package carlos.desafiows.backend.crudcarros.contoller;

import carlos.desafiows.backend.crudcarros.contoller.response.ListarCarroResponse;
import carlos.desafiows.backend.crudcarros.model.Carro;
import carlos.desafiows.backend.crudcarros.repository.CarroRepository;
import carlos.desafiows.backend.crudcarros.service.ListarCarroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CarroController {
    @Autowired
    private ListarCarroService service;

    @GetMapping
    public List<ListarCarroResponse> listar() {
        return service.listarTodos();
    }
}
