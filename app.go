package main

import (
	"context"
	"encoding/json"
	"io/ioutil"

	"net/http"

	"github.com/labstack/gommon/log"
)

// App struct
type App struct {
	ctx context.Context
}

type Results struct {
	Type  string `json:"type"`
	Value Joke   `json:"value"`
}

type Joke struct {
	ID   string `json:"id"`
	Joke string `json:"joke"`
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

func (a *App) GetJoke() string {
	log.Info("get joke")

	client := &http.Client{}
	url := "http://api.icndb.com/jokes/random"
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

	var responseObject Results
	json.Unmarshal(bodyBytes, &responseObject)

	log.Infof("API Reponse as struct %+v\n", responseObject)

	j := responseObject.Value.Joke
	log.Infof("joke: %v\n", j)

	return j

}
