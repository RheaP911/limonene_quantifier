package views

import (
	"net/http"
	"strings"

	"github.com/uadmin/uadmin"
)

func MainHandler(w http.ResponseWriter, r *http.Request) {
	r.URL.Path = strings.TrimPrefix(r.URL.Path, "/")
	page := strings.TrimSuffix(r.URL.Path, "/")

	session := uadmin.IsAuthenticated(r)

	if session == nil {
		http.Redirect(w, r, "/login/", http.StatusSeeOther)
	}

	c := map[string]interface{}{}
	switch page {
	case "dashboard":
		c = DashboardHandler(w, r)
	case "images":
		c = ImagesHandler(w, r)
	case "user":
		c = UserHandler(w, r)
	default:
		page = "dashboard"
	}

	c["Page"] = page

	Rendering(w, r, page, c)
}

func Rendering(w http.ResponseWriter, r *http.Request, page string, context map[string]interface{}) {
	templateList := []string{}
	templateList = append(templateList, "./templates/html/base.html")

	path := "./templates/html/" + page + ".html"
	templateList = append(templateList, path)

	uadmin.RenderMultiHTML(w, r, templateList, context)
}

func ElementHandler(w http.ResponseWriter, r *http.Request) map[string]interface{} {
	c := map[string]interface{}{}
	return c
}
