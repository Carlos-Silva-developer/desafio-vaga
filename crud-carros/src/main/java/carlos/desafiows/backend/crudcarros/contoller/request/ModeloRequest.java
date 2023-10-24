package carlos.desafiows.backend.crudcarros.contoller.request;

import carlos.desafiows.backend.crudcarros.model.Marca;
import jakarta.annotation.Nullable;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ModeloRequest {
    @Nullable
    private Marca idMarca;
    private String nome;
    private Double valorFipe;
}
