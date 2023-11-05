package com.demo.chitApp.restController;

import com.demo.chitApp.domain.AmountDue;
import com.demo.chitApp.domain.Chits;
import com.demo.chitApp.service.ChitsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/chits")
public class ChitsRestController {

    @Autowired
    ChitsService chitsService;
    public ChitsRestController(ChitsService chitsService)
    {
        this.chitsService = chitsService;
    }

    @PostMapping("/saveChit")
    public ResponseEntity<?> createChitEntry(@RequestBody Chits chits) {

        Chits savedChit = chitsService.save(chits);
        return new ResponseEntity<>(savedChit, HttpStatus.CREATED);
    }

    @GetMapping("/getAllChits")
    public ResponseEntity<?> getAllChits() {

        List<Chits> allChits = chitsService.getAll();
        return new ResponseEntity<>(allChits, HttpStatus.OK);
    }

    @PutMapping("/updateChit")
    public ResponseEntity<?> updateChitEntry(@RequestBody Chits chits) {

        Chits updatedChit = chitsService.update(chits);
        return new ResponseEntity<>(updatedChit, HttpStatus.OK);
    }

    @GetMapping("/calculate-amount-due")
    public ResponseEntity<?> calculateAmount() {
        AmountDue amountDue = chitsService.calculateAmountDue();
        return new ResponseEntity<>(amountDue, HttpStatus.OK);
    }
}


