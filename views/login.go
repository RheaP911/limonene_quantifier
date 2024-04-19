package views

import (
	"net/http"
	"strings"

	"github.com/uadmin/uadmin"
)

func LoginHandler(w http.ResponseWriter, r *http.Request) {
	context := map[string]interface{}{}
	session := uadmin.IsAuthenticated(r)

	if session != nil {
		http.Redirect(w, r, "/dashboard", http.StatusSeeOther)
	}

	if r.Method == "POST" {
		username := strings.TrimSpace(strings.ToLower(r.PostFormValue("username")))
		password := r.PostFormValue("password")
		session, _ := uadmin.Login(r, username, password)

		uadmin.Trail(uadmin.DEBUG, "Username: %s", username)
		uadmin.Trail(uadmin.DEBUG, "Password: %s", password)

		if session != nil {
			http.SetCookie(w, &http.Cookie{
				Name:     "session",
				Value:    session.Key,
				Path:     "/",
				SameSite: http.SameSiteStrictMode,
			})
			http.Redirect(w, r, "/dashboard", http.StatusSeeOther)
		} else {
			context["MESSAGE"] = "Please login to continue"
		}
	}
	// Render the login filepath and pass the context data object to the HTML file.
	uadmin.RenderHTML(w, r, "templates/html/login.html", context)
}
