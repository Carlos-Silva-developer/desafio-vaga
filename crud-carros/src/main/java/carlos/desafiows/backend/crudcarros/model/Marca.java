package carlos.desafiows.backend.crudcarros.model;

import jakarta.persistence.*;
import lombok.*;

import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
@Getter @Setter
@Table(name = "marca")
public class Marca {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nomeMarca;

}
