package com.tournament.model;

public class Book {
	
    String title;
    String author;
    String section;
    String[] players;
    
    
    public Book(String title, String author, String section){
    	
    	this.title = title;
    	this.author = author;
    	this.section = section;
    	
    }
    
    public String getTitle(){
    	
    	return title;
    }
    
    public String getAuthor(){
    	
    	return author;
    }

    public String getIsbn(){
    	
    	return title;
    }
    
}
