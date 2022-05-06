package main

import (
	"testing"
)

func TestGetJoke(t *testing.T) {
	j := NewApp().GetJoke()

	if j.Joke == "" && len(j.Joke) > 0 {
		t.Fatal("Joke is missing")
	}
}
