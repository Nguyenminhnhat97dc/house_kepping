package main

import (
	"fmt"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

/* func main() {
	db, err := sql.Open("mysql", "root:@/")
	if err != nil {
		fmt.Println(err.Error())
	} else {
		fmt.Println("Database created successfully")
	}
	// create Database
		_, err = db.Exec("CREATE DATABASE testDB")
	   	if err != nil {
	   		panic(err.Error())
	   	} else {
	   		fmt.Println("Successfully created database..")
	   	}
	// select Database
	_, err = db.Exec("USE testDB")
	if err != nil {
		panic(err.Error())
	} else {
		fmt.Println("DB selected successfully")
	}
	// Create Table
	_, err = db.Exec("CREATE TABLE IF NOT EXISTS  example( id integer, data varchar(32) )")
	if err != nil {
		panic(err.Error())
	} else {
		fmt.Println("Create table successfully")
	}
	db.SetConnMaxLifetime(time.Minute * 3)
	db.SetMaxOpenConns(10)
	db.SetMaxIdleConns(10)
} */
func main() {
	dsn := "root:@tcp(127.0.0.1:3306)/test?charset=utf8mb4&parseTime=True&loc=Local"
	_, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		panic("failed to connect database.")
	} else {
		fmt.Println("connect Successfull.")
	}
}
