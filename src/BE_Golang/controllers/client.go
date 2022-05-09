package controllers

import (
	"gilab.com/pragmaticreviews/golang-gin-poc/src/BE_Golang/database"
	"github.com/gin-gonic/gin"
)

type Post struct {
	Id      int    `json:"IdTruyen"`
	Title   string `json:"TenTruyen"`
	Content int    `json:"IdLoaiTruyen"`
}

func Read(c *gin.Context) {

	db := database.DBConn()
	rows, err := db.Query("SELECT IdTruyen, TenTruyen, IdLoaiTruyen FROM truyen WHERE IdTruyen = " + c.Param("id"))
	if err != nil {
		c.JSON(500, gin.H{
			"messages": "Story not found",
		})
	}

	post := Post{}

	for rows.Next() {
		var id, body int
		var title string

		err = rows.Scan(&id, &title, &body)
		if err != nil {
			panic(err.Error())
		}

		post.Id = id
		post.Title = title
		post.Content = body
	}

	c.JSON(200, post)
	defer db.Close() // Hoãn lại việc close database connect cho đến khi hàm Read() thực hiệc xong
}

func Create(c *gin.Context) {
	db := database.DBConn()

	type CreatePost struct {
		Title string `form:"title" json:"title" binding:"required"`
		Body  string `form:"body" json:"body" binding:"required"`
	}

	var json CreatePost

	if err := c.ShouldBindJSON(&json); err == nil {
		insPost, err := db.Prepare("INSERT INTO posts(title, body) VALUES(?,?)")
		if err != nil {
			c.JSON(500, gin.H{
				"messages": err,
			})
		}

		insPost.Exec(json.Title, json.Body)
		c.JSON(200, gin.H{
			"messages": "inserted",
		})

	} else {
		c.JSON(500, gin.H{"error": err.Error()})
	}

	defer db.Close()
}
