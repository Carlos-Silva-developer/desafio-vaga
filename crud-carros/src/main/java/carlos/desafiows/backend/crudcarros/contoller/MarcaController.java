package carlos.desafiows.backend.crudcarros.contoller;

import carlos.desafiows.backend.crudcarros.contoller.request.MarcaRequest;
import carlos.desafiows.backend.crudcarros.contoller.response.MarcaResponse;
import carlos.desafiows.backend.crudcarros.service.update.AtualizarMarcaService;
import carlos.desafiows.backend.crudcarros.service.insert.CadastrarMarcaService;
import carlos.desafiows.backend.crudcarros.service.delete.DeletarMarcaService;
import carlos.desafiows.backend.crudcarros.service.list.ListarMarcasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/marcas")
public class MarcaController {

    @Autowired
    private ListarMarcasService listarMarcasService;

    @Autowired
    private CadastrarMarcaService cadastrarMarcaService;

    @Autowired
    private AtualizarMarcaService atualizarMarcaService;

    @Autowired
    private DeletarMarcaService deletarMarcaService;

    @GetMapping("/listar")
    public List<MarcaResponse> listar() {
        return listarMarcasService.listar();
    }

    @PostMapping("/cadastrar")
    @ResponseStatus(CREATED)
    public MarcaResponse cadastrar(@RequestBody MarcaRequest marcaRequest) {
        return cadastrarMarcaService.incluir(marcaRequest);
    }

    @PutMapping("/{marcaId}/atualizar")
    public MarcaResponse atualizar(@PathVariable Long marcaId, @RequestBody MarcaRequest marcaRequest) {
        return atualizarMarcaService.atualizar(marcaId, marcaRequest);
    }

    @DeleteMapping("/{id}/deletar")
    public void deletar(@PathVariable Long id) {
        deletarMarcaService.remover(id);
    }
}
