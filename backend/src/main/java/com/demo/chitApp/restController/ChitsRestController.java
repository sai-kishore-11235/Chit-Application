package com.demo.chitApp.restController;

import com.demo.chitApp.domain.Chits;
import com.demo.chitApp.service.ChitsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
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
        return new ResponseEntity<>(chits, HttpStatus.CREATED);
    }

    @GetMapping("/getAllChits")
    public ResponseEntity<?> getAllChits() {

        List<Chits> allChits = chitsService.getAll();
        return new ResponseEntity<>(allChits, HttpStatus.OK);
    }



}


