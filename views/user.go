package views

import (
	"net/http"
	"strings"

	"github.com/uadmin/uadmin"
)

func UserHandler(w http.ResponseWriter, r *http.Request) map[string]interface{} {
	c := map[string]interface{}{}
	users := []uadmin.User{}

	uadmin.All(&users)
	for x := range users {
		uadmin.Preload(&users[x])
	}
	c["Users"] = users

	c["Title"] = "User Management | Page"

	r.URL.Path = strings.TrimPrefix(r.URL.Path, "/user")
	return c
}
