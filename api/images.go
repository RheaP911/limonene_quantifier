package api

import (
	"net/http"

	"github.com/RheaP911/limonene_quantifier/models"
	"github.com/uadmin/uadmin"
)

func ImagesAPIHandler(w http.ResponseWriter, r *http.Request) {
	images := []models.Images{}
	uadmin.All(&images)

	for i := range images {
		uadmin.Preload(&images[i])
	}

	uadmin.ReturnJSON(w, r, images)
}