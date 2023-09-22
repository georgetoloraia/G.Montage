const gudauri = document.getElementsByClassName("gudauri")
const jewel = document.getElementsByClassName("jewel")
const kiu = document.getElementsByClassName("kiu")
const larsi = document.getElementsByClassName("larsi")
const paragraf = document.getElementsByClassName("paragraf")

function showImage(category) {
            // Get the selected image container
            const imageContainer = document.getElementById(category);

            // Get the first image in the selected container
            const image = imageContainer.querySelector("img");

            // Get the selected image element
            const selectedImage = document.getElementById("selectedImage");

            // Set the source of the selected image element to the clicked image
            selectedImage.src = image.src;
            selectedImage.alt = image.alt;
        }