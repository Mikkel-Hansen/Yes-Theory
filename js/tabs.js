        let open1 = document.getElementById("my-events"); //Create variable called open1
        let open2 = document.getElementById("create-event"); //Create variable called open2
        let open3 = document.getElementById("messages"); //Create variable called open3

        function openTab1() { //Create function called openTab1
            if (open1.style.display === "block") { //If the open1 variable has a CSS attribute of display: block;
                open1.style.display = "none"; //Then  change to display: none;
            } else { //If it doesn't have display: block; and thereby display: none; it should do one of the following three things
                open1.style.display = "block" // display: block; if clicked on the open1 variable
                open2.style.display = "none" // display: none; if clicked on the open2 variable
                open3.style.display = "none"; // display: none; if clicked on the open3 variable
            }
        }
// The following two functions are the same as the above, but for the other two tabs.
        function openTab2() {
            if (open2.style.display === "block") {
                open2.style.display = "none";
            } else {
                open2.style.display = "block"
                open1.style.display = "none"
                open3.style.display = "none";
            }
        }

        function openTab3() {
            if (open3.style.display === "block") {
                open3.style.display = "none";
            } else {
                open3.style.display = "block"
                open1.style.display = "none"
                open2.style.display = "none";
            }
        }