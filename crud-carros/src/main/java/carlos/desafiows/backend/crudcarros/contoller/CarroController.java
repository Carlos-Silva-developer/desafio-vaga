package carlos.desafiows.backend.crudcarros.contoller;

import carlos.desafiows.backend.crudcarros.contoller.request.AtualizarCarroRequest;
import carlos.desafiows.backend.crudcarros.contoller.request.CadastrarCarroRequest;
import carlos.desafiows.backend.crudcarros.contoller.response.CarroResponse;
import carlos.desafiows.backend.crudcarros.service.AtualizarCarroService;
import carlos.desafiows.backend.crudcarros.service.CadastrarCarroService;
import carlos.desafiows.backend.crudcarros.service.DeletarCarroService;
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

    @Autowired
    private AtualizarCarroService atualizarCarroService;

    @Autowired
    private DeletarCarroService deletarCarroservice;

    @GetMapping("/listar")
    public List<CarroResponse> listar() {
        return listarCarroService.listarTodos();
    }

    @PostMapping("/cadastrar")
    @ResponseStatus(CREATED)
    public CarroResponse cadastrar(@RequestBody CadastrarCarroRequest carroRequest) {
        return cadastrarCarroService.cadastrar(carroRequest);
    }

    @PutMapping("/{id}/atualizar")
    public CarroResponse atualizar(@PathVariable Long id, @RequestBody AtualizarCarroRequest carroRequest) {
        return atualizarCarroService.atualizar(id, carroRequest);
    }

    @DeleteMapping("/{id}/deletar")
    public void deletar(@PathVariable Long id) {
        deletarCarroservice.remover(id);
    }

}
