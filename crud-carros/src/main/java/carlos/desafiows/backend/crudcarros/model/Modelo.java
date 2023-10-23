package carlos.desafiows.backend.crudcarros.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
@Getter @Setter
@Table(name = "modelo")
public class Modelo {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    
    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "id_marca", nullable = false)
    private Marca idMarca;

    @Column(name = "nome", nullable = false)
    private String nome;

    @Column(name = "valor_fipe")
    private Double valorFipe;
}
