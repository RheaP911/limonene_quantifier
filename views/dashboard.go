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

	uadmin.All(&images)
	c["Images"] = images

	c["Title"] = "Dashboard | Page"

	r.URL.Path = strings.TrimPrefix(r.URL.Path, "/dashboard")
	return c
}
