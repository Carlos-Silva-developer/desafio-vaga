package carlos.desafiows.backend.crudcarros.contoller;

import carlos.desafiows.backend.crudcarros.contoller.response.MarcaResponse;
import carlos.desafiows.backend.crudcarros.service.ListarMarcasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/marcas")
public class MarcaController {

    @Autowired
    private ListarMarcasService listarMarcasService;

    @GetMapping("/listar")
    public List<MarcaResponse> listar() {
        return listarMarcasService.listar();
    }
}
