package views

import (
	"net/http"
	"strings"
)

func DashboardHandler(w http.ResponseWriter, r *http.Request) map[string]interface{} {
	c := map[string]interface{}{}

	c["Title"] = "Dashboard | Page"

	r.URL.Path = strings.TrimPrefix(r.URL.Path, "/dashboard")
	return c
}
