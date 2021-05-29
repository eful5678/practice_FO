package com.example.demo.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MemberDto {

    private Long id;

    private String username;

    private String password;

    private String nickname;
}
