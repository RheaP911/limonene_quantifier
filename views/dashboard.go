package views

import (
	"net/http"
	"strings"

	"github.com/RheaP911/limonene_quantifier/models"
	"github.com/uadmin/uadmin"
)

func DashboardHandler(w http.ResponseWriter, r *http.Request) map[string]interface{} {
	c := map[string]interface{}{}
	images := []models.Images{}

	uadmin.Trail(uadmin.DEBUG, "images; ", images)

	uadmin.All(&images)
	for x := range images {
		uadmin.Preload(&images[x])
	}
	c["Images"] = images

	// uadmin.FilterSorted()
	// uadmin.JSONMarshal

	total := uadmin.Count(images, "id > 0")
	c["Total"] = total

	totalLow := uadmin.Count(images, "intensity_num == 1")
	c["TotalLow"] = totalLow
	totalMedium := uadmin.Count(images, "intensity_num == 2")
	c["TotalMedium"] = totalMedium
	totalHigh := uadmin.Count(images, "intensity_num == 3")
	c["TotalHigh"] = totalHigh

	c["Title"] = "Dashboard | Page"

	r.URL.Path = strings.TrimPrefix(r.URL.Path, "/dashboard")
	return c
}
