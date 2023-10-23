package carlos.desafiows.backend.crudcarros.service.validation;

import carlos.desafiows.backend.crudcarros.repository.MarcaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.UNPROCESSABLE_ENTITY;

@Service
public class ValidarMarcaService {

    @Autowired
    private MarcaRepository marcaRepository;

    public void validarNome(String nome) {
        boolean nomeJaExiste = marcaRepository.existsByNomeMarca(nome);
        if (nomeJaExiste || nome.isEmpty())
            throw new ResponseStatusException(UNPROCESSABLE_ENTITY, "Marca já cadastrada! ou Nome vazio");
    }
}
