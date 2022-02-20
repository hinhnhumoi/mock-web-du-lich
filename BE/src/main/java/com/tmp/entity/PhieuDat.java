package com.tmp.entity;


import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Data
@Entity
@Table(name = "phieudat")
public class PhieuDat implements Serializable {
    @Column(name = "id_pd")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "ngaydat")
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date createDate;

    @Column(name = "treem")
    private int treEm;

    @Column(name = "trenho")
    private int treNho;

    @Column(name = "nguoilon")
    private int nguoiLon;

    @Column(name = "soluongdat")
    private int soLuongDat;

    @Column(name = "trangthai")
    private int trangThai;

    @Column(name = "ghichu")
    private String ghiChu;

    @Column(name = "huy")
    private int huy;

    @Column(name = "thanhtien")
    private float thanhTien;

    @ManyToOne
    @JoinColumn(name = "id_chitiet")
    private ChiTietTour chiTietTour;

    @ManyToOne
    @JoinColumn(name = "id")
    private Users user;
}
