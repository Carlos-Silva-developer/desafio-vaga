package carlos.desafiows.backend.crudcarros.contoller.request;

import carlos.desafiows.backend.crudcarros.model.Modelo;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
public class CadastrarCarroRequest {

    private Modelo modeloId;
    private String ano;
    private String combustivel;
    private Integer numPortas;
    private String cor;


}
