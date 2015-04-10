var pets;
var myPets;
pets = ["fido", "spot", "seeker"];
pets.forEach(function (concat) {
    myPets = myPets + concat + ", ";
});
document.body.innerHTML = "My pets are " + " " + pets;
