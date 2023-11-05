package com.demo.chitApp.domain;

import jakarta.persistence.*;
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique=true)
    private  Integer id;

    private  String name;
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private ZonedDateTime startDate;

    private Integer amount;
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private ZonedDateTime endDate;
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private ZonedDateTime settlementDate;
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private ZonedDateTime lastPaidDate;

    private Integer settlementAmount;

    private Integer noOfInstallments;

    private Integer paidInstallments;

    private String status;



}
