package com.demo.chitApp.service;

import com.demo.chitApp.domain.Chits;
import com.demo.chitApp.repository.ChitsRepository;
import org.springframework.stereotype.Service;

import java.time.ZonedDateTime;
import java.util.List;

@Service
public class ChitsService {
    private final ChitsRepository chitsRepository;

    public ChitsService(ChitsRepository chitsRepository)
    {
        this.chitsRepository = chitsRepository;
    }
    public Chits save(Chits chits){

        ZonedDateTime endDate = chits.getStartDate().plusMonths(10);
        chits.setEndDate(endDate);
        ZonedDateTime settlementDate = chits.getStartDate().plusMonths(12);
        chits.setSettlementDate(settlementDate);
        int totalamount = chits.getAmount()*10;
        chits.setSettlementAmount((int) (totalamount*0.15)+totalamount  );
        chits.setNoOfInstallments(10);
        chits.setPaidInstallments(1);
        return chitsRepository.save(chits);
    }
    public List<Chits> getAll(){
        return chitsRepository.findAll();
    }
}
