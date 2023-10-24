package carlos.desafiows.backend.crudcarros.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
@Getter @Setter
@Table(name = "carro")
public class Carro {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;

    @Column(name = "timestamp_cadastro")
    private Timestamp timestampCadastro;

    @ManyToOne
    @JoinColumn(name = "modelo_id", nullable = false)
    private Modelo modeloId;

    @Column(name = "ano", nullable = false)
    private String ano;

    @Column(name = "combustivel", nullable = false)
    private String combustivel;

    @Column(name = "num_portas", nullable = false)
    private Integer numPortas;

    @Column(name = "cor", nullable = false)
    private String cor;
}
