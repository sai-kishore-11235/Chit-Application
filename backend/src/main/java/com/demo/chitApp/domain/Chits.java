package com.demo.chitApp.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.Date;

@Entity
@Table(name="chits")
@Data
@ToString
@Getter
@Setter
public class Chits implements Serializable {

    /**
     *
     */
    private static final long serialVersionUID = 1L;

    @Id
    @Column(unique=true)
    private  String id;

    private  String name;
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private ZonedDateTime startDate;

    private Integer amount;
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private ZonedDateTime endDate;
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private ZonedDateTime settlementDate;

    private Integer settlementAmount;

    private Integer noOfInstallments;

    private Integer paidInstallments;




}
