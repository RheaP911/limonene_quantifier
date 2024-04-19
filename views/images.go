package views

import (
	"net/http"
	"strings"
)

func ImagesHandler(w http.ResponseWriter, r *http.Request) map[string]interface{} {
	c := map[string]interface{}{}

	c["Title"] = "Images | Page"

	r.URL.Path = strings.TrimPrefix(r.URL.Path, "/images")
	return c
}
