package main

import (
	"net/http"

	"github.com/RheaP911/limonene_quantifier/api"
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
	http.HandleFunc("/signup/", uadmin.Handler(views.SignUpHandler))
	http.HandleFunc("/logout/", uadmin.Handler(views.LogoutHandler))
	http.HandleFunc("/api/", uadmin.Handler(api.APIHandler))
	http.HandleFunc("/api/images/", uadmin.Handler(api.ImagesAPIHandler))
	http.HandleFunc("/api/addimage/", uadmin.Handler(api.AddImageAPIHandler))
	http.HandleFunc("/api/new_user/", uadmin.Handler(api.NewUser))

	uadmin.StartServer()
}
