# Clickeroonie
A memory game of sorts. Don't click the same thing twice.

## Using the App

Try to click on each image once. Every time you click an image, they'll be shuffled. If you click the same image twice, you lose.

Your current score and your recent best score are displayed in the header.

## Technology Used
This is a front-end only application built using React (specifically, `create-react-app`). It's deployed using the `gh-pages` package and uses Yarn (yuck) as the package manager.

Bootstrap is used for the grid layout.

## Components

* `App` - Primary component housing those below.
* `Header` - Exactly what it sounds like; it includes a link to the GitHub repo and shows the player's score.
* `ImageGrid` - Contains the Bootstrap grid container and generates the image cards.
* `ImageCard` - Clickable tile containing an image
* `GameOver` - Contains game over text and a new game button.

## About the assets

The clickable images are enemies from the game Metroid. The background is fan art by Noe-Leyva: https://noe-leyva.deviantart.com/art/Metroid-Anniversary-fan-art-251360002.