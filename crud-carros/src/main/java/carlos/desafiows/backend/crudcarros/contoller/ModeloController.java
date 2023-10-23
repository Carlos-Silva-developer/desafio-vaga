package carlos.desafiows.backend.crudcarros.contoller;

import carlos.desafiows.backend.crudcarros.contoller.response.ModeloResponse;
import carlos.desafiows.backend.crudcarros.service.ListarModelosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/modelos")
public class ModeloController {

    @Autowired
    private ListarModelosService listarModelosService;

    @GetMapping("/listar")
    public List<ModeloResponse> listar() {
        return listarModelosService.listar();
    }

}
