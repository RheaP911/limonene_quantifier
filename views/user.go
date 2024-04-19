package views

import (
	"net/http"
	"strings"
)

func UserHandler(w http.ResponseWriter, r *http.Request) map[string]interface{} {
	c := map[string]interface{}{}

	c["Title"] = "User Management | Page"

	r.URL.Path = strings.TrimPrefix(r.URL.Path, "/user")
	return c
}
