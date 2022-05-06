package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"

	"net/http"

	"github.com/labstack/gommon/log"
)

// App struct
type App struct {
	ctx context.Context
}

type Joke struct {
	ID   string `json:"id"`
	Joke string `json:"joke"`
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

func (a *App) GetJoke() Joke {
	log.Info("get joke")

	client := &http.Client{}
	url := "http://api.icndb.com/jokes/"
	req, err := http.NewRequest("GET", url, nil)

	if err != nil {
		log.Fatal(err.Error())
	}

	req.Header.Add("Accept", "application/json")
	req.Header.Add("Content-Type", "application/json")
	resp, err := client.Do(req)

	if err != nil {
		log.Fatal(err.Error())
	}

	defer resp.Body.Close()
	bodyBytes, err := ioutil.ReadAll(resp.Body)

	if err != nil {
		log.Fatal(err.Error())
	}

	var responseObject Joke
	json.Unmarshal(bodyBytes, &responseObject)

	log.Info("API Reponse as struct %+v\n", responseObject)

	return responseObject

}
