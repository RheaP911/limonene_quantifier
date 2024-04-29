package models

import (
	"math/rand"
	"strconv"

	// "strings"
	"time"

	"github.com/uadmin/uadmin"
)

type Intensity int

const (
	Low Intensity = iota + 1
	Medium
	High
)

type Images struct {
	uadmin.Model
	Name            string
	Image           string    `uadmin:"image"`
	LimonenePercent float64   `uadmin:"help: Percent by weight"`
	IntensityNum    Intensity `uadmin:"list_exclude"`
	Intensity       string
	Date            time.Time
}

func (i *Images) Save() {
	images := Images{}
	baseCount := uadmin.Count(&images, "id > 0")
	recentCount := baseCount + 1

	randomNum := rand.Intn(10000)

	newName := "Spectrum" + strconv.Itoa(recentCount) + "-" + strconv.Itoa(randomNum)
	i.Name = newName

	// To change once AI is connected to the website
	min := 0.01
	max := 6.59
	minInt := int(min * 100)
	maxInt := int(max * 100)

	// Generate a random integer within the scaled range
	randomInt := rand.Intn(maxInt-minInt+1) + minInt

	// Convert the integer back to a float with two decimal places
	generateRandLim := float64(randomInt) / 100

	i.LimonenePercent = generateRandLim

	// Set intensity based on limonene percent
	if i.LimonenePercent < 0.5 {
		i.IntensityNum = Low
		i.Intensity = "Low"
	} else if i.LimonenePercent >= 0.5 && i.LimonenePercent <= 2 {
		i.IntensityNum = Medium
		i.Intensity = "Medium"
	} else {
		i.IntensityNum = High
		i.Intensity = "High"
	}

	i.Date = time.Now()


	// Save the model
	uadmin.Save(i)

	// Additional business logic...
}
