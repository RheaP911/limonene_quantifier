package models

import (
	"time"

	"github.com/uadmin/uadmin"
)

type Intensity int

func (Intensity) Low() Intensity{
	return 1
}
func (Intensity) Medium() Intensity{
	return 2
}
func (Intensity) High() Intensity{
	return 3
}

type Images struct {
	uadmin.Model
	Name string
	Image string `uadmin:"image"`
	Intensity Intensity
	LimonenePercent string
	Date time.Time `uadmin:"read_only"`
}