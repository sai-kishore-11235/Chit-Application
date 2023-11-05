package com.demo.chitApp.service;

import com.demo.chitApp.domain.AmountDue;
import com.demo.chitApp.domain.Chits;
import com.demo.chitApp.repository.ChitsRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.ZonedDateTime;
import java.util.Calendar;
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
    public Chits update(Chits chits){
        return chitsRepository.save(chits);
    }

    public AmountDue calculateAmountDue() {
        double amountDue = 0.0;
        List<Chits> chitsList = chitsRepository.findAll();
        double settlementAmountDue = 0.0;
        AmountDue amountDueObject = new AmountDue();

        // Check if the start date is before the current month.
        Calendar calendar = Calendar.getInstance();
        int currentMonth = calendar.get(Calendar.MONTH);
        for (Chits chits : chitsList) {

            if (chits.getEndDate().getMonthValue() < currentMonth && chits.getLastPaidDate().getMonthValue() != currentMonth) {
                amountDue += chits.getAmount();
            }
            if (chits.getSettlementDate().getMonthValue() == currentMonth) {
                settlementAmountDue += chits.getSettlementAmount();
            }
        }
        amountDueObject.setAmountDue(amountDue);
        amountDueObject.setSettlementAmountDue(settlementAmountDue);
        return amountDueObject;
    }
}
