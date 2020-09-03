package com.example.capstoneproject.models;

import javax.persistence.*;

@Entity
@Table(name = "Inventory")
public class UserP {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY);
    public String merch;

    @Column
    public String Tops;

    @Column
    public String Pants;

    @Column
    public String Dresses;
}
