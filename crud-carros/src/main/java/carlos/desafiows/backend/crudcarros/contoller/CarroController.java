package carlos.desafiows.backend.crudcarros.contoller;

import carlos.desafiows.backend.crudcarros.contoller.request.CadastrarCarroRequest;
import carlos.desafiows.backend.crudcarros.contoller.response.CarroResponse;
import carlos.desafiows.backend.crudcarros.service.CadastrarCarroService;
import carlos.desafiows.backend.crudcarros.service.ListarCarroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;

@RestController
@RequestMapping("/carros")
public class CarroController {
    @Autowired
    private ListarCarroService listarCarroService;

    @Autowired
    private CadastrarCarroService cadastrarCarroService;

    @GetMapping("/listar")
    public List<CarroResponse> listar() {
        return listarCarroService.listarTodos();
    }

    @PostMapping
    @ResponseStatus(CREATED)
    public CarroResponse cadastrar(@RequestBody CadastrarCarroRequest request) {
        return cadastrarCarroService.cadastrar(request);
    }
}
