package com.todolist.mgnt.tl.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Test {
    private String idx;

    private String start_date;

    private String deadline;

    private String header;

    private String description;

    private String image_path;
}