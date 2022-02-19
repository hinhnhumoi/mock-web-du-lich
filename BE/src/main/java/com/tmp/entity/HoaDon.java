package com.tmp.entity;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Data
@Entity
@Table(name = "hoadon")
public class HoaDon implements Serializable {
    @Column(name = "id_hd")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "ngaythanhtoan")
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date ngayThanhToan;

    @Column(name = "tongtien")
    private int tongTien;

    @Column(name = "tinhtrang")
    private int tinhTrang;

    // thieu fk
}
