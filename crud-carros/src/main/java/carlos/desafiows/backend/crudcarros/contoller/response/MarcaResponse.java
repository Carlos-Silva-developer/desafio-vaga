package carlos.desafiows.backend.crudcarros.contoller.response;

import lombok.*;

@Builder
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class MarcaResponse {
    private Long id;
    private String nomeMarca;
}
