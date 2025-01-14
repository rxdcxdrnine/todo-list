package com.codesquad.todolist.card;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.codesquad.todolist.history.domain.Field;
import com.codesquad.todolist.history.domain.ModifiedField;

public class Card implements Cloneable {

    private Integer cardId;
    private Integer columnId;
    private String title;
    private String content;
    private String author;
    private Integer nextId;
    private LocalDateTime createdDateTime;
    private Boolean deleted;

    // relation
    private List<ModifiedField> modifiedFields = new ArrayList<>();

    public Card(Integer columnId, String title, String content, String author, Integer nextId) {
        this(null, columnId, title, content, author, nextId, LocalDateTime.now());
    }

    public Card(Integer cardId, Integer columnId, String title, String content, String author,
        Integer nextId, LocalDateTime createdDateTime) {
        this.cardId = cardId;
        this.columnId = columnId;
        this.title = title;
        this.content = content;
        this.author = author;
        this.nextId = nextId;
        this.createdDateTime = createdDateTime;
    }

    public void update(String title, String content, String author) {
        if (title != null && !this.title.equals(title)) {
            modifiedFields.add(new ModifiedField(Field.TITLE, this.title, title));
            this.title = title;
        }
        if (content != null && !this.content.equals(content)) {
            modifiedFields.add(new ModifiedField(Field.CONTENT, this.content, content));
            this.content = content;
        }
        if (author != null && !this.author.equals(author)) {
            modifiedFields.add(new ModifiedField(Field.AUTHOR, this.author, author));
            this.author = author;
        }
    }

    public void move(Integer columnId, Integer order) {
        this.columnId = columnId;
        this.nextId = order;
    }

    public Integer getCardId() {
        return cardId;
    }

    public void setCardId(int cardId) {
        this.cardId = cardId;
    }

    public Integer getColumnId() {
        return columnId;
    }

    public String getTitle() {
        return title;
    }

    public String getContent() {
        return content;
    }

    public String getAuthor() {
        return author;
    }

    public Integer getNextId() {
        return nextId;
    }

    public LocalDateTime getCreatedDateTime() {
        return createdDateTime;
    }

    public List<ModifiedField> getModifiedFields() {
        return modifiedFields;
    }

    @Override
    public Card clone() {
        try {
            return (Card)super.clone();
        } catch (CloneNotSupportedException e) {
            return null;
        }
    }

    @Override
    public String toString() {
        return "Card{" +
            "cardId=" + cardId +
            ", columnId=" + columnId +
            ", title='" + title + '\'' +
            ", content='" + content + '\'' +
            ", author='" + author + '\'' +
            ", nextId=" + nextId +
            ", createdDateTime=" + createdDateTime +
            ", deleted=" + deleted +
            ", modifiedFields=" + modifiedFields +
            '}';
    }
}
