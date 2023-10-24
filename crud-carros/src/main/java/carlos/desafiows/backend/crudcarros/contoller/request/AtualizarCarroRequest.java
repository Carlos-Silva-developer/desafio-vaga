package carlos.desafiows.backend.crudcarros.contoller.request;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class AtualizarCarroRequest {
    private String combustivel;
    private String cor;
}
