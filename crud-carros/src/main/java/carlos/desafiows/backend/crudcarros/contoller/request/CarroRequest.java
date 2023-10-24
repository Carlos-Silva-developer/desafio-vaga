package carlos.desafiows.backend.crudcarros.contoller.request;

import lombok.Getter;
import lombok.Setter;

import java.util.Optional;

@Getter @Setter
public class CarroRequest {
    private String ano;
    private String combustivel;
    private Integer numPortas;
    private String cor;
}
