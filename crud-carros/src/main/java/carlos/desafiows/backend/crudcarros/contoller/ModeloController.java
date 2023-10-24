package carlos.desafiows.backend.crudcarros.contoller;

import carlos.desafiows.backend.crudcarros.contoller.request.ModeloRequest;
import carlos.desafiows.backend.crudcarros.contoller.response.ModeloResponse;
import carlos.desafiows.backend.crudcarros.service.update.AtualizarModeloService;
import carlos.desafiows.backend.crudcarros.service.insert.CadastrarModeloService;
import carlos.desafiows.backend.crudcarros.service.delete.DeletarModeloService;
import carlos.desafiows.backend.crudcarros.service.list.ListarModelosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/modelos")
public class ModeloController {

    @Autowired
    private ListarModelosService listarModelosService;

    @Autowired
    private CadastrarModeloService cadastrarModeloService;

    @Autowired
    private AtualizarModeloService atualizarModeloService;

    @Autowired
    private DeletarModeloService deletarModeloService;

    @GetMapping("/listar")
    public List<ModeloResponse> listar() {
        return listarModelosService.listar();
    }

    @PostMapping("/cadastrar")
    @ResponseStatus(CREATED)
    public ModeloResponse cadastrar(@RequestBody ModeloRequest modeloRequest) {
        return cadastrarModeloService.cadastrar(modeloRequest);
    }

    @PutMapping("/{id}/atualizar")
    public ModeloResponse atualizar(@PathVariable Long id, @RequestBody ModeloRequest modeloRequest) {
        return atualizarModeloService.atualizar(id, modeloRequest);
    }

    @DeleteMapping("/{id}/deletar")
    public void deletar(@PathVariable Long id) {
        deletarModeloService.remover(id);
    }
}
