package api

import (
	"net/http"

	"github.com/RheaP911/limonene_quantifier/models"
	"github.com/uadmin/uadmin"
)

func AddImageAPIHandler(w http.ResponseWriter, r *http.Request) {
	context := map[string]interface{}{}
	addImage := models.Images{}

	uploadedImage := r.FormValue("imageUploaded")

	addImage.Image = uploadedImage
	err := uadmin.Save(&addImage)

	if err != nil {
		uadmin.ReturnJSON(w, r, map[string]interface{}{
			"status": "error",
			"err_msg": "Error saving the database: " + err.Error(), 
		})
		return
	}
	uadmin.ReturnJSON(w, r, context)
}