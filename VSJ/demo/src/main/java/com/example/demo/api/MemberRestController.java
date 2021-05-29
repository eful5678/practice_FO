package com.example.demo.api;

import com.example.demo.repository.MemberRepository;
import com.example.demo.service.MemberService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
public class MemberRestController {
    @NonNull
    private MemberRepository memberRepository;

    @NonNull
    private MemberService memberService;

    @GetMapping("/insert")
    public String insert() {
        return "success";
    }
}
