package carlos.desafiows.backend.crudcarros.mapper;

import carlos.desafiows.backend.crudcarros.contoller.request.ModeloRequest;
import carlos.desafiows.backend.crudcarros.contoller.response.ModeloResponse;
import carlos.desafiows.backend.crudcarros.model.Modelo;

public class ModeloMapper {

    public static Modelo toEntiity(ModeloRequest modeloRequest) {
        Modelo modelo = new Modelo();
        modelo.setMarca(modeloRequest.getIdMarca());
        modelo.setNome(modeloRequest.getNome());
        modelo.setValorFipe(modeloRequest.getValorFipe());
        return modelo;
    }

    public static ModeloResponse toResponse(Modelo modelo) {
        return ModeloResponse.builder()
                .id(modelo.getId())
                .idMarca(modelo.getMarca().getId())
                .nome(modelo.getNome())
                .valorFipe(modelo.getValorFipe())
                .build();
    }
}
