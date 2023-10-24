package carlos.desafiows.backend.crudcarros.service.validation;

import carlos.desafiows.backend.crudcarros.contoller.request.CadastrarCarroRequest;
import carlos.desafiows.backend.crudcarros.contoller.request.CarroRequest;
import carlos.desafiows.backend.crudcarros.model.Modelo;
import carlos.desafiows.backend.crudcarros.repository.CarroRepository;
import carlos.desafiows.backend.crudcarros.repository.ModeloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.BAD_REQUEST;
import static org.springframework.http.HttpStatus.NOT_FOUND;

@Service
public class ValidarCarroService {

    @Autowired
    private CarroRepository carroRepository;

    @Autowired
    private ModeloRepository modeloRepository;

    public void validarDados(CadastrarCarroRequest request) {
        Modelo modelo = modeloRepository.findById(request.getModeloId().getId()).orElseThrow(() ->
                new ResponseStatusException(NOT_FOUND, "MODELO NÃO ENCONTRADO!"));
        boolean ano = request.getAno().isEmpty();
        boolean combustivel = request.getCombustivel().isEmpty();
        boolean numPortas = request.getNumPortas().toString().isEmpty();
        boolean cor = request.getCor().isEmpty();

        if (ano || combustivel || numPortas || cor) {
            throw new ResponseStatusException(BAD_REQUEST, "Novos dados inválidos!");
        }
    }
}
