package api

import (
	"net/http"
	"strings"
)

func APIHandler(w http.ResponseWriter, r *http.Request) {
	r.URL.Path = strings.TrimPrefix(r.URL.Path, "/api")
	path := strings.TrimSuffix(r.URL.Path, "/")

	switch path {
	case "addImage":
		AddImageAPIHandler(w, r)
	case "images":
		ImagesAPIHandler(w, r)
	case "custom_list":
		CustomListAPIHandler(w, r)
	default:
		w.Write([]byte("Not Found"))
	}

	
}