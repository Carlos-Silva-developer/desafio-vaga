package carlos.desafiows.backend.crudcarros.contoller;

import carlos.desafiows.backend.crudcarros.contoller.request.ModeloRequest;
import carlos.desafiows.backend.crudcarros.contoller.response.ModeloResponse;
import carlos.desafiows.backend.crudcarros.service.CadastrarModeloService;
import carlos.desafiows.backend.crudcarros.service.ListarModelosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;

@RestController
@RequestMapping("/modelos")
public class ModeloController {

    @Autowired
    private ListarModelosService listarModelosService;

    @Autowired
    private CadastrarModeloService cadastrarModeloService;

    @GetMapping("/listar")
    public List<ModeloResponse> listar() {
        return listarModelosService.listar();
    }

    @PostMapping("/cadastrar")
    @ResponseStatus(CREATED)
    public ModeloResponse cadastrar(@RequestBody ModeloRequest modeloRequest) {
        return cadastrarModeloService.cadastrar(modeloRequest);
    }

}
