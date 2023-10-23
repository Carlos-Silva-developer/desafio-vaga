package carlos.desafiows.backend.crudcarros.contoller.response;

import carlos.desafiows.backend.crudcarros.model.Marca;
import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ModeloResponse {
    private Long id;
    private Long idMarca;
    private String nome;
    private Double valorFipe;
}
