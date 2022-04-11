package com.codesquad.todolist.card;

import org.springframework.stereotype.Service;

import com.codesquad.todolist.card.dto.CardCreateRequest;
import com.codesquad.todolist.card.dto.CardUpdateRequest;

@Service
public class CardService {

    private final CardRepository cardRepository;

    public CardService(CardRepository cardRepository) {
        this.cardRepository = cardRepository;
    }

    public Card create(CardCreateRequest createRequest) {
        Integer count = cardRepository.countByColumn(createRequest.getColumnId());
        Card card = createRequest.toEntity(count + 1);
        return cardRepository.create(card);
    }

    public void update(Integer cardId, CardUpdateRequest request) {
        Card card = cardRepository.findById(cardId)
            .orElseThrow(() -> new IllegalArgumentException("카드를 찾을 수 없습니다."));

        card.update(request.getTitle(), request.getContent(), request.getAuthor());
        cardRepository.update(card);
    }

}
