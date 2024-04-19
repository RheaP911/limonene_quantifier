package main

import (
	"net/http"

	"github.com/RheaP911/limonene_quantifier/models"
	"github.com/RheaP911/limonene_quantifier/views"
	"github.com/uadmin/uadmin"
)

func main() {
	uadmin.Register(
		models.Images{},
	)

	uadmin.RootURL = "/admin/"
	uadmin.SiteName = "LimoneneQuantifier"

	http.HandleFunc("/", uadmin.Handler(views.MainHandler))
	http.HandleFunc("/login/", uadmin.Handler(views.LoginHandler))
	http.HandleFunc("/logout/", uadmin.Handler(views.LogoutHandler))

	uadmin.StartServer()
}
