package carlos.desafiows.backend.crudcarros.contoller.request;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class CadastrarModeloRequest {
    private Long idMarca;
    private String nome;
    private Double valorFipe;
}
