package com.codesquad.todolist.card;

import com.codesquad.todolist.card.dto.CardCreateRequest;
import com.codesquad.todolist.card.dto.CardMoveRequest;
import com.codesquad.todolist.card.dto.CardUpdateRequest;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cards")
@Validated
public class CardController {
    private final CardService cardService;

    public CardController(CardService cardService) {
        this.cardService = cardService;
    }

    @PostMapping
    public ResponseEntity<?> createCard(@RequestBody @Valid CardCreateRequest request) {
        cardService.create(request);
        return new ResponseEntity<>(null, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public void updateCard(@PathVariable(value = "id") Integer cardId,
        @RequestBody @Valid CardUpdateRequest request) {
        cardService.update(cardId, request);
    }

    @PutMapping("/{id}/move")
    public ResponseEntity<?> moveCard(@PathVariable(value = "id") Integer cardId,
        @RequestBody @Valid CardMoveRequest request) {
        cardService.move(cardId, request);
        return new ResponseEntity<>(null, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCard(@PathVariable(value = "id") Integer cardId) {
        cardService.delete(cardId);
        return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
    }

}
