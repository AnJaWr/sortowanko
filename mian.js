var jsonData = [
  {
    "Start": "04.09.2023",
    "End": "18.12.2023",
    "Name": "W GÓRĘ! 1 (B1-1)",
    "Days": "poniedziałek środa",
    "Hours": "17:30-19:00",
    "Lnumber": 60,
    "Cena": 2090,
    "Form": "Standardowy",
     "Link": "https://heihei.langlion.com/forms/kursy-grupowe-b1"
  },
  {
    "Start": "02.10.2023",
    "End": "24.01.2024",
    "Name": "W GÓRĘ! 1 (B1-1)",
    "Days": "poniedziałek środa",
    "Hours": "17:30-19:01",
    "Lnumber": 60,
    "Cena": 2090,
    "Form": "Standardowy",
 "Link": "https://heihei.langlion.com/forms/kursy-grupowe-b1"},
  {
    "Start": "02.10.2023",
    "End": "24.01.2024",
    "Name": "W GÓRĘ! 1 (B1-1)",
    "Days": "poniedziałek środa",
    "Hours": "19:15:20:45",
    "Lnumber": 60,
    "Cena": 2090,
    "Form": "Standardowy",
 "Link": "https://heihei.langlion.com/forms/kursy-grupowe-b1"},
  {
    "Start": "05.12.2023",
    "End": "30.01.2024",
    "Name": "W GÓRĘ! 1 (B1-1)",
    "Days": "wtorek czwartek",
    "Hours": "17:30-19:03",
    "Lnumber": 60,
    "Cena": 2090,
    "Form": "Standardowy",
 "Link": "https://heihei.langlion.com/forms/kursy-grupowe-b1"  },
  {
    "Start": "03.10.2023",
    "End": "18.01.2024",
    "Name": "W GÓRĘ! 1 (B1-1)",
    "Days": "wtorek czwartek",
    "Hours": "19:20-20:50",
    "Lnumber": 60,
    "Cena": 2090,
    "Form": "Standardowy",
 "Link": "https://heihei.langlion.com/forms/kursy-grupowe-b1"  },
  {
    "Start": "09.10.2023",
    "End": "31.01.2024",
    "Name": "W GÓRĘ! 2 (B1-2)",
    "Days": "poniedziałek środa",
    "Hours": "10:30-12:00",
    "Lnumber": 60,
    "Cena": 2090,
    "Form": "Standardowy",
 "Link": "https://heihei.langlion.com/forms/kursy-grupowe-b1"  },
  {
    "Start": "09.10.2023",
    "End": "31.01.2024",
    "Name": "W GÓRĘ! 2 (B1-2)",
    "Days": "poniedziałek środa",
    "Hours": "19:15-20:45",
    "Lnumber": 60,
    "Cena": 2090,
    "Form": "Standardowy",
 "Link": "https://heihei.langlion.com/forms/kursy-grupowe-b1"  },
  {
    "Start": "10.10.2023",
    "End": "25.01.2024",
    "Name": "W GÓRĘ! 2 (B1-2)",
    "Days": "wtorek czwartek",
    "Hours": "19:15-20:45",
    "Lnumber": 60,
    "Cena": 2090,
    "Form": "Intensywny",
    "Link": "https://heihei.langlion.com/forms/kursy-grupowe-b1"  }
      ];






      var mainWrapper = document.getElementById("main_wrapper");

      
function createDivs() {

jsonData.forEach(function(course) {
  var courseDiv = document.createElement("div");
  courseDiv.className = "kurs";

  if (course.Hours) {
    var hours = course.Hours.split("-")[0];
    var parsedHours = hours.split(":")[0];

    if (parsedHours >= 7 && parsedHours <= 12) {
      courseDiv.classList.add("poranny");
    } else {
      courseDiv.classList.add("wieczorowy");
    }
  }

  if (course.Name) {
    var nameDivClass = "";
    if (course.Name.includes("1-1")) {
      nameDivClass = "one";
    } else if (course.Name.includes("1-2")) {
      nameDivClass = "two";
    }
    courseDiv.classList.add(nameDivClass);
  }

  if (course.Form) {
    courseDiv.classList.add(course.Form);
  }

  var infoParagraphs = [
      course.Name,
     course.Form,
  "Harmonogram:", 
   course.Days,
   course.Hours,
    "Start kursu: ",
    "Koniec kursu: ",
      course.Start, 
      course.End,
    "Liczba godzin: ",
    "Cena: ",
      course.Lnumber,
     course.Cena + " zł"
  ];

  infoParagraphs.forEach(function(info) {
    var paragraph = document.createElement("div");
    paragraph.classList.add("kurs_info");
    paragraph.textContent = info;
    courseDiv.appendChild(paragraph);


  });
  var buttonContainer = document.createElement("div");
  buttonContainer.classList.add("kurs_info")
var linkButton = document.createElement("a");
        linkButton.textContent = "Zapisz się";
        linkButton.classList.add("sub_btn", "one_button");
        linkButton.href = course.Link;
        courseDiv.appendChild(buttonContainer);
        buttonContainer.appendChild(linkButton)

        var nameParagraph = courseDiv.querySelector("p:nth-child(2)");
  
 if (course.Name.includes("1-2")) {
  linkButton.classList.remove("one_button");
   linkButton.classList.add("two_button");}
 if (course.Form.includes("Intensywny")){ linkButton.classList.add("intensywny_button");}
if (course.Form.includes("Superintensywny")) linkButton.classList.add("superintensywny_button");



const svgContent = '<svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;}</style></defs><title>skill-level</title><path d="M30,30H22V4h8Zm-6-2h4V6H24Z"/><path d="M20,30H12V12h8Zm-6-2h4V14H14Z"/><path d="M10,30H2V18h8ZM4,28H8V20H4Z"/><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/></svg>'

      const img = document.createElement('img');
      img.classList.add("lvl_svg")
img.src = `data:image/svg+xml,${encodeURIComponent(svgContent)}`;
var secondParagraph = courseDiv.querySelector('div:nth-child(2)');
 secondParagraph.insertBefore(img, secondParagraph.firstChild);
 

  mainWrapper.appendChild(courseDiv);
  const filterGroups = document.querySelectorAll('.filterGroup');
  const divs = document.querySelectorAll('.kurs');

  function updateFilteredDivs() {
    const selectedClasses = {
      groupA: Array.from(filterGroups[0].querySelectorAll('input[type="radio"]')).find(input => input.checked).value,
      groupB: Array.from(filterGroups[1].querySelectorAll('input[type="radio"]')).find(input => input.checked).value,
      groupC: Array.from(filterGroups[2].querySelectorAll('input[type="radio"]')).find(input => input.checked).value,
    };

    divs.forEach(div => {
      const divClasses = div.className.split(' ');
      const shouldDisplay =
        (selectedClasses.groupA === 'all' || divClasses.includes(selectedClasses.groupA)) &&
        (selectedClasses.groupB === 'all' || divClasses.includes(selectedClasses.groupB)) &&
        (selectedClasses.groupC === 'all' || divClasses.includes(selectedClasses.groupC));
      div.style.display = shouldDisplay ? 'block' : 'none';
    });
  }

  filterGroups.forEach(group => {
    group.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.addEventListener('change', updateFilteredDivs);
    });
  });
});
}

window.addEventListener('load', () => {
 createDivs();
});


