package carlos.desafiows.backend.crudcarros.contoller.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

import java.sql.Timestamp;

@Builder
@NoArgsConstructor @AllArgsConstructor
@Getter @Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ListarCarroResponse {

    private Long id;
    private Timestamp timestampCadastro;
    private Long modeloId;
    private String ano;
    private String combustivel;
    private Integer numPortas;
    private String cor;
    private String nomeModelo;
    private Double valor;
}
