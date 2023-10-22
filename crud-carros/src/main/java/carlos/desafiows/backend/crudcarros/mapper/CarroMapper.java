package carlos.desafiows.backend.crudcarros.mapper;

import carlos.desafiows.backend.crudcarros.contoller.response.ListarCarroResponse;
import carlos.desafiows.backend.crudcarros.model.Carro;

public class CarroMapper {

    public static ListarCarroResponse toResponse(Carro carro) {
        return new ListarCarroResponse().builder()
                .id(carro.getId())
                .timestampCadastro(carro.getTimestampCadastro())
                .modeloId(carro.getModeloId().getId())
                .ano(carro.getAno())
                .combustivel(carro.getCombustivel())
                .numPortas(carro.getNumPortas())
                .nomeModelo(carro.getModeloId().getNome())
                .valor(carro.getModeloId().getValorFipe())
                .build();
    }
}
