package com.tmp.entity;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@Entity
@Table(name = "tinh")
public class Tinh implements Serializable {
    @Column(name = "id_tinh")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "tentinh")
    private String tenTinh;

//    @OneToMany(mappedBy = "tinh")
//    private List<Tour> listTour;
}
