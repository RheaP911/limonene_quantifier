package api

import (
	"net/http"

	"github.com/RheaP911/limonene_quantifier/models"
	"github.com/uadmin/uadmin"
)

func CustomListAPIHandler(w http.ResponseWriter, r *http.Request) {
	images := []models.Images{}

	results := []map[string]interface{}{}

	uadmin.AdminPage("id", false, 0, 5, &images, "")

	for i := range images {
		uadmin.Preload(&images[i])

		results = append(results, map[string]interface{}{
			"ID":              images[i].ID,
			"Name":            images[i].Name,
			"Images":          images[i].Image,
			"LimonenePercent": images[i].LimonenePercent,
			"IntensityNum":    images[i].IntensityNum,
			"Intensity":       images[i].Intensity,
			"Date":            images[i].Date,
		})
	}

	uadmin.ReturnJSON(w, r, results)
}
