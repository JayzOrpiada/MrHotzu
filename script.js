



    function changeTitle() {
      document.getElementById("title").innerHTML = "Welcome to My Awesome JavaScript Page! Jay Orpiada";
      document.getElementById("title").style.color = "darkgreen";
    }

    function changeImage() {
      let img = document.getElementById("profile");
      img.src = "cat.jpg"; // Change image using DOM
      img.alt = "Cute Kitten";
    }

    function addHobby() {
      let newHobby = prompt("Enter a new hobby:");
      if (newHobby) {
        let li = document.createElement("li");
        li.textContent = newHobby;
        document.getElementById("hobbies").appendChild(li);
      }
    }

    function toggleDescription() {
      let desc = document.getElementById("description");
      if (desc.style.display === "none") {
        desc.style.display = "block";
      } else {
        desc.style.display = "none";
      }
    }

    function resetPage() {
      document.getElementById("title").innerHTML = "Welcome to My Profile Page";
      document.getElementById("title").style.color = "#0066cc";
      document.getElementById("description").style.display = "block";
      document.getElementById("description").innerHTML = "This is a simple demo where JavaScript will modify the contents dynamically.";
      document.getElementById("profile").src = "fruits.jpg";
      document.getElementById("hobbies").innerHTML = "<li>Reading</li><li>Traveling</li><li>Cooking</li>";
    }
