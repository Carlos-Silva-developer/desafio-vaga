package carlos.desafiows.backend.crudcarros.service.validation;

import carlos.desafiows.backend.crudcarros.contoller.request.ModeloRequest;
import carlos.desafiows.backend.crudcarros.repository.MarcaRepository;
import carlos.desafiows.backend.crudcarros.repository.ModeloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
public class ValidarModeloService {

    @Autowired
    private ModeloRepository modeloRepository;

    @Autowired
    private MarcaRepository marcaRepository;

    public void validarDados(ModeloRequest request) {
        boolean marca = marcaRepository.existsById(request.getIdMarca().getId());
        boolean nomeJaExiste = modeloRepository.existsByNome(request.getNome());
        boolean nome = request.getNome().isEmpty();
        boolean valor = request.getValorFipe().isNaN();

        if (!marca || nomeJaExiste) {
            throw new ResponseStatusException(BAD_REQUEST, "Modelo ja cadastrado!");
        } else if (nome || valor) {
            throw new ResponseStatusException(BAD_REQUEST, "Novos dados inválidos!");
        }
    }

    public void validarAtualizacao(ModeloRequest request) {
        boolean nomeJaExiste = modeloRepository.existsByNome(request.getNome());
        if (nomeJaExiste) {
            throw new ResponseStatusException(BAD_REQUEST, "Modelo ja cadastrado!");
        }
    }
}
