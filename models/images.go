package models

import (
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
    Name           string
    Image          string `uadmin:"image"`
    LimonenePercent float64 `uadmin:"help: Percent by weight"`
    IntensityNum      Intensity `uadmin:"list_exclude"`
	Intensity string
    Date           time.Time
}

func (i *Images) Save() {
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

    // Save the model
    uadmin.Save(i)

    // Additional business logic...
}
