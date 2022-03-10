package com.tmp.dto;

import com.tmp.entity.DiaDiem;
import com.tmp.entity.LoaiTour;
import com.tmp.entity.Tinh;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TourDto {
    private int id;
    private String phuongTien;
    private int sltd;
    private String tenTour;
    private int soNgay;
    private int soDem;
    private float giaNguoiLon;
    private float giaTreEm;
    private float giaTreNho;
    private String moTaTour;
    private String lichTrinh;
    private String banDo;
    private LoaiTour loaiTour;
    private String tinh;
    private String diaDiem;

}
