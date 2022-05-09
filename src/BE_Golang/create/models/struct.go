package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Name     string
	Password string
}

type Dichvu struct {
	gorm.Model
	Name string
}
