package views

import (
	"net/http"
	// "strings"

	"github.com/uadmin/uadmin"
)

func SignUpHandler(w http.ResponseWriter, r *http.Request) {
	context := map[string]interface{}{}

	// Render the login filepath and pass the context data object to the HTML file.
	uadmin.RenderHTML(w, r, "templates/html/signup.html", context)
}
