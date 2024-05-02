package views

import (
	"net/http"
	"strings"
	"time"

	"github.com/RheaP911/limonene_quantifier/models"
	"github.com/uadmin/uadmin"
)

func DashboardHandler(w http.ResponseWriter, r *http.Request, session *uadmin.Session) map[string]interface{} {
	c := map[string]interface{}{}
	images := []models.Images{}
	// users := []uadmin.User{}

	// user := session.Users[0].FirstName + " " + session.Users[0].LastName
	// c["User"] = user

	// For the images graph
	uadmin.All(&images)
	uadmin.AdminPage("id", false, 0, 5, &images, "")
	for x := range images {
		uadmin.Preload(&images[x])
	}
	c["Images"] = images

	// For the dashboard count
	total := uadmin.Count(images, "id > 0")
	c["Total"] = total
	totalLow := uadmin.Count(images, "intensity_num == 1")
	c["TotalLow"] = totalLow
	totalMedium := uadmin.Count(images, "intensity_num == 2")
	c["TotalMedium"] = totalMedium
	totalHigh := uadmin.Count(images, "intensity_num == 3")
	c["TotalHigh"] = totalHigh

	now := time.Now()

	year, month, _ := now.Date()
	// For the uploads column graph
	t := time.Date(year, month, 1, 0, 0, 0, 0, now.Location())
	currentMonth := t.Month()
	c["CurrentMonth"] = currentMonth

	uadmin.Trail(uadmin.DEBUG, "CurrentMonth", currentMonth)

	previousMonth := currentMonth - 1
	if currentMonth == time.January {
		previousMonth = time.December
	}
	c["PreviousMonth"] = previousMonth
	// uadmin.Trail(uadmin.DEBUG, "PreviousMonth", previousMonth)

	secPreviousMonth := currentMonth - 2
	if currentMonth == time.February {
		previousMonth = time.December
	}
	c["SecPreviousMonth"] = secPreviousMonth

	thirdPreviousMonth := currentMonth - 3
	if currentMonth == time.March {
		thirdPreviousMonth = time.December
	}
	c["ThirdPreviousMonth"] = thirdPreviousMonth

	// uadmin.User()

	// Get the number of images uploaded in the month requested

	lowTotalCurrentMonth := uadmin.Count(images, "intensity_num == 1 AND month_uploaded = ?", currentMonth.String())
	c["LowTotalCurrentMonth"] = lowTotalCurrentMonth
	mediumTotalCurrentMonth := uadmin.Count(images, "intensity_num == 2 AND month_uploaded = ?", currentMonth.String())
	c["MediumTotalCurrentMonth"] = mediumTotalCurrentMonth
	highTotalCurrentMonth := uadmin.Count(images, "intensity_num == 3 AND month_uploaded = ?", currentMonth.String())
	c["HighTotalCurrentMonth"] = highTotalCurrentMonth

	lowTotalPrevMonth := uadmin.Count(images, "intensity_num == 1 AND month_uploaded = ?", previousMonth.String())
	c["LowTotalPrevMonth"] = lowTotalPrevMonth
	mediumTotalPrevMonth := uadmin.Count(images, "intensity_num == 2 AND month_uploaded = ?", previousMonth.String())
	c["MediumTotalPrevMonth"] = mediumTotalPrevMonth
	highTotalPrevMonth := uadmin.Count(images, "intensity_num == 3 AND month_uploaded = ?", previousMonth.String())
	c["HighTotalPrevMonth"] = highTotalPrevMonth

	lowTotalSecMonth := uadmin.Count(images, "intensity_num == 1 AND month_uploaded = ?", secPreviousMonth.String())
	c["LowTotalSecMonth"] = lowTotalSecMonth
	mediumTotalSecMonth := uadmin.Count(images, "intensity_num == 2 AND month_uploaded = ?", secPreviousMonth.String())
	c["MedumTotalSecMonth"] = mediumTotalSecMonth
	highTotalSecMonth := uadmin.Count(images, "intensity_num == 3 AND month_uploaded = ?", secPreviousMonth.String())
	c["HighTotalSecMonth"] = highTotalSecMonth

	lowTotalThirdMonth := uadmin.Count(images, "intensity_num == 1 AND month_uploaded = ?", thirdPreviousMonth.String())
	c["LowTotalThirdMonth"] = lowTotalThirdMonth
	mediumTotalThirdMonth := uadmin.Count(images, "intensity_num == 2 AND month_uploaded = ?", thirdPreviousMonth.String())
	c["MediumTotalSecMonth"] = mediumTotalThirdMonth
	highTotalThirdMonth := uadmin.Count(images, "intensity_num == 3 AND month_uploaded = ?", thirdPreviousMonth.String())
	c["HighTotalThirdMonth"] = highTotalThirdMonth

	c["Title"] = "Dashboard | Page"

	r.URL.Path = strings.TrimPrefix(r.URL.Path, "/dashboard")
	return c
}
