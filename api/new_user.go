package api

import (
	"net/http"

	"github.com/uadmin/uadmin"
)

func NewUser(w http.ResponseWriter, r *http.Request) {
	if r.Method == "POST" {
		user := uadmin.User{}

		user.Username = r.FormValue("username")
		user.FirstName = r.FormValue("firstname")
		user.LastName = r.FormValue("lastname")
		user.Password = "default_user"
		user.Email = r.FormValue("email")
		user.Photo = "/static/resources/df_photo.png"
		user.Active = true
		user.Admin = false
		user.Save()

		http.Redirect(w, r, "/dashboard", http.StatusSeeOther)
	} else {
		w.WriteHeader(http.StatusBadRequest)
	}
}