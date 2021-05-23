package com.example.demo.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Table(name = "pMember")
@Entity
@Getter
@Setter
public class Member {

    @Id
    @GeneratedValue
    private Long id;

}
