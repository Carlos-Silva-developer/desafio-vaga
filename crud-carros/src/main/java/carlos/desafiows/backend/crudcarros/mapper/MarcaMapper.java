package carlos.desafiows.backend.crudcarros.mapper;

import carlos.desafiows.backend.crudcarros.contoller.request.MarcaRequest;
import carlos.desafiows.backend.crudcarros.contoller.response.MarcaResponse;
import carlos.desafiows.backend.crudcarros.model.Marca;

public class MarcaMapper {

    public static Marca toEntiity(MarcaRequest request) {
        Marca marca = new Marca();
        marca.setNomeMarca(request.getNomeMarca());
        return marca;
    }

    public static MarcaResponse toResponse(Marca marca) {
        return MarcaResponse.builder()
                .id(marca.getId())
                .nomeMarca(marca.getNomeMarca())
                .build();
    }
}
