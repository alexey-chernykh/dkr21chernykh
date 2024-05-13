const xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:3000", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const xmlString = xhr.responseText;
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");
    // Далі обробляємо xml
    // Одержуємо знячення узла <name>
    const nameValue =
      xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;

    // Одержуємо знячення атрибута login
    const loginAttribute = xmlDoc
      .getElementsByTagName("user")[0]
      .getAttribute("login");

    // Виводимо значення
    console.log("Name:", nameValue);
    console.log("Login:", loginAttribute);

    document.getElementById("h1Load").innerText = "Retrieved from server:";
    document.getElementById("h2Name").innerText = "Name: " + nameValue;
    document.getElementById("h2Login").innerText = "Login: " + loginAttribute;
  } else {
    document.getElementById("h1Load").innerText = "Internal Server Error";
  }
};
xhr.send();
