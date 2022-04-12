package com.codesquad.todolist.card.integration;

import static io.restassured.RestAssured.*;

import java.util.HashMap;
import java.util.Map;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.test.context.jdbc.Sql;

import com.codesquad.todolist.card.Card;
import com.codesquad.todolist.column.Column;
import com.codesquad.todolist.user.User;

import io.restassured.RestAssured;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@Sql("classpath:/schema.sql")
@ComponentScan
public class CardControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private CardSetUp cardSetUp;

    @BeforeEach
    public void setUp() {
        RestAssured.port = port;

        User user = cardSetUp.createUser(new User("유저 이름"));
        Column column = cardSetUp.createColumn(new Column(user.getUserId(), "컬럼 이름"));
        Column column2 = cardSetUp.createColumn(new Column(user.getUserId(), "컬럼 이름2"));
        Card card = cardSetUp.createCard(new Card(column.getColumnId(), "제목", "내용", "작성자", 1));
    }

    @Test
    @DisplayName("카드 생성 요청을 보내면 201 CREATED 를 응답받는다")
    public void createCardTest() {

        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("columnId", 1);
        requestBody.put("title", "제목");
        requestBody.put("content", "내용");
        requestBody.put("author", "작성자");

        given()
            .contentType("application/json")
            .body(requestBody)
            .log().all()
            .when()
            .post("cards/")
            .then()
            .statusCode(201);
    }

    @Test
    @DisplayName("카드 업데이트 요청을 보내면 200 OK 를 응답받는다")
    public void updateCardTest() {
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("title", "변경된 제목");
        requestBody.put("content", "변경된 내용");
        requestBody.put("author", "변경된 작성자");

        given()
            .contentType("application/json")
            .pathParam("id", 1)
            .body(requestBody)
            .log().all()
            .when()
            .put("cards/{id}")
            .then()
            .statusCode(200);
    }

    @Test
    @DisplayName("카드 삭제 요청을 보내면 204 NO_CONTENT 를 응답 받는다")
    public void deleteCardTest() {

        given()
            .pathParam("id", 1)
            .log().all()
            .when()
            .delete("cards/{id}")
            .then()
            .statusCode(204);
    }

    @Test
    @DisplayName("카드 이동 요청을 보내면 201 CREATED 를 응답 받는다")
    public void moveCardTest() {
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("columnId", "2");
        requestBody.put("order", "3");

        given()
            .contentType("application/json")
            .pathParam("id", 1)
            .body(requestBody)
            .log().all()
            .when()
            .put("cards/{id}/move")
            .then()
            .statusCode(201);
    }

}
