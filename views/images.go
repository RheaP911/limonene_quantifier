package views

import (
	"net/http"
	"strings"

	"github.com/RheaP911/limonene_quantifier/models"
	"github.com/uadmin/uadmin"
)

func ImagesHandler(w http.ResponseWriter, r *http.Request) map[string]interface{} {
	c := map[string]interface{}{}
	images := []models.Images{}

	uadmin.All(&images)
	for x := range images {
		uadmin.Preload(&images[x])
	}
	c["Images"] = images

	c["Title"] = "Images | Page"

	r.URL.Path = strings.TrimPrefix(r.URL.Path, "/images")
	return c
}
