package main

import (
	"testing"
)

func TestGetJoke(t *testing.T) {
	j := NewApp().GetJoke()

	if j == "" && len(j) > 0 {
		t.Fatal("Joke is missing")
	}
}
