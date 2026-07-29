/*Name - Ishaan Malhotra
Date Created - 28 July 2026
File Name - script.js
Description - Assignment 4 Part 2 Image Gallery for INFT 1206 */
const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const images = [
    {filename: "pic3.jpg", alt: "Closeup of a human eye"},
    {filename: "pic2.jpg", alt: "Rock that looks like a wave"},
    {filename: "pic3.jpg", alt: "Purple and white pansies"},
    {filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb"},
    {filename: "pic5.jpg", alt: "Large moth on a leaf"}
];
// Loops through all our images and gives us the thumbnails. 
constbaseURL = "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";
for (const picture of pictures) {
const newImage = document.createElement("img");
newImage.src = `${baseURL}${images.filename}`;
newImage.alt = images.alt;
newImage.tabIndex = "0";
thumbBar.addEventListener("click", updateDisplayedImage)
}
// The updateDisplayedImage() function. Displays the activated thumbnail at full size.
function updateDisplayedImage(e) {
  displayedImage.src = e.target.src;
  displayedImage.alt = e.target.alt;
}