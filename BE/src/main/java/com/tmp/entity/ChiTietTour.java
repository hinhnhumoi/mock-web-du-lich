package com.tmp.entity;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Data
@Entity
@Table(name = "chitiettour")
public class ChiTietTour implements Serializable {
    @Column(name = "id_chitiet")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "ngaydi")
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date ngayDi;

    @Column(name = "ngayve")
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date ngayVe;

    @Column(name = "soluongcon")
    private int soLuongCon;

    @Column(name = "hinhanh")
    private String hinhAnh;

    //private int id;
}
