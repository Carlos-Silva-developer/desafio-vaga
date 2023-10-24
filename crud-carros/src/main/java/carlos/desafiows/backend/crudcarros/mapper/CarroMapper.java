package carlos.desafiows.backend.crudcarros.mapper;

import carlos.desafiows.backend.crudcarros.contoller.request.CadastrarCarroRequest;
import carlos.desafiows.backend.crudcarros.contoller.response.CarroResponse;
import carlos.desafiows.backend.crudcarros.model.Carro;


public class CarroMapper {

    public static Carro toEntity(CadastrarCarroRequest request) {

        Carro carro = new Carro();
        carro.setModeloId(request.getModeloId());
        carro.setAno(request.getAno());
        carro.setCombustivel(request.getCombustivel());
        carro.setNumPortas(request.getNumPortas());
        carro.setCor(request.getCor());

        return carro;
    }

    public static CarroResponse toResponse(Carro carro) {
        return new CarroResponse().builder()
                .id(carro.getId())
                .timestampCadastro(carro.getTimestampCadastro())
                .modeloId(carro.getModeloId().getId())
                .ano(carro.getAno())
                .combustivel(carro.getCombustivel())
                .numPortas(carro.getNumPortas())
                .cor(carro.getCor())
                .nomeModelo(carro.getModeloId().getNome())
                .valor(carro.getModeloId().getValorFipe())
                .build();
    }
}
