package com.tmp.entity;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name = "tinh")
public class Tinh implements Serializable {
    @Column(name = "id_tinh")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "tentinh")
    private int tenTinh;
}
